# Carrot Market

이 프로젝트는 Next.js 12.1 버전입니다.

# Setup

- 설치

  1. `tailwindcss`
     `npx tailwindcss init -p`을 이용해 `postcss.config`,`tailwind.config` 두개의 파일을 생성한다.
     `tailwind.config`의 content에는 적용할 파일의 이름을 적는다.
     `postcss`
     `autoprefixer`

  2. `global css`
     여기에는 tailwind를 사용하겠다고 알려준다.

<br/>
<hr/>

# tailwind

utility(많은 기능을 가진) css
스타일을 className을 통해 줄 수 있다. > 마크업에서 스타일 작업을 해결할 수 있다.
`tailwind css intellisense` extension을 통해 자동완성 기능으로 도움을 받을 수 있다.

`command + i`로 자동완성을 띄울 수 있다.

> 반응형 디자인에 대해

보통 컴퓨터부터 css작업을 시작하지만 tailwind는 모바일을 우선적으로 생각한다.
모든 className은 모바일에 우선 적용되고 그 다음에 큰 화면들을 위한 선택자가 존재한다.

`sm`, `md`, `xl` ... 같은 modifier를 이용해서 반응형을 적용시킨다.

반응형 modifier들은 다음 modifier들에 의해 정지돼야한다.(하나의 선택자에는 end-point가 존재하지 않기때문에 그 끝을 정해주는 것은 다음 modifier이다.)
ex) sm를 사용하고 md를 사용하지 않으면 sm이 가진 속성인 640px 넘어가는 순간부터 상한선이 없이 계속 늘어나는 화면에 sm에 적용된 스타일이 계속 적용된다.

<br/>

<hr/>

1. 스타일의 뒤 숫자는 px 단위가 아니다.

- rem 단위이며 마우스를 대보면 px을 알 수 있다.

2. 새로운 css property를 제공해 주고 이용할 수 있다.
   간단하더라도 귀찮거나 계산이 필요한 기능들을 이용이 가능하다.

   - ex) `aspect-ratio` , `space-x-5` ...

3. modifiers

   - https://tailwindcss.com/docs/hover-focus-and-other-states#quick-reference
   - css event와 같은 hover, active 등등을 실행시켜줌

   - 스타일을 적용하기 위해서 css varibale과 함수를 사용하는데 이때 하나의 className이 여러가지를 사용할때 그 설정을 어느 정도까지 커스터마이징이 가능한지 알 수 있고 커스터마이징이 가능하다면 그 스타일 변수가 가지고 있는 이름 하나하나에 modifier를 사용할 필요가 없다.
     어떤 css가 어떤 변수들을 가지고 있는지는 마우스를 위로 올려보면 알 수 있다.

   - 두개 이상의 modifier나 selector를 사용하고 싶다면 중첩한다.
     `file:hover:~~~`

   ex)

   ```
   <div className="focus:ring-2 ring-offset-4 ">HI!</div>
   ```

   🤔 ring 안에는 ring-offset을 변수로 가지고 있기 때문에 focus를 ring에게만 줘도 offset도 적용된다.

   1. ring utility

   - https://tailwindcss.com/docs/ring-color
   - `ring-숫자` = 상자 그림자 윤곽선을 만드는데 그 두께를 적용함
   - `ring-offset-숫자` = 윤곽선과 내용물의 사이 거리

4. selector
   말 그대로 selector 역핧을 맡는다. 하지만 더 세세하게 잡아낼 수 있다.
   예를 들면 input file 안에 있는 파일 선택 버튼을 잡아낸다던가(file:) span의 첫번째 글자를 잡아낸다던가(first-letter:)..

5. group

   - 상위(부모) 상태를 기반으로 한 스타일 지정
   - 부모의 상태를 기반으로 스타일이 바뀔때 `group-동작` 을 통해 대상 요소의 스타일을 설정한다.

   ex)

   ```
   <div className="group">
      <div className="group-hover:bg-white">1</div>
   </div>
   ```

6. peer

   - https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state
   - ⭐️ peer는 가장 위에 올라와 있어야한다.
   - 동일한 위치(형제)에 있을 경우 스타일을 조작하기 위해 사용한다.

