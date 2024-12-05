import React from "react";
import "../coconfor.css";

const Admin = () => {
  return (
    <>
      <h1>Admin Dashboard</h1>
      <div className="log-container">
        {/* LogChat Box */}
        <div className="logchat-box">
          <div className="log green">✅ Successful request processed</div>
          <div className="log red">❌ Failed to connect to the database</div>
          <div className="log yellow">⚠️ API response delayed</div>
          <div className="log yellow">⚠️ API response delayed</div>
          <div className="log green">✅ Successful request processed</div>
          <div className="log yellow">⚠️ API response delayed</div>
          <div className="log yellow">⚠️ API response delayed</div>
          <div className="log red">❌ Failed to connect to the database</div>
          <div className="log red">❌ Failed to connect to the database</div>
          <div className="log green">✅ Successful request processed</div>
          <div className="log green">✅ Successful request processed</div>
        </div>

        {/* LogStats Box */}
        <div className="logstats-box">
          <h2>Site Statistics</h2>
          <div className="stat">
            Total Requests: <span>1250</span>
          </div>
          <div className="stat">
            Active Users: <span>320</span>
          </div>
          <div className="stat">
            Error Rate: <span>0.8%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
