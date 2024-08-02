import data from './db.json'


function PostList(){

    return (
        <>
        <h2>Hi! This is a Title</h2>
        {data.map((item) => (
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
            </div>
        ))}

        </>
    )
};

export default PostList;