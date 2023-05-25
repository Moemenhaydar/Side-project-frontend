import React, { useEffect, useState } from "react";
import { useSignOut } from "react-auth-kit";

const Dashboard = () => {
  const signOut = useSignOut();
  const [loggingOut, setLoggingOut] = useState(false);
  useEffect(() => {
    loggingOut && signOut();
  }, [loggingOut]);


  return (
    <div>
      secured
      <button onClick={(e) => setLoggingOut(true)}>sign out</button>
    </div>
  );

};

export default Dashboard;
