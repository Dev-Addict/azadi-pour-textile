import {useState, createRef, useEffect} from 'react';

import '../styles/components/Input.css';

const Input = ({type, label, details: {title, description}, field, icon, form: {touched, errors}, ...props}) => {
    const [isFocus, setFocus] = useState(false);

    let iconRef = {};

    useEffect(() => {
        iconRef = createRef();
    }, []);

    const toggleFocus = () => setFocus(v => !v);

    return (
        <div className="input-container">
            <div className={`input-icon${isFocus ? ' focus' : ''}`}>
                <i className={`${icon} icon`} ref={iconRef}/>
            </div>
            <div className={`input-input${isFocus ? ' focus' : ''}${field.value ? ' filled' : ''}`}>
                <h5>{label}</h5>
                <input type={type} {...field} {...props} onFocus={toggleFocus} onBlur={toggleFocus}/>
            </div>
            <div className={`input-details${isFocus ? ' focus' : ''}`} style={{
                top: (iconRef.current || {}).offsetTop + (iconRef.current || {}).clientTop,
                left: (iconRef.current || {}).offsetLeft + (iconRef.current || {}).clientLeft
            }}>
                <div className="input-details-title">{title}</div>
                <div className="input-details-description">{description}</div>
            </div>
            {
                touched[field.name] && errors[field.name] ?
                    <div className="input-error">{errors[field.name]}</div> :
                    <div className="input-error" style={{opacity: 0}}>A</div>
            }
        </div>
    );
};

export default Input;