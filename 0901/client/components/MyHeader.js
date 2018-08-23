import React from 'react';
import ReactDOM from 'react-dom';


export default class MyHeader extends React.Component{
    render(){
        const styleComponentHeader = {
            header:{
                backgroundColor:"#333333",
                color:"#FFFFFF",
                paddingTop: "15px",
                paddingBottom: "15px"
            },
          //还可以定义其他的样式  
        };
        return (
            <header style={styleComponentHeader.header} className="smallFontSize">
                <h1>这是头部</h1>
            </header>
        )
    }
}
