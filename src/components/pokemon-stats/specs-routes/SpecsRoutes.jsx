import { Link } from 'react-router-dom';

import './specs-routes.scss';

const SpecsRoutes = ({ pokemon }) => {
  const types = pokemon.types.map(t => t.type.name);

  console.log(types);

  return (
    <div className="specs-route-container">
      <div className="abilities">
        <button className="abilitie-btn">
          <Link className="link">Habilidades</Link>
        </button>
      </div>
      <div className="types">
        <h1>Tipos: </h1>
        {types.map(t => (
          <button className="type-btn">{t}</button>
        ))}
      </div>
    </div>
  );
};

export default SpecsRoutes;
