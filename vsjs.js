import React, {useState} from 'react';

export default function App() {
    const [todoList, setTodoList] = useState([]);
    const [currentId, setCurrentId] = useState(1);
    const [desc, setDesc] = useState('');
    const [showOdd, setShowOdd] = useState(false);
   function onAdd() {
       const todo = {id: currentId, desc};
       setCurrentId(currendId+1);
       setTodoList([...todoList, todo]);
   }
    function onDelete(e) {
       const id = Number(e.target.dataset.id);
       const newTodoList = todoList.filter(todo => todo.id !== id);
       setTodoList(newTodoList);
    }
    function onSaveToServer() {}
    return(
        <div>
            <h3>할 일 목록</h3>
            <ul>
                {todoList.filter((_,index) => (showOdd ? index % 2 ===0 : true))
                    .map(todo => (
                    <li key={[todo.id]}>
                        <span>{todo.desc}</span>
                        <button data-id={todo.id} onClick={onDelete}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
            <input type="text" value={desc} onChange={e => setDesc(e.target.value)}></input>
            <button onClick={onAdd}>추가</button>
            <button onClick={() => {}}>홀수 아이템만 보기 on/off</button>
            <button onClick={onSaveToServer}>서버에 저장</button>
        </div>
    )
}

// const person = ['mike',23]
// const arr = [1,2,3];
// const arr2 = [...arr];
// const arr3 = [arr[0], arr[1], arr[2], todo];