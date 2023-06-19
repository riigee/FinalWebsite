
import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount((x) => x-1)}>-</button>
            <span className="counter" style={{fontSize: "200%", padding:"0 2em"}}>{count}</span>
            <button onClick={() => setCount((x) => x+1)}>+</button>
        </div>
    );
}