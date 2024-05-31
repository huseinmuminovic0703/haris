import "./App.css";
import Main from "../src/UI/Main";
import More from "../src/UI/More";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Work from "../src/UI/Work";

function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Main /> },
    { path: "/more", element: <More /> },
    { path: "/work", element: <Work /> },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
