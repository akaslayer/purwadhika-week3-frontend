import React from 'react'

interface userProps {
  name: string,
  email: string,
  password: string
}

const UserData: React.FC<userProps> = ({ name, email, password }) => {
  return (
    <tr>
      <td className="py-3">{name}</td>
      <td className="py-3">{email}</td>
      <td className="py-3">{password}</td>
    </tr>
  )
}

export default UserData