import React, { Component } from "react";
import Modal from "./custommodal/modal";
import './menu1.css';



class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        isShowing: false
      }
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
      render() {
          return(
              <body>

                  <div>
                      {this.state.isShowing ? <div onClick={this.closemodalHandler} className="back-shed">
                  </div> : null }

                  <button className="open-modal-btn" onClick={this.openModalHandler}>Know About ABC Incorp Ltd</button>

                  <Modal className="modal" show={this.state.isShowing}
                    close={this.closeModalHandler}></Modal>
      </div>

              </body>
          );
      }
      }
      export default Home;