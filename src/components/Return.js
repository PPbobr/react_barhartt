import React, { Component } from 'react'

export class Return extends Component {
  render() {
    return (
        <div className="return_ttn reveal">
        <div className="return_new_block">
            <h1 className="return-title">Повернення/Ттн Код</h1>
        </div>
            <div className="boxor">
            <div className="return_block boxir">
                <h1 className="return_h1">Повернення</h1>
                <p className="return_p">Обов'язково перевірте взуття на пошті чи вам<br />
                    підходить розмір і без дифектів пари! Якщо ви вже<br />
                    забрали взуття з пошти, то ви позбавляєтеся права на<br />
                    повернення</p>
            </div>

            <div className="ttn_block boxir">
                <h1 className="ttn_h1">Чи не знайшли ТТН код?</h1>
                <p className="return_p">Якщо не змогли знайти ТТН код, то<br />
                    напишіть нам у вайбер за номером<br />
                    +380xxxxxxxxx</p>
            </div>
            </div>
        </div>
    )
  }
}

export default Return