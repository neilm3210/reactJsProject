import React, { Component } from 'react';
import MessageView from './message-view';
import "./message1.css";
class MessageList extends Component{
    state = {
        messages: [
            {
                from: 'John',
                message: 'The event will start next week',
                status: 'unread'
            
            },
            {
                from: 'Martha',
                message: 'I will be travelling soon',
                status: 'read'
            },
            {
                from: 'Jacob',
                Message: 'Talk later. Have a great day!',
                status: 'read'
            }
        ]
    }
    render() {
        const messages = this.state.messages.map(function(message,index){
            return(
                <MessageView key={index} message={message}/>
            )
        })
        return(
            <div>
                <h2>List of Messages</h2>
                {messages}
            </div>
        )
    }
}
export default MessageList;