7. divide-(x|y)-width

   - element사이 border를 제어하기 위한 유틸, 자동적으로 처음과 마지막의 요소엔 아래와 위가 없다.
   - x : element의 양옆의 border
   - y : element의 아래위의 border

8. darkMode

   - dark 모드가 활성화되어 있을 때 사이트의 스타일을 다르게 지정할 수 있다. 현재 사용중인 컴퓨터의 설정(다크모드, 라이트모드, 오토 같은 운영체제)에 따라 자동으로 적용된다.
     https://tailwindcss.com/docs/dark-mode

   - 수동 다크 모드 전환
     defualt로 tailwind는 컴퓨터의 설정을 따라가는데 `tailwind.config.js`의 property인 `darkMode`를 `class`로 설정한다면 상위 부모의 className에 따라 다크모드를 적용할 수 있다.

     1. 부모 컴포넌트에 `dark`라는 className을 추가한다면 자식에서 `dark:bg-black`같은 modifier를 사용한다면 다크모드일 때 어떤식으로 스타일이 되는지 정할 수 있다.
     2. class를 통한 다크모드는 html 태그를 조작하는 것으로 다크모드 버튼과 같은 것을 만들어서 사용할 수 있다.

9. Just In Compiler (JIT)

   Tailwind CSS v3.0 이전: 거대한 CSS파일을 생성하고, 그 파일에 이미 정의해놓은 클래스들을 가져와 사용하는 방식.
   대략 20만줄 정도 되는 클래스로 가득찬 파일을 가져와 개발 단계에서 사용하기 때문에 매우 무겁고, 배포 전에는 purge를 해줘야 해서 번거로움

   Tailwind CSS v3.0이후: 사용자가 사용하는 스타일들만 그때 그때 생성해서 사용하는 방식. 여러 클래스들을 조합해서 사용할 수 있고, 매우 가볍고, 배포 전 purge를 해주지 않아도 되서 편함

   이것 덕분에 더 이상 tailwind에서 제공해주지 않는 스타일들을 inline스타일을 이용하지 않아도 된다.

   ex) 만약에 내가 fontsize를 300px를 주고 싶다.

   옛날

   ```
   <div style={{fontSzie:300}}>안녕하세요</div>
   ```

   지금

   ```
   <div className="text-[300px]">안녕하세요</div>
   ```

<hr/>

### plugins

재사용 가능한 타사 플러그인으로 Tailwind 플러그인을 사용하면 CSS 대신 JavaScript를 사용하여 사용자의 스타일시트에 삽입할 Tailwind에 대한 새 스타일을 등록할 수 있다.
https://tailwindcss.com/docs/plugins

### form skills

input안에 label 태그를 넣은 후 input을 숨기면 label에 있는 요소를 통해 input을 표현할 수 있다.

<br/>
<br/>

<hr/>
<hr/>
<br/>

# Prisma

1. Node.js and Typescript ORM(Object Relational Mapping)
   => JS or TS 와 데이터베이스가 소통할 수 있게 해주는 도구(번역기)

2. Prisma를 사용하기 위해서는 먼저 Prisma에게 DB가 어떻게 생겼는지, 데이터의 모양을 설명해줘야하기 때문에 `schema.prisma`를 사용한다.

3. Prisma가 이런 타입에 관한 정보를 알고 있으면 client를 생성해줄 수 있다.
   client를 이용하면 TS로 DB와 직접 상호작용 가능, 자동완성 제공한다.

   sql문을 사용하지 않고 DB를 Object와 같이 간단하게 조작할 수 있다.

4. Prisma Studio : Visual Database Browser, DB를 위한 관리자 패널
   `npx prisma studio`를 통해 시작 가능

5. Prisma Client를 사용해서 생성되어 있는 스키마에서 데이터를 controll이 가능하게 해주는 쿼리 빌더이다.

## 설치와 사용

1. `npm i prisma -D`

