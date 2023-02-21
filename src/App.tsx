import React, {useState} from "react";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import Greeter from "./components/Greeter";
import Item from "./models/item";
import { v4 as getId} from "uuid";
import "./App.css";


function App() {
  const [items, setItems] = useState<Item[]>([])
  const addItem = (product: string, quantity: number)=> {
    console.log("made to the app component");
    console.log(product);
    setItems([...items, {id: getId(), product, quantity}])
}
  // const items = [
  //   { id: 1, product: "Broccoli", quantity: 4 },
  //   { id: 2, product: "Tomatoes", quantity: 3 },
  // ];

  return (
    <div>
      <Greeter person="Kevin" />
      <ShoppingList items={items} />  
      <ShoppingListForm onAddItem={addItem}/>
    </div>
  );
}

export default App;
