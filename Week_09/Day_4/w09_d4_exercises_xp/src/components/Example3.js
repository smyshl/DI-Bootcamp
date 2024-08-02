import { NavLink } from 'react-router-dom';
import data from './db_1.json'


function Example3() {

    return (
        <>
        <h3>Example 3</h3>
            <>
                {data.Experiences.map((item, index) => (
                    <div className='exercise_3' key={index}>
                    <img src={item.logo} width={'150px'} />
                    <br />
                    <a href={item.url}>{item.companyName}</a>
                    <p><strong>{item.roles[0].title}</strong></p>
                    <p>{item.roles[0].startDate} - {item.roles[0].endDate}</p>
                    <p>{item.roles[0].location}</p>
                    <p>{item.roles[0].description}</p>
                    </div>
                ))}
            </>
        </>
    )
};

export default Example3;