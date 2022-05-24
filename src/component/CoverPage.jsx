import { Link } from "react-router-dom";


export function CoverPage() {
    return (
        <>
            <div className="container p-5 mt-5" style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0, 0, 0, 0.3))" }}>
                <div className="row">
                    <div className="col-6">
                        <h1 className="text-light">
                            What concerns you <br />
                            about your health today?
                        </h1>
                        <h4 className="text-light mt-5">
                            Check your symptoms and find out <br />
                            what could be causing them. It's fast,
                            <br /> free and anonymous.
                        </h4>
                        <Link to="temp" className="btn btn-primary text-light mt-3 px-5">
                            Start
                        </Link>
                    </div>
                    <div className="col-6">
                        <img src="./assets/img/aman.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    );
}