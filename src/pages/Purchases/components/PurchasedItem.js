import React from 'react'
import '../../../styles/PurchasedItem.css'
import moment from 'moment'
import CartItem from '../../Cart/components/CartItem'
import CurrencyFormat from 'react-currency-format'

function PurchasedItem({ item }) {
  return (
    <div className='purchase'>
        <div className="purchase_details">
            <p className="purchase_id">Purchase id: <strong>{item.id}</strong></p>
            <p>Purchase date: <strong>{moment.unix(item.data.created).format("MMMM Do YYYY, h:mma")}</strong></p>
        </div>
        <div className="purchase_items">
            {item.data.cart?.map(purchaseItem => (
                <CartItem cartItem={purchaseItem} removeButtons={false}/>
            ))}
        </div>
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <h3 className="purchase_total">Purchase Total: {value}</h3>
                </>
            )}
            decimalScale={2}
            value={item.data.amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            
        />
    </div>
  )
}

export default PurchasedItem