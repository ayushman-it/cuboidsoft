function CardReview({auther, review, propic}){
    return(
        <div className="card  border-0">
            <div className="d-flex px-3 gap-2 align-items-center">
                <img src={propic} alt="" className="circle-img" style={{width: "40px", borderRadius: "100%"}} />
                <div className="auther-area">
                    <h5 className="mb-0">{auther}</h5>
                    <p className="mb-0 text-secondary"><small>Client Review</small></p>
                </div>
            </div>
            <div className="card-body">
                <p className="small"><small>{review}</small></p>
                <div className="d-flex gap-1 align-items-center">
                    <small><i className="fa-solid fa-star text-warning"></i></small>
                    <small><i className="fa-solid fa-star text-warning"></i></small>
                    <small><i className="fa-solid fa-star text-warning"></i></small>
                    <small><i className="fa-solid fa-star text-warning"></i></small>
                </div>
            </div>
        </div>
    )
}

export default CardReview;