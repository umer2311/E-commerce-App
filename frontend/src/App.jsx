
import './App.css'
import { Provider } from 'react-redux';
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import SignUp from './pages/signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import thunkStore from "./redux/store";
import AddProducts from './pages/dashboard/components/products'
import Homepage from './pages/homepage';
import Products from './pages/allProducts/index';
import SingleProduct from "./pages/product";
import NotFound from "./pages/NotFound";
// import Blog from "./pages/blog";
import { Blog } from './pages/blog';
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutUs";
import Cart from './pages/Cart';

function App() {
  return (
    <Provider store={thunkStore}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/dashboard/products" element={<AddProducts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product" element={<SingleProduct />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/about" element={<AboutUs />} />

            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}


export default App;
