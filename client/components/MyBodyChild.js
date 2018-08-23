import React from 'react';

export default class BodyChild extends React.Component{
    render(){
        return (
            <div>
                <p>子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/></p>
                <p>username:{this.props.username}</p>
                <p>userid:{this.props.userid}</p>
                <p>id:{this.props.id}</p>
            </div>
        )
    }
}