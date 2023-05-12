import PropTypes from 'prop-types'
import useSerie from '../hooks/useSerie'
import { useLocation } from 'react-router-dom'

const Simple = () => {

    const location = useLocation()
    const valor = location.pathname.split("/").pop().split("%20").join(" ") || location.pathname.split("/").pop().split("%20").join("/")

    console.log(valor)


    const { entrie } = useSerie(valor)


    return (
        <div className="container__view2">
            <img src={entrie?.img} />
            <div className="elements">
                <h1>{entrie?.title}</h1>
                <h2>{entrie?.releaseYear}</h2>
                <p>{entrie?.description}</p>
            </div>
        </div>
    )
}

export default Simple


Simple.propTypes = {
    texto: PropTypes.string,
    img: PropTypes.string,
    releaseYear: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
}