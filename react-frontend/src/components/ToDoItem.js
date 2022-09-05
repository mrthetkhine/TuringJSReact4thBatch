import * as React from "react";
import "./ToDoItem.css";
export default class ToDoItem extends React.Component
{
    constructor(props) {
        super(props);
        this.btnRemoveClick = this.btnRemoveClick.bind(this);
    }
    btnRemoveClick()
    {
        console.log('Remove ',this.props.item);
        this.props.deleteItem(this.props.item);
    }
    render() {
    return(
        <div className={"to-do-item-container row"}>
            <div className={"to-do-item col-10"}>
                {this.props.item}

            </div>
            <div  className={"col-4"}>
                <button type={"button"}
                        className={"btn btn-outline-danger"}
                        onClick={this.btnRemoveClick}>Remove</button>
            </div>

        </div>

    );

    }
}