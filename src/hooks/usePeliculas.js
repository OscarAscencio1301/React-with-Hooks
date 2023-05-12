import { useEffect, useState } from "react"


const usePeliculas = () => {

  const [entries, setentries] = useState()

  const getSeries = async () => {
    const resp = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
    const { entries } = await resp.json()

    const viewEntries = entries.filter(entrie => entrie.programType === 'movie').map(entrie => ({
      title: entrie.title,
      img: entrie.images['Poster Art'].url,
      releaseYear: entrie.releaseYear,
      description: entrie.description

    }))

    setentries(viewEntries)
  }

  useEffect(() => {
    getSeries()
  }, [])

  return {
    entries
  }
}

export default usePeliculas
