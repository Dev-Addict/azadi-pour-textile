import BaseLayout from "../components/BaseLayout";
import SignIn from "../components/SignIn";
import '../styles/sign.css';

const Sign = ({auth}) => {
    if (process.browser && auth.isSignedIn) {
        Router.push('/');
        return (<div/>);
    }
    if (auth.isSignedIn) {
        return (<div/>);
    }

    return (
        <BaseLayout title="ورود/ثبت نام" auth={auth} className="sign-page">
            <SignIn/>
        </BaseLayout>
    );
};

export default Sign;