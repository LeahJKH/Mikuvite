import  Mikufacts from "./FunFactData.json"

export default function FunFactMiku() {
    
    let randomNumber = Math.floor(Math.random() * Mikufacts.length )
    return (
        <>
        <div>
            <img src="" alt="" />
            <p>- {JSON.stringify(Mikufacts[randomNumber])}</p>
        </div>
        </>
    )
}