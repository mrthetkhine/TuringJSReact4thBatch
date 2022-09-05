import * as React from "react";
import {Field, Form, Formik,ErrorMessage} from 'formik';
import * as Yup from 'yup';
const ToDoItemSchema = Yup.object().shape({
    todoItem: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Item Required')
});
export default class ToDoInput extends React.Component
{
    render() {
        return(
            <Formik className={"row"}
                    initialValues={{
                        todoItem:'',
                    }}
                    validationSchema={ToDoItemSchema}
                    onSubmit={this.props.btnSubmitClick()}>
                <Form className={"row"}>
                    <div className={"mb-3 input-group"}>
                        <label htmlFor="todoItem" className={"form-label col-2"}>ToDo</label>
                        <Field id="todoItem" name="todoItem"
                               className={"form-control col-4"}/>

                    </div>

                    <div className={"mb-3 input-group"}>
                        <ErrorMessage name="todoItem" component="span" className={"alert alert-danger col-4 offset-md-2"}/>
                    </div>
                    <div className={"mb-3 input-group"}>
                        <div className={"col-2"}></div>
                        <button type="submit" className={"btn btn-primary col-4"}>Add</button>
                    </div>
                </Form>
            </Formik>
        );
    }
}