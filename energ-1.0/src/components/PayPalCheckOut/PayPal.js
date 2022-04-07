import React from 'react'
 
import PayPalCheckout from 'react-paypal-checkout-button'
import 'react-paypal-checkout-button/dist/index.css'
 
const PayPal = () => {
  return (
    <PayPalCheckout
      clientId='AcelC9Tf0JKFhc2H3GKjGRApdh61yiZpUJZdFzzOxhBxWI95Z_Vshb85vK8w6QtPB9JKNFT8Huh0jCIC'
      amount={100}
      currency='USD'
      onSuccess={(data, order) => {
        console.log(data, order)
        alert("Pago")
      }}
      onError={(error) => {
        console.log(error)
      }}
    />
  )
}
 
export default PayPal