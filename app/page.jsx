"use client";

import { useState } from "react";

export default function Home() {
  const [clips, setClips] = useState([
    { id: 1, subject: "", motion: "", environment: "", camera: "", style: "", audio: "" }
  ]);
  const [aspect, setAspect] = useState("9:16");
  const [length, setLength] = useState("10s");
  const [spicy, setSpicy] = useState(false);

  const addClip = () => {
    setClips([...clips, { id: clips.length + 1, subject: "", motion: "", environment: "", camera: "", style: "", audio: "" }]);
  };

  const updateField = (id, field, value) => {
    setClips(clips.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const generatePrompt = (clip, index) => {
    const base = `[Clip ${clip.id}] — ${aspect} — ${length} — Spicy: ${spicy ? "ON" : "off"}\n` +
      `Subject: ${clip.subject || "(empty)"}\nMotion: ${clip.motion || "(empty)"}\nEnvironment: ${clip.environment || "(empty)"}\n` +
      `Camera: ${clip.camera || "(empty)"}\nStyle: ${clip.style || "(empty)"}\nAudio: ${clip.audio || "(empty)"}`;
    return index > 0 ? base + "\n→ Continue seamlessly from previous end-frame (upload screenshot)" : base;
  };

  const copyAll = () => {
    navigator.clipboard.writeText(clips.map((c, i) => generatePrompt(c, i)).join("\n\n"));
    alert("Copied to clipboard!");
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)", color: "white", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "900", textAlign: "center", margin: "2rem 0", background: "linear-gradient(to right, #22d3ee, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          GrokChain
        </h1>
        <p style={{ textAlign: "center", fontSize: "1.4rem", marginBottom: "3rem", color: "#22d3ee" }}>
          Infinite video prompt builder for Grok Imagine
        </p>

        {/* Clips */}
        {clips.map((clip, i) => (
          <div key={clip.id} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "1.5rem", padding: "2rem", marginBottom: "2rem", border: "1px solid rgba(255,255,255,0.1)" }}>
            <h2 style={{ fontSize: "2rem", color: "#22d3ee", marginBottom: "1.5rem" }}>Clip {clip.id}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
              {["subject", "motion", "environment", "camera", "style", "audio"].map(field => (
                <div key={field}>
                  <label style={{ display: "block", textTransform: "capitalize", marginBottom: "0.5rem", color: "#e0e0e0" }}>
                    {field}
                  </label>
                  <textarea
                    value={clip[field]}
                    onChange={e => updateField(clip.id, field, e.target.value)}
                    placeholder={`Describe the ${field}...`}
                    rows={4}
                    style={{ width: "100%", padding: "1rem", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.75rem", color: "white", fontSize: "1rem" }}
                  />
                </div>
              ))}
            </div>
            <details style={{ marginTop: "1.5rem" }}>
              <summary style={{ color: "#22d3ee", cursor: "pointer", fontWeight: "600" }}>Preview Prompt</summary>
              <pre style={{ background: "rgba(0,0,0,0.5)", padding: "1rem", borderRadius: "0.5rem", marginTop: "0.5rem", whiteSpace: "pre-wrap", fontSize: "0.9rem" }}>
                {generatePrompt(clip, i)}
              </pre>
            </details>
          </div>
        ))}

        {/* Buttons */}
        <div style={{ textAlign: "center", margin: "3rem 0" }}>
          <button onClick={addClip} style={{ padding: "1rem 2.5rem", background: "#22d3ee", color: "black", border: "none", borderRadius: "99px", fontSize: "1.2rem", fontWeight: "bold", marginRight: "1rem", cursor: "pointer" }}>
            + Add Next Clip
          </button>
          <button onClick={copyAll} style={{ padding: "1rem 2.5rem", background: "#22c55e", color: "white", border: "none", borderRadius: "99px", fontSize: "1.2rem", fontWeight: "bold", cursor: "pointer" }}>
            Copy All Prompts
          </button>
        </div>

        <p style={{ textAlign: "center", color: "#777", marginTop: "4rem" }}>
          Powered by Grok • https://www.grokprompt.cc
        </p>
      </div>
    </div>
  );
}
