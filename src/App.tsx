import { RouterProvider } from "react-router";
import { routes } from "./router";
import { Suspense } from "react";

function App() {
  return (
    <>
      <RouterProvider router={routes} />

    </>
  );
}

export default App;
