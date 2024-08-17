import { useState, useEffect } from 'react'
import { Home } from './components/Home'
import './App.css'

export interface Country {
  name: { common: string;}
  flags: { png: string; 
          alt: string; 
        }
  region: string;
}

function App() {
  
  const [allCountries, setAllCountries] = useState<Array<Country>>([])
  

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/independent?status=true&fields=name,flags,region')
    .then(res => res.json())
    .then(json => setAllCountries(json))
  }, [])


  
  
  
  return (
    <>
      {
      allCountries.length >= 1 ?
        <Home allCountries={allCountries}/>
      :
        "Loading..."
      }
      
      
    </>
  )
}

export default App
/*const randomElement = myArray[Math.floor(Math.random() * myArray.length)];  
let newArr = [];
    for (let i = 0; i < 3; i++) {
        let item = fruits.splice(
            Math.floor(
                Math.random() * fruits.length), 1
            );

        newArr.push(item)
    }
*/