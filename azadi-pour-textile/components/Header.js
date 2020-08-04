const Header = ({auth: {isSignedIn}}) => {
    return (
        <header>
            <nav>
                <div className="header-logo">
                    <h4>پارچه مبلی آزادی پور</h4>
                </div>
                <ul>
                    <li>خانه</li>
                </ul>
                <ul>
                    <li>درباره ما</li>
                </ul>
                <ul>
                    <li>تماس با ما</li>
                </ul>
                <ul>
                    <li>فروشگاه</li>
                </ul>
                <ul>
                    <li>ورود/ثبت نام</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;