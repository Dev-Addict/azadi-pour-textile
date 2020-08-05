import '../styles/components/PointCard.css';

const PointCard = ({title, description, image}) => {
    return (
        <div className="point-card-container">
            <div className="point-card-image">
                <img src={image}/>
            </div>
            <div className="point-card-title">
                {title}
            </div>
            <div className="point-card-description">
                {description}
            </div>
        </div>
    );
};

export default PointCard;