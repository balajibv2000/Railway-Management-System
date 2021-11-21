import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/"><p className="brand">Railways</p></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/train" >Trains</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/passenger">Passenger</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/employee">Employee</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/stations">Stations</Link>
                </li>
                
            </ul>
            </div>
        </nav>
    )
}
