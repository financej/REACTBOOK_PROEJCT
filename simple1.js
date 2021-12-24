function LikeButton(){
    const [liked, setLiked] = React.useState(false); // 초기값과 함께 컴포넌트의 상태값을 정의한다.
                                                    // 여기서 react 변수는 react.development.js 파일에서 전역 변수로 생성된다.
    const text = liked ? '좋아요 취소' : "좋아요"; // 컴포넌트의 상택닶에 따라 동적으로 버튼의 문구를 결정한다.
    return React.createElement( // createElement 함수는 리액트 요소를 반환한다.
                                // 여기서 생성된 리액트 요소는 최종적으로 버튼 돔 요소가 된다.
        'button',
        {onClick: () => setLiked(!liked)}, // 버튼을 클릭하면 onClick 함수가 호출되고, 컴포넌트의 상태값이 변경된다.
        text
    );
}
const domContainer = document.querySelector("#react-root"); // simple1.html 파일의 돔 요소를 가져온다
//  getElementById('root')와의 차이는?
// 전역변수로 만든 ReactDom 변수를 사용해서 우리가 만든 컴포넌트를 react-root 돔 요소에 붙인다.
ReactDOM.render(React.createElement(LikeButton), domContainer);
