import '../styles/components/ServiceCard.css';

const ServiceCard = ({image, title, description}) => {
    return (
        <div className="service-card-container">
            <div className="service-card-image">
                <img src={image}/>
            </div>
            <dic className="service-card-title">{title}</dic>
            <div className="service-card-description">{description}</div>
        </div>
    );
};

export default ServiceCard;