import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { ProtectedLayout } from "./layout/ProtectedLayout/ProtectedLayout";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { HomePage } from "./pages/HomePage/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ProtectedLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
