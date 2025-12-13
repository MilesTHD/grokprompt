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

          /* global settings start */
        {/* Global Settings Card */}
<div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '1.5rem', padding: '2rem', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#22d3ee' }}>Chain Settings</h3>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
    <div>
      <label style={{ display: 'block', marginBottom: '0.5rem', color: '#e0e0e0' }}>Aspect Ratio</label>
      <select value={aspect} onChange={e => setAspect(e.target.value)} style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0.75rem', color: 'white' }}>
        <option value="16:9">16:9 (Landscape)</option>
        <option value="9:16">9:16 (Vertical Reels)</option>
        <option value="1:1">1:1 (Square)</option>
        <option value="4:5">4:5 (Portrait)</option>
      </select>
    </div>
    <div>
      <label style={{ display: 'block', marginBottom: '0.5rem', color: '#e0e0e0' }}>Clip Length</label>
      <select value={length} onChange={e => setLength(e.target.value)} style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0.75rem', color: 'white' }}>
        <option>6s (Quick)</option>
        <option>8s</option>
        <option>10s (Standard)</option>
        <option>12s</option>
        <option>15s (Epic)</option>
      </select>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold', cursor: 'pointer', color: spicy ? '#fca5a5' : '#9ca3af' }}>
        <input type="checkbox" checked={spicy} onChange={e => setSpicy(e.target.checked)} style={{ width: '1.75rem', height: '1.75rem', borderRadius: '50%', background: spicy ? '#ef4444' : '#4b5563' }} />
        Spicy Mode {spicy && '(🔥 Engaged)'}
      </label>
    </div>
  </div>
</div>
       /* global settings end */
        
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
  placeholder={
    field === 'subject' ? "Main subject or character (e.g., cyberpunk hacker, majestic eagle)" :
    field === 'motion' ? "Action or movement (e.g., sprinting through rain, soaring over mountains)" :
    field === 'environment' ? "Scene or background (e.g., neon-lit rainy alley, cozy living room)" :
    field === 'camera' ? "Shot type or movement (e.g., low-angle tracking shot, sweeping aerial drone)" :
    field === 'style' ? "Visual aesthetic (e.g., ultra-realistic, cyberpunk 2077, Pixar animation)" :
    field === 'audio' ? "Sound hints (e.g., wet footsteps & synthwave beat, wind whooshes)" :
    "Describe..."
  }
  rows={4}
  style={{ ... }}
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

       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', margin: '3rem 0' }} className="md:flex-row">
  <button onClick={addClip} style={{ padding: '1rem 2.5rem', background: '#22d3ee', color: 'black', border: 'none', borderRadius: '99px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', width: '100%', maxWidth: '300px' }}>
    + Add Next Clip
  </button>
  <button onClick={copyAll} style={{ padding: '1rem 2.5rem', background: '#22c55e', color: 'white', border: 'none', borderRadius: '99px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', width: '100%', maxWidth: '300px' }}>
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
