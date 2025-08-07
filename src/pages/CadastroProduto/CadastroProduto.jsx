import { useState } from "react";
import "./Form.css";
import { ToastContainer, toast } from "react-toastify";
import * as LoadingAnimation from "../../assets/loading.json";
import Lottie from "react-lottie";

function CadastroProduto() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [type, setType] = useState("salgada");
  const [isVegan, setIsVegan] = useState(false);
  const [isZeroLactose, setIsZeroLactose] = useState(false);
  const [flavor, setFlavor] = useState("");

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: LoadingAnimation,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  function saveProduct(event) {
    event.preventDefault();

    if (!name) {
      toast.error("Nome é obrigatório!", {
        autoClose: 3000,
        pauseOnHover: false,
      });
    } else if (!description) {
      toast.error("Descrição é obrigatória!", {
        autoClose: 3000,
        pauseOnHover: false,
      });
    } else if (!price) {
      toast.error("É obrigatório incadastroprodutoar o preço!", {
        autoClose: 3000,
        pauseOnHover: false,
      });
    } else if (!flavor) {
      toast.error("Incadastroprodutoe o sabor principal!", {
        autoClose: 3000,
        pauseOnHover: false,
      });
    } else if (name && description && price && flavor) {
      const newProduct = {
        name: name,
        description: description,
        price: price,
        type: type,
        isVegan: isVegan,
        isZeroLactose: isZeroLactose,
        flavor: flavor,
      };
      console.log(newProduct);

      fetch("http://localhost:3000/products", {
        method: "post",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            setName("");
            setDescription("");
            setType("");
            setIsVegan(false);
            setIsZeroLactose(false);
            setFlavor("");
            setPrice("0");
            toast.success("Produto cadastrado com sucesso!");
          } else {
            throw new Error();
          }
        })
        .catch(() => {
          toast.error("Houve um erro ao cadastrar.");
        });

      // const allProducts = JSON.parse(localStorage.getItem("@products")) || [];

      // allProducts.push(newProduct);

      // localStorage.setItem("@products", JSON.stringify(allProducts));
    }
  }

  return (
    <div className="container-cadastroproduto">
      <h1>Cadastro de empadas</h1>

      <cadastroproduto onSubmit={saveProduct}>
        <label htmlFor="name">Nome do produto</label>
        <input
          type="text"
          placeholder="Nome da empada"
          id="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label htmlFor="description">Descrição</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label htmlFor="price">Preço</label>
        <input
          type="number"
          id="price"
          min={0}
          step={0.01}
          value={price}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            if (!value) setPrice("");

            if (value < 0) setPrice(Math.abs(value));

            if (value >= 0) setPrice(value);
          }}
        />

        <label htmlFor="type">Tipo de empada</label>
        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Selecione um tipo</option>
          <option value="salgada">Salgada</option>
          <option value="doce">Doce</option>
        </select>

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="is_vegan"
            checked={isVegan}
            onChange={(e) => {
              setIsVegan(e.target.checked);
            }}
          />
          <label htmlFor="is_vegan">Vegano</label>
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="is_zero_lactose"
            checked={isZeroLactose}
            onChange={(e) => {
              setIsZeroLactose(e.target.checked);
            }}
          />
          <label htmlFor="is_zero_lactose">Zero Lactose</label>
        </div>

        <fieldset>
          <legend>Sabor Principal</legend>

          <div>
            <input
              type="radio"
              id="camarao"
              name="sabor"
              value="camarao"
              checked={flavor === "camarao"}
              onChange={(e) => {
                setFlavor(e.target.value);
              }}
            />
            <label htmlFor="camarao">Camarão</label>
          </div>
          <div>
            <input
              type="radio"
              id="carne"
              name="sabor"
              value="carne"
              checked={flavor === "carne"}
              onChange={(e) => {
                setFlavor(e.target.value);
              }}
            />
            <label htmlFor="carne">Carne</label>
          </div>
          <div>
            <input
              type="radio"
              id="frango"
              name="sabor"
              value="frango"
              checked={flavor === "frango"}
              onChange={(e) => {
                setFlavor(e.target.value);
              }}
            />
            <label htmlFor="frango">Frango</label>
          </div>
        </fieldset>

        {/* <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        /> */}
        <button type="submit">Cadastrar</button>
      </cadastroproduto>
      <ToastContainer />
    </div>
  );
}

export default CadastroProduto;
