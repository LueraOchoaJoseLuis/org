import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/footer.png)"}}>
        <div className="redes">
            <a href='https://www.aluracursos.com'>
                <img src="/facebook.png" alt='Facebook'/>
            </a>
            <a href='https://www.aluracursos.com'>
                <img src='/twitter.png' alt='twitter'/>
            </a>
            <a href='https://www.aluracursos.com'>
                <img src="/instagram.png" alt='instagram'/>
            </a>

        </div>
        <img src="/Logo.png" alt="org" />
        <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer;