import "./nosotros.css"

export default function Nosotros() {
  return (
    <div>
      <h1>Nuestro equipo</h1>


      <section id="equipo">
        <div className="persona">
          <img src="https://thumbs.dreamstime.com/b/chef-35582110.jpg" alt="" class="persona-imagen" />
          <div class="persona-info">
            <h2>Alejandro Grimaldi</h2>
            <p>Chef Pizzero</p>
            <div class="social-media">
              <a href=""><span class="fab fa-facebook"></span></a>
              <a href=""><span class="fab fa-instagram"></span></a>
              <a href=""><span class="fab fa-twitter"></span></a>
              <a href=""><span class="fab fa-linkedin-in"></span></a>
            </div>

          </div>
        </div>

        <div className="persona">
          <img src="https://thumbs.dreamstime.com/b/italian-pizza-chef-handlebar-mustache-holding-peel-52029167.jpg" alt="" class="persona-imagen" />
          <div class="persona-info">
            <h2>Antonio Sorrentino </h2>
            <p>Chef</p>
            <div class="social-media">
              <a href=""><span class="fab fa-facebook"></span></a>
              <a href=""><span class="fab fa-instagram"></span></a>
              <a href=""><span class="fab fa-twitter"></span></a>
              <a href=""><span class="fab fa-linkedin-in"></span></a>
            </div>

          </div>
        </div>

        <div className="persona">
          <img src="https://thumbs.dreamstime.com/b/african-female-chef-17871226.jpg" alt="" class="persona-imagen" />
          <div class="persona-info">
            <h2>Isabella Rossi</h2>
            <p>Chef Pizzero</p>
            <div class="social-media">
              <a href=""><span class="fab fa-facebook"></span></a>
              <a href=""><span class="fab fa-instagram"></span></a>
              <a href=""><span class="fab fa-twitter"></span></a>
              <a href=""><span class="fab fa-linkedin-in"></span></a>
            </div>

          </div>
        </div>

        <div class="persona">
          <img src="https://thumbs.dreamstime.com/b/chef-baker-cook-22155470.jpg" alt="" class="persona-imagen" />
          <div class="persona-info">
            <h2>Gina Martini</h2>
            <p>Chef</p>
            <div class="social-media">
              <a href=""><span class="fab fa-facebook"></span></a>
              <a href=""><span class="fab fa-instagram"></span></a>
              <a href=""><span class="fab fa-twitter"></span></a>
              <a href=""><span class="fab fa-linkedin-in"></span></a>
            </div>

          </div>
        </div>
      </section>


    </div>



  )
}