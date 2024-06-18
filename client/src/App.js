import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login'

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
  ])

  return (
    <>

    {/* === ROUTING HERE  === */}
    <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