2. `npx prisma init`
   이 명령은 prisma라는 새 디렉토리 안에 schema.prisma라는 파일과 프로젝트 루트에 .env 파일을 생성한다.
   schema.prisma는 데이터베이스 연결과 Prisma Client 생성기가 있는 Prisma 스키마를 포함한다.
   .env는 환경 변수를 정의하기 위한 dotenv 파일 (데이터베이스 연결에 사용됨)

   https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-mysql

   Prisma Model 예시
   https://www.prisma.io/docs/concepts/components/prisma-schema

   ```
   model Post{
      id Int @id @default(autoincreament())
      title String
      content String
   }
   ```

3. `npx prisma generate`
   schema.prisma에서 스키마를 생성하고 해당 명령어를 입력한다면 node_modules에 client파일이 생성되는데 이 안에는 프로젝트 안에서 생성한 스키마가 타입스크립트 타입으로 생성되어있다.
   이 파일을 이용해 prisma client를 사용할 때 미리완성과 같은 기능을 사용해 도움을 받을 수 있다.

4. prisma를 controll이 가능한 client파일은 브라우저(프론트엔드)에서 사용을 하면 절대절대 안된다.

## client 사용

1. upsert()
   기존 데이터를 update | insert 한다.

```javascript
const user = await client.user.upsert({
  // 조건을 찾는다.
  where: {
    email: "asd@naver.com",
  },
  // 없다면 생성
  create: {
    name: "chch",
  },
  // 있다면 update
  update: {},
});
```

### NextAuth

마법

<br/>
<hr/>

# PlanetScale

1. MySQL과 호환되는 serverless DB platform으로 AWS RDS와는 다르다.

2. Vitess
   Vitess는 MySQL을 스케일링하기 위한 데이터베이스 클러스터링 시스템
   인터넷에서 가장 큰 사이트를 호스팅하는 강력한 오픈 소스 기술
   https://vitess.io/

   1. Vitess를 사용하는 이유
      1. 수평 스케일
      2. 고가용성 (Vitess의 기본 복제본 구성은 예기치 않은 이벤트가 발생할 때 기본에서 복제본으로 원활한 장애 조치를 허용)
      3. MySQL 호환
      4. 쿠버네티스 네이티브
      5. 구체화된 뷰
      6. 온라인 스키마 마이그레이션

3. 간단한 DB연결

   1. DB 생성
      `pscale database create DB이름 --region 지역(ex: ap-northeast)`

   2. DB서버를 연결시킨다(킨다).
      `pscale connect DB이름`

   3. DB연결을 위해 .env에 DATABASE_URL 설정
      .env에 서버를 연결시킨 후 나온 IP주소(IPv4)를 추가한다.
      보안 터널인 주소인데 이것은 내 컴퓨터와 planetscale을 연결하는 것이다. 이것으로 일반적으로 db를 관리하는 사용자 id,password를 관리해야할 필요없이 url하나로 연결이 가능하다.

      만약 이 서버를 죽인다면 다시 연결시킨 후 .env에 있는 url을 수정해야한다.

   4. prisma가 .env를 통해 연결하기 위해 사용하는 DATABASE_URL
      `DATABASE_URL="mysql://IP주소/DB이름"`

   5. DB의 스키마를 바꾼다면 push를 통해 pscale에게 알려준다.
      `npx prisma db push`

4. Referential integrity (참조 무결성)

   1. vitess는 mysql과 다른 것이기 때문에 참조 무결성을 지키지 않는다.

   2. 따라서 prima의 도움을 받아 관계형 데이터 베이스를 사용할 수 있게 도와준다.

   3. `schema.prisma` 설정

      1. client에 `previewFeatures` 설정을 추가해 관계형을 사용하고 싶다고 알려준다.

      ```
      generator client {
      provider = "prisma-client-js"
      previewFeatures = ["referentialIntegrity"]
      }
      ```

      2. db에 prisma가 `referentialIntegrity`를 도와줄거라 한다.

      ```
      datasource db {
      provider = "mysql"
      url      = env("DATABASE_URL")
      referentialIntegrity = "prisma"
      }
      ```

## CLI 설치

1. `brew install planetscale/tap/pscale`

2. `brew install mysql-client`  
   mysql을 사용하기 때문에 mysql cli도 설치함

