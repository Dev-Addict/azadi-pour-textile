import {useState} from 'react';
import {Formik, Form, Field} from 'formik';

import Input from "../components/Input";
import '../styles/components/signIn.css';

const initialValues = {
    email: '',
    password: ''
};

const SignIn = ({onSubmit}) => {
    const [error, setError] = useState('');

    const validator = ({password, email}) => {
        const errors = {};

        if (password === '') {
            errors.passowrd = 'رمز عبور لازم هست.';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/.test(password)) {
            errors.password = 'رمز عبور معتبر نیست.';
        }

        if (email === '') {
            errors.passowrd = 'پست الکترونیک لازم هست.';
        } else if (!/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(email)) {
            errors.email = 'پست الکترونیک معتبر نیست.';
        }

        return errors;
    };

    return (
        <Formik initialValues={initialValues} validate={validator} onSubmit={onSubmit}>
            {({
                  isSubmitting,
                  handleSubmit
              }) => (
                <Form onSubmit={handleSubmit} className="sign-in-container">
                    <img src="media/profile-avatar.svg" className="sign-in-avatar"/>
                    <Field type="text" name="email" component={Input} label="پست الکترونیک" icon="envelope"/>
                    <Field type="password" name="password" component={Input} label="رمز عبور" icon="lock"/>
                    <div className="error">{error}</div>
                    <button type="submit" disabled={isSubmitting} className="sign-in-submit">
                        ورود
                    </button>
                    {error}
                </Form>
            )}
        </Formik>
    );
};

export default SignIn;