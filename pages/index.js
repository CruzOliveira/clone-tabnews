

function Home() {
  return (
    <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
    }}>
      <img src="https://i.ytimg.com/vi/T98RCOMZNLc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAjjQ1RmgX0k_4oMckmiHnvWw0HGw" alt="Descrição da imagem" 
      style={{ width: '300px', height: '200px' }}
      />
      <h1>Para a galera que esta comentando ae...</h1>
      <h1>Haaa..! orea seca esse site vai cair</h1>
      <a
  href="/midia/CaraMeme.mp4"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px'
  }}
>
  Abrir Vídeo
</a>
    </div>
    );
}

export default Home;