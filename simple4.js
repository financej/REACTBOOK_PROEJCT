function LikeButton() {
  const [liked, setLiked] = React.useState(false); // 초기값과 함께 컴포넌트의 상태값을 정의한다.
  // 여기서 react 변수는 react.development.js 파일에서 전역 변수로 생성된다.

  const text = liked ? '좋아요 취소' : "좋아요"; // 컴포넌트의 상택닶에 따라 동적으로 버튼의 문구를 결정한다.

  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text);
}

function Container() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8 : "), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "\uAC10\uC18C")));
}

const domContainer = document.querySelector('#react-root2');
ReactDOM.render(React.createElement(Container), domContainer);