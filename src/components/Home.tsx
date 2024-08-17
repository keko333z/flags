import { Country } from "../App";
import { useState } from "react";
import { NewGame } from "./NewGame";
import { Header } from "./Header";

interface Props {
    allCountries: Country[];
}
export function Home ({allCountries}: Props){

    const [isAmericaChecked, setIsAmericaChecked] = useState(false);
    const [isAsiaChecked, setIsAsiaChecked] = useState(false);
    const [isEuropeChecked, setIsEuropeChecked] = useState(false);
    const [isAfricaChecked, setIsAfricaChecked] = useState(false);
    const [randomCountries, setRandomCountries] = useState<Array<Country>>([])
    const [countryToGuess, setCountryToGuess] = useState <string>('')
    

        const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            if(allCountries.length >= 1){
                const newArr : Country[]=[];
                let filteredArr : Country[]=[];
                let item : Country;

            if(isAfricaChecked) {
                const arr : Country[] = allCountries.filter(c => c.region === 'Africa')
                filteredArr=filteredArr.concat(arr)
            } 
            if(isAmericaChecked) {
                const arr : Country[] = allCountries.filter(c => c.region === 'Americas')
                filteredArr=filteredArr.concat(arr)
            } 
            if(isAsiaChecked) {
                const arr : Country[] = allCountries.filter(c => c.region === 'Asia')
                filteredArr=filteredArr.concat(arr)
            } 
            if(isEuropeChecked) {
                const arr : Country[] = allCountries.filter(c => c.region === 'Europe')
                filteredArr=filteredArr.concat(arr)
            } 

            if (isAfricaChecked===false && isAmericaChecked===false && isAsiaChecked===false && isEuropeChecked===false){
                window.alert("At least one region should be checked!")
                return
            }
            

            for (let i = 0; i < 25; i++) {         
                item = filteredArr.splice(
                     Math.floor(
                         Math.random() * filteredArr.length), 1
                     )[0];
                 newArr.push(item)
                }
            setRandomCountries(newArr)
            const randomPos :number = Math.floor(Math.random() * newArr.length)
            setCountryToGuess(newArr.slice(randomPos, randomPos+1)[0].name.common)
        }}

        const handleAfricaChange = () => {
            setIsAfricaChecked(!isAfricaChecked)
        }
        const handleAmericaChange = () => {
            setIsAmericaChecked(!isAmericaChecked)
        }
        const handleAsiaChange = () => {
            setIsAsiaChecked(!isAsiaChecked)
        }
        const handleEuropeChange = () => {
            setIsEuropeChecked(!isEuropeChecked)
        }

      
    return (

        <div className="app-container">
            <Header />
            <div className="body">
            { randomCountries.length > 1 ?  

                <NewGame cToGuess={countryToGuess} 
                    countriesArray={randomCountries} 
                    setRandomC={setRandomCountries} 
                    setCToGuess={setCountryToGuess}
                />
        :
                <form className="form" onSubmit={handleSubmit}>
                    <header>Select one or more regions: </header>
                    <label><input type="checkbox" id="africa" value="africa" checked={isAfricaChecked} onChange={handleAfricaChange}/> Africa </label>
                    <label><input type="checkbox" id="america" value="america" checked={isAmericaChecked} onChange={handleAmericaChange}/> America </label>
                    <label><input type="checkbox" id="asia" value="asia" checked={isAsiaChecked} onChange={handleAsiaChange}/> Asia </label>
                    <label><input type="checkbox" id="europe" value="europe" checked={isEuropeChecked} onChange={handleEuropeChange}/> Europe </label>
                    <button>New game</button>
                </form>
        
        }
            </div>
        </div>
    )
    
 
}
