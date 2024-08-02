import data from './db_1.json'


function Example1() {

    return (
        <>
        <h3>Example 1</h3>
            <ul className='exercise'>
                {data.SocialMedias.map((item, index) => (
                    <li className='exercise'key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
};

export default Example1;