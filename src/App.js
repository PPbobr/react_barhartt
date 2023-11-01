import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import StickyHeader from './components/StickyHeader';
import Carousel from "./components/Carousel";
import PopularKross from "./components/Popular_kross";
import Departure from "./components/Departure";
import Return from "./components/Return"
import FooterInfo from "./components/Footer_info"
import Footer from "./components/Footer"

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container light-theme">
                    <StickyHeader>
                        <Header />
                    </StickyHeader>
                    <Nav />
                    <div className="main_new reveal">
                        <h1 className="main_h1">каталог</h1>
                    </div>
                    <Routes>
                        <Route path="/Main" element={<Main />} />
                    </Routes>
                    <div className="ss_new_kross">
                        <h1 className="select_brand_kross">Виберіть бренд кросівок</h1>
                    </div>
                    <Carousel />
                    <div className="popular_new_kross">
                        <h1 className="popular_krosses">Найпопулярніші кросівки</h1>
                    </div>
                    <Routes>
                        <Route path="/PopularKross" element={<PopularKross />} />
                    </ Routes >
                    <PopularKross />
                    <Departure />
                    <Return />
                    <FooterInfo />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
