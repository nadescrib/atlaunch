"use client";

import { useState } from "react";

export default function Activities() {
  const [activities] = useState([
    {
      act: "Paid a launcher",
      date: "2026-02-21",
      amount: 250,
    },
    {
      act: "Paid a launcher",
      date: "2026-02-21",
      amount: 250,
    },
    {
      act: "Paid a launcher",
      date: "2026-02-21",
      amount: 250,
    },
  ]);

  return (
    <div className="activities">
      <div className="row">
        {activities.map((a, i) => (
          <div className="col-12" key={i}>
            <div className="card-transparent">
              {a.date} -&gt; {a.act}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
