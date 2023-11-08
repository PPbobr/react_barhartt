import React from 'react';
import Main from '../components/Main';
import PopularKross from '../components/Popular_kross';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';
import StickyHeader from '../components/StickyHeader';
import Carousel from '../components/Carousel';
import Departure from '../components/Departure';
import Return from '../components/Return';
import FooterInfo from '../components/Footer_info';

const MainPage = () => {
    return (
        <div className="container light-theme">
            <StickyHeader>
                <Header />
            </StickyHeader>
            <Nav />
            <div className="main_new reveal">
                <h1 className="main_h1">каталог</h1>
            </div>
            <Main />
            <a name="kross_brand_anchor"></a>
            <div className="ss_new_kross">
                <h1 className="select_brand_kross">Виберіть бренд кросівок</h1>
            </div>
            <Carousel />
            <div className="popular_new_kross">
                <h1 className="popular_krosses">Найпопулярніші кросівки</h1>
            </div>
            <PopularKross />
            <Departure />
            <Return />
            <FooterInfo />
            <Footer />
        </div>
    );
};

export default MainPage;
