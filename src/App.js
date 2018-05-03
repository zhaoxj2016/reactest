import React, {Component} from 'react';
import {
    withRouter,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import About from "./components/about";
import Demo2 from "./components/demo2";

class App extends Component {
    constructor(props) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);
    }
    render() {
        return (
            <Switch>
                <Route exact path="/" component={()=>{
                    return <About onMenuClick={this.onMenuClick}/>
                }}/>
                <Route path="/Demo2" component={()=>{
                    return <Demo2/>}}/>
            </Switch>
        );
    }
    onMenuClick(key) {
        console.log('this.props',this.props);
        this.props.history.push(key);
    }
}

export default withRouter(App);
// export default App;
