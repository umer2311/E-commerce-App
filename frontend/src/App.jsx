
import './App.css'
import { Provider } from 'react-redux';
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import SignUp from './pages/signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import thunkStore from "./redux/store";
import Homepage from './pages/dashboard/homepage';
import AddProducts from './pages/dashboard/components/products'
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
          </Routes>
        </div>
      </Router>
    </ Provider>

  );
}

export default App
