import ListGroup from "./components/ListGroup";
import "./App.css";

function app() {
  let items = ["Melbourne", "Vancouver", "London"];

  const handleSelectItem = (item: string) => {
    console.log({ item });
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default app;
