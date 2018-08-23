import React from 'react';
import ReactDOM from 'react-dom';
import MyBodyChild from './MyBodyChild';

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
        setTimeout(()=>{
            //更改state时候
            this.setState({username:"Imooc",age:20});
        }, 4000)


        var userName = "王伟泽";
        var address = "hello world.";
        return (
            <div>
                <h1>这是Body，存放内容</h1>
                <p>{userName == '' ? '没有用户登录':'用户名：'+userName}</p>
                <input type="button" value="默认按钮" disabled={false} />
                {/*注释*/}
                <p dangerouslySetInnerHTML={{__html:address}}></p>
                {/*状态*/}
                <p>{this.state.username}</p>
                <p>{this.state.age}</p>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
                <MyBodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )
    }
}