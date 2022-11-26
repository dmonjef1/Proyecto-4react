import "./menu.css"

export default function Menu() {
  return (

<div>

<h1>Nuestro Menu</h1>


<section className="tarjetas">


      <div className="menu1">
        <img src="https://thumbs.dreamstime.com/b/pizza-17898986.jpg" alt="" />
        <p className="text1">
          <h1>Pizza Napolitana</h1>
          Exquisita pizza de mozzarella, jamón y tomate al oregano para los amantes del sabor napolitano.
          <h1>8.990</h1>
        </p>
      </div>

      <div className="menu2">
        <img src="https://thumbs.dreamstime.com/b/pizza-35669930.jpg" alt="" />
        <p className="text2">
          <h1>Pizza Margarita</h1>
          Exquisita pizza de mozzarella, aceitunas, tomates frescos y albahaca.
          <h1>8.990</h1>
        </p>
      </div>

      <div className="menu3">
        <img src="https://thumbs.dreamstime.com/b/pizza-menu-peperoni-pizza-menu-food-cover-background-247625216.jpg" alt=""/>
        <p className="text3">
          <h1>Pizza Pepperoni</h1>
          Exquisita pizza de mozzarella y doble pepperoni para los Pepperoni lovers.
          <h1>8.990</h1>
        </p>
      </div>

      </section>
      </div>
  )
}