import BaseLayout from "../components/BaseLayout";
import Slider from "../components/Slider";
import PointList from "../components/PointList";
import slides from "../data/slides";
import points from "../data/points";

const Home = ({auth}) => {
    return (
        <BaseLayout auth={auth} title="خانه">
            <Slider data={slides}/>
            <PointList data={points}/>
        </BaseLayout>
    );
};

export default Home;