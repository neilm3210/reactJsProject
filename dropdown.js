import React, { Component } from 'react';
import Select from 'react-select';

const cityList = [
    { label: "New Delhi", vale: 1},
    { label: "Gurgoan", value: 2},
    { label: "Hyderabad", value: 3},
    { label: "Bangalore", value: 4},
    { label: "Pune", value: 5},
    { label: "Kolkata", value: 6},
    { label: "Mumbai", value:7},
];

export default class Second extends Component {
    render(){
        return(
            <div className="container">
                <div className="col-md-4 col-md-offset-4">
                    <p>Please Select the CIties where you can work :- </p>
                     <Select placeholder="Select city..." options={ cityList } isMulti/>
                </div>
            </div>
        );
    }
}