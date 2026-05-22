"use client";

import { useState } from "react";

export default function Home() {
  const [onClickCount, setOnClickCount] = useState(0);
  const [onTouchEndCount, setOnTouchEndCount] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  const addLog = (msg: string) => {
    console.log(msg);
    setLog((prev) => [`${new Date().toISOString().slice(11, 23)} ${msg}`, ...prev].slice(0, 10));
  };

  return (
    <div style={{ fontFamily: "monospace", padding: 20 }}>
      <h2>onClick count: {onClickCount}</h2>
      <h2>onTouchEnd count: {onTouchEndCount}</h2>

      <button
        onClick={() => {
          addLog("onClick fired");
          setOnClickCount((c) => c + 1);
        }}
        style={{ display: "block", margin: "12px 0", padding: "12px 24px", fontSize: 18 }}
      >
        onClick button
      </button>

      <button
        onTouchEnd={() => {
          addLog("onTouchEnd fired");
          setOnTouchEndCount((c) => c + 1);
        }}
        style={{ display: "block", margin: "12px 0", padding: "12px 24px", fontSize: 18 }}
      >
        onTouchEnd button
      </button>

      <div style={{ marginTop: 20 }}>
        <strong>Event log:</strong>
        {log.length === 0 && <p style={{ color: "#888" }}>no events yet</p>}
        {log.map((entry, i) => (
          <p key={i} style={{ margin: "4px 0", color: "#0a0" }}>{entry}</p>
        ))}
      </div>
    </div>
  );
}
