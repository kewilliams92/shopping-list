import React, {useState} from "react";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import Item from "./models/item";
import "./App.css";


function App() {
  const [items, setItems] = useState<Item[]>([])
  const addItem = (product: string)=> {
    console.log("made to the app component");
    console.log(product);
}
  // const items = [
  //   { id: 1, product: "Broccoli", quantity: 4 },
  //   { id: 2, product: "Tomatoes", quantity: 3 },
  // ];

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem}/>
    </div>
  );
}

export default App;
