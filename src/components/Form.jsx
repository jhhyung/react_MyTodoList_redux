import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

function Form() {
    // dispatch 생성
    const dispatch = useDispatch(); 

    //리덕스의 state정보를 조회(여기서는 실질적으로 사용하지 않아서 주석처리함)
    // const todos = useSelector((state)=> state.todos) 

    // input을 통해 들어오는 변화값을 받는 state
    const [ todo, setTodo ] = useState({ id: 0, title: "", body: "", isDone: false })

    // id값 주기
    const nextId = useRef(3)

    // input의 onChange 이벤트 핸들러
    const onChange = (e) => {
        const { name, value } = e.target;
        setTodo({...todo, [name]: value, id: nextId.current });
    }

    // form의 onSubmit 이벤트 핸들러. 클릭하면 form에서 나온 변화(명령)를 dispatch에 담아서 올려보낸다!
    const onSubmit = (e) => {
        e.preventDefault();
        nextId.current++; //submit 버튼을 누를 때 아이디 값을 하나씩 증가시킴

        //dispatch에 액션을 담아서 리듀서로 보낸다. 여기서 보낸 값이 액션객체의 payload에 들어감
        dispatch(addTodo({...todo}));

        setTodo({ id: 0, title: "", body: "", isDone: false }) //이벤트(클릭)이 끝날 때 초기화-> input창을 빈칸으로 만들어 주는 역할!
    }

    return (
        <StForm onSubmit={onSubmit}>
            <StInputGroup>
                <StLabel>제목</StLabel>
                {/* useState의 객체todo의 title(키)를 value로 가져온다 */}
                <StInput type="text" name="title" value={todo.title} onChange={onChange} required/> 
                <StLabel>내용</StLabel>
                {/* useState의 객체todo의 body(키)를 value로 가져온다 */}
                <StInput type="text" name="body" value={todo.body} onChange={onChange}/>
            </StInputGroup>
            <StButton>추가하기</StButton>
        </StForm>
    )
};

export default Form;

const StForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 70px;
    
    box-sizing: border-box;
    padding: 25px;
`

const StInputGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 15px;

    height: 40px;
`

const StLabel = styled.label`
    font-size: 1.2rem; //최상위 엘리먼트의 font size의 1.2배 크기
`
const StButton = styled.button`
    border-radius: 20px;
    background-color: white;
    
    width: 120px;
    height: 40px;

    cursor: pointer;
    
    font-weight: bold;
    font-size: 1.1rem;
    color: black;

    /* 버튼에 마우스 올릴 때 반응 */
    &:hover {
        width: 130px;
        border: 1px solid white;
        background-color: black;
        color: white;
    }
`

const StInput = styled.input`
    box-sizing: border-box;
    
    border-radius: 20px;
    border: none;

    width: 200px;
    height: 30px;

    color: black;

    padding-left: 20px;

    /* 첫번째 요소에만 오른쪽 여백 */
    &:first-of-type {
        margin-right: 50px;
    }

    /* 두번째 요소의 크기만 증가 */
    &:nth-of-type(2) {
        width: 300px;
    }
`