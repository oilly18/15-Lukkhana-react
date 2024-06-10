import AdminPage from "./components/Admin";
import UserPage from "./components/User";
import { useState } from "react";


const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  // const [replyMessage, setReplyMessage] = useState("");
  
  // const handleReply = (message) => {
  //   setReplyMessage(message);
  // };
  // const message1 = " React - ";
  
  return (
    <div>
      <h1>Generation Thailand</h1>
      <h1>react - Assessment</h1>
      <button onClick={() => setIsAdmin(false)}>User Home Sector</button>
      <button onClick={() => setIsAdmin(true)}>Admin Home Sector</button>
      {isAdmin ? <AdminPage /> : <UserPage />}
    </div>
  );
};

export default Home;
