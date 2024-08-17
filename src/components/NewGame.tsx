import { Country } from "../App"
import { Flag } from "./Flag"
import { useState, useEffect } from "react"
import { FinalMessage } from "./FinalMesssage"

interface Props {
    countriesArray: Country[]
    cToGuess: string
    setRandomC: React.Dispatch<React.SetStateAction<Country[]>>
    setCToGuess: React.Dispatch<React.SetStateAction<string>>
}

export const NewGame = ({countriesArray, cToGuess,  setCToGuess} : Props) => {

    const [newArray, setNewArray] = useState <Array<Country>>([])
    const [clicks, setClicks] = useState <number>(0)
    const [finished, setFinished] = useState<boolean>(false)
    

    useEffect(()=>{
        setNewArray([...countriesArray])
    }, [countriesArray])

    

    return (
    <div className="new-game-container">
         <a className="home-link" href="/pages">Exit</a>
        {finished ? "" : <p><strong>What is the flag of: {cToGuess}</strong></p>}
        <div className="countries-grid">
    
        { countriesArray ?  countriesArray.map((c: Country ) => <div  key={c.name.common}><Flag country={c}  nameToGuess={cToGuess} newArray={newArray} setNewArray={setNewArray} setCToGuess={setCToGuess} setClicks={setClicks} setFinished={setFinished} /></div>) : "Loading..."}
        </div>  
        <br></br>
        <div className="total-clicks"><strong>Total clicks: {clicks}</strong></div>
        {finished ? <FinalMessage finished={finished} clicks={clicks} /> : ""}

    </div>
    
    )
}
