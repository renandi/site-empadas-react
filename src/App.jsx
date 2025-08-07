import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contador from "./pages/Contador/Contador";
import CadastroProduto from "./pages/CadastroProduto/CadastroProduto";
import Header from "./components/Header/Header";
import Carrinho from "./pages/Carrinho/Carrinho";

function App() {
  return(
    <>
    <Header></Header>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/cadastro" Component={CadastroProduto}/>
      <Route path="/carrinho" Component={Carrinho} />
    </Routes>
    </>
  );
}

export default App;
