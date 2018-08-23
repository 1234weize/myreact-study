import React from 'react';
import ReactDOM from 'react-dom';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyBody from './components/MyBody';


class Index extends React.Component{
    render(){
        return(
            <div>
                <MyHeader />
                <MyBody userid={123456}  />
                <MyFooter />
            </div>
        )
    }
}
ReactDOM.render(<Index/>, document.getElementById('example'));