import React , {useEffect , useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function ListPassengers() {

    const [passengers , setPassengers] = useState([]);

    const deletePassenger = async (passenger) => {
        try {
            
            const deletePassenger = await fetch(`http://localhost:5000/passenger/${passenger.pid}`,{
                method: "DELETE"
            })

            alert(`Passenger ${passenger.fname} ${passenger.lname} has been deleted !`);
            window.location = "/passenger"
            console.log(deletePassenger);
        } catch (err) {
            console.error(err.message);
        }
    }

    const getPassengers = async() => {
        try {
            
            const response = await fetch("http://localhost:5000/passenger");
            const jsonData = await response.json();

            setPassengers(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getPassengers();
    },[])

    return(
        <div>
            <h2 className="text-center mt-3 mb-3">List of Passengers</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Phone No.</th>
                    <th>Gender</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {passengers.map(passenger => (
                        <tr key={passenger.pid}>
                            <td>{passenger.pid}</td>
                            <td>{passenger.fname}</td>
                            <td>{passenger.lname}</td>
                            <td>{passenger.phone_no}</td>
                            <td>{passenger.gender}</td>
                            <td><button className="btn btn-danger" onClick={() => deletePassenger(passenger)}><FontAwesomeIcon icon={faTrash} /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}