// /*
//     ./client/components/App.jsx
// */
// /*
// import React from 'react';

// export default class App extends React.Component {
//   render() {
//     return (
//      <div style={{textAlign: 'center'}}>
//         <h1>Hello World</h1>
//       </div>);
//   }
// }
// */
import React from 'react';
import PropTypes from 'prop-types';

class HelloMessage extends React.Component {
    render(){
        return <div>Hello,{this.props.name},What are you doing?</div>;
    }
}
HelloMessage.defaultProps = {
    name:'baby'
}
HelloMessage.propTypes = {
    name:PropTypes.string
}
export default class HelloMessageList extends React.Component {
    render(){
        return (
            <div>
                <HelloMessage name="Lucky"/>
                <HelloMessage name="Lili"/>
                <HelloMessage />
            </div>
        )
    }
}

function HelloFunction(){
    return <div>Hello World</div>;
}
