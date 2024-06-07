import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>
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
