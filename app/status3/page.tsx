'use client';

import React, { useState, useEffect } from "react";

const StatusPage = () => {
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8081/ping")
      .then(res => res.json())
      .then(data => {
        setStatus(data.status);
        setMessage(data.message);
      })
      .catch(error => {
        setStatus("error");
        setMessage("Unable to fetch status information.");
      });
  }, []);

  return (
    <div>
      <h1>System Status</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "ok" && (
        <p style={{ color: "green" }}>All systems are operational.</p>
      )}
      {status === "warning" && (
        <p style={{ color: "orange" }}>
          Some systems are experiencing issues.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "red" }}>
          There are severe issues with the system.
        </p>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default StatusPage;