## CLI 사용 & 원하는 region에 DB 생성과 연결

1. `pscale auth login`을 사용해 먼저 cli에 로그인한다.

2. pscale 이 가진 api를 사용해서 cli를 사용한다.

<hr/>
<br/>
<br/>
<br/>

# React Hook Form

react의 라이브러리로 일반 react에서는 구현하기 귀찮은 form을 라이브러리를 통해 빠르고 많은 기능을 처리한다.

## register

```
const {register, handleSubmit } = useForm();

const onValid = () => {
   conosole.log("valid")
}

<form onSubmit={handleSubmit(onValid)}>
   <input {..register("username")} type="text" required/>
</form>
```

input에 unique한 이름을 key로 붙여주는 것으로 useForm에 있는 기능 사용이 가능하다.
register안에 html과 라이브러리에 존재하는 속성들을 구분해서 줄 수 있다.
ex)

```
<input {..register("username", {required : true})} type="text" />
```

## validate

value나 html의 속성을 이용해서 validate를 설정하고 에러를 설정할 수 있다.

```
<input {..register("username", {required : "username required"})} type="text" />
```

# Next.js

## API routes

page 폴더 안에 api라는 폴더를 생성하는 것으로 간단하게 파일 경로를 api로 만들 수 있다.

node에서와 같이 함수 안에서 req,res를 매개변수로 가진 함수를 만들어서 export 한다면 해당 함수를 api로 사용이 가능하다.
next는 api의 파일 안에서는 return 하는 함수를 사용하기 때문에 **사용할 함수를 return하는 작업**이 꼭 필요하다.

```javascript
// api/enter

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  res.json({ ok: true });
}
```

## Image

next는 next/image 에서 Image 컴포넌트를 제공한다.
이 컴포넌트는 HTML img 태그의 확장이다.
여기에는 우수한 Core Web Vitals를 달성하는데 도움이 되는 다양한 기본 성능 최적화가 포함되어 있다.
일반 img 태그와 다르게 next Image는 lazyloading을 자동적으로 사용하며 이미지 영역이 화면에 나타나면 Next가 이미지를 로드하기 시작한다.

remote image를 사용하기 위한 조건

- next는 이미지 호스트의 도메인 이름을 next.config에 추가해야 된다.
- width, height 나 layout 속성을 무조건 가져야한다.
- placeholder="blur" 사용이 불가능하다.

## MiddleWare

미들웨어가 필요한 **pages**에 하나씩 미들웨어 파일을 추가해 사용할 수 있다.
파일이름은 `_middleware.ts` 여야한다.
미들웨어는 api를 GET, POST 할 때 둘다 된다.

아래와 같은 req 안에 있는 속성들을 엄청 많고 이것들을 사용해 다양한 미들웨어 구현이 가능하다.

```javascript
// 쿠키에 저근하기 return 값은 boolean
req.cookies.name;

// url이 /enter 를 포함하고 있나
req.url.indclues("/enter");
```

## Dynamic Imports

Next 앱의 로딩 시간을 최적화하는 방법
_dynamic 컴포넌트의 핵심은 앱을 작게 나눠 필요에 따라 그 컴포넌트를 불러오는 것이다._

일반적으로 import해서 컴포넌트를 바로 사용하는게 아니라 이벤트나 특정 상황에 따라 컴포넌트를 나오게 해 다운로드하는 component를 줄인다.
바로 JS를 UI에 포함시켜 다운 받게 하는 것이 아니라 나중에 다운로드 시켜서 최적화가 가능하다.

```javascript
const com = dynamic(() => import("components/com"), { ssr: false });
```

_그럼 만약 dynamic으로 불러오는 파일의 크기가 너무 크다면 어떨까?_

그러면 안되지만 만약 큰 컴포넌트를 꼭 써야하는 상황이 온다면 다음과 같이 loader를 사용한다.

```javascript
const big = dynamic(() => import("components/com"), {
  ssr: false,
  loading: () => <span>Loading...</span>,
});
```

## \_document and fonts

`_app`은 앱 전체의 청사진과 같다. 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트

