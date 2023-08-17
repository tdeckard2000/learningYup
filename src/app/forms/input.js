import react from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

const TestInputForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div style={{display: 'flex', flexDirection: 'column', border: '1px solid black', padding: '24px 48px 48px', margin: '24px', borderRadius: '8px'}}>
                <label style={label} htmlFor="firstName">First Name</label>
                <input style={input} name="firstName" value={props.values.firstName} onChange={props.handleChange} type="text" />
                {props.touched.firstName && <div style={error}>{props.errors.firstName}</div>}

                <label style={label} htmlFor="email">Email</label>
                <input style={input} name="email" value={props.values.email} onChange={props.handleChange} type="text" />
                {props.touched.email && <div style={error}>{props.errors.email}</div>}

                <label style={label} htmlFor="password">Password</label>
                <input style={input} name="password" value={props.values.password} onChange={props.handleChange} type="text" />
                {props.touched.password && <div style={error}>{props.errors.password}</div>}
                
                <button style={button} type="submit">Submit</button>
            </div>
        </form>
    )
}

const formSchema = Yup.object().shape({
    firstName: Yup.string().max(10, "No more than 10 characters.").required("Name is required."),
    email: Yup.string().email(),
    password: Yup.string().required("Password is required.")
})

export const EnhancedTestInputForm = withFormik({
    mapPropsToValues: () => ({
        firstName: '',
        email: '',
        password: '',
    }),
    handleSubmit: (values) => {
        console.log(values);
    },
    validationSchema: formSchema
})(TestInputForm)

//Styles

const button = {
    marginTop: '16px',
    height: '24px',
    width: '200px'
}

const error = {
    color: 'red'
}

const input = {
    lineHeight: '20px',
    width: '200px'
}

const label = {
    marginTop: '16px'
}