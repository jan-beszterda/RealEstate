import Button from "./Button.jsx";
import ObjectCard from "./ObjectCard.jsx";

const ObjectsForSale = ({ objects }) => {
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
          <Button
            className={"btn btn-primary align-self-center"}
            type={"button"}
          >
            Filtrera
          </Button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-2">
        {objects.map((object) => (
          <div className="col" key={object.id}>
            <ObjectCard key={object.id} object={object} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectsForSale;
