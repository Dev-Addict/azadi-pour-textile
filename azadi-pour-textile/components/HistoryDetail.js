import '../styles/components/HistoryDetail.css';

const HistoryDetail = ({title, description, image}) => {
    return (
        <div className="history-detail-container" style={{backgroundImage: `url(${image})`}}>
            <div className="history-detail-image-filter">
                <div className="history-detail-title">{title}</div>
                <div className="history-detail-description">{description}</div>
            </div>
        </div>
    );
};

export default HistoryDetail;