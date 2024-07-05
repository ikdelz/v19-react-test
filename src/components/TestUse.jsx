import { use } from 'react'
import { userContext } from '../App';

const getData = async () => {
  const res = await fetch("https://dummyjson.com/users");
  return res.json();
};

const TestUse = () => {
  const {users} = use(getData())
  const name = use(userContext)

  return (
    <div>
      <p>use() with context, the name is: {name}</p>
      {users.slice(0,5).map((user) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </div>
  );
}

export default TestUse