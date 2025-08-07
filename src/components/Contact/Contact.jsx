import { useState } from "react";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function formatPhone(raw) {
    const digits = raw.replace(/\D/g, ""); // remove tudo que não for número
    if (digits.length === 11) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }
    return raw; // não formata se não tiver 11 dígitos
  }

  function saveContact(event) {
    event.preventDefault();

    if (!name) {
      toast.error("Deve informar seu nome!");
      return;
    }
    if (!phone || !phone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/)) {
      toast.error("Deve informar um telefone válido!");
      return;
    }
    if (message.length < 30) {
      toast.error("Deve informar uma mensagem!");
      return;
    }

    // toast.success("Todos os campos estão aceitáveis!");

    fetch("http://localhost:3000/feedbacks", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        phone: phone,
        message: message
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
      if (res.ok) {
        toast.success("Feedback enviado com sucesso!")
        setName("");
        setPhone("");
        setMessage("");
      }
      else {
        throw new Error();
      }
    })
    .catch((err) => {
      toast.error("Houve um erro ao enviar os dados.")
    });
  }

  return (
    <section className="container-contato" id="contato">
      <h2>Contato</h2>

      <form onSubmit={saveContact} method="POST">
        <input
          type="text"
          placeholder="Digite seu nome"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          pattern="\(\d{2}\)\s\d{5}-\d{4}"
          placeholder="(xx) xxxxx-xxxx"
          required
          value={phone}
          onChange={(e) => {
            setPhone(formatPhone(e.target.value));
          }}
        />

        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder={"Digite sua mensagem"}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Enviar</button>
      </form>

      <ToastContainer />
    </section>
  );
}
