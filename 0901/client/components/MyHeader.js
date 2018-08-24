import React from 'react';
import ReactDOM from 'react-dom';


export default class MyHeader extends React.Component{
    constructor(){
        super();
        this.state={
            miniHeader:false//默认加载还是高的头部
        }
    };
    switchHeader(){
        this.setState({
            miniHeader:!this.state.miniHeader
        });
    };
    render(){
        const styleComponentHeader = {
            header:{
                backgroundColor:"#333333",
                color:"#FFFFFF",
                paddingTop: (this.state.miniHeader)?"3px":"15px",
                paddingBottom: (this.state.miniHeader)?"3px":"15px",
            },
          //还可以定义其他的样式  
        };
        return (
            <header style={styleComponentHeader.header} className="smallFontSize"
            onClick={this.switchHeader.bind(this)}>
                <h1>这是头部</h1>
            </header>
        )
    }
}
