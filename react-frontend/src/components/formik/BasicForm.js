import React from 'react';
import { Formik } from 'formik';
export default class BasicForm extends React.Component
{
    render() {
        return (<div className={"container"}>
            <Formik
                initialValues={{ email: 'hello@gmail.com', password: '' }}
                validate={values => {
                    console.log("Validate");
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('Values ',values);
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit} className={"row"}>
                        <div className={"mb-3 input-group"}>
                            <label htmlFor="email" className={"form-label col-2"}>Email</label>
                            <input  className={"form-control col-4"}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        <div className={"mb-3 input-group"}>
                            <label htmlFor="password" className={"form-label col-2"}>Password</label>
                            <input  className={"form-control col-4"}
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                        </div>
                        <div className={"mb-3 input-group"}>
                            <label className={"form-label col-2"}></label>
                            <button type="submit" disabled={isSubmitting} className={"btn btn-primary col-4"}>
                                Submit
                            </button>
                        </div>

                    </form>
                )}
            </Formik>
        </div>);
    }
}