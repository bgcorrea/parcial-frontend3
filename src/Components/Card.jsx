import "../Styles/Card.css";

function Card({ data }) {
  return (
    <div>
      <h2>Aquí se indica tu info musical</h2>
      <div>
        <div>
          <span>Bienvenid@</span> <strong>{data.nombre}</strong>
        </div>
        <div>
          <span>Tu banda Favorita es </span> <strong> {data.banda}</strong>
        </div>
        <div>
          <span>Tu Artista Solista Favorito es </span>
          <strong> {data.artista}</strong>
        </div>
      </div>
    </div>
  );
}

export default Card;
