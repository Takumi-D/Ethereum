import "./FooterMobile.scss";
import Logo from "../../icons/Logo/Logo.tsx";

function FooterMobile(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">

                    <div className="footer-top-column">
                        <div className="wrapper-footer-logo">
                            <div className="wrapper-footer-icon-logo">
                                <Logo color="#ffffff" clazz="footer-logo"/>
                            </div>
                            <a href="/" className="footer-text-logo">DiveSea</a>
                        </div>
                    </div>

                    <div className="footer-nav-bar">
                        <a href="" className="footer-nav-bar__item">Privacy Policy</a>
                        <a href="" className="footer-nav-bar__item">Term & Conditions</a>
                        <a href="" className="footer-nav-bar__item">About Us</a>
                        <a href="" className="footer-nav-bar__item">Contact</a>
                    </div>

                    <div className="footer-border"></div>

                    <div className="footer-text-date">© 2023 DiveSea All Rights Reserved.</div>

                </div>
            </div>
        </footer>
    )
}

export default FooterMobile;