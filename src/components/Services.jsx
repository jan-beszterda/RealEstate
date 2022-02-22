import React from 'react'
import Button from "./Button";

function Services() {
  return (
    <div className="container-sm service-container">
      <div className='service-headerContainer'>
      <h1 className='text-center'>Våra tjänster</h1>
      </div>
      <div className='service-smallHeaderContainer'>
      <h2 className='text-center'>Letar du efter en ny bostad?</h2>
      </div>
      <div className='service-paraContainer'>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum provident nemo quod rem aspernatur sed voluptates soluta maxime est eius.</p>
      </div>
      <Button className="btn btn-primary mb-4 ms-2">Objekt till salu</Button>
      <div className='service-smallHeaderContainer'>
      <h2 className='text-center'>Vi hjälper dig sälja din bostad!</h2>
      </div>
      <div className='service-paraContainer'>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat asperiores quas omnis officiis molestiae iste. Facere deleniti odit eveniet sunt.</p>
      </div>
      <Button className="btn btn-primary mb-4 ms-2">Kontakta oss</Button>
    </div>
  )
}

export default Services