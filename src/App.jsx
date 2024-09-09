import {
  RouterProvider,
  createBrowserRouter,
  Outlet
} from 'react-router-dom';

import Footer from "./components/footer";
import Navigation from "./components/navigation";
import Dash from './pages/Dash';
import Interactive from './pages/Interactive';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Training from './pages/Training';
import Visualization from './pages/Visualization';

const Layout = () => {
  return (
    <div className="cursor-pointer bg-neutral-100">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path: '/',
        element: <Dash/>
      },
      {
        path: '/login',
        element: <Login/>
      }
    ]
  }
])

export default function App() {
  return (
    <div className="">
      <RouterProvider router={router}/>
    </div>
  )
}