import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";
import mail from "@sendgrid/mail";

// saendgrid email api 등록
mail.setApiKey(process.env.EMAIL_API_KEY!);

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  // payload를 완전한 랜덤 문자열로 만든다.
  const payload = Math.floor(10000 + Math.random() * 900000) + "";
  // 유저가 지금 폰인지 이메일인지 확인
  const user = phone ? { phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: { ...user },
          create: { name: "Anonymous", ...user },
        },
      },
    },
  });
  // 만약 폰이라면 twilio를 통해 메시지를 보낸다.
  if (phone) {
    // await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.MY_PHONE!,
    //   body: `Login Token ${payload}`,
    // });
  } else if (email) {
    // const email = await mail.send({
    //   from: "chsw000@gmail.com",
    //   to: "chsw000@gmail.com",
    //   subject: "Carrot Market Verification Email",
    //   text: `TOKEN ${payload}`,
    //   html: `<strong>Your token is ${payload}</strong>`,
    // });
  }
  return res.json({
    ok: true,
  });
}

export default withHandler({ method: "POST", handler, isPrivate: false });
