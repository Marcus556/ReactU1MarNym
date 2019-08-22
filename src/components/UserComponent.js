import React from 'react';

function UserComponent(props) {
  let users = props.users;
  let color = props.color;



  const userList = users.map((user, i) => {
    return <li key={i}>{user}</li>
  })



  return (
    
    <div>
      <ul style={{color: color}}>
        {userList}
      </ul>

      
    </div>
    
  )
}

export default UserComponent;