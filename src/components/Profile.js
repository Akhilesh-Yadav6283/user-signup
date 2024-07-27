import React, { useEffect, useState } from 'react';
function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await fetch(`https://dummyjson.com/users/${user.id}`);
      const data = await response.json();
      console.log(data)
      localStorage.setItem('userDetails', JSON.stringify(data));
      setUserDetails(data);
    };

    fetchUserDetails();
  }, []);

  if (!userDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {userDetails.firstName} {userDetails.lastName}</p>
      <p>Email: {userDetails.email}</p>
      <p>Username: {userDetails.username}</p>
      {/* Add more user details as needed */}
    </div>
  );
}

export default Profile;