`_document`도 마찬가지로 앱의 청사진과 같다. 하지만 이것은 app 다음에 언제나 서버에서 실행된다.
next/documnet의 Documnet로 부터 class 상속을 받아 만들어지는 class형 컴포넌트이며 서버에서 한 번만 실행된다.

### Script Component

Next.js Script 컴포넌트인 next/script는 HTML script 태그의 확장
이를 통해 개발자는 애플리케이션에서 써드 파티 스크립트의 로드되는 우선 순위를 설정할 수 있으므로 개발자 시간을 절약하면서 로드하는 성능을 향상시킬 수 있다.

이 컴포넌트에는 속성이 존재한다.

1. strategy
   beforeInteractive: 페이지가 interactive 되기 전에 로드
   afterInteractive: (기본값) 페이지가 interactive 된 후에 로드
   lazyOnload: 다른 모든 데이터나 소스를 불러온 후에 로드
   worker: (실험적인) web worker에 로드

```javascript
<Script src="~" strategy="lazyOnLoad" />
```

2. onLoad
   만약 script가 불러져왔다면 실행할 함수

```javascript
<Script src="~" onLoad={() => console.log("done")} />
```

## getServerSideProps

이 함수는 서버단에서만 호출되고 페이지 컴포넌트가 서버단에서 실행된다.
유저의 요청이 발생할 때마다 실행된다.

서버에서 페이지에 필요한 데이터 값들을 가지고 올 때까지 기다렸다가 페이지가 렌더링되기 때문에 SWR과 같이 사용이 불가능하다.

_따라서 static optimization, cache 같은 기능을 사용할 수 없다._

### 그럼 캐시 데이터를 미리 제공해서 둘 다 사용해 보자

SWRConfig 컴포넌트는 fallback이라는 속성으로 캐시 초기값을 설정할 수 있다.

```javascript
// 안에 useSWR로 데이터를 받아오고 있음
const Home: NextPage = () =>{...}

const Page: NextPage<{products:ProductsWithCount[]}>= ({products}) => {
   return (
      <SWRConfig value={{
         fallback:{
            "/api/home" :{ ok:true, products}
         }
      }}>
      <Home/>
      </SWRConfig>
   )
}

export ssr fun ~~~

// wrapping 한 페이지를 export
export default Page
```

서버사이드 렌더링을 이용해서 데이터를 받아오지만 SWR을 이용해서 캐시를 설정해 주며 CSR도 동시에 사용이 가능하다.

## getStaticProps (SSG)

해당 함수가 있는 페이지가 빌드되고 next가 이 페이지를 export 한 후 일반 html로 될 때 실행된다.

### 정적인 라우트

앱 안에 있는 파일들을 정적으로 html로 만들기 때문에 node의 read를 사용해서 프로젝트 안에 있는 파일들을 읽어서 정보를 받아온다.

```javascript
export async function getStaticProps() {
  const posts = readdirSync("./posts").map((file) => {
    return readFileSync(`./posts/${file}`, "utf-8");
  });
  return {
    props: { posts },
  };
}
```

### 동적인 라우트 (getStaticPaths 사용)

동적인 라우트를 갖는 페이지에서 getStaticProps를 사용할 때 꼭 필요하다.

동적 경로를 사용하는 페이지에서 getStaticPaths 함수를 export할 때 Next는 getStaticPaths에 의해 지정된 모든 경로를 정적으로 미리 렌더링한다.

```javascript
export async function getStaticPaths() {
  const res = await AllPostId();

  const paths = res?.map((post: any) => ({
    params: {
      id: post.id.toString(),
    },
  }));
  return { paths, fallback: "blocking" };
}
```

fallback의 값에 따라 getStaticPaths에서 리턴하지 않은 페이지 접속 시 return 되는 상황이 다르다.

**"false"**
모두 404로 연결

**"true"**

fallback 화면 > 페이지 반환

1. 404 반환하지 않고 getStaticProps 함수를 이용한 값으로 HTML파일과 JSON파일을 만들어낸다.

2. 백그라운드에서 작업이 끝나면 요청된 path에 해당하는 JSON 파일을 받아 새롭게 페이지를 렌더링함

