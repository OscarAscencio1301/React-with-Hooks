import Card from "../components/Card"
import usePeliculas from "../hooks/usePeliculas"


const Peliculas = () => {
  const {entries} = usePeliculas()


  return (
    <div className="container__view">
      {
        entries?.map(entrie => <Card key={entrie.title} {...entrie} />)
      }
    </div>
  )
}


export default Peliculas
