import { useNavigate } from "react-router-dom";

import { useUsers } from "../contexts/UserContext";
import Loader from "../Spinner/Loader";

function About() {
  const { users, IsLoader } = useUsers();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between flex-wrap p-5 ">
      {IsLoader === false ? (
        users &&
        users.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs m-4 w-[30%]"
            >
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                {item.name}
              </h5>
              <p className="text-body mb-6">{item.company.name}</p>
              <p className="text-body mb-6">{item.email}</p>

              <div
                onClick={() => navigate(`/Profile/${item.id}`)}
                className="border-2 cursor-pointer bg-amber-600 text-white w-17 p-2"
              >
                Profile
              </div>
            </div>
          );
        })
      ) : (
       
        <Loader />
    
      )}
    </div>
  );
}

export default About;
