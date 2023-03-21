import './pokemon-stats-info.scss';
const PokemonStatsInfo = ({ pokemon }) => {
  const { name, weight, height } = pokemon;
  const image = pokemon.sprites.front_default;
  const attack = pokemon.stats.filter(s => s.stat.name == 'attack')[0].base_stat;
  const defense = pokemon.stats.filter(s => s.stat.name == 'defense')[0].base_stat;
  const hp = pokemon.stats.filter(s => s.stat.name == 'hp')[0].base_stat;
  const speed = pokemon.stats.filter(s => s.stat.name == 'speed')[0].base_stat;

  return (
    <div className="main-info">
      <img src={image} alt="pokemon image" />
      <div className="specs">
        <span className="name">{name}</span>
        <div className="combat-specs">
          <div>
            <div className="spec">
              <span>Ataque: </span>
              <span className="value">{attack}</span>
            </div>

            <div className="spec">
              <span>Defesa: </span>
              <span className="value">{defense}</span>
            </div>
          </div>

          <div>
            <div className="spec">
              <span>Peso: </span>
              <span className="value">{weight}</span>
            </div>
            <div className="spec">
              <span>Vida: </span>
              <span className="value">{hp}</span>
            </div>
          </div>

          <div>
            <div className="spec">
              <span>Altura: </span>
              <span className="value">{height}</span>
            </div>
            <div className="spec">
              <span>Velocidade: </span>
              <span className="value">{speed}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonStatsInfo;
