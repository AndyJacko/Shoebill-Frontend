import React from "react";

import EditProfileForm from "../Components/EditProfileForm/EditProfileForm";

const EditProfile = ({ loggedInUser }) => {
  return <EditProfileForm loggedInUser={loggedInUser} />;
};

export default EditProfile;
