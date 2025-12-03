import { useState } from "react";

export default function Home() {
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    // Atualiza quantidade de cliques
    const newCount = clicks + 1;
    setClicks(newCount);

    // Move o botão para posição aleatória (tela inteira)
    setPos({
      x: Math.random() * (window.innerWidth - 150),
      y: Math.random() * (window.innerHeight - 80)
    });

    // Quando der 5 cliques → abrir vídeo
    if (newCount === 5) {
      window.open("/midia/CaraMeme.mp4"); 
    }
  }

  return (
      <div>
        <button
          onClick={handleClick}
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
            padding: "10px 20px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Nao clique aqui!
        </button>
      </div>
  );
}
