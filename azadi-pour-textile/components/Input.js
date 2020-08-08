import {useState} from 'react';

import '../styles/components/Input.css';

const Input = ({type, label, field, icon, form: {touched, errors}, ...props}) => {
    const [isFocus, setFocus] = useState(false);

    const toggleFocus = () => setFocus(v => !v);

    return (
        <div className="input-container">
            <div className={`input-icon${isFocus ? ' focus' : ''}`}>
                <i className={`${icon} icon`}/>
            </div>
            <div className={`input-input${isFocus ? ' focus' : ''}${field.value ? ' filled' : ''}`}>
                <h5>{label}</h5>
                <input type={type} {...field} {...props} onFocus={toggleFocus} onBlur={toggleFocus}/>
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