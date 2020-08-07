import '../styles/components/Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-telephone footer-detail">
                    <a href="tel:+982188025680">
                        <i className="phone icon"/> (021) 88025680
                    </a>
                </div>
                <div className="footer-cellphone footer-detail">
                    <a href="tel:+989906964305">
                        <i className="mobile alternate icon"/> 0990 696 4305
                    </a>
                </div>
                <div className="footer-instagram footer-detail">
                    <a href="https:\\instagram.com">
                        <i className="instagram icon"/> azadi
                    </a>
                </div>
                <div className="footer-telegram footer-detail">
                    <a href="https:\\telegram.org">
                        <i className="telegram plane icon"/> azadi
                    </a>
                </div>
                <div className="footer-email footer-detail">
                    <a href="mailto:aria.azadi.pour@protonmail.com">
                        <i className="envelope outline icon"/> aria.azadi.pour@protonmail.com
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                Designed by <a href="https://github.com/WolfMAN-DEV">WolfMAN</a> | <i className="copyright outline icon"/> 2020
            </div>
        </div>
    );
};

export default Footer;