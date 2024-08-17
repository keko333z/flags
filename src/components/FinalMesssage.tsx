
interface Props {
    finished: boolean,
    clicks: number
}

export const FinalMessage = ({finished, clicks} : Props)=>{

    const handleClick = () => {
        window.location.href = "/flags/"
    }

    return (
        <div className="final-message-container">
            
            <div className="final-message">{  finished ? "Congratulations! Score: "+ ((clicks===25) ?  "100%" 
                        : (clicks <= 50 ? Math.round(100-(((clicks-25)/clicks)*100))+"%" 
                                        : "0% :( " ))  //more than 50 clicks score 0%
              :"" }
              {finished ? <div>Total clicks: {clicks} Misses: {clicks-25} <br /><br />
              <button className="final-message-button" onClick={handleClick}>Play again!</button></div> : <p></p>}
              </div>
       </div>
    )
}