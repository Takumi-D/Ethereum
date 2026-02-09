import { useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import "./Header-Mobile.scss";
import Logo from "../../icons/Logo/Logo.tsx";

function HeaderMobile(){
    const [show, setShow] = useState(false);
    const headerEl = useRef<HTMLDivElement>(null);

    function menuShow(settings: boolean){
        setShow(settings);
        document.body.style.overflow = "hidden";
        headerEl.current?.classList.add("header-border-bottom");
    }

    function hideMenu(settings: boolean){
        setShow(settings);
        document.body.style.overflow = "initial";
        headerEl.current?.classList.remove("header-border-bottom");
    }

    return (
        <header className="container">
            <div ref={headerEl} className="header">
                <div className="wrapper-header-logo">
                    <a className="link-header-logo" href="/">
                        <Logo color="#141416" clazz="header-logo" />
                    </a>
                    <a href="/" className="text-logo">DiveSea</a>
                </div>
                <div onClick={() => menuShow(true)} className={`${show ? 'show ' : " "} header-wrapper-menu-icon`}>
                    <img className="icon-menu" src="./icon/menu.svg" alt="menu"/>
                </div>

                <div onClick={() => hideMenu(false)} className={`${show ? '' : "show "} header-wrapper-menu-icon`}>
                    <img className="icon-menu" src="./icon/cross.svg" alt="cross"/>
                </div>

                <AnimatePresence>
                    {show && (
                        <motion.div
                            className="mobile-menu"
                            initial={{y: "-100%", opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: "-100%", opacity: 0}}
                            transition={{duration: 0.4, ease: "easeInOut"}}
                        >
                            <div className="wrapper-nab-bar">
                                <div className="nav-bar">
                                    <a href="" className="nav-bar__item">Discover</a>
                                    <a href="" className="nav-bar__item">creators</a>
                                    <a href="" className="nav-bar__item">Sell</a>
                                    <a href="" className="nav-bar__item">stats</a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default HeaderMobile;