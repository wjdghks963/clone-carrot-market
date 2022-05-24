# Carrot Market

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
