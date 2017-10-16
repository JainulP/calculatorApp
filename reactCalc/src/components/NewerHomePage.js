import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
// import * as API from '../api/API';
// import Login from "./Login";
import Message from "./Message";
// import Welcome from "./Welcome";
import Inputs from "./Inputs";

class NewerHomePage extends Component {

    state = {
        message: '',
        input1:'',
        input2:'',
        operation:'',
        result:''
    };
    //
    // handleCalculation = (data) => {
    //     API.doCalculate(data)
    //         .then((status) => {
    //
    //         console.log("here2222");
    //
    //             // if (status === 201) {
    //                 this.setState({
    //                     message: "Welcome to my App..!!",
    //                     input1: data.input1,
    //                     input2: data.input2,
    //                     operation: data.operation,
    //                     result:''
    //                 });
    //             console.log(data.input1);
    //                 //this.props.history.push("/welcome");
    //             // } else if (status === 401) {
    //             //     this.setState({
    //             //         message: "Wrong Inputs!!"
    //             //     });
    //             // }
    //         });
    // };

    render() {
        return (
            <div className="container-fluid">


                <Route exact path="/Calculator" render={() => (
                    <div>
                        <Inputs handleCalculation={this.handleCalculation}/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>

            </div>
        );
    }
}

export default withRouter(NewerHomePage);