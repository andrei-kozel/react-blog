import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import CreateView from "./views/CreateView";
import PostView from "./views/PostView";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="container m-auto text-gray-700 max-w-[1200px] px-5">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/create" element={<CreateView />} />
        <Route path="/post/:id" element={<PostView />} />
      </Routes>
    </div>
  );
}

export default App;
