import React from "react";

import Pages from "./routes/routes";
import { CookiesProvider } from "react-cookie";

function App() {
    return (
        <div>
            <CookiesProvider>
                <Pages />
            </CookiesProvider>
        </div>
    );
}

export default App;
