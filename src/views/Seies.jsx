import Card from "../components/Card"
import useSeries from "../hooks/useSeries"


const Seies = () => {
  
  const {entries} = useSeries()


  return (
    <div className="container__view">
      {
        entries?.map(entrie => <Card key={entrie.title} {...entrie} />)
      }
    </div>
  )
}

export default Seies
