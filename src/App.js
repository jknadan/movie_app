import React from 'react'
import PropTypes from "prop-types"

function Foods({name, image,rating}) {

  return (
    <div>
      <h2>I like {name}</h2>
      <img src={image} alt={name}/>
      <h4>
        Rating : {rating} / 5
      </h4>
    </div>
  )
  
}

Foods.propTypes = {
  name : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}



const FoodIlike = [
  {
    id: 1,
    name : "kimchi",
    image : "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20181022_103%2Fjangsera4865_1540193350598CIhXk_JPEG%2F63500510220505908_197972819.jpg&type=a340",
    rating : 5
  },

  {
    id: 2,
    name:"Donkasu",
    image:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130408_41%2Fvacod73_1365393963380QlFH0_JPEG%2FIMG_6657.JPG&type=a340",
    rating : 4.5
  },

  {
    id: 3,
    name:"Samgeupsal",
    image:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjZfMTQz%2FMDAxNTk4NDQ5MTAwMzkz.FXCKPDduXF8WHaiPwBphfLWU1PBdsbGFbQUcMjEABsMg.JFXKgR1mI5uuHu0UJaRZr3NmtgoAIRyB2LyeisNgu5og.JPEG.rinvely0322%2F%25C3%25B5%25C8%25A3%25B0%25ED%25B1%25E2%25C1%25FD_%25BB%25EF%25B0%25E3%25BB%25EC_%252826%2529.JPG&type=a340",
    rating : 3.5
  }
]


function App() {
  return (
    <div>
      {FoodIlike.map( meal =>(
        <Foods key={meal.id} 
        name={meal.name} 
        image = {meal.image}
        rating = {meal.rating}/>
      ))}
    </div>

  );
}

export default App;
