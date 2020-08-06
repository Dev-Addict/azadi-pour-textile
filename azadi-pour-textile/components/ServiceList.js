import ServiceCard from "./ServiceCard";
import '../styles/components/ServiceList.css';

const ServiceList = ({data, title}) => {
    return (
        <div className="service-list-container">
            <div className="service-list-cover">
                <div className="service-list-title">{title}</div>
                {data.map(service => <ServiceCard {...service} key={service.title}/>)}
            </div>
        </div>
    );
};

export default ServiceList;