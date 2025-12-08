"use client";
import { useState } from 'react';

export default function Home() {
  const [clips, setClips] = useState([{
    id: 1,
    subject: '', motion: '', environment: '', camera: '', style: '', audio: ''
  }]);
  const [aspect, setAspect] = useState('9:16');
  const [length, setLength] = useState('10s');
  const [spicy, setSpicy] = useState(false);

  const addClip = () => setClips([...clips, { id: clips.length + 1, subject: '', motion: '', environment: '', camera: '', style: '', audio: '' }]);
  const updateField = (id, field, value) => {
    setClips(clips.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const generatePrompt = (clip, index) => {
    const base = `[Clip ${clip.id}] — ${aspect} — ${length} — Spicy: ${spicy ? 'on' : 'off'}\n` +
      `Subject: ${clip.subject}\nMotion: ${clip.motion}\nEnvironment: ${clip.environment}\n` +
      `Camera: ${clip.camera}\nStyle: ${clip.style}\nAudio: ${clip.audio}`;
    return index > 0 ? base + '\n→ Continue seamlessly from previous end-frame (upload screenshot)' : base;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">GrokChain</h1>
        <p className="text-center mb-8 text-xl">Ultimate prompt builder for Grok Imagine video chaining</p>

        <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block mb-2">Aspect Ratio</label>
              <select value={aspect} onChange={e => setAspect(e.target.value)} className="w-full p-3 rounded bg-white/20">
                <option>16:9</option><option>9:16</option><option>1:1</option><option>4:5</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Clip Length</label>
              <select value={length} onChange={e => setLength(e.target.value)} className="w-full p-3 rounded bg-white/20">
                <option>6s</option><option>8s</option><option>10s</option><option>12s</option><option>15s</option>
              </select>
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-3 text-lg">
                <input type="checkbox" checked={spicy} onChange={e => setSpicy(e.target.checked)} className="w-6 h-6" />
                Spicy Mode
              </label>
            </div>
          </div>
        </div>

        {clips.map((clip, i) => (
          <div key={clip.id} className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Clip {clip.id}</h2>
            {['subject', 'motion', 'environment', 'camera', 'style', 'audio'].map(field => (
              <div key={field} className="mb-4">
                <label className="block capitalize font-semibold mb-2">{field}</label>
                <textarea
                  value={clip[field]}
                  onChange={e => updateField(clip.id, field, e.target.value)}
                  placeholder={`Enter ${field}...`}
                  className="w-full p-4 rounded bg-white/20 placeholder-white/50"
                  rows={3}
                />
              </div>
            ))}
            <pre className="bg-black/30 p-4 rounded mt-4 font-mono text-sm whitespace-pre-wrap">
              {generatePrompt(clip, i)}
            </pre>
          </div>
        ))}

        <div className="flex gap-4">
          <button onClick={addClip} className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-lg text-xl font-bold">
            + Add Next Clip
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(clips.map((c, i) => generatePrompt(c, i)).join('\n\n'))}
            className="bg-green-500 hover:bg-green-400 px-8 py-4 rounded-lg text-xl font-bold"
          >
            Copy All Prompts
          </button>
        </div>
      </div>
    </div>
  );
}
