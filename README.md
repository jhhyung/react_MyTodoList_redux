# trouble shooting
- 2022 Aug 01 월요일 과제 손대기 시작!
## 1. @configStore.js 
- import { todos } from "../modules/todos";  // 모듈 임포트
- error> export 'todos' (imported as 'todos') was not found in '../moduels/todo'
- 이유> 리듀서 todos를 임포트할 때 리액트 훅을 임포트한 것처럼 `{ }` 처리해서 에러..
- 해결> `{ }` 지우고 나서 아주 잘 됨^^