import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/users/usersSlice";
import EditUserModal from "./EditUserModal";

const UserTable = () => {
  const { list, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-3 border">{user.name}</td>
                <td className="p-3 border">{user.email}</td>
                <td className="p-3 border space-x-2">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteUser(user.id))}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </>
  );
};

export default UserTable;
