import React, {useState} from 'react'
import {RiBarChartHorizontalFill} from 'react-icons/ri'
import {AiFillCloseCircle} from 'react-icons/ai'

function Filter() {

const [Open, setOpen] = useState(false)
const [Close, SetClose] = useState(true)

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
   <li>Price</li>
   <div class="slidecontainer">
  <input type="range" min="1" max="100" value="1" class="price-slider" id="price-range"></input>
</div>
   <li>Area</li>
   <div class="slidecontainer">
  <input type="range" min="1" max="100" value="50" class="area-slider" id="area-range"></input>
</div>
   <li>Rooms</li>
   <div class="slidecontainer">
  <input type="range" min="1" max="100" value="50" class="room-slider" id="room-range"></input>
</div>
   <li>Bathrooms</li>
   <div class="slidecontainer">
  <input type="range" min="1" max="100" value="51" class="bathroom-slider" id="bathroom-range"></input>
</div>
   
   
   </ul>


    </div> : null}
    </div>
  )
}

export default Filter 

// I denna komponent vill jag kunna skapa en filter meny som först syns som en burger meny för att sedan under ett event 
// kunna visa alla meny val som finns samt kunna redirecta användaren till en ny sida. Jag tänker att knapp trycket är en boolean och ges ett start värde av false, värdet ändras till true vid ett knapp tryck och en "gömd" design struktur visas upp för användaren