import React , {useEffect , useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function ListEmployees() {

    const [employees , setEmployees] = useState([]);

    const deleteEmployee = async (employee) => {
        try {
            
            const deleteEmployee = await fetch(`http://localhost:5000/employee/${employee.eid}`,{
                method: "DELETE"
            })

            alert(`Employee ${employee.fname} ${employee.lname} has been deleted !`);
            window.location = "/employee"
            console.log(deleteEmployee);
        } catch (err) {
            console.error(err.message);
        }
    }

    const getEmployees = async() => {
        try {
            
            const response = await fetch("http://localhost:5000/employee");
            const jsonData = await response.json();

            setEmployees(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getEmployees();
    },[])

    return(
        <div>
            <h2 className="text-center mt-3 mb-3">List of Employees</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Phone No.</th>
                    <th>Salary</th>
                    <th>Gender</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.eid}>
                            <td>{employee.eid}</td>
                            <td>{employee.fname}</td>
                            <td>{employee.lname}</td>
                            <td>{employee.phone_no}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.gender}</td>
                            <td><button className="btn btn-danger" onClick={() => deleteEmployee(employee)}><FontAwesomeIcon icon={faTrash} /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}