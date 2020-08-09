import {useState} from 'react';
import {Formik, Form, Field} from 'formik';

import BaseLayout from "../components/BaseLayout";
import Input from "../components/Input";
import parseError from "../utils/parseError";
import azadiPourTextile from "../api/azadiPourTextile";
import '../styles/contact.css';

const initialValues = {
    name: '',
    email: '',
    title: '',
    description: ''
};

const Contact = ({auth}) => {
    const [error, setError] = useState('');

    const validator = ({name, email, title, description}) => {
        const errors = {};

        if (!name) {
            errors.name = 'نام اجباری هست.';
        } else if (!/^([\u0600-\u06FF]{3,}\s?)+$/.test(name)) {
            errors.name = 'نام نا معتبر است.';
        }

        if (!email) {
            errors.email = 'پست الکترونیک اجباری هست.';
        } else if (!/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(email)) {
            errors.email = 'پست الکترونیک نا معتبر است.';
        }

        if (!title) {
            errors.title = 'عنوان اجباری هست.';
        } else if (!/^([\u0600-\u06FF]+\s?)+$/.test(title) || title.length > 60 || title.length < 10) {
            errors.title = 'عنوان نا معتبر است.';
        }

        if (!description) {
            errors.description = 'شرح اجباری هست.';
        } else if (description.length > 600 || description.length < 50) {
            errors.description = 'شرح نا معتبر است.';
        }

        return errors;
    };

    const onSubmit = (values, {setSubmitting, resetForm}, setError) => {
        setSubmitting(true);
        azadiPourTextile.post('/anonymoustickets', values).then(() => {
            resetForm();
            alert('پیام شما فرسناده شد.')
        }).catch(({response: {data: {message}}}) => {
            setError(message);
            setSubmitting(false);
        });
    };

    return (
        <BaseLayout auth={auth} title="تماس یا ما">
            <Formik initialValues={initialValues} onSubmit={(...args) => onSubmit(...args, setError)} validate={validator}>
                {({
                      isSubmitting,
                      handleSubmit
                  }) => (
                    <Form onSubmit={handleSubmit} className="contact-form">
                        <div className="contact-title">ارسال پیام</div>
                        <Field type="text" name="name" label="نام" component={Input} icon="address card" details={{
                            title: 'نام',
                            description: 'نام و نام خانوادگی خود را به زبان فارسی وارد کنید.'
                        }}/>
                        <Field type="email" name="email" label="پست الکترونیک" component={Input} icon="envelope" details={{
                            title: 'پست الکترونیک',
                            description: 'پست الکترونیک معتبر خود را وارد کنید وارد کنید.'
                        }}/>
                        <Field type="text" name="title" label="عنوان" component={Input} icon="bookmark" details={{
                            title: 'عنوان',
                            description: 'عنوان خود را به زبان فارسی وارد کنید.(حداکثر 60 کاراکتر حداقل 10 کاراکتر)'
                        }}/>
                        <Field type="text" name="description" label="شرح" component={Input} icon="file" details={{
                            title: 'شرح',
                            description: 'شرح خود را وارد کنید.(حداکثر 600 کاراکتر حداقل 50 کاراکتر)'
                        }}/>
                        <div className="contact-error" style={{...(error ? {} : {opacity: 0})}}>
                            {error ? parseError(error) : 'A'}
                        </div>
                        <button type="submit" disabled={isSubmitting} className="contact-submit">ارسال</button>
                    </Form>
                )}
            </Formik>
        </BaseLayout>
    );
};

export default Contact;