import React, {Component} from 'react';
import Second from './dropdown/dropdown';
import Auto1 from './ac/ac';
import Radiobtn from "./radiobtn";

class custommodal extends Component {
    render() {
        return (
            <div>
                <pre>
                    <h3>Custom Drop Down and Auto Complete</h3>

                    <Auto1></Auto1>

                    <hr></hr>

                    <Second></Second>

                    <Radiobtn></Radiobtn>
                </pre>
            </div>
        );
    }
}

export default custommodal;