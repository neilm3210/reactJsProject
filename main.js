import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import MessageList from "./messages/message-list";
import custommodal from "./custommodal";
import './menu1.css';
import Agenda from './Agenda';
import './App.css';
import PersonList from "./empdetails/empdetails";
import TodoApp from "./components/TodoInput";
import myForm from "./myform";

class Main extends Component{
    render() {
        return (
            <BrowserRouter>
            <body>
                <div>
                    <pre>
                        <br/>
                    </pre>
                    <h1>ABC Incorporation's Official Page</h1>
                    <pre>
                        <br/>
                    </pre>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/messages/MessageList">Message App</NavLink></li>
                        <li><NavLink to="/custommodal">Other App</NavLink></li>
                        <li><NavLink to="/Agenda">Agenda App</NavLink></li>
                        <li><NavLink to="/empdetails/empdetails">View Employees</NavLink></li>
                        <li><NavLink to="/MyForm">Give Feedback</NavLink></li>
                        <li><NavLink to="/TodoApp">To Do App</NavLink></li>
                        
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/messages/MessageList" component={MessageList}/>
                        <Route path="/custommodal" component={custommodal}/>
                        <Route path="/Agenda" component={Agenda}/>
                        <Route path="/empdetails/empdetails" component={PersonList}/>
                        <Route path="/MyForm" component={myForm}/>
                        <Route path="/TodoApp" component={TodoApp}/>
                    </div>
                    </div>
                    </body></BrowserRouter>
        );
    }
}
export default Main;