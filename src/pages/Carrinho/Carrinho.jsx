import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import DinnerIcon from "@mui/icons-material/DinnerDiningOutlined";
import GrassIcon from "@mui/icons-material/Grass";
import {
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import styles from "./Carrinho.module.css";

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const meuCarrinho = JSON.parse(localStorage.getItem("@carrinho") || []);
    setCarrinho(meuCarrinho);
  }, []);


  function sendMessageWhatsApp() {
    const message = `Olá, desejo ${carrinho.length} empadas no valor de ${Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(
              carrinho.reduce((total, empada) => total + (Number(empada.price) || 0), 0)
            )}`;
          const number = '+5547996839118';
          const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
          window.open(url, '_blank');
  }

  return (
    <div>
      <Paper
        elevation={3}
        style={{ width: "50%", margin: "0 auto", paddingTop: "10px" }}
      >
        <h2>Suas empadas</h2>

        <List>
          {carrinho.map((empada, idx) => (
            <ListItem key={idx}>
              {empada.isVegan ? (
                <GrassIcon style={{ marginRight: "20px" }} />
              ) : (
                <DinnerIcon style={{ marginRight: "20px" }} />
              )}
              <ListItemText> {empada.name} </ListItemText>
              <ListItemText sx={{ textAlign: "right" }}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(empada.price)}
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <div className={styles["cardfooter"]}>
          <span className={styles["total-text"]}>
            Total:{" "}
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(
              carrinho.reduce((total, empada) => total + (Number(empada.price) || 0), 0)
            )}
          </span>
          <Button variant="contained" endIcon={<WhatsApp />} onClick={sendMessageWhatsApp()}>
            Enviar pedido
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Carrinho;
