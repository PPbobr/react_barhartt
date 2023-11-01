import React, { Component } from 'react';

export class Departure extends Component {
  render() {
    return (
      <div className="departure_kross reveal">
        <div className="departure_img_bg">
          <div className="departure_block">
            <h1 className="departure_h1">Відправлення</h1>
            <p className="departure_p">
              Після створення вашого замовлення наш склад автоматично<br /> 
              приймає ваші замовлення і кросівки будуть відправлені на<br />
              наступний день.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Departure;
