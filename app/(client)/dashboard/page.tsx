import {
  Activities,
  AuthWelcome,
  LaunchPads,
} from "@/app/_components/dashboard";
import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <AuthWelcome />
          </div>
          <div className="col-12">
            <div className="card-launcher">
              <p className="amount-label">Launcher</p>
              <p className="amount">123,456.00</p>
            </div>
          </div>
          <div className="col-12">
            <h1>Launch Pads</h1>
            <LaunchPads />
          </div>
          <div className="col-12">
            <h1>Activities</h1>
            <Activities />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
