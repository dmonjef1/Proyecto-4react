import "./footer.css"

export default function Footer() {
    return (

        <footer>

            <div className="container__footer">

                <div className="box__footer">
                    <a>Compañia</a>
                    <a>Acerca de</a>
                    <a>Quieres trabajar con nosotros</a>
                    <a>Contacto</a>
                    <a>Formulario de contacto</a>
                </div>

                <div className="box__footer">
                    <a>Redes Sociales</a>
                    <a>Facebook</a>
                    <a>Twitter</a>
                    <a>Instagram</a>
                </div>

            </div>

            <div className="box__copyright">
                <p> Todos los derechos reservadors por los estudiantes del Bootcamp Desarrollador Full Stack UDD <b>D&S</b></p>
            </div>
        </footer>

    )
}