import React from 'react';
import Header from '../components/Header';
import StickyHeader from '../components/StickyHeader';
import Main from '../components/Main';
import PopularKross from '../components/Popular_kross';
import Footer from '../components/Footer';
import styled from 'styled-components';

// Створіть стилізований компонент
const CatalogContainer = styled.div`
  .main_h1{
    margin-top: 150px;
  },
  .header_a1{
    background: none;
    color: black;
  },
  .header_a2{
    background: black;
    border-radius: 30px;
    padding: 10px;
    color: white;
    text-align: center;
  }
}
`;

const CatalogPage = () => {
    return (
        <CatalogContainer className="light-theme">
            <div className="container light-theme" />
            <StickyHeader className="light-theme">
                <Header className="light-theme" />
            </StickyHeader>
            <div className="main_new reveal light-theme">
                <h1 className="main_h1 light-theme">каталог</h1>
            </div>
            <Main className="light-theme" />
            <div className="popular_new_kross light-theme">
                <h1 className="popular_krosses light-theme">Найпопулярніші кросівки</h1>
            </div>
            <PopularKross />
            <Footer />
        </CatalogContainer>
    );
};

export default CatalogPage;
