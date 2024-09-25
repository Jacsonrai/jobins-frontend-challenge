import { useState } from "react";
import "./App.css";
function App() {
    const [shouldThrowError] = useState(true);

    if (shouldThrowError) {
        // Throw an error intentionally
        throw new Error("Intentional Error");
    }
    return (
        <>
            <div>
                <h1 className="title">Hello</h1>
            </div>
        </>
    );
}

export default App;
