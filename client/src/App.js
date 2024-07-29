import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import Booking from './views/Booking/Booking';

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/login",
      element: <Login/>
    },

    {
      path: "/dashboard",
      element: <Dashboard/>
    },
    {
      path: "/booking",
      element: <Booking/>
    }
  ])

  return (
    <>

    {/* === ROUTING HERE  === */}
    <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
