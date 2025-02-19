import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 w-96 bg-white text-center">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-500 text-lg">{email}</p>
    </div>
  );
};

export default UserCard;
