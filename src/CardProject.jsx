import {Link} from "react-router-dom";

function CardProject({projectImg, title, subtitle, desc, proLin}) {
    return (
        <div className="card h-100 shadow-sm  border-0 rounded-3 mb-3">
            <img src={projectImg} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title fs-6 mb-0">{title}</h5>
                <p className="card-subtitle text-lblue"><small>{subtitle}</small></p>
                <p className="card-text my-2"><small>{desc}</small></p>
                <div className="cta-area py-2 text-center">
                    <Link to={proLin} className="text-tblue text-center text-decoration-none"><small>View Case Study <i className="fa-solid fa-arrow-right"></i></small> </Link>
                </div>
            </div>
        </div>
    )
}

export default CardProject;