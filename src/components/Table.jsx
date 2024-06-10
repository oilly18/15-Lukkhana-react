import AdminPage from "./Admin";

const Table = ({data, onDelete}) => {
    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Position</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.lastname}</td>
              <td>{item.position}</td>
              <td>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
    
export default Table;



