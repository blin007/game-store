import React from 'react'
import '../styles/EstimatedTotal.css'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux';

function EstimatedTotal() {
    const cart = useSelector((state) => state.cart);

  return (
    <div className="total">
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Estimated Total ({cart?.length} items): <strong>0</strong>
                    </p>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <div className="cart_buttons">
            <button>Purchase for myself</button>
            <button>Purchase as a gift</button>
        </div>
    </div>
  )
}

export default EstimatedTotal