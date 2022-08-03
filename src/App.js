import React from "react";
import './App.css';
import Router from "./shared/Router";  // Router import

function App() {
  return (
    // 페이지 구성을 Router에서 관리(왜? 가장 상위 컴포넌트니까)
    <Router />
  );
}

export default App;
