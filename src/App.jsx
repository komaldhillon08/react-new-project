import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import MainLayOut from "./components/MainLayOut.jsx";
import ContentUs from "./pages/ContentUs.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./pages/Todo.jsx";
import FoodZone from "./pages/Food.jsx";
import Images from "./pages/Images.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,   
    children: [
      { index: true, element: <Home /> },  
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "content" , element: <ContentUs/>},
      { path: "todo" , element: <Todo/>},
      { path: "images" , element: <Images/>},
      {path: "shopping" , element : <FoodZone/>}
    ],
  },
]);

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
