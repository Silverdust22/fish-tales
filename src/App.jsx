import { useState, createContext } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import FishGallery from "./pages/FishGallery";
import FishDetails from "./pages/FishDetails";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const FavoritesContext = createContext();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="gallery" element={<FishGallery />} />
      <Route path="gallery/:id" element={<FishDetails />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="favorites/:id" element={<FishDetails />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <FavoritesContext.Provider value={[favorites, setFavorites]}>
        <RouterProvider router={router} />
      </FavoritesContext.Provider>
    </>
  );
}

export default App;
