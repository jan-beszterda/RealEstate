import React from 'react'
import Button from "./Button";
import Section from './Section';

function Services() {
  return (
    <div className="container-sm service-container">
      <div className='service-headerContainer'>
      <h1 className='text-center'>Våra tjänster</h1>
      </div>
      <Section className="service-sectionOne">
      <h2 className='text-center'>Letar du efter en ny bostad?</h2>
      <div className='service-paraContainer'>
      <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit pretium arcu ut sollicitudin. Proin non lorem est. Sed tempus nulla nulla. Sed tempor velit ut facilisis ullamcorper. Ut iaculis velit vitae enim rhoncus luctus id rutrum nisl. Sed sed sem blandit, elementum orci ut, ullamcorper lacus. Donec cursus mauris vitae turpis auctor, in sollicitudin ligula ultrices.</p>
      </div>
      <Button className="btn btn-primary mb-4 ms-2">Objekt till salu</Button>
      </Section>
      <Section className="service-sectionTwo">
        <div className='service-smallHeaderContainer'>
      <h2 className='text-center'>Vi hjälper dig sälja din bostad!</h2>
      </div>
      <div className='service-paraContainer'>
      <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit pretium arcu ut sollicitudin. Proin non lorem est. Sed tempus nulla nulla. Sed tempor velit ut facilisis ullamcorper. Ut iaculis velit vitae enim rhoncus luctus id rutrum nisl. Sed sed sem blandit, elementum orci ut, ullamcorper lacus. Donec cursus mauris vitae turpis auctor, in sollicitudin ligula ultrices.</p>
      </div>
      <Button className="btn btn-primary mb-4 ms-2">Kontakta oss</Button>
      </Section>
    </div>
  )
}

export default Services