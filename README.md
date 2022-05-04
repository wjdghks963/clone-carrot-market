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

   - https://tailwindcss.com/docs/hover-focus-and-other-states#quick-reference
   - css event와 같은 hover, active 등등을 실행시켜줌

   - 스타일을 적용하기 위해서 css varibale과 함수를 사용하는데 이때 하나의 className이 여러가지를 사용할때 그 설정을 어느 정도까지 커스터마이징이 가능한지 알 수 있고 커스터마이징이 가능하다면 그 스타일 변수가 가지고 있는 이름 하나하나에 modifier를 사용할 필요가 없다.
     어떤 css가 어떤 변수들을 가지고 있는지는 마우스를 위로 올려보면 알 수 있다.

   ex)

   ```
   <div className="focus:ring-2 ring-offset-4 ">HI!</div>
   ```

   🤔 ring 안에는 ring-offset을 변수로 가지고 있기 때문에 focus를 ring에게만 줘도 offset도 적용된다.

4. ring utility

   - https://tailwindcss.com/docs/ring-color
   - `ring-숫자` = 상자 그림자 윤곽선을 만드는데 그 두께를 적용함
   - `ring-offset-숫자` = 윤곽선과 내용물의 사이 거리

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
