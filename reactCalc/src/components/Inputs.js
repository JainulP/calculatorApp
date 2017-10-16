import React, {Component} from 'react';
import * as API from '../api/API';

class Inputs extends Component {


        state = {

                message: '',
                input1: '',
                input2: '',
                operation: '',
                result: ''
            };

    componentWillMount(){
        this.setState({
            message: '',
            input1:'',
            input2:'',
            operation:'',
            result:''
        });
    }

    handleAddition(data) {
        console.log(data);
        // this.setState({
        //     operation: data
        // });
        API.doAddition(data)
            .then((status) => {
                //JSON.parse(status._bodyText);
                console.log(status);
                var obj = status["result"];
                console.log(obj);
                //if (status === 201) {
                console.log("453543");
                this.setState({
                    result:obj
                });

            });
    };
    handleSubtraction(data) {
        console.log(data);
        // this.setState({
        //     operation: data
        // });
        API.doSubtraction(data)
            .then((status) => {
                //JSON.parse(status._bodyText);
                console.log(status);
                var obj = status["result"];
                console.log(obj);
                //if (status === 201) {
                console.log("453543");
                this.setState({
                    result:obj
                });


            });
    };
    handleMultiplication(data) {
        console.log(data);
        // this.setState({
        //     operation: data
        // });
        API.doMultiplication(data)
            .then((status) => {
                //JSON.parse(status._bodyText);
                console.log(status);
                var obj = status["result"];
                console.log(obj);
                //if (status === 201) {
                console.log("453543");
                this.setState({
                    result:obj
                });


            });
    };
    handleDivision(data) {
        console.log(data);
        // this.setState({
        //     operation: data
        // });
        API.doDivision(data)
            .then((status) => {
                //JSON.parse(status._bodyText);
                console.log(status);
                var obj = status["result"];
                console.log(obj);
                //if (status === 201) {
                console.log("453543");
                this.setState({
                    result:obj
                });

            });
    };



    render(){
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <form>
                        <div className="form-group">
                            <h1>Calculator</h1>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="input1"
                                placeholder="Enter Input1"
                                value={this.state.input1}
                                onChange={(event) => {
                                    this.setState({
                                        input1: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="input2"
                                placeholder="Enter Input2"
                                value={this.state.input2}
                                onChange={(event) => {
                                    this.setState({
                                        input2: event.target.value
                                    });
                                }}
                            />
                        </div>


                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                type="button"
                                name="+"
                                onClick={(event) => {
                                    this.setState({
                                        operation: '+'
                                    }, ()=> this.handleAddition(this.state));
                                }}
                            >
                                Add
                            </button>
                            <button
                                className="btn btn-primary"
                                type="button"
                                name="-"
                                onClick={(event) => {
                                    this.setState({
                                        operation: '-'
                                    }, ()=> this.handleSubtraction(this.state));
                                }}
                            >
                                Subtract
                            </button>
                            <button
                                className="btn btn-primary"
                                type="button"
                                name="*"
                                onClick={(event) => {
                                    this.setState({
                                        operation: '*'
                                    }, ()=> this.handleMultiplication(this.state));
                                }}
                            >
                                Multiply
                            </button>
                            <button
                                className="btn btn-primary"
                                type="button"
                                name="/"
                                onClick={(event) => {
                                    this.setState({
                                        operation: '/'
                                    }, ()=> this.handleDivision(this.state));
                                }}
                            >
                                Divide
                            </button>
                        </div>


                        <div className="form-group">
                            <label
                                className="form-control"
                            >
                                Result : {this.state.result}
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Inputs;