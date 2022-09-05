import * as React from "react";
import {Field, Form, Formik,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import ToDoInput from "./ToDoInput";
import ToDoItem from "./ToDoItem";
import * as PropTypes from "prop-types";

class ToDoItems extends React.Component {
    render() {
        return <>
            {
                this.props.items.map(this.props.callbackfn)
            }
        </>;
    }
}

ToDoItems.propTypes = {
    items: PropTypes.any,
    callbackfn: PropTypes.func
};
export default class ToDoList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            items : ['One','Two']
        };
        this.deleteItem = this.deleteItem.bind(this);
    }
    addToDo(item)
    {
        this.setState({
            items: this.state.items.concat(item)
        })
    }
    btnSubmitClick() {
        console.log("This ",this);
        return (values) => {
            console.log('Form value ', values);
            this.addToDo(values.todoItem);
            values.todoItem = '';
        };
    }
    deleteItem(item)
    {
        console.log('Delete item ',item);
        let newItems = this.state.items.filter(ele=> item != ele );
        this.setState({
            items: [...newItems]
        })
    }
    render() {
        return (<div>
            <ToDoInput btnSubmitClick={this.btnSubmitClick.bind(this)}/>
            <ToDoItems items={this.state.items} callbackfn={(item, index) =>
                <ToDoItem item={item} key={index} deleteItem={this.deleteItem}/>}/>
        </div>);
    }

}