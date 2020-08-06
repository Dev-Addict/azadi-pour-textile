import BaseLayout from "../components/BaseLayout";
import Slider from "../components/Slider";
import PointList from "../components/PointList";
import HistoryDetail from "../components/HistoryDetail";
import ServiceList from "../components/ServiceList";
import ImageList from "../components/ImageList";
import slides from "../data/slides";
import points from "../data/points";
import history from "../data/history";
import services from "../data/services";
import images from "../data/images";

const Home = ({auth}) => {
    return (
        <BaseLayout auth={auth} title="خانه">
            <Slider data={slides}/>
            <PointList data={points} title="title"/>
            <HistoryDetail {...history}/>
            <ServiceList data={services} title="title"/>
            <ImageList data={images} title="title"
                       description="description description description description description description description"/>
        </BaseLayout>
    );
};

export default Home;