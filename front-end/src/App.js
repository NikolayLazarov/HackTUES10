import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';
import ComplaintPage from './pages/ComplaintPage';
import ComplaintLocationPage from './pages/ComplaintLocationPage';
import ComplaintFormPage from './pages/ComplaintFormPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },{
    path: "/complaint",
    element: <ComplaintPage />,
    errorElement: <ErrorPage />
  },{
    path: "/complaint-location",
    element: <ComplaintLocationPage />,
    errorElement: <ErrorPage />
  },{
    path: "/complaint-form",
    element: <ComplaintFormPage />,
    errorElement: <ErrorPage />
  }
]);

function App() {
  return (
      <>
          <RouterProvider router={router} />
      </>
  );
}

export default App;
