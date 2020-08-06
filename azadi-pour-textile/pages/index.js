import BaseLayout from "../components/BaseLayout";
import Slider from "../components/Slider";
import PointList from "../components/PointList";
import HistoryDetail from "../components/HistoryDetail";
import ServiceList from "../components/ServiceList";
import slides from "../data/slides";
import points from "../data/points";
import history from "../data/history";
import services from "../data/services";

const Home = ({auth}) => {
    return (
        <BaseLayout auth={auth} title="خانه">
            <Slider data={slides}/>
            <PointList data={points}/>
            <HistoryDetail {...history}/>
            <ServiceList data={services}/>
        </BaseLayout>
    );
};

export default Home;