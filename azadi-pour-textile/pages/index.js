import BaseLayout from "../components/BaseLayout";
import Slider from "../components/Slider";
import PointList from "../components/PointList";
import HistoryDetail from "../components/HistoryDetail";
import ServiceCard from "../components/ServiceCard";
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
            <ServiceCard {...services[0]}/>
            <ServiceCard {...services[1]}/>
            <ServiceCard {...services[2]}/>
            <ServiceCard {...services[3]}/>
            <ServiceCard {...services[4]}/>
            <ServiceCard {...services[5]}/>
        </BaseLayout>
    );
};

export default Home;