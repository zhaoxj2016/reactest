import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add} from '../actions/actions';
import {Button} from 'antd';

class About extends Component {

    add =()=>{
        this.props.add(1);
    }
  render() {
    return (
        <div className="App">
            <Button type="primary" onClick={() => {
                this.add()
            }}>第{this.props.count}次</Button>
            <Button onClick={()=>{
                this.props.onMenuClick('Demo2');
            }}>点我跳转demo2</Button>
        </div>
    );
  }
}

function mapStateToProps(state) {
    const {count} = state;
    return {
        count
    };
}
function mapDispatchToProps(dispatch) {
    let method = {
        add
    };
    let boundActionCreators = bindActionCreators(method, dispatch);
    return {
        dispatch,
        ...boundActionCreators
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(About);
