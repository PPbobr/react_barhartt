import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './kross/catalog';
import MainPage from './kross/main';
import Carousel from './components/Carousel';
import Buy from './kross/buy'
import Jordan from './kross/jordan5'
import Jordan1 from './kross/jordan1_low'
import Trainer1 from './kross/trainer1'
import Purple from './kross/sb_purple'
import Veneer from './kross/veneer'
import Atlas from './kross/atlas'
import Pigeon from './kross/Pigeon'
import Forum from './kross/Bunny_forum'
import Bape from './kross/bape'
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="#" element={<Carousel />} />
                    <Route path="/product/1" element={<Buy />} />
                    <Route path="/product/2" element={<Jordan />} />
                    <Route path="/product/3" element={<Jordan1 />} />
                    <Route path="/product/4" element={<Trainer1 />} />
                    <Route path="/product/5" element={<Purple />} />
                    <Route path="/product/6" element={<Veneer />} />
                    <Route path="/product/7" element={<Atlas />} />
                    <Route path="/product/8" element={<Pigeon />} />
                    <Route path="/product/9" element={<Forum />} />
                    <Route path="/product/10" element={<Bape />} />
                </Routes>


            </BrowserRouter>
        );
    }
}

export default App;
