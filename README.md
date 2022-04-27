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

1. 스타일의 뒤 숫자는 px 단위가 아니다. 하지만 px을 붙히면 px로 변한다.

   - rem 단위이며 마우스를 대보면 px을 알 수 있다.
   - 일반적으로 숫자(1)는 4px이 적용되고 rem(1)은 0.25rem
