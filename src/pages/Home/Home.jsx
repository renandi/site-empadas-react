import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import ItemCardapio from "../../components/ItemCardapio/ItemCardapio.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import ItemFeedback from "../../components/ItemFeedback/ItemFeedback.jsx";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

//   useEffect(() => {
//     const productsInLocalStorage = JSON.parse(
//       localStorage.getItem("@products") || []
//     );

//     setProducts(productsInLocalStorage);
//   }, []);

  useEffect(() => {
    fetch("http://localhost:3000/feedbacks")
      .then(async (response) => {
        if (response.ok) {
          return await response.json();
        } else {
          setFeedbacks([]);
          return null;
        }
      })
      .then((data) => {
        if (data) setFeedbacks(data);
      })
      .catch(()=>toast.error("Erro ao carregar os feedbacks."));
  }, []);

  useEffect(()=>{
    fetch('http://localhost:3000/products')
    .then(async (res)=>{
      const produtosApi = await res.json();
      console.log(produtosApi)
      setProducts(produtosApi)
    })
    .catch(()=>toast.error("Erro ao carregar produtos"))
  },[])

  useEffect(() => {
    console.log(feedbacks);
  }, [feedbacks]);

  return (
    <div>
      {/* <Header /> */}

      <section className="cardapio" href="#cardapio">
        <h2>Nosso Cardápio</h2>

        <div className="empadas-container">
          {products.map((product) => (
            <ItemCardapio
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      <Contact />

      <section className="container-feedback">
        <h2>Feedback dos clientes</h2>

        <ul>
          {feedbacks.map((f) => 
            <ItemFeedback key={f.id} author={f.name} comment={f.message} />
          )}
        </ul>
      </section>
    </div>
  );
}

export default Home;
