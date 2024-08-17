import { Country } from "../App"
import { useState } from "react"
import React from "react"



interface Props {
    country: Country,
    nameToGuess: string,
    newArray: Country[],
    setNewArray: React.Dispatch<React.SetStateAction<Country[]>>,
    setCToGuess: React.Dispatch<React.SetStateAction<string>>,
    setClicks: React.Dispatch<React.SetStateAction<number>>,
    setFinished: React.Dispatch<React.SetStateAction<boolean>>,
    
   
    
}


export function Flag({country, nameToGuess, newArray, setCToGuess, setNewArray,setClicks, setFinished} : Props){
   
    const [hidden, setHidden] = useState <boolean> (true)
    const [isDisabled, setIsDisabled] = useState <number> (0)
    
    const changeVisibility  = () =>{
        
        setClicks(prev => prev+1)
        if(nameToGuess === country.name.common){
            setHidden(false)
            setIsDisabled(1)
            const array: Country[]= newArray.filter(c => c.name.common !== nameToGuess)
            setNewArray([...array])
            let newCountryToGuess: string = ''
            if(array.length>=1){
                newCountryToGuess =array[Math.floor(Math.random() * array.length)].name.common
            } else{
                console.log("gg")
                setFinished(true)
              
            }
         
            setCToGuess(newCountryToGuess)
            
        } else {
            setHidden(false)
            setTimeout(()=>{
                setHidden(true)
            }, 400)
        }
    }
    return  <div  className="single-flag-container" >
                <img className={isDisabled ? "single-flag-disabled" : "single-flag" } src={country.flags.png} alt={country.name.common} onClick={changeVisibility}></img>
                <p className="country-name" hidden={hidden}>{country.name.common}</p>
            </div>
}