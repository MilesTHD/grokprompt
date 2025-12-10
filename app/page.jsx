"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Plus, Sparkles, Zap } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    console.log('GrokChain v5.2 — Fully working!');
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
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)', color: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem' }}>
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', padding: '3rem 0' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 900, background: 'linear-gradient(to right, #22d3ee, #8b5cf6)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <Sparkles style={{ width: '4rem', height: '4rem' }} /> GrokChain <Zap style={{ width: '3rem', height: '3rem' }} />
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#22d3ee' }}>Craft infinite video chains for Grok Imagine</p>
        </motion.div>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {clips.map((clip, i) => (
            <motion.div key={clip.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '1.5rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h2 style={{ fontSize: '2rem', color: '#22d3ee', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Sparkles /> Clip {clip.id}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                {['subject', 'motion', 'environment', 'camera', 'style', 'audio'].map(field => (
                  <div key={field}>
                    <label style={{ textTransform: 'capitalize', color: '#e0e0e0' }}>{field}</label>
                    <textarea
                      value={clip[field]}
                      onChange={e => updateField(clip.id, field, e.target.value)}
                      placeholder={`Describe the ${field}...`}
                      style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0.75rem', color: 'white', marginTop: '0.5rem' }}
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
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '3rem 0' }}>
          <button onClick={addClip} style={{ padding: '1rem 2rem', background: '#22d3ee', color: 'black', border: 'none', borderRadius: '99px', fontWeight: 'bold', cursor: 'pointer' }}>
            <Plus style={{ display: 'inline', marginRight: '0.5rem' }} /> Add Next Clip
          </button>
          <button onClick={copyAll} style={{ padding: '1rem 2rem', background: '#22c55e', color: 'white', border: 'none', borderRadius: '99px', fontWeight: 'bold', cursor: 'pointer' }}>
            <Copy style={{ display: 'inline', marginRight: '0.5rem' }} /> Copy All
          </button>
        </div>
      </div>
    </div>
  );
}
