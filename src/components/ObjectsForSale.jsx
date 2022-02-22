import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button.jsx";
import ObjectCard from "./ObjectCard.jsx";

const ObjectsForSale = () => {
  const [objects, setObjects] = useState([]);

  async function getObjects() {
    const response = await fetch("objects.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await response.json();
    setObjects(json.objects.map((object) => ({ ...object, id: uuidv4() })));
  }

  useEffect(() => {
    getObjects();
  }, []);

  return (
    <>
      <div className="row justify-content-center align-content-center mb-4">
        <div className="col-auto d-flex flex-column justify-content-center align-content-center">
          <h2 className="text-center">Våra lediga bostäder</h2>
          <p className="text-center">Text text text text</p>
          <Button
            className={"btn btn-primary align-self-center"}
            type={"button"}
          >
            Filtrera
          </Button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-3 g-4 px-4">
        {objects.map((object) => (
          <div className="col" key={object.id}>
            <ObjectCard
              image={object.image}
              address={object.address}
              price={object.price}
              rooms={object.rooms}
              bathrooms={object.bathrooms}
              area={object.area}
              text={object.text}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ObjectsForSale;
