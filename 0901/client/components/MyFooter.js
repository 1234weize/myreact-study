import React from 'react';
import ReactDOM from 'react-dom';
// import miniFooter from '../css/footer.css';

// import { miniFooter } from "../css/footer.css";

export default class MyFooter extends React.Component{
    render(){
        // console.log(footerCss);
        var footerConvertStyle = {
            "miniFooter": {
              "backgroundColor": "#333333",
              "color": "#ffffff",
              "paddingLeft": "20px",
              "paddingTop": "3px",
              "paddingBottom": "3px"
            },
            "miniFooter_h1": {
              "fontSize": "15px"
            }
          }
        console.log(123);
        return (
            <footer style={footerConvertStyle.miniFooter}>
                <h1 style={footerConvertStyle.miniFooter_h1}>这是底部，存放版权信息</h1>
            </footer>
        )
    }
}
