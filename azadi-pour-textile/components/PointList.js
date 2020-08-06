import PointCard from "./PointCard";
import '../styles/components/PointList.css';

const PointList = ({data, title}) => {
    return (
        <div className="point-list-container">
            <div className="point-list-cover">
                <div className="point-list-title">{title}</div>
                {data.map(point => <PointCard {...point} key={point.title}/>)}
            </div>
        </div>
    );
};

export default PointList;