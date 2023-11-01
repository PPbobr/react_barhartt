import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../custom-slick-styles.css';

class Carousel extends React.Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 2, // Показувати 2 слайди
            slidesToScroll: 1,
            speed: 500,
            dots: false,
            arrows: false,
            autoplay: true, // Автоматична прокрутка
            autoplaySpeed: 6000, // Інтервал часу в мілісекундах (6 секунд)
            centerMode: true, // Увімкнути центральний режим
            centerPadding: 0, // Встановіть відступ центру, якщо потрібно
        };

        const sliderStyle = {
            width: '70%',
            margin: '0 auto',
            position: 'relative',
        };

        const customPrevButton = {
            height: '50px',
            background: 'none',
            color: 'black',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
            position: 'absolute',
            top: '50%',
            left: '-10%',
            transform: 'translateY(-50%) rotate(-90deg)',
        };

        const customNextButton = {
            height: '50px',
            background: 'none',
            color: 'black',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
            position: 'absolute',
            top: '50%',
            right: '-10%',
            transform: 'translateY(-50%) rotate(90deg)',
        };

        const customButtonIconStyle = {
            width: '100%',
            height: '100%',
        };

        const products = [
            {
                brand: 'NEW BALANCE',
                imgSrc: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_6418f1cf5fd8a.jpg',
            },
            {
                brand: 'NIKE',
                imgSrc: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_6372f6644f5ea.jpg',
            },
            {
                brand: 'JORDAN',
                imgSrc: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_6372f645bf47d.jpg',
            },
            {
                brand: 'ADIDAS',
                imgSrc: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_6372f67531eee.jpg',
            },
            {
                brand: 'BAPE',
                imgSrc: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_641fde32deadc.jpg',
            },
    };

    const doubledProducts = [...products, ...products, ...products, ...products];

    return (
<div className="header_text2">
<a href="#kroos_yak" className="header_a3">більше</a>
</div>

<div style={sliderStyle} className="pop_kross">
<Slider ref={(c) => (this.slider = c)} {...settings}>
{doubledProducts.map((product, index) => (
<div key={index} className="box_select_firma">
<img className={product.brand.toLowerCase()} src={product.imgSrc} alt="" />
<div className={`box_select_img_${product.brand.toLowerCase()} box_select_button`}>
<a href="" className={`box_select_${product.brand.toLowerCase()}`}>докладніше</a>
</div>
<h1 className="box_select_h1">{product.brand}</h1>
</div>
))}
</Slider>
<button style={customPrevButton} onClick={() => this.slider.slickPrev()}>
<img src='./img/arrow-removebg-preview.png' alt="Попередній" style={customButtonIconStyle} />
</button>
<button style={customNextButton} onClick={() => this.slider.slickNext()}>
<img src='./img/arrow-removebg-preview.png' alt="Наступний" style={customButtonIconStyle} />
</button>
</div>
);
}
}

export default Carousel;
