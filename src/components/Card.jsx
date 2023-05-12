import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const Card = ({ title, img, releaseYear }) => {



  const navigate = useNavigate();


  const navegar = () => {
    navigate(title, {replace: true})
  }

  return (
    <div className="card__container" style={{background: img ? `url(${img})` : 'black'}} onClick={navegar}>
        <h1>{title}</h1>
        <h2>{releaseYear}</h2>
    </div>
  )
}

export default Card


Card.propTypes = {
  img: PropTypes.string,
  releaseYear: PropTypes.number,
  title: PropTypes.string,
}