3. 새롭게 생성된 페이지를 기존 빌드시 프리렌더링된 페이지 리스트에 추가.
   같은 path로 온 이후 요청들에 대해서는 처음 생성한 페이지를 반환함

**"blocking"**

1. true일 때와 비슷하게 동작하지만 최초 만들어 놓지 않은 path에 대한 요청이 들어온 경우 fallback 상태를 보여주지 않고 SSR처럼 동작한다.

**fallback이 렌더링되고 있는지 next의 router를 통해 값을 페이지에서 알 수 있다.**

```javascript
const router = useRouter();
router.isFallback; // fallback이 렌더링되고 있다면 true
```

## ISR

getStaticProps, getServerSideProps 경우 유저쪽에서 로딩을 기다리는 일이 없다.

하지만 만약 서버에서 처리하는 것들이 많이 html을 만들 때까지 시간이 오래 걸린다면 유저는 로딩은 아니지만 멈춰있는 화면을 그냥 기다려야한다는 단점이 있다.
ssg는 fallback이 false가 아닌경우..

ISR은 getStaticProps를 백그라운드에서 여러 번 실행이 가능하게 한다.

```javascript
export async function getStaticProps() {
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
```

getStaticProps에서 revalidate를 속성을 정의한다면 **(해당 값)초 마다 페이지를 재생성한다.**

따라서 로딩이나 멈춰있는 화면을 기다릴 필요없이 가장 최신 데이터를 볼 수 있다.

### 그럼 revalidate가 뭔가

revalidate를 20이라고 가정하고 예를 들어본다.
A, B, C, D 라는 유저가 웹에 도착해서 해당 페이지를 본다.

**맨 처음 버젼을 본다**
A --> V1
**20초 후 유저가 들어온다면 백그라운드에서 V를 재생성한다. (V2의 트리거)**
B --(20초)-> V1 (V2)
**20초 이후 온 유저는 V2를 본다**
C --(21)-> V2
**40초 후 유저가 들어온다면 백그라운드에서 V3를 재생성한다. (V3의 트리거)**
D --(40)-> V2 (V3)

### ODR On-demand Revalidation

revalidate를 통해 새로운 데이터를 받을 수 있는 방법(원래 있던 캐시를 삭제하는 방법)은 revalidate 설정 시간이 끝나고 유저가 그 페이지를 방문하는 방법밖에 없었다.

ODR은 수동으로 캐시를 삭제하기 위한 방법을 제공한다.
getStaticProps에서 API handler를 이용할 수 있다.
하지만 middleware는 사용할 수 없다.

사용 방법

사용이 필요한 api에서 사용한다.

```javascript
await res.revalidate("api url");
```

# auth 로직

1. enter에서 payload 및 payload가 담긴 token 생성 후 계정에 연결
   이 과정은 회원가입을 포함한다.

   - 만약 계정이나 폰넘버가 DB에 존재하지 않는다면 생성한 후에 token을 생성한다.

2. 로그인을 하기 위한 랜덤하고 유니크한 payload가 생성된 후 토큰을 만들었다면 메일이나 폰으로 생성된 payload값을 전달한다.

3. 메일이나 메시지가 전달이 되었다면 form 화면을 전환한 후에 전달받은 payload값을 body에 담아보낸다.

4. payload가 담긴 토큰을 DB에서 찾은 후에 만약 존재한다면 해당 계정에 쌓인 token을 전부 삭제한 후 로그인을 완료시킨다.

5. 만약 로그인을 하기 위해서 클라이언트에서 토큰을 계속 생성된다면?
   > 화면을 전환하기 때문에 인증을 반복하며 토큰을 계속 생성하게 될 가능성은 낮다.
   > 민약 고친다면 prisma upsert를 이용해서 token의 payload만 업데이트 한다.

<br/>

