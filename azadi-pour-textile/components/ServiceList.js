import ServiceCard from "./ServiceCard";
import '../styles/components/ServiceList.css';

const ServiceList = ({data}) => {
    return (
        <div className="service-list-container">
            {data.map(service => <ServiceCard {...service} key={service.title}/>)}
        </div>
    );
};

export default ServiceList;