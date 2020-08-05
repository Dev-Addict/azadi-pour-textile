import {useState} from 'react';

import '../styles/components/Slider.css';

const Slider = ({data = []}) => {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);

    return (
        <div className="slider-container">
            <div className="slider-content" style={index % 2 === 0 ? {
                backgroundImage: `url(${data[index % data.length].image})`,
                left: 0,
                zIndex: 10
            } : {
                backgroundImage: `url(${data[prevIndex % data.length].image})`,
                left: '-100%',
                zIndex: 5
            }}>
                <div className="slider-content-text">
                    <div className="slider-title">
                        {
                            index % 2 === 0 ?
                                data[index % data.length].title :
                                data[prevIndex % data.length].title
                        }
                    </div>
                    <div className="slider-description">
                        {
                            index % 2 === 0 ?
                                data[index % data.length].description :
                                data[prevIndex % data.length].description
                        }
                    </div>
                </div>
            </div>
            <div className="slider-content" style={index % 2 === 1 ? {
                backgroundImage: `url(${data[index % data.length].image})`,
                left: 0,
                zIndex: 10
            } : {
                backgroundImage: `url(${data[prevIndex % data.length].image})`,
                left: '100%',
                zIndex: 5
            }}>
                <div className="slider-content-text">
                    <div className="slider-title">
                        {
                            index % 2 === 1 ?
                                data[index % data.length].title :
                                data[prevIndex % data.length].title
                        }
                    </div>
                    <div className="slider-description">
                        {
                            index % 2 === 1 ?
                                data[index % data.length].description :
                                data[prevIndex % data.length].description
                        }
                    </div>
                </div>
            </div>
            <div className="slider-control-button slider-next" onClick={() => {
                setPrevIndex(index);
                setIndex(v => v + 1);
            }}>
                <i className="arrow alternate circle right outline icon"/>
            </div>
            <div className="slider-control-button slider-prev" onClick={() => {
                setPrevIndex(index);
                setIndex(v => v + data.length - 1);
            }}>
                <i className="arrow alternate circle left outline icon"/>
            </div>
        </div>
    );
};

export default Slider;