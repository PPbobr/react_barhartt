import React, { Component } from 'react';

export class Nav extends Component {
    render() {
        return (
            <div className="nav light-theme">
                <div className="nav_title reveal">
                    <h1 className="nav_h1">Чому саме в нас?</h1>
                    <p className="nav_p1">
                        Найкращі ціни на ринку<br />
                        Оплата при отримані<br />
                        Доставка 2 дні<br />
                        Найвища якість та оригінальні бірки<br />
                        І тільки у нас ти знайдеш найхайповіші кросівки 2023 року
                    </p>
                </div>
            </div>
        );
    }
}

export default Nav;
