import React, {Component} from 'react';


class Radiobtn extends Component{
    constructor(){
        super();
        this.state={cuntry:''};
        this.onRadioChange=this.onRadioChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onRadioChange=(e)=>{
        this.setState({
            country: e.target.value
        });
    }

    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return (
            <div className="radiobtn">
                <form onSubmit={this.onSubmit}>
                 <strong>Select Country </strong> 
                 <ul>
                    <li>
                        <label>
                            <input type="radio" value="India" checked={this.state.country==="India"} onChange={this.onRadioChange}/>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" value="Australia" checked={this.state.country==="Australia"} onChange={this.onRadioChange}/>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" value="England" checked={this.state.country==="England"} onChange={this.onRadioChange}/>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" value="Spain" checked={this.state.country==="Spain"} onChange={this.onRadioChange}/>
                        </label>
                    </li>
                </ul> 
                    <button type="submit">Choose Country</button>
                </form>
            </div>
        
        )
    }
}
export default Radiobtn;