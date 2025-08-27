import { useParams } from "react-router-dom";
import { useState } from "react";

export default function SingleTravel() {
    const { id } = useParams();

    const travelsData = JSON.parse(localStorage.getItem("travels") || "[]");
    const initialTravel = travelsData.find(t => String(t.id) === id);

    const [partecipanti, setPartecipanti] = useState(initialTravel ? initialTravel.partecipanti : []);

    const [newName, setNewName] = useState("");
    const [newSubname, setNewSubname] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newCellulare, setNewCellulare] = useState("");
    const [newCodiceFiscale, setNewCodiceFiscale] = useState("");

    const [query, setQuery] = useState("");
    const [openIndex, setOpenIndex] = useState(null);

    if (!initialTravel) return <h2>Viaggio non trovato</h2>;

    const filteredPartecipanti = partecipanti.filter(
        p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.subname.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="container py-5 mt-5">
            <div className="card mx-auto" style={{ maxWidth: "1000px" }}>
                <img
                    src={`https://picsum.photos/500/300?random=${initialTravel.id}`}
                    className="card-img-top"
                    alt={initialTravel.name}
                    style={{ objectFit: "cover", height: "300px" }}
                />
                <div className="card-body">
                    <h3 className="card-title">{initialTravel.name}</h3>
                    <p className="card-text fw-bold">Data di Partenza: {initialTravel.dataPartenza}</p>
                    <p className="card-text fw-bold">Data di Ritorno: {initialTravel.dataRitorno}</p>
                    <hr />

                    <form
                        className="mb-4"
                        onSubmit={e => {
                            e.preventDefault();
                            if (!newName || !newSubname) return;
                            const newList = [
                                ...partecipanti,
                                {
                                    name: newName,
                                    subname: newSubname,
                                    email: newEmail,
                                    cellulare: newCellulare,
                                    codicefiscale: newCodiceFiscale,
                                },
                            ];
                            setPartecipanti(newList);
                            const updatedTravels = travelsData.map(t =>
                                String(t.id) === id ? { ...t, partecipanti: newList } : t
                            );
                            localStorage.setItem("travels", JSON.stringify(updatedTravels));
                            setNewName("");
                            setNewSubname("");
                            setNewEmail("");
                            setNewCellulare("");
                            setNewCodiceFiscale("");
                        }}
                    >
                        <div className="row g-2 mb-2">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nome"
                                    value={newName}
                                    onChange={e => setNewName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Cognome"
                                    value={newSubname}
                                    onChange={e => setNewSubname(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row g-2 mb-2">
                            <div className="col">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={newEmail}
                                    onChange={e => setNewEmail(e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Cellulare"
                                    value={newCellulare}
                                    onChange={e => setNewCellulare(e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Codice Fiscale"
                                    value={newCodiceFiscale}
                                    onChange={e => setNewCodiceFiscale(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm">
                            Aggiungi partecipante
                        </button>
                    </form>

                    <input
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Cerca un partecipante..."
                        className="form-control mb-3"
                    />
                    <h5>Partecipanti:</h5>
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