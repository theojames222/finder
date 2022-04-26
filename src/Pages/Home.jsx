import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold p-4">Find Github Repositories</h1>
      <p>Use the Search to Discover Github Repos </p>
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
