import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/usersSlice";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      addUser({
        id: Date.now(),
        name,
        email,
      })
    );

    setName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-4 rounded shadow mt-4 flex gap-3"
    >
      <input
        className="border p-2 rounded w-full"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 rounded w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 rounded">Add</button>
    </form>
  );
};

export default UserForm;
