import { useParams } from "react-router-dom";
import { useUsers } from "../contexts/UserContext";
import Loader from "../Spinner/Loader";

const Profile = () => {
  const { users } = useUsers();
  const { id } = useParams();
  if (users.length === 0) {
    return <Loader />;
  }

  const user = users.find((user) => user.id == id);

  if (!user) {
    return <h2>User not found</h2>;
  }
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-8">
        User Profile Section
      </h1>

      <div className="flex justify-center flex-wrap gap-8 p-5 text-blue-200 ">
        <div
          key={user.id}
          className="bg-amber-100 shadow-lg rounded-xl overflow-hidden w-full transition duration-300 hover:shadow-xl p-6"
        >
          <div className="text-center mt-4">
            <h5 className="text-2xl font-bold text-gray-800">{user.name}</h5>
            <p className="text-sm text-indigo-500">{user.title || "User"}</p>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="www.w3.org"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <p>{user.email}</p>
            </div>

            <div className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="www.w3.org"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a4 4 0 115.656 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <p>ZipCode: {user.address.zipcode}</p>
            </div>

            <div className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="www.w3.org"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a4 4 0 115.656 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <p>City: {user.address.city}</p>
            </div>

            <div className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 mr-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="www.w3.org"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M3 7h18M12 3v18"
                ></path>
              </svg>
              <p>Company: {user.company.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
