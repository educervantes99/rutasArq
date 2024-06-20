import { Link } from 'react-router-dom';
import './StateItem.css';

export const StateItem = ({ id, foto, nombre }) => {
  return (

      <Link className="card" to={`/site/${id}`}>
        <img className='card__image' src={foto} alt={id} />
        <h4 className='card__title'>{nombre}</h4>
      </Link>

  )
}

