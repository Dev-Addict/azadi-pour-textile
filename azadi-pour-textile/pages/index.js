import BaseLayout from "../components/BaseLayout";
import Slider from "../components/Slider";
import PointList from "../components/PointList";
import HistoryDetail from "../components/HistoryDetail";
import slides from "../data/slides";
import points from "../data/points";
import history from "../data/history";

const Home = ({auth}) => {
    return (
        <BaseLayout auth={auth} title="خانه">
            <Slider data={slides}/>
            <PointList data={points}/>
            <HistoryDetail {...history}/>
        </BaseLayout>
    );
};

export default Home;