import { NextApiRequest, NextApiResponse } from "next";

export default function withHandler(
  method: "GET" | "POST" | "DELETE",
  fn: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== method) {
      return res.status(405).end();
    }

    // 받아온 함수 try catch 처리
    try {
      await fn(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
