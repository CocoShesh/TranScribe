import { useUser } from "./UserContext";

export const User = () => {
  const userContext = useUser();

  const handleLogin = () => {
    userContext.setUser({
      name: "John Doe",
      email: "glenardrefamonte1@gmail.com",
    });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}> login</button>
      <button onClick={handleLogout}> logout</button>
      <h1>Name:{userContext?.user?.name}</h1>
      <h1>Email:{userContext?.user?.email}</h1>
    </div>
  );
};
