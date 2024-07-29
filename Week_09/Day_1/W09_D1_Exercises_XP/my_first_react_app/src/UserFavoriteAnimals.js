import React from 'react';


class UserFavoriteAnimals extends React.Component{
    render() {
        return (
        <>
        <ul>
            {
            this.props.favAnimals.map((item, index) => {
                return <li key={index}> {item} </li>
            })
            }
        </ul>
        </>
        )
    }
}

export default UserFavoriteAnimals;