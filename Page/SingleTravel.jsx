import { useParams } from "react-router-dom";
import travels from "../src/data/travels";
import { useState } from "react";

export default function SingleTravel() {
    // Prendo l'id dalla URL
    const { id } = useParams();

    // Trovo il viaggio corrispondente all'id
    const travel = travels.find(t => String(t.id) === id);

    // Stato per gestire quale accordion è aperto
    const [openIndex, setOpenIndex] = useState(null);

    // Stato per la ricerca dei partecipanti
    const [query, setQuery] = useState("");

    // Filtro i partecipanti in base alla ricerca
    const filteredPartecipanti = travel.partecipanti.filter(
        p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.subname.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="container py-5 mt-5">
            <div className="card mx-auto" style={{ maxWidth: "1000px" }}>
                {/* Immagine del viaggio */}
                <img
                    src={`https://picsum.photos/500/300?random=${travel.id}`}
                    className="card-img-top"
                    alt={travel.name}
                    style={{ objectFit: "cover", height: "300px" }}
                />
                <div className="card-body">
                    {/* Info viaggio */}
                    <h3 className="card-title">{travel.name}</h3>
                    <p className="card-text fw-bold">Data di Partenza: {travel.dataPartenza}</p>
                    <p className="card-text fw-bold">Data di Ritorno: {travel.dataRitorno}</p>
                    <hr />
                    {/* Input ricerca partecipante */}
                    <input
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Cerca un partecipante..."
                        className="form-control mb-3"
                    />
                    <h5>Partecipanti:</h5>
                    {/* Accordion Bootstrap per i partecipanti */}
                    <div className="accordion" id="accordionPartecipanti">
                        {filteredPartecipanti.length === 0 && (
                            <div className="text-danger mb-3">Nessun partecipante trovato.</div>
                        )}
                        {filteredPartecipanti.map((p, idx) => (
                            <div className="accordion-item" key={idx}>
                                <h2 className="accordion-header" id={`heading${idx}`}>
                                    <button
                                        className={`accordion-button ${openIndex === idx ? "" : "collapsed"}`}
                                        type="button"
                                        // Apro o chiudo la sezione del partecipante
                                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    >
                                        {p.name} {p.subname}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${idx}`}
                                    className={`accordion-collapse collapse ${openIndex === idx ? "show" : ""}`}
                                    aria-labelledby={`heading${idx}`}
                                    data-bs-parent="#accordionPartecipanti"
                                >
                                    <div className="accordion-body">
                                        {/* Info dettagliate del partecipante */}
                                        <p><strong>Email:</strong> {p.email}</p>
                                        <p><strong>Cellulare:</strong> {p.cellulare}</p>
                                        <p><strong>Codice Fiscale:</strong> {p.codicefiscale}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}