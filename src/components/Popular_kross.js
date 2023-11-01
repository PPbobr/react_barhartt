import React from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import './custom-slick-styles.css';

class PopularKross extends React.Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 500,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      centerMode: true,
      centerPadding: 0,
    };

    const products = [
      {
        link: 'dunk1.html',
        imgSrc: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_643b1d264b73a.png',
        name: 'Nike SB Dunk Purple Pulse',
        price: '2490₴',
        divClass: 'div-55',
      },
      {
        link: 'monkey.html',
        imgSrc: 'https://static1.s123-cdn-static-a.com/uploads/6954727/2000_641fdd00a708a.jpg',
        name: 'A Bathing Ape Bape Sta Low',
        price: '3280₴',
        divClass: 'div-11',
      },
      {
        link: 'trainerg.html',
        imgSrc: 'https://static1.s123-cdn-static-a.com/uploads/6954727/2000_638c554d711b6.jpg',
        name: 'Nike Air Trainer SP 1 Black Smoke Gray',
        price: '2990₴',
        divClass: 'div-12',
      },
      {
        link: 'jordan1.html',
        imgSrc: 'https://static1.s123-cdn-static-a.com/uploads/6954727/2000_64039a31ede26.jpg',
        name: 'Jordan 1 Low x Travis Scott Black Phantom',
        price: '2740₴',
        divClass: 'div-13',
      },
    ];

    const doubledProducts = [...products, ...products, ...products, ...products, ...products, ...products, ...products, ...products];

    return (
      <div className="popular_cont">
        <button className="custom-prev-button" onClick={() => this.slider.slickPrev()}>
          <img src='./img/arrow-removebg-preview.png' alt="Next" className='img_arrow arrow_prew'/>
        </button>
        <div className="slider-container">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {doubledProducts.map((product, index) => (
              <div key={index} className="popular_kross">
                <a href={product.link} className={`main_kros_a_img ${product.divClass}`}>
                  <img src={product.imgSrc} alt="" className="main_imgg" />
                </a>
                <div className="kross_boxx">
                  <a href={product.link} className="popular_kross_a1">
                    <h1 className="popular_kross_name">{product.name}</h1>
                  </a>
                  <h1 className="price_popular_kross">{product.price}</h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button className="custom-next-button" onClick={() => this.slider.slickNext()}>
          <img src='./img/arrow-removebg-preview.png' alt="Next" className='img_arrow arrow_next'/>
        </button>
      </div>
    );
  }
}

export default PopularKross;
