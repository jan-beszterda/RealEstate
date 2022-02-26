import React, {useState} from 'react'
import {RiBarChartHorizontalFill} from 'react-icons/ri'
import {AiFillCloseCircle} from 'react-icons/ai'

function Filter() {

const [Open, setOpen] = useState(false)
const [Close, SetClose] = useState(true)
const [value, setValue] = useState(0)


var [state, setState] = useState({
  price : 1,
  area : 1,
  rooms : 1,
  bathrooms : 1
})

const handlePriceSlider = (event) =>{
  setState ({price : event.target.value})
}

const handleAreaSlider = (event) =>{
  setState ({area : event.target.value})
}
const handleRoomSlider = (event) =>{
  setState ({rooms : event.target.value})
}

const handleBathRoomSlider = (event) =>{
  setState ({bathrooms : event.target.value})
}


 const openHandler  = (event) =>{
   console.log("Open the menu")
    setOpen({open : true})
  }


  return (
    <div>
    {!Open ? <RiBarChartHorizontalFill size="2rem" onClick={openHandler} className="open-filter"/> : null }
    {Open ?<div className="filter-container"> 
    <h5 className="filter-header">Filter</h5>
    <AiFillCloseCircle size="2rem" className="close-filter"/>
   <ul className="filter-list">
   <li>Price <span id="price-range-value">{state.price}</span></li>
   <div class="slidecontainer">

  <input type="range" min="1" max="1000000"   class="price-slider" id="price-range" onChange={handlePriceSlider}></input>
  

   <li>Area <span id="area-range-value">{state.area}</span></li>

  <input type="range" min="1" max="100"class="area-slider" id="area-range" onChange={handleAreaSlider}></input>
   
   <li>Rooms <span id="room-range-value">{state.rooms}</span></li>
   
  <input type="range" min="1" max="100"  class="room-slider" id="room-range" onChange={handleRoomSlider}></input>
   
   <li>Bathrooms <span id="bathroom-range-value">{state.bathrooms}</span></li>

  <input type="range" min="1" max="100"  class="bathroom-slider" id="bathroom-range" onChange={handleBathRoomSlider}></input>
  
</div>
   
   </ul>


    </div> : null}
    </div>
  )
}

export default Filter 

// I denna komponent vill jag kunna skapa en filter meny som först syns som en burger meny för att sedan under ett event 
// kunna visa alla meny val som finns samt kunna redirecta användaren till en ny sida. Jag tänker att knapp trycket är en boolean och ges ett start värde av false, värdet ändras till true vid ett knapp tryck och en "gömd" design struktur visas upp för användaren