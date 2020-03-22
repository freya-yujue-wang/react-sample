import React from "react";

function Hello() {
    const sayHello = () => {
        console.log("hello");
      }

    return (
        <div>
            <h3>This is hello componment.</h3>
            <button onClick={sayHello}>Hello</button>
        </div>
    )
}

export default Hello;