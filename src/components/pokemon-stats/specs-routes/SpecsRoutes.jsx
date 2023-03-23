import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { XSquare } from '@phosphor-icons/react';

import linkIcon from '../../../assets/newTab.png';
import AbilitiesDialog from '../../abilities-dialog/AbilitiesDialog';


import './specs-routes.scss';

const SpecsRoutes = ({ pokemon }) => {
  const [abilitiesDialog, setDialog] = useState(false);

  const { id } = useParams();
  const types = pokemon.types.map(t => t.type);

  const typesUrl = pokemon.types.map(t => t.type.url);
  const abilities = pokemon.abilities.map(ab => ab.ability);

  const handleAbilitiesDialog = () => {
    setDialog(prev => !prev);
  };

  return (
    <>
      <div className="specs-route-container">
        <div className="abilities">
          <button className="abilitie-btn" onClick={handleAbilitiesDialog}>
            Habilidades
            <img src={linkIcon} className="linkIcon" />
          </button>
        </div>
        <div className="types">
          <h1>Tipos: </h1>
          <div className="btns">
            {types.map((t, i) => (
              <Link key={i} className="link" to={`/types/${t.name}`}>
                <button className="type-btn">
                  {t.name}
                  <img src={linkIcon} className="linkIcon" />
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {abilitiesDialog ? (
        <>
          <XSquare size={50} className="close-btn" onClick={handleAbilitiesDialog} />
          <AbilitiesDialog />
        </>
      ) : null}
    </>
  );
};

export default SpecsRoutes;
