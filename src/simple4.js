function LikeButton(){
    const [liked, setLiked] = React.useState(false); // 초기값과 함께 컴포넌트의 상태값을 정의한다.
                                                    // 여기서 react 변수는 react.development.js 파일에서 전역 변수로 생성된다.
    const text = liked ? '좋아요 취소' : "좋아요"; // 컴포넌트의 상택닶에 따라 동적으로 버튼의 문구를 결정한다.
    return <button onClick={() => setLiked(!liked)}>{text}</button>
}

function Container(){
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <LikeButton />
            <div style={{marginTop: 20}}>
                <span>현재 카운트 : </span>
                <span>{count}</span>
                <button onClick={() => setCount(count+1)}>증가</button>
                <button onClick={() => setCount(count-1)}>감소</button>
            </div>
        </div>
    )
}
const domContainer = document.querySelector('#react-root2');
ReactDOM.render(React.createElement(Container), domContainer);
