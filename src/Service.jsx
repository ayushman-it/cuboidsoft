import services from "./services";
import Card from "./Card";


function Service(){
    return(
    <article className="py-5 bg-secondary-subtle service-cards">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <h1 className="fw-bold w-75 m-auto">Building Future-Ready Systems with Expert IT Services</h1>
                    </div>
                </div>
                {services.map((data => (
                    <div className="col-md-4 my-3">
                        <Card title={data.title} metadesc={data.metadesc} desc={data.desc} cta={data.cta} ctaLink={data.ctaLink} icons={data.icons}></Card>
                    </div>
                )))}

            </div>
        </div>
    </article>
    )
}

export default Service;