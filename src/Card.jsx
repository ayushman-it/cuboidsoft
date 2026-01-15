import { Link } from "react-router-dom";

function Card({title, metadesc, desc, cta, ctaLink, icons}) {
    return (
        <div className="card h-100 shadow-lg border-0 rounded-3">
            <div className="card-body rounded-3 p-0">
                <div className="d-flex card-top py-4 p-3 card-bg align-items-center gap-3">
                    <div className="p-3 bg-light rounded-3"><i className={`fs-4 ${icons}`}></i></div>
                    <div className="card-data">
                        <h6>{title}</h6>
                        <p className="mb-0 lh-1"><small>{metadesc}</small></p>
                    </div>
                </div>
                <div className="py-3 card-bottom bg-white text-dark p-3">
                    <p className="small">{desc}...</p>
                    <Link to={`/${ctaLink}`} className="btn d-inline-block bg-primary btn-rounded px-4 rounded-pill text-light bg-lblue">{cta}</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;