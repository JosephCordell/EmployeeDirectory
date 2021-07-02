export default function Table({ employees }) {
  return (
    <div>
      <table id={'table'}>
        <thead>
          <tr>
            <th>*</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody> 
          {employees && employees.length > 0 ? (

            employees.map((employee) => (
              <tr key={employee.login.uuid}>
            <td>
            <img
            className={'headshot'}
            alt={employee.name.last}
            src={employee.picture.medium}
            />
            </td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.location.country}</td>
            </tr>
            ))
            ) : ( <h1> No Results Found! </h1>)
          }
        </tbody>
      </table>
    </div>
  );
}
