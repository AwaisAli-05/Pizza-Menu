import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast React pizza .co</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numPizzas ? (
        <>
          <p>
            Authentic Italian cuisine. All ingredients are fresh and locally
            sourced.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry we are close plesae visit us later</p>
      )}

      {/*<Pizza
        name="spinaci"
        photoName="pizzas/spinaci.jpg"
        price={10}
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
      />
      <Pizza
        name="funghi"
        photoName="pizzas/funghi.jpg"
        price={12}
        ingredients="Tomato, mozarella, mushrooms, and onion"
      />
      <Pizza
        name="salamino"
        photoName="pizzas/salamino.jpg"
        price={15}
        ingredients="Tomato, mozarella, and pepperoni"
      />*/}
    </div>
  );
}
function Pizza({ pizzaobj }) {
  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "sold out" : pizzaobj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hours = new Date().getHours();
  console.log(hours);
  const openhour = 12;
  const closehour = 22;
  const isopen = hours >= openhour && hours <= closehour;
  console.log(isopen);
  return (
    <footer className="footer">
      {isopen ? (
        <Order closehour={closehour} />
      ) : (
        <p>
          {" "}
          we are close please visit us between {openhour}:00 and {closehour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closehour }) {
  return (
    <div className="order">
      <p>we're currently open until {closehour}:00</p>
      <button className="btn">order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
