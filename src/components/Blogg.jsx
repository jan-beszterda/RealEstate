import React from 'react'
import Section from './Section'
import Button from './Button'

function Blogg() {
  return (
    <div>
        <div>
            <h1>Läs nyheter från bostadsmarkanden</h1>
        </div>
        <Section>
            <img src="" alt="" />
            <h3>Artikel headline</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit pretium arcu ut sollicitudin. Proin non lorem est. Sed tempus nulla nulla. Sed tempor velit ut facilisis ullamcorper. Ut iaculis velit vitae enim rhoncus luctus id rutrum nisl. Sed sed sem blandit, elementum orci ut, ullamcorper lacus.</p>
            <Button className="btn btn-primary mb-4">Läs mer</Button>
        </Section>
        <Section>
            <img src="" alt="" />
            <h3>Artikel headline</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit pretium arcu ut sollicitudin. Proin non lorem est. Sed tempus nulla nulla. Sed tempor velit ut facilisis ullamcorper. Ut iaculis velit vitae enim rhoncus luctus id rutrum nisl. Sed sed sem blandit, elementum orci ut, ullamcorper lacus.</p>
            <Button className="btn btn-primary mb-4">Läs mer</Button>
        </Section>
        <Section>
            <img src="" alt="" />
            <h3>Artikel headline</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit pretium arcu ut sollicitudin. Proin non lorem est. Sed tempus nulla nulla. Sed tempor velit ut facilisis ullamcorper. Ut iaculis velit vitae enim rhoncus luctus id rutrum nisl. Sed sed sem blandit, elementum orci ut, ullamcorper lacus.</p>
            <Button className="btn btn-primary mb-4">Läs mer</Button>
        </Section>
    </div>
  )
}

export default Blogg