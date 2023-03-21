import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './screens/components/Header';
import Home from './screens/productPage';
import Cart from './screens/cartPage/component/Cart';
import ShippingAddressPage from './screens/checkoutPage/component/ShippingAddressPage';
import PaymentInfoPage from './screens/checkoutPage/component/PaymentInfoPage';
import CheckoutPage from './screens/checkoutPage';
import ThankYouPage from './screens/orderCompletionPage/ThankYouPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />}>
          <Route path="shipping" element={<ShippingAddressPage />} />
          <Route path="payment" element={<PaymentInfoPage />} />
        </Route>
        <Route path='/OrderCompleted' element={<ThankYouPage></ThankYouPage>}></Route>
      </Routes>
    </BrowserRouter>




  );
}

export default App;
