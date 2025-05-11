// npm create vite // cria estrutura basica do projeto - escolher react e js

//rafce // snipet pra criar estrutura basica de função

import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Songs from "./pages/Songs";
import Song from "./pages/Song";

// arrow function - nova sintaxe - util quado é somente 1 comando
// const App2 = () => <h1>Hello World!!</h1>;

function App() {
  // console.log("App!");

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
