
import React, { useState } from "react";
import './Counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);
    
    const doDonation = (event) => {
        event.Default();
      };

    return (
        <div className="donations">
            <button onClick={() => setCount((x) => Math.max(x - 1, 0))}>-</button>
            <span className="counter" style={{fontSize: "200%", padding:"0 2em"}}>{count}</span>
            <button onClick={() => setCount((x) => x+1)}>+</button>
      <form onSubmit={doDonation}>
        <button>Donate</button>
      </form>
    </div>
        
    );
}