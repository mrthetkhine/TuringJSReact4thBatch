import React from 'react';
export default class FormDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender: 'Male'
        };

        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    /*
    handleGenderChange(event)
    {
        console.log('Value ',event);
        this.setState({gender: event.target.value});
    }
    handleChange(event) {
        console.log('Value ',event);
        this.setState({value: event.target.value});
    }

     */

    handleSubmit(event) {
        console.log('A name was submitted: ' , this.state);
        event.preventDefault();
    }
    render()
    {
        return(<div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text"
                               name="name" className={"form-control"}
                               value={this.state.value} onChange={this.handleInputChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Gender:
                        <select value={this.state.gender}
                                name={"gender"}
                                onChange={this.handleInputChange}>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </label>
                </div>

                <input type="submit" value="Submit" className={"btn btn-primary"} />
            </form>
        </div>);
    }

}