import { useState } from "react";

function Welcome() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center" }}>
            <h1 className="big-count">Count:{count}</h1>
            <button
                className="increment-button"
                onClick={() => setCount((c) => c + 1)}
            >
                Increment
            </button>
        </div>
    );
}

export default Welcome;