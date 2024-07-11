import logo from './logo.svg';
import { RouterProps,RouterProvider,createBrowserRouter } from "react-router-dom";
import './index.css';
import Homepage from './pages/homePage';
import Error from './pages/Error';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/login';
import SignUp from './pages/sign-up';


function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    },
    {
      path:"/homepage",
      element:<Homepage/>
    },
    {
      path:"*",
      element:<Error/>
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
