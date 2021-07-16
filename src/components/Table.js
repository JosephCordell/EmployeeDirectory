export default function Table({ employees, sort }) {
  return (
    <div>
      <table className={'container'}>
        <thead>
          <tr>
            <th>Photo</th>
            <th onClick={() => sort('name.first')} className={'hover'}>
              First &nbsp;
              <i className="fas fa-sort" />{' '}
            </th>
            <th onClick={() => sort('name.last')} className={'hover'}>
              Last &nbsp; <i className="fas fa-sort" />
            </th>
            <th onClick={() => sort('email')} className={'hover'}>
              Email &nbsp; <i className="fas fa-sort" />
            </th>
            <th onClick={() => sort('phone')} className={'hover'}>
              Phone &nbsp; <i className="fas fa-sort" />
            </th>
            <th onClick={() => sort('location.country')} className={'hover'}>
              Country &nbsp; <i className="fas fa-sort" />
            </th>
          </tr>
        </thead>
        <tbody>
          {employees && employees.length > 0 ? (
            employees.map((employee, index) => (
              <tr
                key={employee.login.uuid}
                className={index % 2 === 0 ? 'odd' : 'even'}
              >
                <td>
                  <img alt={employee.name.last} src={employee.picture.medium} />
                </td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.location.country}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className={'noResults'}>
                No Results Found!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
