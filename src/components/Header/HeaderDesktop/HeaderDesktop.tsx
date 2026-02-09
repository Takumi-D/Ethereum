import "./HeaderDesktop.scss";
import Logo from "../../icons/Logo/Logo.tsx";
import { useEffect, useRef } from "react";
import {AnimatePresence, motion} from "framer-motion";

function HeaderDesktop() {
    const headerElement = useRef<HTMLDivElement>(null);
    const nullHeaderElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function scrollTracking() {
            if(window.scrollY >= 100) {
                headerElement.current?.classList.add("fixed-header");
                nullHeaderElement.current?.setAttribute("style", "display: block;");
            } else {
                headerElement.current?.classList.remove("fixed-header");
                nullHeaderElement.current?.setAttribute("style", "display: none;");
            }
        }

        nullHeaderElement.current?.setAttribute("style", "display: none;");
        window.addEventListener("scroll", scrollTracking);

        return () => {
            window.removeEventListener("scroll", scrollTracking);
        }
    }, [])

    return (
        <header className="container">
            <AnimatePresence>
                <motion.div
                    className="header"
                    initial={{y: "-100%", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: "-100%", opacity: 0}}
                    transition={{duration: 0.6, ease: "easeInOut"}}
                    ref={headerElement}
                >
                    <div className="wrapper-nab-bar">
                        <a className="link-header-logo" href="/">
                            <Logo color="#141416" clazz="header-logo"/>
                        </a>
                        <div className="nav-bar">
                            <a href="" className="nav-bar__item">Discover</a>
                            <a href="" className="nav-bar__item">creators</a>
                            <a href="" className="nav-bar__item">Sell</a>
                            <a href="" className="nav-bar__item">stats</a>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div ref={nullHeaderElement} className="nullHeader"></div>
        </header>
    )
}

export default HeaderDesktop