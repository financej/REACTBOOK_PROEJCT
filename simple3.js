function LikeButton(){
    const [liked, setLiked] = React.useState(false); // 초기값과 함께 컴포넌트의 상태값을 정의한다.
                                                    // 여기서 react 변수는 react.development.js 파일에서 전역 변수로 생성된다.
    const text = liked ? '좋아요 취소' : "좋아요"; // 컴포넌트의 상택닶에 따라 동적으로 버튼의 문구를 결정한다.
    return React.createElement( // createElement 함수는 리액트 요소를 반환한다.
                                // 여기서 생성된 리액트 요소는 최종적으로 버튼 돔 요소가 된다.
        'button',
        {onClick: () => setLiked(!liked)}, // 버튼을 클릭하면 onClick 함수가 호출되고, 컴포넌트의 상태값이 변경된다.
        text
    )
}

function Container(){
    const [count, setCount] = React.useState(0);
    return React.createElement(
        'div',
        null,
        React.createElement(LikeButton),
        React.createElement('div',
            { style: {marginTop: 20}},
            React.createElement('span', null, '현재 카운트: '),
            React.createElement('span', null, count),
            React.createElement(
                'button',
                {onClick: () => setCount(count+1)},
                '증가'
            ),
            React.createElement(
                'button',
                {onClick: () => setCount(count-1)},
                '감소'
            )
        )
    )
}
const domContainer = document.querySelector('#react-root2');
ReactDOM.render(React.createElement(Container), domContainer);
