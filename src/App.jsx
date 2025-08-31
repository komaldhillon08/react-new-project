import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import MainLayOut from "./components/MainLayOut.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,   
    children: [
      { index: true, element: <Home /> },  
      // { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  return (
    <div className="container m-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
