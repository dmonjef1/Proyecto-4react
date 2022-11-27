import "./footer.css"

export default function Footer() {
    return (

        <footer>
            <div className="footer-content">

                <h3>Pizzeria D&S</h3>
                <p>Pizzeria D&S tienen años de experiencia en la elaboración de las mejores masas tradicionales y hechas en casa
                    y con los ingredientes mas naturales y de alta calidad.</p>

                <ul className="socials">
                <i><ion-icon name="logo-facebook"></ion-icon></i>
                <i><ion-icon name="logo-twitter"></ion-icon></i>
                <i><ion-icon name="logo-instagram"></ion-icon></i>
                <i><ion-icon name="logo-linkedin"></ion-icon></i>
                </ul>
            </div>

            <div className="footer-bottom">
            <p> Todos los derechos reservadors por los estudiantes del Bootcamp Desarrollador Full Stack UDD <b>D&S</b></p>
            </div>

           
            
           
            
        </footer>

    )
}