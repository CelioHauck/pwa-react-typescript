import React, { useState, useEffect } from "react";

const Geolocalization = () => {
  const [state, setState] = useState("Esperando a requisição de localização");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setState(`Localização carregada com sucesso:${pos}`);
      },
      (e) => {
        setState(`Ocorreu um erro da permissão:${e}`);
        console.log(e);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);
  return <div>{state}</div>;
};

export default Geolocalization;
