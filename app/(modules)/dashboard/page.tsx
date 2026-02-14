import Activities from "@/app/(modules)/dashboard/dashboard.activities";
import LaunchPads from "@/app/(modules)/dashboard/dashboard.pads";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="auth-welcome">
              <Image
                src={"/images/user-4.png"}
                alt="Profile Picture"
                width={72}
                height={72}
                className="profile-picture"
              />
              <div className="content">
                <p>Hello again,</p>
                <p>John Doe</p>
              </div>
            </div>
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
