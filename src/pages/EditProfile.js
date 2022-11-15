import React, { useEffect } from "react";

import EditProfileForm from "../Components/EditProfileForm/EditProfileForm";

const EditProfile = ({ loggedInUser }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return <EditProfileForm loggedInUser={loggedInUser} />;
};

export default EditProfile;
