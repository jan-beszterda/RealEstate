import Button from "./Button.jsx";
import ObjectCard from "./ObjectCard.jsx";

const ObjectsForSale = ({ objects }) => {
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
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-2">
        {objects.map((object) => (
          <div className="col" key={object.id}>
            <ObjectCard key={object.id} object={object} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ObjectsForSale;
