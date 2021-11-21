import React, {useEffect , useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'

export default function Trains(){

    const [stations , setStations] = useState([]);

    const getStations = async() => {
        try {
            
            const response = await fetch("http://localhost:5000/station");
            const jsonData = await response.json();

            setStations(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getStations();
    },[])

    return(
        <div className="container">
        <h2 className="text-center mt-3 mb-3">List of Stations <FontAwesomeIcon icon={faLandmark} /></h2>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Station No.</th>
                <th>Station Name</th>
                <th>State</th>
                <th>District</th>
                <th>Pincode</th>
            </tr>
            </thead>
            <tbody>
                {stations.map(station => (
                    <tr key={station.sno}>
                        <td>{station.sno}</td>
                        <td>{station.sname}</td>
                        <td>{station.state}</td>
                        <td>{station.district}</td>
                        <td>{station.pincode}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}