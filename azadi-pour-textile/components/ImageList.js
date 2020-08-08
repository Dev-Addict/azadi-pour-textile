import '../styles/components/ImageList.css';

const ImageList = ({data, title, description}) => {
    return (
        <div className="image-list-container">
            <div className="image-list-content">
                <div className="image-list-title">{title}</div>
                <div className="image-list-description">{description}</div>
            </div>
            {data.map(({image}) => <div className="image-list-image" key={image}
                                        style={{backgroundImage: `url(${image})`}}/>)}
        </div>
    );
};

export default ImageList;