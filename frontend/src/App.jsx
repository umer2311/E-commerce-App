import './App.css'
import { Provider } from 'react-redux';
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import SignUp from './pages/signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import thunkStore from "./redux/store";
import AddProducts from './pages/dashboard/components/products'
import Homepage from './pages/homepage';
import Products from './pages/AllProducts';
import SingleProduct from "./pages/product";
import NotFound from "./pages/NotFound";
import { Navbar } from './pages/homepage/compoments/Navbar';
import Footer from './pages/homepage/compoments/footer';
// import Blog from "./pages/blog";
import  Blog  from './pages/blog';
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutUs";
import Cart from './pages/cart';

function App() {
  return (
    <Provider store={thunkStore}>
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/dashboard/products" element={<AddProducts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/about" element={<AboutUs />} />

            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </Provider>
  );
}


export default App;
