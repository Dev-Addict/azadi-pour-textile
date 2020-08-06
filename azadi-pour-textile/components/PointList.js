import PointCard from "./PointCard";
import '../styles/components/PointList.css';

const PointList = ({data}) => {
    return (
        <div className="point-list-container">
            {data.map(point => <PointCard {...point} key={point.title}/>)}
        </div>
    );
};

export default PointList;