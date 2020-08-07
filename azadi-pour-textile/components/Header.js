import {useState} from 'react';
import Link from "next/link";

import '../styles/components/Header.css';

const Header = ({auth: {isSignedIn}}) => {
    const [isOpen, setOpen] = useState(false);

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
                    <Link href="/cotact">
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
                            <Link href="/signout">
                                <a>
                                    <li>خروج</li>
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