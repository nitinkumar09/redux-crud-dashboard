import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Redux CRUD Dashboard
        </h1>
        <UserForm />
        <UserTable />
      </div>
    </div>
  );
};

export default Dashboard;
