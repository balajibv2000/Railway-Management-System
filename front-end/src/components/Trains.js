import React, {useEffect , useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSubway } from '@fortawesome/free-solid-svg-icons'

export default function Trains(){

    const [trains , setTrains] = useState([]);

    const getTrains = async() => {
        try {
            
            const response = await fetch("http://localhost:5000/train");
            const jsonData = await response.json();

            setTrains(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTrains();
    },[])

    return(
        <div className="container">
        <h2 className="text-center mt-3 mb-3">List of Trains <FontAwesomeIcon icon={faSubway} /></h2>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Train No.</th>
                <th>Train Name</th>
                <th>Total Seats</th>
                <th>Available Seats</th>
                <th>Arrival Time</th>
                <th>Departure Time</th>
            </tr>
            </thead>
            <tbody>
                {trains.map(train => (
                    <tr key={train.train_no}>
                        <td>{train.train_no}</td>
                        <td>{train.tname}</td>
                        <td>{train.total_seats}</td>
                        <td>{train.available_seats}</td>
                        <td>{train.arrival_time}</td>
                        <td>{train.departure_time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}