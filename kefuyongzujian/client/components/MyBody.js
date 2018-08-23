import React from 'react';
import ReactDOM from 'react-dom';
import MyBodyChild from './MyBodyChild';
import PropTypes from 'prop-types';

const defaultProps={
    username:'这是一个默认的用户名'
};
export default class MyBody extends React.Component{
    constructor(){
        super(); //调用基类的所有初始化方法
        this.state = {username:"Parry"};
    }
    changeUserInfo(){
        this.setState({age:50});
    }
    handleChildValueChange(event){
        this.setState({age:event.target.value})
    }
    render(){
        // setTimeout(()=>{
        //     //更改state时候
        //     this.setState({username:"Imooc",age:20});
        // }, 4000)


        var userName = "王伟泽";
        var address = "hello world.";
        return (
            <div>
                <h1>这是Body，存放内容</h1>
               <p>接收到的父页面属性，userid:{this.props.userid} username:{this.props.username}</p>
                <p>{this.state.age}</p>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
                <MyBodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )
    }
}

MyBody.propTypes={
    userid:PropTypes.number.isRequired
};
MyBody.defaultProps = defaultProps;