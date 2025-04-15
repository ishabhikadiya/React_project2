import SeriesData from "../api/SeriesData.json"
import SeriesCard from "./SeriesCard.jsx"
import "./Netflix.css" 


const Generetype = () => {
    const genere="horrer"
    return genere
  }

  const Netflixseries = () =>{ //this is my componenet wrtitten in Pascalcase(first letter is in uppercase)
    
//   const name = "Queen Of Tears";

    return(
        <ul className="container">
            {SeriesData.map((curelem)=>{
                return (
                    <SeriesCard key={curelem.id} curelem={curelem}/>
                )
            }
        )}
    </ul>
    )
}

export default Netflixseries

export const Header = () => {
return <h1>NetflixSeries</h1>
}

export const Footer = () => {
return (<p>copyright<i class="fa fa-copyright" aria-hidden="true"></i>isha</p>)
}


