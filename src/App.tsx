import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";

const ExploreMovie = lazy(() => import("./pages/Explore"));
const HomePage = lazy(() => import("./pages/Home"));
const MovieDetail = lazy(() => import("./pages/Explore/MovieDetailPage"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExploreMovie />} />
        <Route path="/explore/:id" element={<MovieDetail />} />
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
