import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import Drink from "./FoodItem"; // Reusing for both drinks and snacks but keeping imports separate
import NewItemForm from "./NewItemForm"; // Import the form

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]); // Separate state for drinks data

  useEffect(() => {
    async function getSnacksAndDrinks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getSnacksAndDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  // made a function so that when an item is submitted, the item will show up in the list after submitting it
  async function addItem(newItem) {
    const addedItem = await SnackOrBoozeApi.addItem(newItem);

    if (newItem.type === "snack") {
      setSnacks([...snacks, addedItem]);
    } else if (newItem.type === "drink") {
      setDrinks([...drinks, addedItem]);
    }
  }

  // just added drinks copying the same code as for snacks, and added the new item route with the component
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Drink items={drinks} cantFind="/drinks" />
            </Route>
            {/* New route for adding items */}
            <Route exact path="/add-item">
              <NewItemForm addItem={addItem} />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
