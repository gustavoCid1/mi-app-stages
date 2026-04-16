import React, { useState } from 'react';

const API_BASE_URL = "https://nhp4rywn3i.execute-api.us-east-2.amazonaws.com";

function App() {
  const [mensajeDev, setMensajeDev] = useState('');
  const [mensajeProd, setMensajeProd] = useState('');
  const [loadingDev, setLoadingDev] = useState(false);
  const [loadingProd, setLoadingProd] = useState(false);

  const fetchDev = async () => {
    setLoadingDev(true);
    try {
      const res = await fetch(`${API_BASE_URL}/dev`);
      const data = await res.json();
      setMensajeDev(data.mensaje);
    } catch {
      setMensajeDev('Error al conectar con DEV');
    }
    setLoadingDev(false);
  };

  const fetchProd = async () => {
    setLoadingProd(true);
    try {
      const res = await fetch(`${API_BASE_URL}/prod`);
      const data = await res.json();
      setMensajeProd(data.mensaje);
    } catch {
      setMensajeProd('Error al conectar con PROD');
    }
    setLoadingProd(false);
  };

  const cardStyle = {
    padding: '20px',
    margin: '20px auto',
    width: '300px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  };

  const buttonStyle = (color) => ({
    padding: '10px 20px',
    backgroundColor: color,
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold'
  });

  return (
    <div style={{ fontFamily: 'Arial', background: '#f5f7fa', minHeight: '100vh', paddingTop: '50px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        🌐 API Gateway — Dev vs Prod
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>

        {/* DEV */}
        <div style={cardStyle}>
          <h2 style={{ color: '#0066cc' }}>DEV ($LATEST)</h2>
          <button style={buttonStyle('#0066cc')} onClick={fetchDev}>
            {loadingDev ? 'Cargando...' : 'Consultar DEV'}
          </button>
          {mensajeDev && <p style={{ marginTop: '10px' }}>{mensajeDev}</p>}
        </div>

        {/* PROD */}
        <div style={cardStyle}>
          <h2 style={{ color: '#cc3300' }}>PROD (Version 1)</h2>
          <button style={buttonStyle('#cc3300')} onClick={fetchProd}>
            {loadingProd ? 'Cargando...' : 'Consultar PROD'}
          </button>
          {mensajeProd && <p style={{ marginTop: '10px' }}>{mensajeProd}</p>}
        </div>

      </div>
    </div>
  );
}

export default App;