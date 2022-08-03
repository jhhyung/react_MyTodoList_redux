import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux"; //useSelector 훅 임포트, state값을 조회한다
import { useDispatch } from "react-redux"; //useDispatch 훅 임포트, 액션명령을 주고 받는다
import { updateTodo, deleteTodo } from "../redux/modules/todos";   // 액션객체 임포트
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate훅 임포트

function List() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const todoStore = useSelector(state => state.todos); //store 연결확인
    
    // dispatch로 명령 전달
    const onDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    const onToggle = (id) => {
        dispatch(updateTodo(id));
    }

    return (
        <StListContainer>
            <h1>Working.. 🔥</h1>
            <StListBox>
                {todoStore.map(todo => {if (todo.isDone === false) {
                        return <StTodoBox key={todo.id}>
                            <StDetailBtn onClick={()=>navigate(`/detail/${todo.id}`)}>+ 상세내용</StDetailBtn>
                            <h1>{todo.title}</h1>
                            <p>{todo.body}</p>
                            <StBtnBox>
                                <StBtn onClick={()=>onDelete(todo.id)}>삭 제</StBtn>
                                <StBtn onClick={()=>onToggle(todo.id)}>{todo.isDone? "취 소" : "완 료"}</StBtn >
                            </StBtnBox>
                        </StTodoBox>
                    } else {
                        return null;
                    }
                })}
            </StListBox>

            <h1 style={{"margin-top": "80px"}}>Done..! 🎉</h1>
            <StListBox>
                {todoStore.map(todo => {if (todo.isDone === true) {
                        return <StTodoBox key={todo.id}>
                            <StDetailBtn onClick={()=>navigate(`/detail/${todo.id}`)}>+ 상세내용</StDetailBtn>
                            <h1>{todo.title}</h1>
                            <p>{todo.body}</p>
                            <StBtnBox>
                                <StBtn onClick={()=>onDelete(todo.id)}>삭 제</StBtn>
                                <StBtn onClick={()=>onToggle(todo.id)}>{todo.isDone? "취 소" : "완 료"}</StBtn >
                            </StBtnBox>
                        </StTodoBox>
                    } else {
                        return null;
                    }
                })}
            </StListBox>
        </StListContainer>
    )
};

export default List;
const StListContainer = styled.div`
    padding: 25px;
`

const StListBox = styled.div`
    box-sizing: border-box; 

    display: flex;

    /* flex-item요소들을 가능한 영역 내에서 벗어나지 않고 여러 행으로 표현 */
    flex-wrap: wrap;
    align-items: center;

    gap: 25px;
`
const StTodoBox = styled.div`
    width: 300px;
    height: 180px;

    border: none;
    border-radius: 20px;

    // 배경색만 투명도 조절(만약 전체 투명도 조절하고 싶으면 opacity: 0.5;)
    background-color: rgba(0, 0, 0, 0.8);

    padding: 20px;
`

const StDetailBtn = styled.button`
    float: right;   // 오른쪽 상단으로 버튼을
    
    box-sizing: border-box;

    border-radius: 20px;
    border: none;
    background-color: black;

    padding: 5px 10px;
    width: 90px;
    
    cursor: pointer;

    &:hover {
        width: 100px;
    }
`

const StBtnBox = styled.div`
    display: flex;
    justify-content: center;

    gap: 15px;

    margin-top: 40px;
`
const StBtn = styled.button`
    box-sizing: border-box;

    border-radius: 20px;
    border: none;

    padding: 5px 10px;
    width: 90px;

    cursor: pointer;

    font-size: 1rem;

    &:first-of-type {
        background-color: #ff0000c5;
        
        &:hover {
            font-size: 0.9rem;
        }
    }

    &:nth-of-type(2) {
        background-color: white;
        color: black;

        &:hover {
            width: 95px;
        }
    }
`