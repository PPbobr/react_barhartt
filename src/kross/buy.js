import React, { Component } from 'react';
import Header from '../components/Header';
import HeaderIsSticky from '../components/StickyHeader';
import styles from './buy.css';

class ProductPage extends Component {
    selectSize = (size) => {
        // Ваша логіка для вибору розміру
        console.log(`Ви вибрали розмір: ${size}`);
    };

    render() {
        return (
            <div className="page light-theme">
                <div className="container light-theme">
                    <a name="home"></a>
                    <HeaderIsSticky>
                        <Header />
                    </HeaderIsSticky>
                    <div className="way light-theme">
                        <p className="item-way light-theme">
                            <a href="index.html" className="head-way light-theme">
                                Головна сторінка
                            </a>{' '}
                            / <a href="catalog.html" className="catalog light-theme">
                            Каталог
                        </a>{' '}
                            /{' '}
                            <a href="" className="sniker light-theme">
                                Nike Dunk SB Low "Mummy"
                            </a>
                        </p>
                    </div>
                    <div className="cardo">
                        <div className="item_card">
                            <div className="title_card">
                                <h1 className="main_h1 bebra">Nike Dunk SB Low "Mummy"</h1>
                            </div>
                            <div className="bigos">
                                <div className="column1">
                                    <div className="product-gallery">
                                        <div className="thumbnails">
                                            <img
                                                src="https://static1.s123-cdn-static-a.com/uploads/6954727/800_63e4b7dfd6d1d.jpg"
                                                alt="Product Image1"
                                                data-image="https://static1.s123-cdn-static-a.com/uploads/6954727/800_63e4b7dfd6d1d.jpg"
                                                className="thumbnail active"
                                            />
                                            <img
                                                src="https://static1.s123-cdn-static-a.com/uploads/6954727/2000_63e4b7cde55b6.jpg"
                                                alt="Product Image2"
                                                data-image="https://static1.s123-cdn-static-a.com/uploads/6954727/2000_63e4b7cde55b6.jpg"
                                                className="thumbnail"
                                            />
                                            <img
                                                src="https://static1.s123-cdn-static-a.com/uploads/6954727/2000_63e4b7d695666.jpg"
                                                alt="Product Image3"
                                                data-image="https://static1.s123-cdn-static-a.com/uploads/6954727/2000_63e4b7d695666.jpg"
                                                className="thumbnail"
                                            />
                                        </div>
                                        <div className="main-image">
                                            <img
                                                src="https://static1.s123-cdn-static-a.com/uploads/6954727/800_63e4b7dfd6d1d.jpg"
                                                alt="Product Image1"
                                                className="image"
                                                data-image="img1.jpg"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="column2">
                                    <div className="description">
                                        <p>
                                            Брендова коробка + папір<br />
                                            Оригінальна Бірка<br />
                                            36-22.5 см<br />
                                            37-23.5 см<br />
                                            38-24 см<br />
                                            39-25 см<br />
                                            40-25.5 см<br />
                                            41-26 см<br />
                                            42-26.5 см<br />
                                            43-27.5 см<br />
                                            44-28 см<br />
                                            45-29 см<br />
                                            46-29.5 см<br />
                                        </p>
                                    </div>
                                    <hr className="gray" />
                                    <div className="price">
                                        <h1 className="cpt-price">2840₴</h1>
                                        <p className="desc">
                                            Shipping: Нова-Пошта 110.00₴ <br />
                                            Return Policy: Повернення працює лише на пошті.<br />
                                            Обов'язково при отриманні перевірте чи вам підходить<br />
                                            розмір і самі кросівки без дифектів
                                        </p>
                                    </div>
                                    <hr className="grey" />
                                    <div className="slestveniy_izolyator">
                                        <h1 className="SIZO">Розмір:</h1>
                                        <div className="size-buttons">
                                            <button className="size-button" onClick={() => this.selectSize(36)}>
                                                36
                                            </button>
                                            <button className="size-button" onClick={() => this.selectSize(37)}>
                                                37
                                            </button>
                                            <button className="size-button" onClick={() => this.selectSize(38)}>
                                                38
                                            </button>
                                            <button className="size-button" onClick={() => this.selectSize(39)}>
                                                39
                                            </button>
                                            <button className="size-button" onClick={() => this.selectSize(40)}>
                                                40
                                            </button>
                                            <button className="size-button" onClick={() => this.selectSize(41)}>
                                                41
                                            </button>
                                            <button className="size-button" onClick={() => this.selectSize(42)}>
                                                42
                                            </button>
                                            <button className="size-button" onClick={() => this.selectSize(43)}>
                                                43
                                            </button>
                                        </div>
                                    </div>
                                    <hr className="greyy" />
                                    <div className="end">
                                        <div className="counter">
                                            <div className="neww">
                                                <button id="decreaseButton" className="decrement-btn">
                                                    -
                                                </button>
                                                <input type="number" id="quantityInput" className="counter-value" value="1" min="1" />
                                                <button id="increaseButton" className="increment-btn">
                                                    +
                                                </button>
                                            </div>
                                            <button className="bttn">ДОДАТИ У КОШИК</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_new">
                        <h1 className="main_h1">Рекомендовані товари</h1>
                    </div>
                    <div className="main">
                        <div className="main_cont_kross">
                            <div className="main_kross new-block" data-category="nike">
                                <a href="" className="main_kros_a_img div_6">
                                    <img
                                        src="https://static1.s123-cdn-static-a.com/uploads/6954727/2000_63772c516ce90.jpg"
                                        alt=""
                                        className="main_img"
                                    />
                                </a>
                                <div className="kross_box">
                                    <a href="" className="kross_box_a">
                                        <h1 className="name_kross">NIKE SB DUNK VENEER</h1>
                                    </a>
                                    <h1 className="price_kross">2940₴</h1>
                                </div>
                            </div>


                            <div className="main_kross new-block" data-category="nike">
                                <a href="" className="main_kros_a_img div_5">
                                    <img
                                        src="https://static1.s123-cdn-static-a.com/uploads/6954727/800_643b1d264b73a.png"
                                        alt=""
                                        className="main_img"
                                    />
                                </a>
                                <div className="kross_box">
                                    <a href="" className="kross_box_a">
                                        <h1 className="name_kross">Nike SB Dunk Purple Pulse</h1>
                                    </a>
                                    <h1 className="price_kross">2490₴</h1>
                                </div>
                            </div>


                            <div className="main_kross new-block" data-category="nike">
                                <a href="" className="main_kros_a_img div_4">
                                    <img
                                        src="https://static1.s123-cdn-static-a.com/uploads/6954727/800_6435a386d4322.jpg"
                                        alt=""
                                        className="main_img"
                                    />
                                </a>
                                <div className="kross_box">
                                    <a href="" className="kross_box_a">
                                        <h1 className="name_kross">Nike Air Trainer 1 SP Travis Scott Wheat</h1>
                                    </a>
                                    <h1 className="price_kross">2980₴</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="footer_inst">
                            <img
                                src="https://w7.pngwing.com/pngs/815/101/png-transparent-www-mevrouwpak-nl-advertising-graphic-design-instagram-instagram-logo-business-advertising.png"
                                alt=""
                                className="instagram_photo"
                            />
                        </div>
                        <div className="footer_p">
                            <a href="">Головна сторінка</a>
                            <a href="">Каталог</a>
                            <a href="">Відправлення</a>
                            <a href="">Повернення/Ттн код</a>
                            <a href="">Промо</a>
                            <a href="">Написати нам</a>
                        </div>
                        <div className="footer_copyright">
                            <p>
                                Copyright © 2023 All reserved - Barchartt-магазин кросовок nike, jordan, adidas, bape,
                                new-balance<br />
                                Privacy
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default ProductPage;
