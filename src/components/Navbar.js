import React from 'react';
import Logo from '../theme/assets/Logo.png';
import Menu from '../theme/assets/menu.png';
import Close from '../theme/assets/close.png';

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <nav>
                <div>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <img className={isOpen ? 'menu mx-auto' : 'close mx-auto'} src={isOpen ? Close : Menu} alt=".." />
                    </button>
                    <img src={Logo} alt="..." />
                </div>
                <ul className="mb-0 ps-0">
                    <li>
                        <a href="/" className="active">home</a>
                    </li>
                    <li>
                        <a href="/">products</a>
                    </li>
                    <li>
                        <img src={Logo} alt="..." />
                    </li>
                    <li>
                        <a href="/">blog</a>
                    </li>
                    <li>
                        <a href="/">contact</a>
                    </li>
                </ul>
            </nav>
            {
                isOpen &&
                <div id="sidenav">
                    <ul>
                        <li>
                            <a className="active" href="/">home</a>
                        </li>
                        <li>
                            <a href="/">products</a>
                        </li>
                        <li>
                            <a href="/">blog</a>
                        </li>
                        <li>
                            <a href="/">contact</a>
                        </li>
                    </ul>
                </div>
            }
        </>
    )

}

export default Navbar;