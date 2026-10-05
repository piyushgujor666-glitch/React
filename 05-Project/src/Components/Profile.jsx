import React, { useContext } from "react";
import usercontext from "../context/usercontext";

function Profile() {
  const { user } = useContext(usercontext);

  if (!user) {
    return <div>Please login</div>;
  }

  return (
    <div>
      Welcome {user.email}
    </div>
  );
}

export default Profile;