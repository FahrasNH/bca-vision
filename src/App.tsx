import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";

const ExploreMovie = lazy(() => import("./pages/Explore"));
const HomePage = lazy(() => import("./pages/Home"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExploreMovie />} />
      </Route>
    )
  );

  return (
    <div className="min-h-screen bg-primary">
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
