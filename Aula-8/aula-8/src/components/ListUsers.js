import users from "../data";
function ListUser() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> <br></br>- {user.description}
        </li>
      ))}
    </ul>
  );
}

export default ListUser;
