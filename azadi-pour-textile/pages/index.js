import BaseLayout from "../components/BaseLayout";

const Home = ({auth}) => {
    return (
        <BaseLayout auth={auth} title="خانه">
            <div>Home</div>
        </BaseLayout>
    );
};

export default Home;