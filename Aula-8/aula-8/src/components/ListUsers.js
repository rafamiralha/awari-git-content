import User from "./Users";
function ListUser({users}) {
  return (<ul>
    {users.map((user) => (
        <User key={user.id} user={user}></User>
    ))}
  </ul>)
}

export default ListUser;
