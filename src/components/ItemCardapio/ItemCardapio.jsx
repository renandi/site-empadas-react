import "./ItemCardapio.css";
import PropTypes from "prop-types";
import empadaIcone from "../../assets/empada-icone.png"

function ItemCardapio({ product }) {

  function salvarProdutoCarrinho() {
    const productsInCart = JSON.parse(localStorage.getItem("@carrinho") || "[]");
    productsInCart.push(product);
    localStorage.setItem("@carrinho", JSON.stringify(productsInCart));
  }

  return (
    <>
      <article className="card">
        <h3>{product.name}</h3>
        <img src={empadaIcone} alt="" height={200} />
        <p>{product.description}</p>
        <span className="preco">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </span>
        <button onClick={salvarProdutoCarrinho} className="whatsapp-btn">
          Adicionar ao carrinho
        </button>
      </article>
    </>
  );
}

ItemCardapio.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default ItemCardapio;
