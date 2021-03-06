import { Link } from 'react-router-dom';
import HouseLogo from '../images/HouseLogo.png';

const CharacterCard = (props) => {
  const getSpecies = () => {
    if (props.character.specie === 'human') {
      return 'Humano';
    } else if (props.character.specie === 'ghost') {
      return 'Fantasma';
    } else if (props.character.specie === 'werewolf') {
      return 'Hombre lobo';
    } else if (props.character.specie === 'half-giant') {
      return 'Medio gigante';
    } else if (props.character.specie === 'goblin') {
      return 'Duende';
    } else if (props.character.specie === 'owl') {
      return 'Búho';
    } else if (props.character.specie === 'house-elf') {
      return 'Elfo doméstico';
    }
  };

  if (!props.character.image) {
    return (
      <>
      <Link to={`/character/${props.character.id}`}>
        <img
          className="card__img"
          src={HouseLogo}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h4 className="card__title">Nombre:{props.character.name}</h4>
        <p className="card__description">{getSpecies()}</p>
        </Link>
      </>
    );
  } else {
    return (
      <>
      <Link to={`/character/${props.character.id}`}>
        <img
          className="card__img"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h4 className="card__title">{props.character.name}</h4>
        <p className="card__description">{getSpecies()}</p>
        </Link>
      </>
    );
  }
};
export default CharacterCard;
