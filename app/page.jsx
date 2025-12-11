"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('GrokChain v6 – Minimal Working!');
    document.body.style.background = 'linear-gradient(to bottom right, #0f172a 0%, #581c87 50%, #0f172a 100%)';
    document.body.style.color = '#ffffff';
  }, []);

  const [clips, setClips] = useState([{
    id: 1, subject: '', motion: '', environment: '', camera: '', style: '', audio: ''
  }]);
  const [aspect, setAspect] = useState('9:16');
  const [length, setLength] = useState('10s');
  const [spicy, setSpicy] = useState(false);

  const addClip = () => setClips([...clips, { id: clips.length + 1, subject: '', motion: '', environment: '', camera: '', style: '', audio: '' }]);

  const updateField = (id, field, value) => {
    setClips(clips.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const generatePrompt = (clip, index) => {
    const base = `[Clip ${clip.id}] — ${aspect} — ${length} — Spicy: ${spicy ? 'ON' : 'off'}\n` +
      `Subject: ${clip.subject || '(empty)'}\nMotion: ${clip.motion || '(empty)'}\nEnvironment: ${clip.environment || '(empty)'}\n` +
      `Camera: ${clip.camera || '(empty)'}\nStyle: ${clip.style || '(empty)'}\nAudio: ${clip.audio || '(empty)'}`;
    return index > 0 ? base + '\n\n→ Continue seamlessly from previous end-frame (upload screenshot)' : base;
  };

  const copyAll = () => {
    navigator.clipboard.writeText(clips.map((c, i) => generatePrompt(c, i)).join('\n\n'));
    alert('All prompts copied!');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)', color: 'white', overflowX: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', padding: '3rem 0', opacity: 1, transform: 'translateY(0)' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 900, background: 'linear-gradient(to right, #22d3ee, #8b5cf6)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            ✨ GrokChain ⚡
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#22d3ee' }}>Craft infinite video chains for Grok Imagine</p>
        </div>

        {/* Global Settings */}
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '1.5rem', padding: '2rem', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>Chain Settings</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', gap: '1.5rem' }} className="md:grid-cols-3">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: '#22d3ee', fontWeight: 600, fontSize: '0.875rem' }}>Aspect</label>
              <select value={aspect} onChange={e => setAspect(e.target.value)} style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(34,211,238,0.3)', borderRadius: '0.5rem', color: 'white' }}>
                <option value="16:9">16:9 (Landscape)</option>
                <option value="9:16">9:16 (Vertical Reels)</option>
                <option value="1:1">1:1 (Square)</option>
                <option value="4:5">4:5 (Portrait)</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: '#a78bfa', fontWeight: 600, fontSize: '0.875rem' }}>Length</label>
              <select value={length} onChange={e => setLength(e.target.value)} style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(167,139,250,0.3)', borderRadius: '0.5rem', color: 'white' }}>
                <option>6s (Quick)</option>
                <option>8s</option>
                <option>10s (Standard)</option>
                <option>12s</option>
                <option>15s (Epic)</option>
              </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label style={{ fontSize: '1.25rem', fontWeight: 'bold', cursor: 'pointer', color: spicy ? '#fca5a5' : '#9ca3af' }}>
                <input type="checkbox" checked={spicy} onChange={e => setSpicy(e.target.checked)} style={{ width: '1.75rem', height: '1.75rem', borderRadius: '50%', background: spicy ? '#ef4444' : '#4b5563' }} />
                Spicy Mode {spicy && '(🔥 Engaged)'}
              </label>
            </div>
          </div>
        </div>

        {/* Clips */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '2rem' }}>
          {clips.map((clip, i) => (
            <div key={clip.id} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '1.5rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <h2 style={{ fontSize: '2rem', color: '#22d3ee', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                ✨ Clip {clip.id}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', gap: '1.5rem' }} className="md:grid-cols-2">
                {['subject', 'motion', 'environment', 'camera', 'style', 'audio'].map(field => (
                  <div key={field}>
                    <label style={{ textTransform: 'capitalize', color: '#e0e0e0' }}>{field}</label>
                    <textarea
                      value={clip[field]}
                      onChange={e => updateField(clip.id, field, e.target.value)}
                      placeholder={`Describe the ${field}...`}
                      style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0.5rem', color: 'white', marginTop: '0.5rem' }}
                      rows={3}
                    />
                  </div>
                ))}
              </div>
              <details style={{ marginTop: '1.5rem' }}>
                <summary style={{ color: '#22d3ee', cursor: 'pointer' }}>Preview Prompt</summary>
                <pre style={{ background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '0.5rem', marginTop: '0.5rem', whiteSpace: 'pre-wrap' }}>
                  {generatePrompt(clip, i)}
                </pre>
              </details>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '3rem 0' }}>
          <button onClick={addClip} style={{ padding: '1rem 2rem', background: '#22d3ee', color: 'black', border: 'none', borderRadius: '99px', fontWeight: 'bold', cursor: 'pointer' }}>
            + Add Next Clip
          </button>
          <button onClick={copyAll} style={{ padding: '1rem 2rem', background: '#22c55e', color: 'white', border: 'none', borderRadius: '99px', fontWeight: 'bold', cursor: 'pointer' }}>
            Copy All
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: '4rem', color: '#9ca3af', fontSize: '0.875rem' }}>
          Powered by Grok & xAI • v6 Minimal Working
        </p>
      </div>
    </div>
  );
}
