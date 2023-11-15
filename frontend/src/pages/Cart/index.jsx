import React, { useState, useEffect } from 'react';
import   {Navbar}  from '../homepage/compoments/Navbar';
import CheckoutForm from './components/checkoutForm';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

        // Axios.get('your-api-endpoint')
        // .then(response => {
        //   // Update state with fetched data
        //   setCartItems(response.data);
        // })
        // .catch(error => {
        //   console.error('Error fetching data:', error);
        // });
    
    // some static data as a placeholder
    const staticData = [
      { id: 1, name: 'Product 1', price: 19.99, quantity: 1 },
      { id: 2, name: 'Product 2', price: 29.99, quantity: 2 },
      { id: 1, name: 'Product 3', price: 13, quantity: 1 },
      { id: 2, name: 'Product 4', price: 5.99, quantity: 2 },
      // Add more products as needed
    ];

    setCartItems(staticData);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
    const [showForm, setShowForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');

  const handleCheckoutClick = () => {
    setShowForm(true);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with shipping details and payment method:', {
      paymentMethod,
      // Add other form fields here
    });
  };


  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          
          <h1 className="text-3xl font-bold font-sans mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">   </th>
                      <th className="text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src="https://via.placeholder.com/150"
                              alt="Product image"
                            />
                            <span className="font-semibold">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-4">${item.price.toFixed(2)}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              className="border rounded-md py-2 px-4 mr-2 hover:bg-red-300"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            <span className="text-center w-8">{item.quantity}</span>
                            <button
                              className="border rounded-md py-2 px-4 ml-2 hover:bg-red-300"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                        <button
                            onClick={e=>{setOpenModal(item.id)}}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </td>
                        <td className="py-4">${(item.price * item.quantity).toFixed(2)}</td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${(calculateTotal() + 1.99).toFixed(2)}</span>
                </div>
                {!showForm && <button onClick={handleCheckoutClick} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>}
              </div>
               {/* {showForm && <CheckoutForm />} */}
            </div>
          </div>
        </div>
        <div className='container mx-auto  '>
          {showForm && <CheckoutForm />}
          </div>
      </div>
      
    </>
  );
};

export default Cart;
