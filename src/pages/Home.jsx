import React, { useState, useEffect } from "react";

function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div style={{ color: 'black' }}>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <input type= "button" />
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>
                <h1>This is Nigel my project car</h1>

            
                <p>pottery</p>
                <h2 className='holes'>How many holes does Nigel have</h2>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                </div>
            
            </div>
        </>
    );
}

export default Home;

