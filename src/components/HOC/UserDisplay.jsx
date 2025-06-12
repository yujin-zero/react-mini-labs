import React from "react";

export default function UserDisplay({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email; {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
