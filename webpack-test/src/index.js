import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';
// 'import ~ ' -> ESM 문법을 이용해서 필요한 모듈을 가져오고 있다.

function Container() {
    return React.createElement(
        'div',
        null,
        React.createElement('p',null,'버튼을 클릭해주세요.'),
        React.createElement(Button, { label : '좋아요'}),
        React.createElement(Button, { label : '싫어요'})
    )
}
const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);