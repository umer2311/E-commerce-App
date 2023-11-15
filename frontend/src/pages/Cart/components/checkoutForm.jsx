import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your_stripe_publishable_key');

const CheckoutForm = () => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');

  const handleInputChange = (e, category) => {
    const { name, value } = e.target;
    if (category === 'shippingInfo') {
      setShippingInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleFormSubmit = async (e, elements, stripe) => {
    e.preventDefault();

    if (paymentMethod === 'cashOnDelivery') {
      console.log("cash on delivery selected")
    } else if (paymentMethod === 'stripe' && stripe) {
    //   const { token, error } = await stripe.createToken(elements.getElement('card'));

      if (error) {
        console.error('Error creating token:', error);
      } else {
        // Send the token to your server for further processing
        console.log('Token created:', token);
      }
    }
  };

  return (
    <div className='container mx-auto flex  ml-4 items-center min-h-screen'>
      <Elements stripe={stripePromise}>
        <form className="w-full max-w-md p-8 bg-white shadow-md rounded-lg" onSubmit={(e, elements, stripe) => handleFormSubmit(e, elements, stripe)}>
        <div className=' container mx-auto  max-w-sm'>
          <div className="mb-4 ">
            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={shippingInfo.fullName}
              onChange={(e) => handleInputChange(e, 'shippingInfo')}
              className="block w-full px-4 py-2 rounded-lg bg-gray-200"
              required
            />
          </div>

          <div className="mb-4 ">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
           <textarea
              name="address"
              value={shippingInfo.address}
              onChange={(e) => handleInputChange(e, 'shippingInfo')}
              className="block w-full px-4 py-2 rounded-lg bg-gray-200 resize-none" // Added `resize-none` to disable textarea resizing
              rows="3" 
              required
            />
          </div>

          <div className="mb-4 w-">
            <label className="block text-gray-700 text-sm font-bold mb-2">City:</label>
            <input
              type="text"
              name="city"
              value={shippingInfo.city}
              onChange={(e) => handleInputChange(e, 'shippingInfo')}
              className="block w-full px-4 py-2 rounded-lg bg-gray-200"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Postal Code:</label>
            <input
              type="text"
              name="postalCode"
              value={shippingInfo.postalCode}
              onChange={(e) => handleInputChange(e, 'shippingInfo')}
              className="block w-full px-4 py-2 rounded-lg bg-gray-200"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Country:</label>
            <input
              type="text"
              name="country"
              value={shippingInfo.country}
              onChange={(e) => handleInputChange(e, 'shippingInfo')}
              className="block w-full px-4 py-2 rounded-lg bg-gray-200"
              required
            />
          </div>

          {/* Payment  */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              className="block w-full px-4 py-2 rounded-lg bg-gray-200"
            >
              <option value="cashOnDelivery">Cash on Delivery</option>
              <option value="stripe">Stripe</option>
            </select>
          </div>

          {/* Stripe Details  */}
          {paymentMethod === 'stripe' && (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Card Details:</label>
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}

        
          <button type="submit" className="bg-red-300 text-white py-2 px-4 rounded-lg w-full">
            Submit
                      </button>
                      </div>
        </form>
      </Elements>
    </div>
  );
};

export default CheckoutForm;
