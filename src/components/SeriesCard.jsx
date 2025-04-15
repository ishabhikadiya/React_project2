import "./Netflix.css"   
import "./NetflixSeries"

  
  const SeriesCard = (props) => { 
    // const {key,curelem_data} = props;// desrtucture data
    //   console.log(props);

    const {id,img_url,name,rating,description,genre,cast,watch_url} = props.curelem;// destructure data of json file

  let age = 20;

  const Canwatch = () => {
      if (age>= 18) return "Watch Now"
      return " Not Available"
    }

    const handleButtonClick = (props)=>
    // const handleButtonClick = (name)=>
    {
        // alert("hellouser" + props.cast);
        // const cast=props.cast;
        // const genre=props.genre;
        // alert("hello" + cast + genre );
        // alert(`hello ${props.cast} ${props.genre}`);
        // alert(`hello ${name}`);
        // console.log(props.event);event ni khud ni by default object che

    }

  const btn_style = {
      padding: "0.6rem 1.4rem",
      border: "none",
      fontSize: "1.0rem",
      backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
      fontWeight: "bold",
      cursor: "pointer",
      color:"white",
   }

  
      return(

            <li key ={id} style={{listStyle:"none"}}>
              <div className="card">

                <div>
                  <img src={ img_url } alt="" height="40%" width="100%"/>
                </div>
                <div className="card-content">
                  <h2>Name: {name}</h2>
                  <h3>Rting: 
                    <span className= {`rating ${rating >= 8.5 ? "super_hit" : "average"}`}>{rating}</span>
                  </h3>
                  {/* <p className="text-3xl font-bold underline">{description}</p> tailwindcss  */}
                  <p className="line-clamp-2">{description}</p> {/*truncate lines*/}
                  <p>Genere: {genre}</p> 
                  <p>Cast: {cast}</p>
                  <a href={watch_url} target="_blank" >
                    <button style={btn_style} >{Canwatch()}</button>
                  </a>                  
                  <button style={btn_style} onClick={ (event)=> handleButtonClick({genre,cast,event}) }>{Canwatch()}</button>
                  {/* <button style={btn_style} onClick={ ()=> handleButtonClick("isha")}>{Canwatch()}</button> */}
                </div>
              </div>
            </li>
    )
}

export default SeriesCard