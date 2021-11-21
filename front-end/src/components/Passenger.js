import React , {useState} from "react"
import ListPassengers from "./ListPassengers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Passenger() {

    const [fname , setFname] = useState("");
    const [lname , setLname] = useState("");
    const [phone_no , setPhoneNo] = useState("");
    const [address , setAddress] = useState("");
    const [dob , setDob] = useState("");
    const [gender , setGender] = useState("");
    const [pid , setPid] = useState('');

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {fname , lname , phone_no , address , dob , gender , pid };
            const response = await fetch("http://localhost:5000/passenger" , {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
            window.location = "/passenger";
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        <div className="container">
            <h1 className="text-center mt-3 mb-3">Passengers</h1>
            <form onSubmit={onSubmitForm}>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                    <label >First name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="validationDefault01" 
                        placeholder="First name" 
                        value={fname} 
                        onChange = {e => setFname(e.target.value)}
                        required />
                    </div>
                    <div className="col-md-4 mb-3">
                    <label >Last name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="validationDefault02" 
                        placeholder="Last name" 
                        value={lname} 
                        onChange = {e => setLname(e.target.value)}
                        required />
                    </div>
                    <div className="col-md-4 mb-3">
                    <label >Phone No.</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupPrepend2">+91</span>
                        </div>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationDefaultPhone" 
                            placeholder="Phone No." 
                            value={phone_no} 
                            onChange = {e => setPhoneNo(e.target.value)}
                            aria-describedby="inputGroupPrepend2" 
                            required />
                    </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                    <label >Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="validationDefault03" 
                        placeholder="Address" 
                        value={address}
                        onChange = {e => setAddress(e.target.value)} />
                    </div>
                    <div className="col-md-3 mb-3">
                    <label >Date of Birth</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="validationDefault04" 
                        placeholder="yyyy-mm-dd" 
                        value={dob} 
                        onChange = {e => setDob(e.target.value)}
                        required />
                    </div>
                    <div className="col-md-3 mb-3">
                    <label >Gender</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="validationDefault05" 
                        placeholder="Gender" 
                        value={gender} 
                        onChange = {e => setGender(e.target.value)}
                        required />
                    </div>
                    <div className="col-md-3 mb-3">
                    <label >Passenger Id</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="validationDefault05" 
                        placeholder="Passenger Id" 
                        value={pid} 
                        onChange = {e => setPid(e.target.value)}
                        required />
                    </div>

                </div>
                <button className="btn btn-primary" type="submit">Add Passenger <FontAwesomeIcon icon={faUser} /></button>
            </form>
            <ListPassengers />
        </div>
    )
}