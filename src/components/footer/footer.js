import "./footer.css"

export default function Footer() {
    return (

        <footer>

            <div className="container__footer">

                <div className="box__footer">
                    <i>Compañia</i>
                    <i>Acerca de</i>
                    <i>Quieres trabajar con nosotros</i>
                    <i>Contacto</i>
                    <i>Formulario de contacto</i>
                </div>

                <div className="box__footer">

                    <h1>Redes sociales</h1>
                    <h2>Whatsaap <ion-icon name="logo-whatsapp"></ion-icon></h2>
                    <h2>Facebook <ion-icon name="logo-facebook"></ion-icon></h2>
                    <h2>Twitter <ion-icon name="logo-twitter"></ion-icon></h2>
                    <h2>Instagram <ion-icon name="logo-instagram"></ion-icon></h2>
                </div>

            </div>

            <div className="box__copyright">
                <p> Todos los derechos reservadors por los estudiantes del Bootcamp Desarrollador Full Stack UDD <b>D&S</b></p>
            </div>
        </footer>

    )
}