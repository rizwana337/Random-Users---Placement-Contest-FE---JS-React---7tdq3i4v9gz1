import React from "react";

function Users({ isLoading, items }) {
  return (
    <div>
      {isLoading ? (
        <div id="loading">Loading...</div>
      ) : (
        <div>
          {items.map((name, index) => (
            <div key={index} className="user">
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
