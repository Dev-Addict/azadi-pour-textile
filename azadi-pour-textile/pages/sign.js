import {useState} from 'react';

import BaseLayout from "../components/BaseLayout";
import SignInUp from "../components/SignInUp";
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
                <SignInUp isSignIn/>
            </div>
            <div className={`sign-sign sign-sign-up${isSignIn ? '' : ' active'}`}>
                <SignInUp isSignIn={false}/>
            </div>
            <div className="sign-fill"/>
        </BaseLayout>
    );
};

export default Sign;