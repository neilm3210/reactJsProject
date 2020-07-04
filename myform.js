import React from 'react';
class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            age:null,
            feed:''

        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        let feed=this.state.feed;
        alert("Thank you for your feedback");
        event.target.username.value='';
        event.target.age.value=null;
    }
    myChangeHandler = (event) => {
        let name=event.target.name;
        let val=event.target.name;
        let feed=event.target.value;
        this.setState({[name]: val,feed});
    }
    render(){
        return(
            <form onSubmit={this.mySubmitHandler}>
                <p>Enter Your Name: </p>
                <input type='text' name='username' onChange={this.myChangeHandler}/>
                <p>Enter Your Age: </p>
                <input type='text' name='age' onChange={this.myChnageHandler}/>
                <p>Enter Your Feedback: </p>
                <textarea name='feedback' onChange={this.myChangeHandler}/>
                <br/>
                <br/>
                <input type='submit'/>
            </form>
        );
    }
}
export default MyForm;