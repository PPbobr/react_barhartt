import React from 'react';

function verhFunction() {
  // Прокрутка сторінки нагору (до верхнього краю сторінки)
  window.scrollTo(0, 0);
}

export default function Footer() {
  return (
      <footer className="footer">
        <div className="footer_inst">
          <img
            src="https://w7.pngwing.com/pngs/815/101/png-transparent-www-mevrouwpak-nl-advertising-graphic-design-instagram-instagram-logo-business-advertising.png"
            alt="Instagram Logo"
            className="instagram_photo"
          />
        </div>
        <div className="footer_p">
          <a href="/">Головна сторінка</a>
          <a href="/catalog">Каталог</a>
          <a href="/shipping">Відправлення</a>
          <a href="/returns">Повернення/ТТН код</a>
          <a href="/promo">Промо</a>
          <a href="/contact">Написати нам</a>
        </div>
        <div className="footer_copyright">
          <p>
            Copyright © 2023 All reserved - Barhartt-магазин кросовок nike, jordan, adidas, bape, new-balance<br />
            Privacy
          </p>
        </div>
        <button onClick={verhFunction} id="button">
          <img src="img/arrow-removebg-preview.png" alt="" width="50px" height="50px" className="top_topp" />
        </button>
      </footer>
  );
}
