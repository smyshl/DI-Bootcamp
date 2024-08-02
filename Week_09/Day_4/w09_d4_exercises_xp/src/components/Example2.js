import data from './db_1.json'


function Example2() {

    return (
        <>
        <h3>Example 2</h3>
            <>
                {data.Skills.map((item, index) => (
                    <div key={index}>
                    <h4 >{item.Area}</h4>
                    <ul className='exercise'>
                    {item.SkillSet.map((skill_item, skill_index) => (
                        <li className='exercise' key={skill_index}>{skill_item.Name}</li>
                    ))}
                    </ul>
                    </div>
                ))}
            </>
        </>
    )
};

export default Example2;