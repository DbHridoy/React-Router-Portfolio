import { useLoaderData } from "react-router";

function Github() {
  //   const [user, setUser] = useState("");
  //   const githubInfo = async () => {
  //     const res = await fetch("https://api.github.com/users/DbHridoy")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setUser(data);
  //       });
  //   };

  //   githubInfo();

  const user = useLoaderData();

  return (
    <div className="bg-gray-400 text-center text-2xl font-bold text-white">
      {user.login}: {user.followers}
      <img src={user.avatar_url} alt="" />
    </div>
  );
}

export default Github;
