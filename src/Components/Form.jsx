import { useState } from "react";
import Card from "./Card.jsx";

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    banda: "",
    artista: "",
  });

  const [errors, setErrors] = useState(false);
  const [mostrar, setMostrar] = useState(false);

  const validacion = () => {
    const mensajeError = "Por favor chequea que la información sea correcta";
    const tempErrors = {
      ...(formData.nombre.trim().length >= 3 ? {} : { nombre: mensajeError }), // no es parte de la consigna, sólo está para saludar en la Card
      ...(formData.banda.trim().length >= 3 && !formData.banda.startsWith(" ") // validación 1 de la consigna
        ? {}
        : { banda: mensajeError }),
      ...(formData.artista.length >= 6 ? {} : { artista: mensajeError }), // validación 2 de la consigna
    };

    setErrors(tempErrors);
    return !Object.keys(tempErrors).length;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validacion()) {
      setMostrar(true);
    }
  };

  return (
    <div>
      {!mostrar ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}
          </div>

          <div>
            <label>Banda Musical Favorita:</label>
            <input
              type="text"
              name="banda"
              value={formData.banda}
              onChange={handleChange}
            />
            {errors.banda && <p style={{ color: "red" }}>{errors.banda}</p>}
          </div>

          <div>
            <label>Artista Solista Favorito:</label>
            <input
              type="text"
              name="artista"
              value={formData.artista}
              onChange={handleChange}
            />
            {errors.artista && <p style={{ color: "red" }}>{errors.artista}</p>}
          </div>

          <button type="submit">Enviar</button>
        </form>
      ) : (
        <Card data={formData} />
      )}
    </div>
  );
};

export default Form;
