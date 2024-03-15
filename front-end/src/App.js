import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
]);

function App() {
  return (
      <>
          <RouterProvider router={router} />
      </>
  );
}

export default App;
