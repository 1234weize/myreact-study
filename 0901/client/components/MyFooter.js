import React from 'react';
import ReactDOM from 'react-dom';
// import miniFooter from '../css/footer.css';

import { miniFooter } from "../css/footer.css";

export default class MyFooter extends React.Component{
    render(){
        // console.log(footerCss);
        console.log(123);
        return (
            <footer className="miniFooter">
                <h1>这是底部，存放版权信息</h1>
            </footer>
        )
    }
}
