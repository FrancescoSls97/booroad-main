export default function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start py-5">
            <div className="container">
                <div className="row row-col-1 row-cols-md-3">
                    <div className="col">
                        <h3>BOOROAD</h3>
                        <p>Viaggio con Noi!</p>
                        <p>Contattaci: info@booroad.com</p>
                        <p>Socials:</p>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Twitter</a>
                            </li>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Link utili</h3>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/travel">Travel</a>
                            </li>
                            <li>
                                <a href="/AboutUs">About Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#">Cookies Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row row-cols-2 g-1 mt-5">
                    <div className="col">
                        <p className="">© Copyright {new Date().getFullYear()} </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}