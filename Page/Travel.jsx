import initialTravels from "../src/data/travels";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Travel() {
    const [travels, setTravels] = useState(() => {
        const saved = localStorage.getItem("travels");
        return saved ? JSON.parse(saved) : initialTravels;
    });

    useEffect(() => {
        localStorage.setItem("travels", JSON.stringify(travels));
    }, [travels]);

    const [name, setName] = useState("");
    const [dataPartenza, setDataPartenza] = useState("");
    const [dataRitorno, setDataRitorno] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !dataPartenza || !dataRitorno) return;
        setTravels([
            ...travels,
            {
                id: Date.now(),
                name,
                dataPartenza,
                dataRitorno,
                partecipanti: [],
            }
        ]);
        setName("");
        setDataPartenza("");
        setDataRitorno("");
    };

    return (
        <div className="container p-5 mt-5">
            <form className="mb-5" onSubmit={handleSubmit}>
                <div className="row g-2 align-items-end">
                    <div className="col">
                        <label for="nome_viaggio">Nome viaggio</label>
                        <input
                            id="nome_viaggio"
                            type="text"
                            className="form-control"
                            placeholder="Dove si va?"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <label for="partenza">Data di partenza</label>
                        <input
                            id="partenza"
                            type="date"
                            className="form-control"
                            placeholder="Data di partenza"
                            value={dataPartenza}
                            onChange={e => setDataPartenza(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <label for="ritorno">Data di ritorno</label>
                        <input
                            id="ritorno"
                            type="date"
                            className="form-control"
                            placeholder="Data di ritorno"
                            value={dataRitorno}
                            onChange={e => setDataRitorno(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-success">Aggiungi viaggio</button>
                    </div>
                </div>
            </form>

            <div className="row row-cols-1 g-4">
                {travels.map((travel) => (
                    <div className="col" key={travel.id}>
                        <div className="card h-100">
                            <div className="row g-0 h-100">
                                <div className="col-md-4 d-flex align-items-center">
                                    <img
                                        className="cardimg img-fluid rounded-start"
                                        src={`https://picsum.photos/500/300?random=${travel.id}`}
                                        alt={travel.name}
                                        style={{ objectFit: 'cover', width: '100%', height: '300px' }}
                                    />
                                </div>
                                <div className="col-md-5 d-flex align-items-center">
                                    <div className="card-body w-100">
                                        <h5 className="card-title">{travel.name}</h5>
                                        <p className="card-text fw-bold">Data di Partenza: {travel.dataPartenza}</p>
                                        <p className="card-text fw-bold">Data di Ritorno: {travel.dataRitorno}</p>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex align-items-center justify-content-center">
                                    <Link to={`/travel/${travel.id}`} className="btn btn-primary text-light">Dettagli</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}