[Session ? Token ? Cookie ?](https://www.youtube.com/watch?v=tosLBcAX1vk)

id --> encrypt --> 암호화된 쿠키를 보냄 --> decrypt --> 복호화된 쿠키로 인증

로그인에서 JWT Session 차이

### JWT

유저의 정보(ex: id)에 사인 알고리즘을 이용해 서명한 후에 그 사인된 정보를 string 형태로 전달한다.
서버에 요청을 보낼때 session id와 비슷하게 token 아니면 사인된 정보를 보내야한다.
token을 보낸다면 서버에 존재하는 사인을 통해 비교를 한 후에 유효하다면 인증이 완료된다.

이 토큰은 암호화된것이 아니며 누구나 열어서 정보를 볼 수 있기때문에 보안이 중요하다.

### Session

session id 만 보내면 끝나지만 서버에 존재하는 session DB에서 정보를 계속 찾아야하기 때문에 DB의 용량에 성능이 차이난다.

## 이용한 것

[iron session](https://github.com/vvo/iron-session)을 이용한다.

데이터를 저장하기 위해 서명되고 암호화된 쿠키를 사용하는 nodejs의 session 유틸리티이다.

- 서명, 암호화된 쿠키를 사용하는 nodejs stateless 세션 도구
- JWT는 암호화되지 않고 서명이 되어있음
- 유저가 안에 있는 정보를 볼 수 없음
- 세션을 위한 백엔드 구축이 필요 없음

`npm i iron session`

<br/>

# SWR

데이터 fetching을 위한 React Hooks
SWR은 먼저 **캐시(스태일)로부터 데이터를 반환한 후,** fetch 요청(재검증)을 하고, 최종적으로 최신화된 데이터를 가져온다.
SWR을 사용하면 컴포넌트는 지속적이며 자동으로 데이터 업데이트 스트림을 받게 되며 UI는 항상 빠르고 반응적이다.

ex) client가 home에 간다면 api를 통해 유저의 정보를 받아온다. 후에 다시 api를 통한 유저의 정보가 필요하다면 api를 통해 무조건 다시 서버를 왕복하는 것이 아니라 background에서 api 통신을 마친 후에 이미 cache에 존재하는 데이터를 보고 만약 데이터가 다르다면 cache에 저장하고 만약 똑같다면 아무것도 하지 않고 cache에 존재하는 데이터를 보내준다.

## useSWR()

1. 두개의 인자를 받는다.
   `useSWR(url:string, fetcher)`
   첫번째 인자는 데이터를 받아올 url이기도 하지만 cache의 사용여부에 대한 data의 key값이기도 하다.

swr에는 super cache라는게 존재한다.

```javascript
super_cache = {
  url: {
    ok: true,
    data: { id: 11, name: "choi", age: 27 },
  },
};
```

`useSWR`에는 다양한 옵션이 존재하는데 refreshInterval만 본다면 우선 이름과 같이 패칭 refresh를 Interval로 해준다는 뜻으로 값은 초단위로 넣으면 된다.

2. hook 안의 결과값에는 data 와 mutate가 있다.

https://swr.vercel.app/ko/docs/mutation

data는 우리가 fetch 한 결과값이고 mutate는 cache된 데이터를 mutate(조건부로 새로운 데이터를 파생)하기 위한 함수이다.

mutation은 바뀌는 데이터를 기준으로 ui의 업데이트까지 해준다.

```javascript
// 첫번째 매개변수 : 캐시에 있는 데이터 대신 사용할 새로운 데이터
// 두번재 매개변수 : 서버를 다시 들리는 revaildation 여부
mutate({ data }, boolean);
```

mutate에는 두가지 종류가 있다.

1. bound
   같은 `useSWR`의 결과값을 이용해서 받은 data만 조작할 수 있다.

2. unbound
   캐시할 데이터를 포함할 필요없이 key값으로 url만 보내준다면 해당 url에 존재하는 캐시의 데이터를 다른 컴포넌트에서 조작할 수 있다.
   ```javascript
   const { mutate } = useSWRConfig();
   1. 만약 표현해줄 데이터가 필요하다면
   mutate("/api/users/me", (prev) => ({ ok: !prev.ok }), false);
   2. 그냥 fetch를 다시 하고 싶다면
   mutate("/api/users/me")
   ```

## SWRConfig

context SWRConfig는 모든 SWR hook에 대한 global configuration을 제공한다.

```javascript
// value 안에 fetcher을 설정했기때문에 다른 컴포넌트안에서 useSWR을 사용할때 fetcher가 자동적으로 여기서 설정한 fetcher로 들어간다.
<SWRConfig
  value={{
    fetcher: (url: string) => fetch(url).then((response) => response.json()),
  }}
>
  <div className="mx-auto w-full max-w-xl">
    <Component {...pageProps} />
  </div>
</SWRConfig>
```

<br/>

# CloudFlare

## Image Direct Creator Upload

https://developers.cloudflare.com/images/cloudflare-images/upload-images/direct-creator-upload/

유저의 브라우저가 cloudflare에 다이렉트로 업로드할 수 있다.
Cloudflare 이미지의 Direct Creator Upload 기능을 사용하면 사용자가 일회성 업로드 URL로 사진을 업로드할 수 있다.
Direct Creator Upload를 사용하면 API 키 또는 토큰을 클라이언트에 노출하지 않고 업로드를 수락할 수 있다.
또한 중간 스토리지 버킷 및 이와 관련된 스토리지/송신 비용이 필요하지 않다.

- 로직

아래와 같은 로직은 전송 대역폭을 2번을 사용하기 때문에 돈이 많이 든다.
File(browser) => My Server => CloudFlare

따라서 밑과 같은 로직을 사용하기 위해 DCU를 사용한다.
File(browser) => CloudFlare

위와 같은 로직은 다음과 같다.
유저는 우리에게 이미지를 넣을 수 있는 cloudflare url을 요구할 것이고 그럼 우리는 cloudflare에게 url을 요구해 url을 받을 것이다. 그 후 그 url에 유저가 직접 파일을 업로드 할 수 있도록 할 것이다.
업로드는 프론트엔드에서 이루어진다.

### Image variant

cloudflare dashboard에서 변수 설정이 20개까지 가능하다.
기본값은 public이며 variant 이름을 설정하고 안에 이미지의 Width, Height, Fit, meata와 같은 옵션들을 설정이 가능하다.

ex)
variant 이름을 avatar이라고 하고 대시보드에서 W, H를 설정하고 image를 받아오는 variant 자리에 설정한 이름을 넣으면 해당하는 옵션으로 이미지를 바꿔서 준다.

