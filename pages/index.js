import { useState } from "react";

export default function Home() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [activated, setActivated] = useState(false); // controla se o botão começou a fugir

  function handleClick() {
    // Ativa modo "fugir"
    setActivated(true);

    // Move para uma posição aleatória
    setPos({
      x: Math.random() * (window.innerWidth - 150),
      y: Math.random() * (window.innerHeight - 80),
    });
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <h1>Quem ama mais?</h1>

      {/* Container inicial com os botões lado a lado */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {/* Botão da Camilla */}
        <button
          onClick={handleClick}
          style={{
            padding: "10px 20px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            position: activated ? "absolute" : "static",
            left: activated ? pos.x : "auto",
            top: activated ? pos.y : "auto",
          }}
        >
          Camilla
        </button>

        {/* Botão do Matheus */}
        <button
           onClick={() =>
           window.open(
          "https://www.instagram.com/reel/DDGkEjrOOtL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          "_blank"
    )}
          style={{
            padding: "10px 20px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Matheus
        </button>
      </div>
    </div>
  );
}
