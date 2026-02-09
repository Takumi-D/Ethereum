import HeaderDesktop from "../Header/HeaderDesktop/HeaderDesktop.tsx";
import HeaderMobile from "../Header/Header-Mobile/Header-Mobile.tsx";
import FooterDesktop from "../Footer/FooterDesktop/FooterDesktop.tsx";
import FooterMobile from "../Footer/FooterMobile/FooterMobile.tsx";
import Scroll from "../Scroll/Scroll.tsx";

import './App.css'

function useCalculatesWidthScreen(): boolean {
    return window.innerWidth <= 720;
}

function App() {
    const widthScreen = useCalculatesWidthScreen();

    return (
    <>
        { !widthScreen ? <HeaderDesktop/> : <HeaderMobile/> }
        <Scroll/>
        { !widthScreen ? <FooterDesktop/> : <FooterMobile/> }
    </>
  )
}

export default App
