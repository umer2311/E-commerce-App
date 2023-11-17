import React, { useState, useEffect } from 'react';
import   {Navbar}  from '../Homepage/compoments/Navbar';
import { fetchTrending,fetchProductId } from '../../redux/productSlice'
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import ProductCard from '../Homepage/compoments/productCard';
import { addToCart } from '../../redux/cartSlice';
import Footer from '../Homepage/compoments/footer';
import CheckoutForm from './components/checkoutForm';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  
  //const dispatch = useDispatch();
  const items=useSelector((state)=>state.cart.items)
  const pathArray = items.map((item) => {
    return item?.product.images.split(',')[0];
  });
  const total=0;
  const Cart={items,total,}
  

  const calculateTotal = () => {
    total=items.reduce((total, item) => total + item?.product?.price * item?.quantity, 0);
    return total;
  };

  const handleQuantityChange = (productId, newQuantity) => {
      prevItems.map((item) =>
        item?.product?.id === productId ? { ...item, quantity: newQuantity } : item
      )
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
    <Navbar></Navbar>
      <div className="bg-gray-100 h-screen py-8">
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
                    {items?.map((item,index) => (
                      // const pathArray= items.images.split(',');

                      <tr key={item?.product?._id}>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src={`http://localhost:3500/${pathArray[index]}`}
                              alt="Product image"
                            />
                            <span className="font-semibold">{item?.product?.name}</span>
                          </div>
                        </td>
                        <td className="py-4">${item?.product?.price}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              className="border rounded-md py-2 px-4 mr-2 hover:bg-red-300"
                              onClick={() =>
                                handleQuantityChange(item?.product?._id, item?.quantity - 1)
                              }
                            >
                              -
                            </button>
                            <span className="text-center w-8">{item?.quantity}</span>
                            <button
                              className="border rounded-md py-2 px-4 ml-2 hover:bg-red-300"
                              onClick={() =>
                                handleQuantityChange(item?.product._id, item?.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                        <button
                            
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </td>
                        <td className="py-4">${(item.product.price * item.quantity).toFixed(2)}</td>

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
      </div>
    </>
  );
};

export default Cart;
