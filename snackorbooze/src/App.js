/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import AddItem from './AddItem'

function App() {
  const INIITIAL_FORM_DATA = {
    name: '',
    description: '',
    recipe: '',
    serve: ''
  }
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState({});
  const [formData, setFormData] = useState(INIITIAL_FORM_DATA)

  useEffect(() => {
    async function getItems() {
      let items = await SnackOrBoozeApi.getItems();
      setItems(items);
      setIsLoading(false);
    }
    getItems();
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((fdata) => ({
      ...fdata,
      [name]: value
    }));
  }

  const submitHandler = (e, type) => {
    e.preventDefault();
    const newItem = {
      ...formData,
      id: formData.name.toLowerCase().replace(/\s/g, '-')
    }
    const added = SnackOrBoozeApi.addNewItem(type, newItem);
    added ? history.push(`/${type}`) : alert('Something went wrong. Please try again.')
    setFormData(INIITIAL_FORM_DATA);
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <NavBar numSnacks={items.snacks.length} numDrinks={items.drinks.length} />
      <main>
        <Switch>
          <Route exact path="/snacks">
            <Menu items={items.snacks} title="Snacks" />
          </Route>
          <Route exact path="/drinks">
            <Menu items={items.drinks} title="Drinks" />
          </Route>
          <Route path="/snacks/add">
            <AddItem  type="snacks" formData={formData} changeHandler={changeHandler} submitHandler={submitHandler} />
          </Route>
          <Route path="/drinks/add">
            <AddItem  type="drinks" formData={formData} changeHandler={changeHandler} submitHandler={submitHandler} />
          </Route>
          <Route path="/snacks/:id">
            <Item items={items.snacks} cantFind="/snacks" />
          </Route>
          <Route path="/drinks/:id">
            <Item items={items.drinks} cantFind="/drinks" />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <p>Oops. That's not here, but click Snacks or Drinks for some tasty options!</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
