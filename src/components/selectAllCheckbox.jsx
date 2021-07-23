import React, { useState, useEffect } from 'react'

const SelectAllCheckbox = () => {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    let userTableData = [
      {
        id: 1,
        first: 'Rajesh',
        last: 'Adhikari',
        email: 'radhikari671@gmail.com',
      },
      { id: 2, first: 'Yash', last: 'Pal', email: 'yashpal123@gmail.com' },
      {
        id: 3,
        first: 'Shreya',
        last: 'Negi',
        email: 'shreyanegi675@gmail.com',
      },
      { id: 4, first: 'Manish', last: 'Pandey', email: 'manish350@gmail.com' },
      { id: 5, first: 'Yogita', last: 'Bisht', email: 'bisht4441@gmail.com' },
    ]
    const Data = userTableData.map(data => {
      return {
        select: false,
        id: data.id,
        first: data.first,
        last: data.last,
        email: data.email,
      }
    })
    setUserData(Data)
  }, [])

  const inputHandleChange = event => {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    setUserData({
      ...userData,
      [name]: value,
    })
  }

  return (
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              All  
              <input
                type="checkbox"
                onChange={e => {
                  let checked = e.target.checked
                  setUserData(
                    userData.map(d => {
                      d.select = checked
                      return d
                    })
                  )
                }}
              />
            </th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Address</th>
          </tr>
        </thead>
        {userData.map(user => (
          <tbody>
            <tr key={user.id}>
              <td>
                {' '}
                <input
                  onChange={event => {
                    let checked = event.target.checked
                    setUserData(
                      userData.map(d => {
                        if (user.id === d.id) {
                          d.select = checked
                        }
                        return d
                      })
                    )
                  }}
                  type="checkbox"
                  checked={user.select}
                />
              </td>
              <td>{user.first}</td>
              <td>{user.last}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default SelectAllCheckbox
