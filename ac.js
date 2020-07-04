import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

export default class Auto1 extends Component {
    state={ value:''};
    render(){
        return(
            <div style={{ textAlign:"left", marginTop:50 }}>
                <h1>React JS Autocomplete</h1>
                <p>Source: <a href="https://jsonworld.com"/>jsonworld.com</p>
                <Autocomplete getItemValue={(item) => item.label}
                items={[
                    { label: 'apple' },
                    { label: 'banana' },
                    { label: 'pear' }
                ]}
                renderItem={(item,isHighlighted) => 
                    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                        {item.label}
                        </div>
                }
                value={this.state.value}
                onchange={(event, value) => this.setState({value})}
                onSelect={value=>this.setState({value})}/>

            </div>
        )
    }
}
