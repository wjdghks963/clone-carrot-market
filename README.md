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

1. 스타일의 뒤 숫자는 px 단위가 아니다.

   - rem 단위이며 마우스를 대보면 px을 알 수 있다.

2. 새로운 css property를 제공해 주고 이용할 수 있다.
   간단하더라도 귀찮거나 계산이 필요한 기능들을 이용이 가능하다.

   - ex) `aspect-ratio` , `space-x-5` ...

3. modifiers
