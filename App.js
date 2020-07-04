import React, { Component } from 'react';
import Select from 'react-select';
import Modal from './Modal/modal';
import './App.css';
import Second from './dropdown/dropdown';
import Auto1 from './ac/ac';




class App extends React.Component {
    constructor() {
      super();

      this.state= {
        isShowing: false,
        Hobbies:''
      };
      this.onRadioChange = this.onRadioChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onRadioChange = (e) => {
      this.setState({
        Hobbies: e.target.value
      });
    }

    onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    }


      openModalHandler = () => {
        this.setState({
          isShowing: true
        });
      }
      closeModalHandler = () => {
        this.setState({
          isShowing: false
        });
      }
      render(){
        return (
          <div>
            {this.state.IsShowing ? <div onClick={this.closeModalHandler} className='back-shed'>
          </div> : null }
          
            <h1>
              Welcome to ABC Incorporated, This is our official react JS page
            </h1>
            <button className="open-modal-btn" onClick={this.openModalHandler}>Know about ABC incorp Ltd</button>
            <Second></Second>

            <div className='App'>
              <form on Submit={this.onSubmot}>
                <strong>Select Hobbies :</strong>
                <ul>
                  <li>
                    <label>
                      <input type="radio" value="cricket" checked={this.state.hobbies==="Cricket"} onChange ={this.onRadioChange}></input>
                      <span>Cricket</span>
                    </label>
                  </li>
                  <li>
                    <label>
                    <input type="radio" value="Singing" checked={this.state.hobbies==="Singing"} onChange ={this.onRadioChange}></input>
                    <span>Singing</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" value="Drawing" checked={this.state.hobbies==="Drawing"} onChange ={this.onRadioChange}></input>
                      <span>Drawing</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" value="Dancing" checked={this.state.hobbies==="Dancing"} onChange ={this.onRadioChange}></input>
                      <span>Dancing</span>
                    </label>
                  </li>
                </ul>
                <button type="submit">Choose your hobbies</button>
              </form>
            </div>
            <Auto1></Auto1>
            <Modal className="modal" show={this.state.isShowing}
            close={this.closeModalHandler}></Modal>


          </div>
          
        );
        
      }
    }
    export default App;
    