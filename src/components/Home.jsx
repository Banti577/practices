import { useNavigate } from "react-router-dom";

import { useUsers } from "../contexts/UserContext";
import Loader from "../Spinner/Loader";

function Home({ className = "" }) {
  const { users, IsLoader } = useUsers();
  const navigate = useNavigate();
  return (
    <div
      className={`w-full mt-10 mb-10  p-6 bg-neutral-primary-soft border border-default rounded-base shadow-xs ${className}`}
    >
      <div className="flex items-center justify-between   ">
        <h5 className="text-xl font-semibold leading-none text-heading">
          {} Users
        </h5>
        <a
          onClick={() => navigate(`/about`)}
          className="font-medium text-fg-brand hover:underline"
        ></a>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-default">
          {IsLoader === false ? (
            users &&
            users.map((item) => {
              return (
                <li key={item.id} className="py-4 sm:py-4">
                  <div className="flex items-center gap-2">
                    <div className="shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-2">
                      <p className="font-medium text-heading truncate">
                        {item.name}
                      </p>
                      <p className="text-sm text-body truncate">{item.email}</p>
                    </div>
                    <div className=" cursor-pointer p-2 bg-green-400 inline-flex items-center font-medium text-heading">
                      <button onClick={() => navigate(`/Profile/${item.id}`)}>
                        Profile
                      </button>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <Loader />
          )}
        </ul>
      </div>
    </div>
  );
}

export default Home;
