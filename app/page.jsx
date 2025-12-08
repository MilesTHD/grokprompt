"use client";

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

  const generatePrompt = (clip, index) => {
    const base = `[Clip ${clip.id}] — ${aspect} — ${length} — Spicy: ${spicy ? 'ON' : 'off'}\n` +
      `Subject: ${clip.subject || '(empty)'}\nMotion: ${clip.motion || '(empty)'}\nEnvironment: ${clip.environment || '(empty)'}\n` +
      `Camera: ${clip.camera || '(empty)'}\nStyle: ${clip.style || '(empty)'}\nAudio: ${clip.audio || '(empty)'}`;
    return index > 0 ? base + '\n\n→ Continue seamlessly from previous end-frame (upload screenshot)' : base;
  };

  const copyAll = () => {
    navigator.clipboard.writeText(clips.map((c, i) => generatePrompt(c, i)).join('\n\n'));
    alert('All prompts copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto p-6">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
          <h1 className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center gap-4">
            <Sparkles className="w-14 h-14" /> GrokChain <Zap className="w-12 h-12" />
          </h1>
          <p className="text-xl mt-4 text-cyan-200">The ultimate prompt builder for Grok Imagine video chaining</p>
        </motion.div>

        {/* Global Settings */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="flex items-center gap-3 text-cyan-300 font-semibold"><div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div> Aspect Ratio</label>
              <select value={aspect} onChange={e => setAspect(e.target.value)}
                className="mt-2 w-full p-4 rounded-xl bg-black/40 border border-cyan-500/50 focus:border-cyan-400 transition">
                <option value="16:9">16:9 Landscape</option>
                <option value="9:16">9:16 Vertical (Reels/TikTok)</option>
                <option value="1:1">1:1 Square</option>
                <option value="4:5">4:5 Portrait</option>
              </select>
            </div>
            <div>
              <label className="flex items-center gap-3 text-purple-300 font-semibold"><div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div> Clip Length</label>
              <select value={length} onChange={e => setLength(e.target.value)}
                className="mt-2 w-full p-4 rounded-xl bg-black/40 border border-purple-500/50 focus:border-purple-400 transition">
                <option>6s</option><option>8s</option><option>10s</option><option>12s</option><option>15s</option>
              </select>
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-4 text-2xl font-bold cursor-pointer">
                <input type="checkbox" checked={spicy} onChange={e => setSpicy(e.target.checked)} className="w-8 h-8" />
                <span className={spicy ? 'text-red-400' : 'text-gray-400'}>Spicy Mode {spicy && 'ON'}</span>
              </label>
            </div>
          </div>
        </motion.div>

        {/* Clips */}
        {clips.map((clip, i) => (
          <motion.div key={clip.id} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 mb-8 border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Clip {clip.id}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {['subject', 'motion', 'environment', 'camera', 'style', 'audio'].map(field => (
                <div key={field}>
                  <label className="capitalize text-sm text-cyan-300 font-medium">{field}</label>
                  <textarea
                    value={clip[field]}
                    onChange={e => updateField(clip.id, field, e.target.value)}
                    placeholder={`Amazing ${field}...`}
                    className="mt-2 w-full p-4 rounded-xl bg-black/40 border border-white/20 focus:border-cyan-500 transition h-28 resize-none"
                  />
                </div>
              ))}
            </div>
            <details className="mt-6">
              <summary className="cursor-pointer text-cyan-400 font-semibold">Preview Prompt</summary>
              <pre className="mt-4 p-5 bg-black/60 rounded-xl text-sm whitespace-pre-wrap font-mono">
                {generatePrompt(clip, i)}
              </pre>
            </details>
          </motion.div>
        ))}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={addClip}
            className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl">
            <Plus className="w-8 h-8" /> Add Next Clip
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={copyAll}
            className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl">
            <Copy className="w-8 h-8" /> Copy All Prompts
          </motion.button>
        </div>

        <p className="text-center mt-12 text-gray-400">Built for Grok Imagine power users • Made with love by Miles & Grok</p>
      </div>
    </div>
  );
}
