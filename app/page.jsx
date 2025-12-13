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
    return index > 0 ? base + "\n→ Continue seamlessly from previous end-frame" : base;
  };

  const copyAll = () => {
    navigator.clipboard.writeText(clips.map((c, i) => generatePrompt(c, i)).join("\n\n"));
    alert("Copied!");
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)", color: "white", padding: "2rem", fontFamily: "system-ui" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "3rem", textAlign: "center", marginBottom: "1rem", color: "#22d3ee" }}>GrokChain</h1>
        <p style={{ textAlign: "center", marginBottom: "3rem", color: "#a78bfa" }}>Video Prompt Builder for Grok Imagine</p>

        {clips.map((clip, i) => (
          <div key={clip.id} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "1rem", padding: "1.5rem", marginBottom: "1.5rem", border: "1px solid rgba(255,255,255,0.1)" }}>
            <h2 style={{ fontSize: "1.5rem", color: "#22d3ee", marginBottom: "1rem" }}>Clip {clip.id}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
              {["subject", "motion", "environment", "camera", "style", "audio"].map(field => (
                <div key={field}>
                  <label style={{ display: "block", marginBottom: "0.5rem", color: "#e0e0e0" }}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <textarea
                    value={clip[field]}
                    onChange={e => updateField(clip.id, field, e.target.value)}
                    placeholder={`Describe ${field}...`}
                    rows={3}
                    style={{ width: "100%", padding: "0.5rem", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.5rem", color: "white" }}
                  />
                </div>
              ))}
            </div>
            <details style={{ marginTop: "1rem" }}>
              <summary style={{ color: "#22d3ee", cursor: "pointer" }}>Preview Prompt</summary>
              <pre style={{ background: "rgba(0,0,0,0.5)", padding: "1rem", borderRadius: "0.5rem", marginTop: "0.5rem", whiteSpace: "pre-wrap" }}>
                {generatePrompt(clip, i)}
              </pre>
            </details>
          </div>
        ))}

        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <button onClick={addClip} style={{ padding: "1rem 2rem", background: "#22d3ee", color: "white", border: "none", borderRadius: "0.5rem", marginRight: "1rem", cursor: "pointer" }}>
            + Add Next Clip
          </button>
          <button onClick={copyAll} style={{ padding: "1rem 2rem", background: "#22c55e", color: "white", border: "none", borderRadius: "0.5rem", cursor: "pointer" }}>
            Copy All Prompts
          </button>
        </div>

        <p style={{ textAlign: "center", color: "#9ca3af", fontSize: "0.875rem" }}>
          Powered by Grok • grokprompt.cc
        </p>
      </div>
    </div>
  );
}
