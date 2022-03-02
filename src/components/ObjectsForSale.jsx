import { useEffect, useState } from "react";

import Button from "./Button.jsx";
import ObjectCard from "./ObjectCard.jsx";
import Filter from "./Filter";

const ObjectsForSale = ({ objects }) => {
  const [objectsToDisplay, setObjectsToDisplay] = useState(objects);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState({
    minPrice: 100000,
    maxPrice: 15000000,
    minRooms: 1,
    maxRooms: 10,
    minBathrooms: 1,
    maxBathrooms: 5,
    minArea: 25,
    maxArea: 250,
  });

  const handleFieldChange = (fieldName, fieldValue) => {
    setFilter({ ...filter, [fieldName]: fieldValue });
  };

  const handleSubmit = () => {
    setObjectsToDisplay(
      objects.filter((object) => {
        return (
          +object.price >= filter.minPrice &&
          +object.price <= filter.maxPrice &&
          +object.rooms >= filter.minRooms &&
          +object.rooms <= filter.maxRooms &&
          +object.bathrooms >= filter.minBathrooms &&
          +object.bathrooms <= filter.maxBathrooms &&
          +object.area >= filter.minArea &&
          +object.area <= filter.maxArea
        );
      })
    );
  };

  const reset = () => {
    setFilter({
      minPrice: 100000,
      maxPrice: 15000000,
      minRooms: 1,
      maxRooms: 10,
      minBathrooms: 1,
      maxBathrooms: 5,
      minArea: 25,
      maxArea: 250,
    });
  };

  const openCloseFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const open = filterOpen ? (
    <Filter
      data={filter}
      onChange={handleFieldChange}
      submit={handleSubmit}
      close={openCloseFilter}
      reset={reset}
    />
  ) : (
    <Button
      className={"btn btn-primary btn-lg"}
      type={"button"}
      onClick={openCloseFilter}
    >
      Filtrera
    </Button>
  );
  return (
    <div className="container-sm">
      <div className="row justify-content-center align-content-center mb-4">
        <div className="col-auto d-flex flex-column justify-content-center align-content-center">
          <h2 className="text-center">Våra lediga bostäder</h2>
          <p className="text-center fs-5">
            Redo för nästa steg i livet? Funderar du på att flytta?
            <br />
            Ta en titt på våra lediga bostäder. Kom ihåg att vi kan hjälpa dig
            med bostadslån.
          </p>
        </div>
      </div>
      <div className="container-sm d-flex justify-content-center mb-4">
        {open}
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-2">
        {objectsToDisplay.map((object) => (
          <div className="col" key={object.id}>
            <ObjectCard key={object.id} object={object} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectsForSale;
