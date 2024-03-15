import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';
import ComplaintPage from './pages/ComplaintPage';

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
