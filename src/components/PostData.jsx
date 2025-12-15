import axios from "axios";
import { useState } from "react";
import { useUsers } from "../contexts/UserContext";

export const PostData = () => {
  const { users, setUsers } = useUsers();

  const [inputs, setInputs] = useState({
    id: users.length,
    name: "",
    email: "",
    zipcode: "",
    city: "",
    company: "",
  });

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    if (
      inputs.id == "" &&
      inputs.name == "" &&
      inputs.email == "" &&
      inputs.zipcode == "" &&
      inputs.company == "" &&
      inputs.city == ""
    ) {
      alert("all fileds are required");
      return;
    }

    try {
      await axios.post("https://jsonplaceholder.typicode.com/users", inputs);

      setUsers((previous) => [
        ...previous,
        {
          id: inputs.id,
          name: inputs.name,
          email: inputs.email,
          company: { name: inputs.company },
          address: { city: inputs.city, zipcode: inputs.zipcode },
        },
      ]);

      setInputs({
        id: users.length + 1,
        name: "",
        email: "",
        zipcode: "",
        city: "",
        company: "",
      });

      alert("successfully Data Added");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white  rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Add User Data {inputs.name}
      </h2>
      <form className="space-y-4" onSubmit={handleAdd}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            value={inputs.name}
            id="name"
            type="text"
            name="name"
            placeholder="Enter Name..."
            className="w-full px-4 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            required
            onChange={handleInputs}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            value={inputs.email}
            onChange={handleInputs}
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email..."
            className="w-full px-4 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="zipcode"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Zip Code
            </label>
            <input
              value={inputs.zipcode}
              onChange={handleInputs}
              id="zipcode"
              type="text"
              name="zipcode"
              placeholder="Enter Zip Code..."
              className="w-full px-4 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              City
            </label>
            <input
              value={inputs.city}
              onChange={handleInputs}
              id="city"
              type="text"
              name="city"
              placeholder="Enter City..."
              className="w-full px-4 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company
          </label>

          <input
            value={inputs.company}
            onChange={handleInputs}
            id="company"
            type="text"
            name="company"
            placeholder="Enter Company name..."
            className="w-full px-4 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className=" cursor-pointer w-full flex justify-center py-3 px-4 border border-transparent  shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 "
          onClick={handleAdd}
        >
          Post Data
        </button>
      </form>
    </div>
  );
};

export default PostData;
