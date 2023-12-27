/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 27/12/2023 - 13:49:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/12/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';
import Home from './pages/Home';
import RestaurantMenu from './components/RestaurantMenu';
import LandingPage from './components/LandingPage';
import Cart from './pages/Cart';
import About from './pages/About';

// import CartList from './components/CartList';
// import Error from './components/Error';
// import ItemPrice from './components/ItemPrice';
// import Modal from './components/Modal';
// import OrderModal from './components/OrderModal';
// import RestaurantCard from './components/RestaurantCard';
// import RestaurantCategory from './components/RestaurantCategory';
// import RestaurantMenuList from './components/RestaurantMenuList';
// import ShimmerMenu from './components/ShimmerMenu';
// import ShimmerUi from './components/ShimmerUi';

function App() {
  const UserLocation = useSelector((store) => store.locationData.userLocation);
  return (
    <>
      {UserLocation && <Header />}
      <Routes>
        {UserLocation ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart />} />
{/* 
            <Route path="/cart" element={<CartList />} />
            <Route path="/cart" element={<Error />} />
            <Route path="/cart" element={<ItemPrice />} />
            <Route path="/cart" element={<Modal />} />
            <Route path="/cart" element={<OrderModal />} />
            <Route path="/cart" element={<RestaurantCard />} />
            <Route path="/cart" element={<RestaurantCategory />} />
            <Route path="/cart" element={<RestaurantMenuList />} />
            <Route path="/cart" element={<ShimmerMenu />} />
            <Route path="/cart" element={<ShimmerUi />} /> */}


            <Route path="/about" element={<About />} />
          </>
        ) : (
          <Route path="/" element={<LandingPage />} />
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
