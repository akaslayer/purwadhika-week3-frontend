import NavBar from "../components/NavBar";
import UserData from "../components/UserData";
import { useUserContext } from "../context/UserContext";

const User = () => {
  const { userData } = useUserContext();
  return (
    <>
      <NavBar />
      <div className="m-auto flex justify-center mt-20">
        <table className="w-[60%] border-seperate border-spacing-10 border border-slate-400">
          <thead className="text-left font-bold">
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((data, index) => (
              <UserData {...data} key={index} />
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default User