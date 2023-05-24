import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/react-fontawesome'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { routesDashboard, routesClient } from './routes'
import PrivateRoute from './privateRoute/PrivateRoute';
import NotFound from './components/notFound';
import LayoutClient from './ClientSide/LayoutClient';

const Layout = React.lazy(() => import('./components/Layout'));
const Login = React.lazy(() => import('./components/AuthComponents/Login'));
const Register = React.lazy(() => import('./components/AuthComponents/Register'));
const ForgotPassword = React.lazy(() => import('./components/AuthComponents/Forgotpassword'));
const ResetPassword = React.lazy(() => import('./components/AuthComponents/ResetPassword'));




const Loading =
  <div className="d-flex justify-content-center vh-100 align-items-center">
    <div className="spinner-grow text-info" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>

const routingDashboard = routesDashboard.map((route) => {
  return (
    route.element && {
      path: route.path,
      element: <route.element />,
      exact: route.exact,
      name: route.name
    }
  )
})

const routingClient = routesClient.map((route) => {
  return (
    route.element && {
      path: route.path,
      element: <route.element />,
      exact: route.exact,
      name: route.name
    }
  )
})
const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },

  {
    path: "/resetPassword/:token",
    element: <ResetPassword />,
  },
  {
    path: '/admin',
    element: <PrivateRoute><Layout /></PrivateRoute>,
    children: routingDashboard
  },
  {
    path: '/',
    element: <LayoutClient />,
    children: routingClient
  }
  , {
    path: '*',
    element: <NotFound />
  }

]);
function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Suspense fallback={Loading}>
        <RouterProvider router={router} fallbackElement={Loading} />

      </Suspense>
    </div>
  );
}

export default App;
