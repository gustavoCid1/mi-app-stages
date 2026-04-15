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
      const response = await fetch(`${API_BASE_URL}/dev`);
      const data = await response.json();
      setMensajeDev(data.mensaje);
    } catch (error) {
      setMensajeDev('Error DEV');
    }
    setLoadingDev(false);
  };

  const fetchProd = async () => {
    setLoadingProd(true);
    try {
      const response = await fetch(`${API_BASE_URL}/prod`);
      const data = await response.json();
      setMensajeProd(data.mensaje);
    } catch (error) {
      setMensajeProd('Error PROD');
    }
    setLoadingProd(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>API Gateway Dev vs Prod</h1>

      <button onClick={fetchDev}>
        {loadingDev ? 'Cargando...' : 'Consultar DEV'}
      </button>
      <p>{mensajeDev}</p>

      <br />

      <button onClick={fetchProd}>
        {loadingProd ? 'Cargando...' : 'Consultar PROD'}
      </button>
      <p>{mensajeProd}</p>
    </div>
  );
}

export default App;