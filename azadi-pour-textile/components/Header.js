import {useState, useRef, useEffect} from 'react';
import Link from "next/link";

import '../styles/components/Header.css';

const Header = ({auth: {isSignedIn}}) => {
    const [isOpen, setOpen] = useState(false);
    const [isReRendered, setReRendered] = useState(false);

    const avatarRef = useRef(null);

    useEffect(() => {
        setReRendered(true);
    }, []);

    return (
        <header>
            <nav>
                <div className="header-logo">
                    <Link href="/">
                        <a>
                            <h4>پارچه مبلی آزادی پور کویر</h4>
                        </a>
                    </Link>
                </div>
                <ul className={isOpen ? 'active' : ''}>
                    <Link href="/">
                        <a>
                            <li>خانه</li>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a>
                            <li>تماس با ما</li>
                        </a>
                    </Link>
                    <Link href="/shop">
                        <a>
                            <li>فروشگاه</li>
                        </a>
                    </Link>
                    {
                        !isSignedIn ?
                            <Link href="/sign">
                                <a>
                                    <li>ورود/ثبت نام</li>
                                </a>
                            </Link> :
                            <Link href="/dashboard">
                                <a>
                                    <li>
                                        <img src="/media/profile-avatar.svg" className="header-avatar" ref={avatarRef}/>
                                        <div className="header-quick-access" style={{
                                            top: (((avatarRef || {}).current || {}).offsetTop + ((avatarRef || {}).current || {}).clientTop) + 30 || undefined,
                                            left: (((avatarRef || {}).current || {}).offsetLeft + ((avatarRef || {}).current || {}).clientLeft) || undefined
                                        }}>
                                            <div className="header-quick-access-item">
                                                <Link href="/dashboard">
                                                    <a>
                                                        حساب
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="header-quick-access-item">
                                                <Link href="/signout">
                                                    <a>
                                                        خروج
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </a>
                            </Link>
                    }
                </ul>
                <i className="bars icon" onClick={() => setOpen(v => !v)}/>
            </nav>
        </header>
    );
};

export default Header;