"use client"; // Cache buster v2.1 - December 7, 2025

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Plus, Sparkles, Zap } from 'lucide-react';

export default function Home() {
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

  <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded text-sm z-50">
  v4 UNBREAKABLE – Modern UI Locked! (Check console)
</div>
  const generatePrompt = (clip, index) => {
    const base = `[Clip ${clip.id}] — ${aspect} — ${length} — Spicy: ${spicy ? 'ON' : 'off'}\n` +
      `Subject: ${clip.subject || '(empty)'}\nMotion: ${clip.motion || '(empty)'}\nEnvironment: ${clip.environment || '(empty)'}\n` +
      `Camera: ${clip.camera || '(empty)'}\nStyle: ${clip.style || '(empty)'}\nAudio: ${clip.audio || '(empty)'}`;
    return index > 0 ? base + '\n\n→ Continue seamlessly from previous end-frame (upload screenshot)' : base;
  };

  const copyAll = () => {
    navigator.clipboard.writeText(clips.map((c, i) => generatePrompt(c, i)).join('\n\n'));
    // Toast notification placeholder - add real one later
    alert('All prompts copied! Paste into Grok Imagine 🚀');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-5xl mx-auto p-6">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center py-12"
        >
          <h1 className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center gap-4 mb-4">
            <Sparkles className="w-16 h-16 animate-spin-slow" /> 
            GrokChain 
            <Zap className="w-12 h-12 animate-pulse" />
          </h1>
          <p className="text-xl mt-2 text-cyan-200 max-w-2xl mx-auto">Craft infinite video chains for Grok Imagine – structured, seamless, and spicy.</p>
        </motion.div>

        {/* Global Settings */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.3, duration: 0.5 }}
          className="glass rounded-3xl p-8 mb-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3"><Zap className="w-6 h-6" /> Chain Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div> Aspect
              </label>
              <select value={aspect} onChange={e => setAspect(e.target.value)}
                className="w-full p-4 rounded-2xl bg-slate-800/50 border border-cyan-500/30 focus:border-cyan-400 transition-all duration-300 text-white">
                <option value="16:9">16:9 (Landscape)</option>
                <option value="9:16">9:16 (Vertical Reels)</option>
                <option value="1:1">1:1 (Square)</option>
                <option value="4:5">4:5 (Portrait)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-purple-300 font-semibold text-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div> Length
              </label>
              <select value={length} onChange={e => setLength(e.target.value)}
                className="w-full p-4 rounded-2xl bg-slate-800/50 border border-purple-500/30 focus:border-purple-400 transition-all duration-300 text-white">
                <option>6s (Quick)</option>
                <option>8s</option>
                <option>10s (Standard)</option>
                <option>12s</option>
                <option>15s (Epic)</option>
              </select>
            </div>
            <div className="flex items-center justify-end md:justify-start">
              <label className="flex items-center gap-3 text-xl font-bold cursor-pointer group">
                <input type="checkbox" checked={spicy} onChange={e => setSpicy(e.target.checked)} 
                  className={`w-7 h-7 rounded-full transition-all duration-300 relative ${spicy ? 'bg-red-500' : 'bg-gray-600'}`} />
                <span className={`transition-colors ${spicy ? 'text-red-300' : 'text-gray-400'}`}>
                  Spicy Mode {spicy && '(🔥 Engaged)'}
                </span>
              </label>
            </div>
          </div>
        </motion.div>

        {/* Clips Section */}
        <div className="space-y-6 mb-8">
          {clips.map((clip, i) => (
            <motion.div 
              key={clip.id} 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass rounded-3xl p-8 shadow-2xl"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-cyan-400">
                <Sparkles className="w-8 h-8" /> Clip {clip.id}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {['subject', 'motion', 'environment', 'camera', 'style', 'audio'].map(field => (
                  <div key={field} className="space-y-2">
                    <label className="capitalize text-sm font-medium text-gray-300 flex items-center gap-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)} 
                      {field === 'motion' && <Zap className="w-4 h-4 text-yellow-400" />}
                    </label>
                    <textarea
                      value={clip[field]}
                      onChange={e => updateField(clip.id, field, e.target.value)}
                      placeholder={`Describe the ${field} (e.g., for motion: "leaping through neon rain")`}
                      className="w-full p-5 rounded-2xl bg-slate-800/50 border border-white/20 focus:border-cyan-500 focus:outline-none transition-all duration-300 text-white resize-none h-24"
                    />
                  </div>
                ))}
              </div>
              <details className="mt-8">
                <summary className="cursor-pointer text-cyan-400 font-semibold p-3 bg-slate-800/30 rounded-xl flex items-center gap-2">
                  Preview Generated Prompt <Copy className="w-5 h-5" />
                </summary>
                <pre className="mt-4 p-6 bg-slate-900/80 rounded-2xl text-sm whitespace-pre-wrap font-mono border border-cyan-500/20 overflow-x-auto">
                  {generatePrompt(clip, i)}
                </pre>
              </details>
            </motion.div>
          ))}
        </div>

        {/* Action Bar */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center pt-8 border-t border-white/10"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(6, 182, 212, 0.4)" }} 
            whileTap={{ scale: 0.98 }}
            onClick={addClip}
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-12 py-5 rounded-2xl text-xl font-bold shadow-lg transition-all duration-300"
          >
            <Plus className="w-7 h-7" /> Add Next Clip
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)" }} 
            whileTap={{ scale: 0.98 }}
            onClick={copyAll}
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 px-12 py-5 rounded-2xl text-xl font-bold shadow-lg transition-all duration-300"
          >
            <Copy className="w-7 h-7" /> Copy All to Clipboard
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1 }}
          className="text-center mt-16 text-gray-500 text-sm"
        >
          Powered by Grok & xAI • Built for creators • v2.1 (Dec 7, 2025)
        </motion.p>
      </div>
    </div>
  );
}
