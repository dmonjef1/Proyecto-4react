import "./menu.css";

export default function Menu() {
  return (

    <div>
  <h1 className="titulo-menu">Nuestro Menú</h1>

  <section id="menu-productos">
    <div className="contenedor-principal">
      <img
        src="https://thumbs.dreamstime.com/b/pizza-17898986.jpg"
        alt=""
        className="pizza-imagen"
      />
      <div className="pizza-info">
        <h1>Pizza Napolitana</h1>
        <p>
          Exquisita pizza de mozzarella, jamón y tomate al oregano para los
          amantes del sabor napolitano.
        </p>
        <h1>9.990</h1>
      </div>
    </div>

    <div className="pizza">
      <img
        src="https://thumbs.dreamstime.com/b/pizza-35669930.jpg"
        alt=""
        className="pizza-imagen"
      />
      <div className="pizza-info">
        <h1>Pizza Margarita</h1>
        <p>
          Exquisita pizza de mozzarella, aceitunas, tomates frescos y albahaca.
        </p>
        <h1>9.990</h1>
      </div>
    </div>

    <div className="pizza">
      <img
        src="https://thumbs.dreamstime.com/b/pizza-menu-peperoni-pizza-menu-food-cover-background-247625216.jpg"
        alt=""
        className="pizza-imagen"
      />
      <div className="pizza-info">
        <h1>Pizza Pepperoni</h1>
        <p>
          Exquisita pizza de mozzarella y doble pepperoni para los Pepperoni
          lovers.
        </p>
        <h1>9.990</h1>
      </div>
    </div>
  </section>
</div>

  )
}


