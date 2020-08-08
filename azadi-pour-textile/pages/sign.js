import {useState} from 'react';
import Router from "next/router";
import Cookie from 'js-cookie';

import BaseLayout from "../components/BaseLayout";
import SignInUp from "../components/SignInUp";
import azadiPourTextile from "../api/azadiPourTextile";
import '../styles/sign.css';

const Sign = ({auth}) => {
    const [isSignIn, setSignIn] = useState(true);

    const toggleSignIn = () => setSignIn(v => !v);

    if (process.browser && auth.isSignedIn) {
        Router.push('/');
        return (<div/>);
    }
    if (auth.isSignedIn) {
        return (<div/>);
    }

    const onSignInSubmit = (values, {setSubmitting}, setError) => {
        setSubmitting(true);
        azadiPourTextile.post('/users/auth/signin', values).then(({data: {token}}) => {
            Cookie.set('jwtClient', token);
            Router.push('/dashboard');
        }).catch(({response: {data: {message}}}) => {
            setError(message);
            setSubmitting(false);
        });
    };

    const onSignUpSubmit = (values, {setSubmitting}, setError) => {
        setSubmitting(true);
        azadiPourTextile.post('/users/auth/signup', values).then(({data: {token}}) => {
            Cookie.set('jwtClient', token);
            Router.push('/dashboard');
        }).catch(({response: {data: {message}}}) => {
            setError(message);
            setSubmitting(false);
        });
    };

    return (
        <BaseLayout title="ورود/ثبت نام" auth={auth} className="sign-page">
            <div className={`sign-sign-button sign-sign-in-button${isSignIn ? '' : ' active'}`}
                 onClick={toggleSignIn}>
                ورود
            </div>
            <div className={`sign-sign-button sign-sign-up-button${isSignIn ? ' active' : ''}`}
                 onClick={toggleSignIn}>
                ثبت نام
            </div>
            <div className={`sign-sign sign-sign-in${isSignIn ? ' active' : ''}`}>
                <SignInUp isSignIn onSubmit={onSignInSubmit}/>
            </div>
            <div className={`sign-sign sign-sign-up${isSignIn ? '' : ' active'}`}>
                <SignInUp isSignIn={false} onSubmit={onSignUpSubmit}/>
            </div>
            <div className="sign-fill"/>
        </BaseLayout>
    );
};

export default Sign;