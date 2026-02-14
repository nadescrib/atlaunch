"use client";

import { defaultDate, defaultTime } from "@/app/_helpers/datetime";
import { Rocket, UserRound } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LaunchPads() {
  const [pads] = useState([
    {
      name: "Ivey's Court Game",
      date: "2026-02-21",
      start: "19:00:00",
      end: "21:00:00",
      launcher: 250,
      rocketeer: "Johnny",
      icon: "/images/basketball.png",
    },
    {
      name: "Activity 1",
      date: "2020-02-21",
      start: "19:00:00",
      end: "21:00:00",
      launcher: 250,
      rocketeer: "Johnny",
      icon: "/images/summer.png",
    },
    {
      name: "Activity 1",
      date: "2020-02-21",
      start: "19:00:00",
      end: "21:00:00",
      launcher: 250,
      rocketeer: "Johnny",
      icon: "/images/party.png",
    },
  ]);

  return (
    <div className="launch-pads">
      <div className="row">
        {pads.map((p, i) => (
          <div className="col-12 col-lg-6 col-xl-4" key={i}>
            <div className="card">
              <div className="content">
                <div className="headings">
                  <p className="name">{p.name}</p>
                  <p className="datetime">
                    {defaultDate(p.date)} | {defaultTime(p.start)} -{" "}
                    {defaultTime(p.end)}
                  </p>
                </div>
                <div className="info">
                  <p className="launcher">
                    <Rocket size={16} color="white" />
                    {p.launcher}
                  </p>
                  <p className="rocketeer">
                    <UserRound size={16} color="white" />
                    {p.rocketeer}
                  </p>
                </div>
              </div>
              <Image
                src={p.icon || "/images/rocket.png"}
                alt="Pad Icon"
                width={64}
                height={64}
                className="pad-icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
