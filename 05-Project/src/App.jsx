import Login from "./Components/login";
import Profile from "./Components/Profile";
import UserContextProvider from "./context/usercontextprovider";

function App() {
  return (
    <UserContextProvider>

      <h1>React with Piyush</h1>

      <Login />

      <Profile />

    </UserContextProvider>
  );
}

export default App;