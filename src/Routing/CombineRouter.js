import React, { useState } from "react";
import AllRouter from "./AllRouter";
import AuthRouter from "./AuthRouter";
import Footer from "../Layout/Footer";

import DashboardRouter from "./Dasboardrouter";

function CombineRouter() {
  // Manage authentication state (example: you might fetch this from a context or API)
  const [auth, setAuth] = useState(true);

  return (
    <>
     
     

        {/* Conditionally Render Routes */}
        <div className="flex-1">
          {auth ? (
            <DashboardRouter />
          ) : (
            <>
              <AllRouter />
              <AuthRouter />
            </>
          )}
        </div>
    

      {/* Footer */}
      <Footer />
    </>
  );
}

export default CombineRouter;
