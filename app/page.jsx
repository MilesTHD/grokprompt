"use client"; // v5 PURGE-PROOF - Dec 7, 2025

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Plus, Sparkles, Zap } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    console.log('GrokChain v5 Loaded – Inline Styles Active! No More Purge!');
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
    alert('All prompts copied! Paste into Grok Imagine 🚀');
  };

  return (
    <>
      {/* INLINE STYLES - PURGE-PROOF */}
      <style jsx global>{`
        :global(body) { background: linear-gradient(to bottom right, #0f172a 0%, #581c87 50%, #0f172a 100%) !important; color: #ffffff !important; }
        :global(.glass) { backdrop-filter: blur(20px); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 25px 50px rgba(0,0,0,0.25); }
        :global(.header-gradient) { background-clip: text; -webkit-background-clip: text; background-image: linear-gradient(to right, #22d3ee, #3b82f6, #8b5cf6); -webkit-text-fill-color: transparent; }
        :global(.btn-cyan) { background: linear-gradient(to right, #22d3ee, #3b82f6); }
        :global(.btn-green) { background: linear-gradient(to right, #22c55e, #16a34a); }
        :global(.btn-hover) { transform: scale(1.05); box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        :global(.spin-slow) { animation: spin-slow 3s linear infinite; }
        :global(.pulse) { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        /* PURGE SCAN COMMENTS: bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen max-w-5xl mx-auto p-6 text-center py-12 text-6xl font-black flex items-center justify-center gap-4 mb-4 w-16 h-16 animate-spin-slow w-12 h-12 animate-pulse text-xl mt-2 cyan-200 max-w-2xl opacity-0 y-30 duration-0.8 backdrop-blur-xl bg-white/5 rounded-3xl p-8 mb-8 border border-white/10 shadow-2xl text-2xl font-bold gap-3 w-6 h-6 grid grid-cols-1 md:grid-cols-3 gap-6 space-y-2 text-cyan-300 font-semibold text-sm w-2 h-2 bg-cyan-400 rounded-full animate-ping w-full p-4 rounded-2xl bg-slate-800/50 border border-cyan-500/30 focus:border-cyan-400 transition-all duration-300 text-purple-300 border-purple-500/30 focus:border-purple-400 flex justify-end md:justify-start text-xl cursor-pointer group w-7 h-7 bg-red-500 bg-gray-600 text-red-300 text-gray-400 space-y-6 text-3xl cyan-400 w-8 h-8 md:grid-cols-2 capitalize gray-300 w-4 h-4 text-yellow-400 p-5 h-24 resize-none border-white/20 focus:border-cyan-500 focus:outline-none mt-8 cursor-pointer text-cyan-400 bg-slate-800/30 rounded-xl w-5 h-5 mt-4 p-6 bg-slate-900/80 border-cyan-500/20 overflow-x-auto flex-col sm:flex-row pt-8 border-t justify-center scale-1.05 box-shadow-0-10px-25px-rgba-6-182-212-0.4 scale-0.98 px-12 py-5 rounded-2xl text-xl font-bold shadow-lg from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 box-shadow-0-10px-25px-rgba-34-197-94-0.4 mt-16 text-gray-500 */
      `}</style>
      /*{/* DEBUG BANNER */}
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', background: '#22c55e', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', zIndex: 9999, fontSize: '0.875rem' }}>
        v5 INLINE – Modern UI Locked! (Console: v5 Loaded)
      </div> */

      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #0f172a 0%, #581c87 50%, #0f172a 100%)', color: 'white', overflowX: 'hidden' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '1.5rem' }}>
          {/* Hero */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', padding: '3rem 0' }}
          >
            <h1 style={{ fontSize: '3.75rem', fontWeight: '900', backgroundImage: 'linear-gradient(to right, #22d3ee, #3b82f6, #8b5cf6)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Sparkles style={{ width: '4rem', height: '4rem', animation: 'spin-slow 3s linear infinite' }} /> 
              GrokChain 
              <Zap style={{ width: '3rem', height: '3rem', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
            </h1>
            <p style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: '#22d3ee', maxWidth: '32rem', margin: '0 auto' }}>Craft infinite video chains for Grok Imagine – structured, seamless, and spicy.</p>
          </motion.div>

          {/* Global Settings */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass" style={{ borderRadius: '1.5rem', padding: '2rem', marginBottom: '2rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Zap style={{ width: '1.5rem', height: '1.5rem' }} /> Chain Settings</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', gap: '1.5rem' }} className="md:grid-cols-3">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#22d3ee', fontWeight: '600', fontSize: '0.875rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: '#22d3ee', borderRadius: '50%', animation: 'ping 1s infinite' }}></div> Aspect
                </label>
                <select value={aspect} onChange={e => setAspect(e.target.value)}
                  style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', background: 'rgba(15, 23, 42, 0.5)', border: '1px solid rgba(34, 211, 238, 0.3)', color: 'white', transition: 'all 0.3s' }}
                  onFocus={(e) => e.target.style.borderColor = '#22d3ee'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(34, 211, 238, 0.3)'}
                >
                  <option value="16:9">16:9 (Landscape)</option>
                  <option value="9:16">9:16 (Vertical Reels)</option>
                  <option value="1:1">1:1 (Square)</option>
                  <option value="4:5">4:5 (Portrait)</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a78bfa', fontWeight: '600', fontSize: '0.875rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: '#a78bfa', borderRadius: '50%', animation: 'ping 1s infinite' }}></div> Length
                </label>
                <select value={length} onChange={e => setLength(e.target.value)}
                  style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', background: 'rgba(15, 23, 42, 0.5)', border: '1px solid rgba(167, 139, 250, 0.3)', color: 'white', transition: 'all 0.3s' }}
                  onFocus={(e) => e.target.style.borderColor = '#a78bfa'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(167, 139, 250, 0.3)'}
                >
                  <option>6s (Quick)</option>
                  <option>8s</option>
                  <option>10s (Standard)</option>
                  <option>12s</option>
                  <option>15s (Epic)</option>
                </select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} className="md:justify-start">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold', cursor: 'pointer' }}>
                  <input type="checkbox" checked={spicy} onChange={e => setSpicy(e.target.checked)} 
                    style={{ width: '1.75rem', height: '1.75rem', borderRadius: '50%', transition: 'all 0.3s', background: spicy ? '#ef4444' : '#4b5563' }} />
                  <span style={{ transition: 'color 0.3s', color: spicy ? '#fca5a5' : '#9ca3af' }}>
                    Spicy Mode {spicy && '(🔥 Engaged)'}
                  </span>
                </label>
              </div>
            </div>
          </motion.div>

          {/* Clips */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
            {clips.map((clip, i) => (
              <motion.div 
                key={clip.id} 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass" style={{ borderRadius: '1.5rem', padding: '2rem' }}
              >
                <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#22d3ee' }}>
                  <Sparkles style={{ width: '2rem', height: '2rem' }} /> Clip {clip.id}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', gap: '1.5rem' }} className="md:grid-cols-2">
                  {['subject', 'motion', 'environment', 'camera', 'style', 'audio'].map(field => (
                    <div key={field} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {field.charAt(0).toUpperCase() + field.slice(1)} 
                        {field === 'motion' && <Zap style={{ width: '1rem', height: '1rem', color: '#eab308' }} />}
                      </label>
                      <textarea
                        value={clip[field]}
                        onChange={e => updateField(clip.id, field, e.target.value)}
                        placeholder={`Describe the ${field} (e.g., for motion: "leaping through neon rain")`}
                        style={{ width: '100%', padding: '1.25rem', borderRadius: '0.75rem', background: 'rgba(15, 23, 42, 0.5)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', resize: 'none', height: '6rem', transition: 'all 0.3s' }}
                        onFocus={(e) => e.target.style.borderColor = '#22d3ee'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                      />
                    </div>
                  ))}
                </div>
                <details style={{ marginTop: '2rem' }}>
                  <summary style={{ cursor: 'pointer', color: '#22d3ee', fontWeight: '600', padding: '0.75rem', background: 'rgba(15, 23, 42, 0.3)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Preview Generated Prompt <Copy style={{ width: '1.25rem', height: '1.25rem' }} />
                  </summary>
                  <pre style={{ marginTop: '1rem', padding: '1.5rem', background: 'rgba(15, 23, 42, 0.8)', borderRadius: '0.5rem', fontSize: '0.875rem', whiteSpace: 'pre-wrap', fontFamily: 'monospace', border: '1px solid rgba(34, 211, 238, 0.2)', overflowX: 'auto' }}>
                    {generatePrompt(clip, i)}
                  </pre>
                </details>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }} className="sm:flex-row">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
              onClick={addClip}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', background: 'linear-gradient(to right, #22d3ee, #3b82f6)', color: 'white', padding: '1.25rem 3rem', borderRadius: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', transition: 'all 0.3s', border: 'none', cursor: 'pointer' }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <Plus style={{ width: '1.75rem', height: '1.75rem' }} /> Add Next Clip
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
              onClick={copyAll}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', background: 'linear-gradient(to right, #22c55e, #16a34a)', color: 'white', padding: '1.25rem 3rem', borderRadius: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', transition: 'all 0.3s', border: 'none', cursor: 'pointer' }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <Copy style={{ width: '1.75rem', height: '1.75rem' }} /> Copy All to Clipboard
            </motion.button>
          </div>

          <p style={{ textAlign: 'center', marginTop: '4rem', color: '#9ca3af', fontSize: '0.875rem' }}>
            Powered by Grok & xAI • Built for creators • v5.0 (Dec 7, 2025)
          </p>
        </div>
      </div>
    </>
  );
}
