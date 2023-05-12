import { useEffect, useState } from "react"


const useSerie = (serie) => {

    const [entrie, setentries] = useState()

    const viewSerie = async () => {
        const resp = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        const {entries} = await resp.json()

        const viewEntries = entries.map(entrie => ({
            title: entrie.title,
            img: entrie.images['Poster Art'].url,
            releaseYear: entrie.releaseYear,
            description: entrie.description

        })).find(entrie => entrie.title === serie)

        console.log(viewEntries)
        setentries(viewEntries)
    }

    useEffect(() => {
        viewSerie()
    }, [])

  return {
    entrie
  }
}

export default useSerie
