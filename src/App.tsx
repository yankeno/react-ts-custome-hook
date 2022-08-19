import "./App.css";
import { UserCard } from "./components/UserCard";
import { useAllUSers } from "./hooks/useAllUsers";

function App() {
  // カスタムフックを分割代入する
  const { getUsers, userProfiles, loading, error } = useAllUSers();
  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>fetch</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
