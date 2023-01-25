import "./App.css";
import { MGALink, HomeScreen } from "./Component/navigation";
import GlArtisan from "./Component/Pages/Gl&Artisan/Gl&Artisan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";

function App() {
  return (
    // <div>
    // </div>

    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomeScreen />} /> */}
        <Route path="/GlArtisan" element={<GlArtisan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
