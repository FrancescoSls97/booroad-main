export default function AboutUs() {
    return (
        <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h1 className="mb-4 pt-5">Chi siamo</h1>
                    <p className="lead mb-4">
                        Benvenuto su <strong>BOOROAD</strong>, il tuo compagno di viaggio ideale! Siamo un team di appassionati viaggiatori che crede che ogni viaggio sia un’esperienza unica da vivere e condividere.
                    </p>
                    <p>
                        Dal 2020 aiutiamo centinaia di persone a scoprire il mondo in modo autentico, sicuro e divertente. Organizziamo tour di gruppo, viaggi personalizzati e weekend indimenticabili in Italia e all’estero, curando ogni dettaglio per farti vivere solo il meglio.
                    </p>
                    <p>
                        La nostra missione è rendere il viaggio accessibile a tutti, offrendo assistenza continua, itinerari originali e la possibilità di conoscere nuovi amici lungo la strada. Che tu sia un viaggiatore solitario, una coppia o un gruppo di amici, con noi troverai sempre la soluzione perfetta per te!
                    </p>
                    <div className="my-4">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                            alt="Team Booroad"
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: "350px", objectFit: "cover" }}
                        />
                    </div>
                    <h4 className="mt-4">Perché scegliere BOOROAD?</h4>
                    <ul className="list-unstyled mb-4">
                        <li>🌍 Esperienza e passione per il viaggio</li>
                        <li>🚌 Gruppi piccoli e itinerari originali</li>
                        <li>🤝 Assistenza 24/7 e guide esperte</li>
                        <li>💡 Personalizzazione e trasparenza</li>
                    </ul>
                    <p>
                        <strong>Contattaci</strong> per scoprire le prossime partenze o per organizzare il tuo viaggio su misura!
                    </p>
                    <a href="mailto:info@booroad.com" className="btn btn-primary mt-2">Scrivici</a>
                </div>
            </div>
        </div>
    );
}