import React from 'react'

function Table(props) {

    return (
        <table style={{ width: "100%" }}>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Phone Number <button className='filter' onClick={props.sortNumber}><i className="fas fa-filter"></i></button>
                    </th>
                    <th>
                        Email <button className='filter' onClick={props.sortEmail}><i className="fas fa-filter"></i></button>
                    </th>
                    <th>
                        Location
                    </th>
                    <th>
                        Image
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(user =>
                    <tr style={{ borderTop: "2px solid gray" }}>

                        <td>
                            {user.name.first} {user.name.last}
                        </td>
                        <td>
                            {user.phone}
                        </td>
                        <td>
                            {user.email}
                        </td>
                        <td>
                            {user.location.state}, {user.location.country}
                        </td>
                        <td>
                            <img src={user.picture.thumbnail} alt="profile" />
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table;