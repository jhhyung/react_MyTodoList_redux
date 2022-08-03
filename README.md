# ✔️ MY Todo List 만들기 with Redux

![](https://velog.velcdn.com/images/jhhyung/post/23f1a108-7d87-462e-9326-bdf4f253e339/image.png)
항해99 3주차에 진행했던 과제를 Redux를 이용하여 리팩토링하였습니다.

---

## 📁 폴더 구조

- src

  - components (화면을 구성하는 컴포넌트들을 모은 폴더)
    - Form.jsx
    - Header.jsx
    - Layout.jsx
    - List.jsx
  - Pages (유저가 접근하는 페이지들을 모은 폴더)
    - Detail.jsx (상세페이지)
    - Home.jsx (주요 컴포넌트들을 모아 그려주는 메인 페이지)
  - redux
    - config
      - configStore.js (store저장)
    - modules
      - todos.js (리듀서)
  - shared

    - Router.jsx

  - App.js
  - index.js

---

## 📌 구현기능

- Redux를 이용하여 전역state 관리
  - 지난 주차에서는 `형제 컴포넌트`에게 `state`를 전달하기 위해 불필요한 곳까지 `props`를 넘기는 `props drilling`을 체험해봤다.
  - 이번 주차에서는 `redux`라는 `전역상태(state)관리 툴`을 이용해 내가 state가 필요한 곳에 딱 넣어주기만 하면 되었다.
- Router를 이용 서로 다른 페이지로 이동

---

## 📌 trouble shooting

### @ configStore.js

- `todos` 리듀서를 `store`에 임포트할 때 error 발생
  > export 'todos' (imported as 'todos') was not found in '../moduels/todo'
- 리듀서 todos를 임포트할 때 리액트 훅을 임포트한 것처럼 `{ }` 처리해서 에러난 것..

➡️ `{ }` 지우고 나서 아주 잘 됨^^

### @ conle.log()

- 어딘가 `margin`을 준 곳에서 `error` 발생
  > Warning: Unsupported style property margin-top. Did you mean marginTop?
- `<h1 style={{"margin-top": "80px"}}>Done..! 🎉</h1>` 이 부분에서 `react`는 `css`와 달리 `margin-top`을 알아 듣지 못함

➡️ 원하는 대로 `margin-top`을 `marginTop`으로 변환하여 처리

### @ todos.js

- todo 아이템을 삭제하고 나서 새로운 todo를 생성하면 id가 계속 초기값으로 출력되는 에러 발생
- 처음에는 `id`를 컴포넌트에서 `useRef()`로 생성하여 생기는 문제인 줄 알았는데, `reducer`의 삭제 로직 구현 할 때 `객체의 불변성`을 지켜주지 않았기 때문에 발생한 문제였음
- 원래 작성했던 코드
  `js return state.filter(todo => (todo.id !== action.payload)); `

➡️ 수정한 코드

```js
case DELETE_TODO:
    const remainedTodo = state.filter((todo) => todo.id !== action.payload);
    return remainedTodo;
```

---

### 😩 아쉬운점

- React에서 계속나오는 `객체의 불변성을 지키자`... 아직까지는 그 개념을 내 코드에 적용하는게 미숙
- CSS 스타일 좀 더 공부해보고 싶다..!! 그리고 안쓰다보니까 이미 알고 있던 내용도 점차 잊어가는 것 같다. 계속 연습연습
- 내가 보낸 정보들이 어디에서 어떻게 쓰이는지 안 보이면 머리 싸매고 고민하지 말고 무.조.건 `console.log()`!! 생활화 하자^^
