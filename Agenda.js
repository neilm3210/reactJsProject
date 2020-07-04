import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fortawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "ndbreact/dist.css.mdb.css";
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Agenda extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      events: [
        {
          id: 1,
          time: "10:00",
          title: "Breakfast with Simon",
          location: "Lounge Caffe",
          description: "Discuss Q3 Targets"
        },
        {
          id: 2,
          time: "10:30",
          title: "Daily Standup meeting (recurring)",
          location: "Warsaw Spire Office"
        },
        {
          id: 3, time: "11:00", title: "Call with HRs" },
          {
            id: 4,
            time: "12:00",
            title: "Lunch with Simon",
            location: "Canteen",
            description: "Project evaluation declaring a variable and using is statement if fine way to conditionally render a component, sometime you might want to use "
          }
      ]
    };
  }
    
    


  
  addEvent = () => {
    var newArray = [...this.state.events]
      newArray.push({
        id: newArray.length ? newArray[newArray.length-1].id+1:1,
        time: this.state.time,
        title: this.state.title,
        location: this.state.location,
        description: this.state.description,
        value: this.var > 5 ? "It's greater than 5 " : "its lower or equal 5"
      });
      this.setState({evetns: newArray});
      this.setState({
        time: "",
        title: "",
        location: "",
        description: ""
      });
  };
  handleInputChange = inputName => value => {
    const nextValue = value;
    this.setState({
      [inputName]: nextValue
    });
  };
  handleDelete = eventID => {
    const events = this.state.events.filter(e=>e.id!==eventID);
    this.setState({events});
  };
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return(
    <React.Fragment>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="9" className="md-r">
          <h2 className="text -uppercase my-3">Today:</h2>
          <div id="schedule-items">
            {this.state.events.map(event => (
              <Event 
              key={event.id}
              id={event.id}
              time={event.id}
              title={event.title}
              location={event.location}
              description={event.description}
              onDelete={this.handleDelete}
              />

            ))}
          </div>
          <MDBRow className="mb-4">
            <MDBCol xl="3" className="mx-auto text-center">
              <MDBBtn color="info" rounded onClick={this.toggleModal}>
                Add Event
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="3">
          <h1 className="text-uppercase my-3">Schedule</h1>
          <h6 className="my-3">
            It's going to be busy today. You have{" "}
            <b>{this.state.events.length} events</b> today.
          </h6>
          <h1 className="my-3">
              <MDBRow>
                <MDBCol xs="3" className="text-center">
                  <MDBIcon icon="sun" fixed />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol xs="3" className="text-center">
                  <MDBIcon icon="thermometer-three-quarters" fixed/>
                </MDBCol>
                <MDBCol xs="9">23 C</MDBCol>
              </MDBRow>
          </h1>
          <p>
            Don't forget your sunglasses. Today will be dry and Sunny.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <MDBModal isOpen={this.state.modal} toggle={this.toggleModal} fullHeight position="right">
      <MDBModalHeader className="text-center"
      titleClass="w-100 font-weight-bold" toggle={this.toggleModal}>
        Add New Event
      </MDBModalHeader>
      <MDBModalBody>
              <form className="nx-3 grey-text">
                <MDBInput
                name="time"
                label="Time"
                icon="clock"
                hint="12:30"
                group
                type="text"
                getValue={this.handleInputCHANGE("time")}/>
                <MDBInput 
                name="title"
                label="Title"
                icon="edit"
                hint="briefing"
                grouptype="text"
                getValue={this.handleInputCHANGE("title")}/>
                <MDBInput
                name="location"
                label="location (optional)"
                icon="map"
                group
                type="text"
                getValue={this.handleInputChange("location")}/>
                <MDBInput
                name="description"
                label="Description (optional"
                icon="sticky-note"
                group
                type="textarea"
                getValue={this.handleInputChange("description")}/>


              </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
              <MDBBtn
                color="info"
                onClick={() => {
                    this.toggleModal();
                    this.addEvent();
                }}
                >
                    Add
                </MDBBtn>
                </MDBModalFooter>
                </MDBModal>
                </React.Fragment>
    );
    }
}
class Event extends Component {
    render() {
    return(
      <React.Fragment>
        <div className="media mt-1">
          <h3 className="h3-responsive font-weight-bold mr-3">
            {this.props.time}
          </h3>
          <div className="media-body mb-3 mb-1g-3">
            <MDBBadge
            color="danger"
            className="m1-2 float-right"
            onClick={()=>this.props.onDelete(this.props.id)}>
            
            </MDBBadge>
            <h6 className="mt-0 font-weight-bold">{this.props.title}</h6>{"  "}
            <hr className="hr-bold my-2"/>
            {this.props.location && (
            <React.Fragment>
              <p className="font-smaller mb-8">
                <MDBIcon icon="location-arrow"/>{this.props.location}
              </p>
            </React.Fragment>
            )}
        </div>
      </div>
      {this.props.description && (
        <p className="p-2 mb-4 blue-grey lighten-5 blue-grey lighten-5">
          {this.props.description}
        </p>
      )}
      </React.Fragment>
    );
  }
}
export default Agenda;