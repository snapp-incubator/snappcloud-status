'use client';

import React, { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';
import "./App.scss";
import Link from 'next/link';
import { transform } from "typescript";

const regions = [
  { id: 1, name: "Cab Teh-1" },
  { id: 2, name: "Cab Teh-2" },
  { id: 3, name: "SnappGroup" }
];

const services = [
  { id: 1, name: "PaaS" },
  { id: 2, name: "IaaS" },
  { id: 3, name: "Object Storage (S3)" },
  { id: 4, name: "Container Registry" },
  { id: 5, name: "Service LoadBalancer (L4)" },
  { id: 6, name: "Ingress (L7)" },
  { id: 7, name: "Proxy" },
  { id: 8, name: "Monitoring" },
  { id: 9, name: "Logging" },
  { id: 10, name: "Traffic observability (Hubble)" },
  { id: 11, name: "ArgoCD" },
  { id: 12, name: "ArgoWF" },

];

const status = [
  { region: 1, service: 1, operational: true },
  { region: 1, service: 2, operational: false },
  { region: 1, service: 3, operational: true },
  { region: 2, service: 1, operational: true },
  { region: 2, service: 2, operational: true },
  { region: 2, service: 3, operational: false },
  { region: 3, service: 1, operational: false },
  { region: 3, service: 2, operational: true },
  { region: 3, service: 3, operational: false }
];


function App() {
  const [data, setData] = useState(status);

  return (
    <>
    <div>
      <h1>Service Health</h1>
      <p>This page provides status information on the services that are part of SnappCloud. Check back here to view the current status of the services listed below. If you are experiencing an issue not listed here, please contact Support. For additional information on these services, please visit <Link style={{color: "blue"}} href="https://docs.snappcloud.io/"> https://docs.snappcloud.io/</Link>. </p>
      <div className="guide" >
        <CheckCircleIcon className="operational-icon" style={{animation: "none", transform: "translateY(5px);"}}/> Available <WarningIcon className="warning-icon" style={{transform: "translateY(5px);"}}/> Disruption <CancelIcon className="outage-icon" style={{transform: "translateY(5px);"}}/> Service Outage
      </div>
    </div>
    <div className="App">
      <hr/>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            {regions.map(region => (
              <th key={region.id}>{region.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service.id}>
              <td>{service.name}</td>
              {regions.map(region => {
                const serviceStatus = data.find(
                  item => item.region === region.id && item.service === service.id
                );

                return (
                  <td key={region.id}>
                    {serviceStatus && serviceStatus.operational ? (
                      <span role="img" aria-label="operational">
                        <WarningIcon className="warning-icon" />
                      </span>
                    ) : (
                        <CheckCircleIcon className="operational-icon" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