<br>

# 짧은 tips

## tsconfig.json에서 path 깔끔하게 설정하기

import할 때 `../../../~~~`이 더러워 보인다면 tsconfig에서 설정을 통해 깔끔하게 바꿀 수 있다.

```
{
  "compilerOptions": {
   ...,
   // 기준이 되는 url은 이 파일이 존재하는 곳으로
    "baseUrl": ".",
    "paths": {
      // "내가 사용할 path 이름" : ["resource가 존재하는 url"]
      "@libs/*": ["libs/*"],
      "@components/*": ["components/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## modlue package에 type 지정하기

이것은 패키지 안에 내가 설정한 변수가 들어가서 만약 ts가 불평을 한다면 사용할때 유용하다.

```javascript
// iron-session의 타입을 정의할 것이다.
declare module "iron-session" {
  interface IronSessionData {
   // 안에서 사용하는 user의 값이 nullable이고 안에는 id가 있다고 알려준다.
    user?: {
      id: number;
    };
  }
}
```

## env

API Key와 같은 문자열이 필요할때 변수에다 저장하고 사용해야 편리하고 가독성이 좋아진다.
그 문자열들을 관리하는 환경변수 파일인데 이것은 안전히 보관되야하는 key들이 들어있는 파일이기때문에 git에 올라가면 안된다.

next에서는 따로 npm 패키지를 다운해서 사용할 필요가 없다.

만약 gitignore에 파일이름을 올렸는데도 git에 포함되어 올라간다면
file이 존재하는 경로에서 git에서 cache된 env를 삭제한다.

```bash
git rm .env --cached

git add .
git commit -m "delete env file cached git"
git push
```

## useRouter

push와 replace의 차이점

1. `push`

이전 페이지의 히스토리가 남는다

2. `replace`

이전 페이지의 히스토리가 남지 않는다.
