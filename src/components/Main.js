import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    img: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_63e4b7dfd6d1d.jpg',
                    title: 'Nike Dunk SB Low "Mummy"',
                    price: '2840₴'
                },
                {
                    id: 2,
                    img: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_63ae9835b5f23.jpg',
                    title: 'Nike Air Jordan 5 Retro X Of White',
                    price: '2980₴'
                },
                {
                    id: 3,
                    img: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_64039a31ede26.jpg',
                    title: 'Nike Air Jordan 1 Low x Travis ...',
                    price: '2740₴'
                },
                {
                    id: 4,
                    img: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_6435a386d4322.jpg',
                    title: 'Nike Air Trainer 1 SP Travis Scott Wheat',
                    price: '2980₴'
                },
                {
                    id: 5,
                    img: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_643b1d264b73a.png',
                    title: 'Nike SB Dunk Purple Pulse',
                    price: '2490₴'
                },
                {
                    id: 6,
                    img: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_63772c516ce90.jpg',
                    title: 'Nike SB Dunk Veneer',
                    price: '2140₴'
                },
                {
                    id: 7,
                    img: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_6368254a0d0a4.jpg',
                    title: 'Nike SB Dunk Atlas',
                    price: '2180₴'
                },
                {
                    id: 8,
                    img: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_63f503116530f.jpg',
                    title: 'Nike SB Dunk Low Staple "NYC PIGEON"',
                    price: '2340₴'
                },
                {
                    id: 9,
                    img: 'https://static1.s123-cdn-static-a.com/uploads/6954727/800_63831dd026cea.jpg',
                    title: 'Adidas x Bad Bunny Forum Low Negro',
                    price: '2780₴'
                },
                {
                    id: 10,
                    img: 'https://static1.s123-cdn-static-a.com/uploads/6954727/2000_641fdd00a708a.jpg',
                    title: 'A Bathing Ape Bape Sta Low',
                    price: '3280₴'
                }
            ]
        };
    }

    render() {
        const items = this.state.items.map((el, index) => {
            const divClass = `div-${index + 1}`;

            return (
                <div key={el.id} className={`item ${divClass}`}>
                    <img className='item_img' src={el.img} alt="фото товару" />
                    <div className='kross_box'>
                        <h1 className='name_kross'>{el.title}</h1>
                        <h1 className='price_kross'>{el.price}</h1>
                    </div>
                </div>
            );
        });

        return (
            <main>
                {items}
            </main>
        );
    }
}

export default Main;
