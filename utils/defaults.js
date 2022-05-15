import { v4 as uuid } from 'uuid';

export const defaultPaletteColors = [
  { value: 'royalblue' },
  { value: 'purple' },
  { value: 'salmon' },
  { value: '#feec11' },
].map((c) => {
  return { ...c, id: uuid() };
});

export const tailwindPalettes = [
  {
    id: 'tailwind',
    name: 'Tailwind (base)',
    colors: [
      { name: 'pink-500', value: '#ec4899' },
      { name: 'fuchsia-500', value: '#d946ef' },
      { name: 'purple-500', value: '#a855f7' },
      { name: 'violet-500', value: '#8b5cf6' },
      { name: 'indigo-500', value: '#6366f1' },
      { name: 'blue-500', value: '#3b82f6' },
      { name: 'sky-500', value: '#0ea5e9' },
      { name: 'cyan-500', value: '#06b6d4' },
      { name: 'teal-500', value: '#14b8a6' },
      { name: 'emerald-500', value: '#10b981' },
      { name: 'green-500', value: '#22c55e' },
      { name: 'lime-500', value: '#84cc16' },
      { name: 'yellow-500', value: '#eab308' },
      { name: 'amber-500', value: '#f59e0b' },
      { name: 'orange-500', value: '#f97316' },
      { name: 'red-500', value: '#ef4444' },
      { name: 'rose-500', value: '#f43f5e' },
      { name: 'warmGray-500', value: '#78716c' },
      { name: 'trueGray-500', value: '#737373' },
      { name: 'gray-500', value: '#71717a' },
      { name: 'coolGray-500', value: '#6b7280' },
      { name: 'blueGray-500', value: '#64748b' },
    ].map(c => { return {...c, id: uuid()} })
  },
  // {
  //   id: uuid(),
  //   name: 'Tailwind (rose)',
  //   colors: [
  //     { name: 'rose-50', value: '#fff1f2' },
  //     { name: 'rose-100', value: '#ffe4e6' },
  //     { name: 'rose-200', value: '#fecdd3' },
  //     { name: 'rose-300', value: '#fda4af' },
  //     { name: 'rose-400', value: '#fb7185' },
  //     { name: 'rose-500', value: '#f43f5e' },
  //     { name: 'rose-600', value: '#e11d48' },
  //     { name: 'rose-700', value: '#be123c' },
  //     { name: 'rose-800', value: '#9f1239' },
  //     { name: 'rose-900', value: '#881337' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: uuid(),
  //   name: 'Tailwind (pink)',
  //   colors: [
  //     { name: 'pink-50', value: '#fdf2f8' },
  //     { name: 'pink-100', value: '#fce7f3' },
  //     { name: 'pink-200', value: '#fbcfe8' },
  //     { name: 'pink-300', value: '#f9a8d4' },
  //     { name: 'pink-400', value: '#f472b6' },
  //     { name: 'pink-500', value: '#ec4899' },
  //     { name: 'pink-600', value: '#db2777' },
  //     { name: 'pink-700', value: '#be185d' },
  //     { name: 'pink-800', value: '#9d174d' },
  //     { name: 'pink-900', value: '#831843' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-fuchsia',
  //   name: 'Tailwind (fuchsia)',
  //   colors: [
  //     { name: 'fuchsia-50', value: '#fdf4ff' },
  //     { name: 'fuchsia-100', value: '#fae8ff' },
  //     { name: 'fuchsia-200', value: '#f5d0fe' },
  //     { name: 'fuchsia-300', value: '#f0abfc' },
  //     { name: 'fuchsia-400', value: '#e879f9' },
  //     { name: 'fuchsia-500', value: '#d946ef' },
  //     { name: 'fuchsia-600', value: '#c026d3' },
  //     { name: 'fuchsia-700', value: '#a21caf' },
  //     { name: 'fuchsia-800', value: '#86198f' },
  //     { name: 'fuchsia-900', value: '#701a75' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-purple',
  //   name: 'Tailwind (purple)',
  //   colors: [
  //     { name: 'purple-50', value: '#faf5ff' },
  //     { name: 'purple-100', value: '#f3e8ff' },
  //     { name: 'purple-200', value: '#e9d5ff' },
  //     { name: 'purple-300', value: '#d8b4fe' },
  //     { name: 'purple-400', value: '#c084fc' },
  //     { name: 'purple-500', value: '#a855f7' },
  //     { name: 'purple-600', value: '#9333ea' },
  //     { name: 'purple-700', value: '#7e22ce' },
  //     { name: 'purple-800', value: '#6b21a8' },
  //     { name: 'purple-900', value: '#581c87' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-violet',
  //   name: 'Tailwind (violet)',
  //   colors: [
  //     { name: 'violet-50', value: '#f5f3ff' },
  //     { name: 'violet-100', value: '#ede9fe' },
  //     { name: 'violet-200', value: '#ddd6fe' },
  //     { name: 'violet-300', value: '#c4b5fd' },
  //     { name: 'violet-400', value: '#a78bfa' },
  //     { name: 'violet-500', value: '#8b5cf6' },
  //     { name: 'violet-600', value: '#7c3aed' },
  //     { name: 'violet-700', value: '#6d28d9' },
  //     { name: 'violet-800', value: '#5b21b6' },
  //     { name: 'violet-900', value: '#4c1d95' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-indigo',
  //   name: 'Tailwind (indigo)',
  //   colors: [
  //     { name: 'indigo-50', value: '#eef2ff' },
  //     { name: 'indigo-100', value: '#e0e7ff' },
  //     { name: 'indigo-200', value: '#c7d2fe' },
  //     { name: 'indigo-300', value: '#a5b4fc' },
  //     { name: 'indigo-400', value: '#818cf8' },
  //     { name: 'indigo-500', value: '#6366f1' },
  //     { name: 'indigo-600', value: '#4f46e5' },
  //     { name: 'indigo-700', value: '#4338ca' },
  //     { name: 'indigo-800', value: '#3730a3' },
  //     { name: 'indigo-900', value: '#312e81' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-blue',
  //   name: 'Tailwind (blue)',
  //   colors: [
  //     { name: 'blue-50', value: '#eff6ff' },
  //     { name: 'blue-100', value: '#dbeafe' },
  //     { name: 'blue-200', value: '#bfdbfe' },
  //     { name: 'blue-300', value: '#93c5fd' },
  //     { name: 'blue-400', value: '#60a5fa' },
  //     { name: 'blue-500', value: '#3b82f6' },
  //     { name: 'blue-600', value: '#2563eb' },
  //     { name: 'blue-700', value: '#1d4ed8' },
  //     { name: 'blue-800', value: '#1e40af' },
  //     { name: 'blue-900', value: '#1e3a8a' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-sky',
  //   name: 'Tailwind (sky)',
  //   colors: [
  //     { name: 'sky-50', value: '#f0f9ff' },
  //     { name: 'sky-100', value: '#e0f2fe' },
  //     { name: 'sky-200', value: '#bae6fd' },
  //     { name: 'sky-300', value: '#7dd3fc' },
  //     { name: 'sky-400', value: '#38bdf8' },
  //     { name: 'sky-500', value: '#0ea5e9' },
  //     { name: 'sky-600', value: '#0284c7' },
  //     { name: 'sky-700', value: '#0369a1' },
  //     { name: 'sky-800', value: '#075985' },
  //     { name: 'sky-900', value: '#0c4a6e' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-cyan',
  //   name: 'Tailwind (cyan)',
  //   colors: [
  //     { name: 'cyan-50', value: '#ecfeff' },
  //     { name: 'cyan-100', value: '#cffafe' },
  //     { name: 'cyan-200', value: '#a5f3fc' },
  //     { name: 'cyan-300', value: '#67e8f9' },
  //     { name: 'cyan-400', value: '#22d3ee' },
  //     { name: 'cyan-500', value: '#06b6d4' },
  //     { name: 'cyan-600', value: '#0891b2' },
  //     { name: 'cyan-700', value: '#0e7490' },
  //     { name: 'cyan-800', value: '#155e75' },
  //     { name: 'cyan-900', value: '#164e63' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-teal',
  //   name: 'Tailwind (teal)',
  //   colors: [
  //     { name: 'teal-50', value: '#f0fdfa' },
  //     { name: 'teal-100', value: '#ccfbf1' },
  //     { name: 'teal-200', value: '#99f6e4' },
  //     { name: 'teal-300', value: '#5eead4' },
  //     { name: 'teal-400', value: '#2dd4bf' },
  //     { name: 'teal-500', value: '#14b8a6' },
  //     { name: 'teal-600', value: '#0d9488' },
  //     { name: 'teal-700', value: '#0f766e' },
  //     { name: 'teal-800', value: '#115e59' },
  //     { name: 'teal-900', value: '#134e4a' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-emerald',
  //   name: 'Tailwind (emerald)',
  //   colors: [
  //     { name: 'emerald-50', value: '#ecfdf5' },
  //     { name: 'emerald-100', value: '#d1fae5' },
  //     { name: 'emerald-200', value: '#a7f3d0' },
  //     { name: 'emerald-300', value: '#6ee7b7' },
  //     { name: 'emerald-400', value: '#34d399' },
  //     { name: 'emerald-500', value: '#10b981' },
  //     { name: 'emerald-600', value: '#059669' },
  //     { name: 'emerald-700', value: '#047857' },
  //     { name: 'emerald-800', value: '#065f46' },
  //     { name: 'emerald-900', value: '#064e3b' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-green',
  //   name: 'Tailwind (green)',
  //   colors: [
  //     { name: 'green-50', value: '#f0fdf4' },
  //     { name: 'green-100', value: '#dcfce7' },
  //     { name: 'green-200', value: '#bbf7d0' },
  //     { name: 'green-300', value: '#86efac' },
  //     { name: 'green-400', value: '#4ade80' },
  //     { name: 'green-500', value: '#22c55e' },
  //     { name: 'green-600', value: '#16a34a' },
  //     { name: 'green-700', value: '#15803d' },
  //     { name: 'green-800', value: '#166534' },
  //     { name: 'green-900', value: '#14532d' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-lime',
  //   name: 'Tailwind (lime)',
  //   colors: [
  //     { name: 'lime-50', value: '#f7fee7' },
  //     { name: 'lime-100', value: '#ecfccb' },
  //     { name: 'lime-200', value: '#d9f99d' },
  //     { name: 'lime-300', value: '#bef264' },
  //     { name: 'lime-400', value: '#a3e635' },
  //     { name: 'lime-500', value: '#84cc16' },
  //     { name: 'lime-600', value: '#65a30d' },
  //     { name: 'lime-700', value: '#4d7c0f' },
  //     { name: 'lime-800', value: '#3f6212' },
  //     { name: 'lime-900', value: '#365314' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-yellow',
  //   name: 'Tailwind (yellow)',
  //   colors: [
  //     { name: 'yellow-50', value: '#fefce8' },
  //     { name: 'yellow-100', value: '#fef9c3' },
  //     { name: 'yellow-200', value: '#fef08a' },
  //     { name: 'yellow-300', value: '#fde047' },
  //     { name: 'yellow-400', value: '#facc15' },
  //     { name: 'yellow-500', value: '#eab308' },
  //     { name: 'yellow-600', value: '#ca8a04' },
  //     { name: 'yellow-700', value: '#a16207' },
  //     { name: 'yellow-800', value: '#854d0e' },
  //     { name: 'yellow-900', value: '#713f12' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-amber',
  //   name: 'Tailwind (amber)',
  //   colors: [
  //     { name: 'amber-50', value: '#fffbeb' },
  //     { name: 'amber-100', value: '#fef3c7' },
  //     { name: 'amber-200', value: '#fde68a' },
  //     { name: 'amber-300', value: '#fcd34d' },
  //     { name: 'amber-400', value: '#fbbf24' },
  //     { name: 'amber-500', value: '#f59e0b' },
  //     { name: 'amber-600', value: '#d97706' },
  //     { name: 'amber-700', value: '#b45309' },
  //     { name: 'amber-800', value: '#92400e' },
  //     { name: 'amber-900', value: '#78350f' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-orange',
  //   name: 'Tailwind (orange)',
  //   colors: [
  //     { name: 'orange-50', value: '#fff7ed' },
  //     { name: 'orange-100', value: '#ffedd5' },
  //     { name: 'orange-200', value: '#fed7aa' },
  //     { name: 'orange-300', value: '#fdba74' },
  //     { name: 'orange-400', value: '#fb923c' },
  //     { name: 'orange-500', value: '#f97316' },
  //     { name: 'orange-600', value: '#ea580c' },
  //     { name: 'orange-700', value: '#c2410c' },
  //     { name: 'orange-800', value: '#9a3412' },
  //     { name: 'orange-900', value: '#7c2d12' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-red',
  //   name: 'Tailwind (red)',
  //   colors: [
  //     { name: 'red-50', value: '#fef2f2' },
  //     { name: 'red-100', value: '#fee2e2' },
  //     { name: 'red-200', value: '#fecaca' },
  //     { name: 'red-300', value: '#fca5a5' },
  //     { name: 'red-400', value: '#f87171' },
  //     { name: 'red-500', value: '#ef4444' },
  //     { name: 'red-600', value: '#dc2626' },
  //     { name: 'red-700', value: '#b91c1c' },
  //     { name: 'red-800', value: '#991b1b' },
  //     { name: 'red-900', value: '#7f1d1d' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-warmGray',
  //   name: 'Tailwind (warmGray)',
  //   colors: [
  //     { name: 'warmGray-50', value: '#fafaf9' },
  //     { name: 'warmGray-100', value: '#f5f5f4' },
  //     { name: 'warmGray-200', value: '#e7e5e4' },
  //     { name: 'warmGray-300', value: '#d6d3d1' },
  //     { name: 'warmGray-400', value: '#a8a29e' },
  //     { name: 'warmGray-500', value: '#78716c' },
  //     { name: 'warmGray-600', value: '#57534e' },
  //     { name: 'warmGray-700', value: '#44403c' },
  //     { name: 'warmGray-800', value: '#292524' },
  //     { name: 'warmGray-900', value: '#1c1917' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-trueGray',
  //   name: 'Tailwind (trueGray)',
  //   colors: [
  //     { name: 'trueGray-50', value: '#fafafa' },
  //     { name: 'trueGray-100', value: '#f5f5f5' },
  //     { name: 'trueGray-200', value: '#e5e5e5' },
  //     { name: 'trueGray-300', value: '#d4d4d4' },
  //     { name: 'trueGray-400', value: '#a3a3a3' },
  //     { name: 'trueGray-500', value: '#737373' },
  //     { name: 'trueGray-600', value: '#525252' },
  //     { name: 'trueGray-700', value: '#404040' },
  //     { name: 'trueGray-800', value: '#262626' },
  //     { name: 'trueGray-900', value: '#171717' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-gray',
  //   name: 'Tailwind (gray)',
  //   colors: [
  //     { name: 'gray-50', value: '#fafafa' },
  //     { name: 'gray-100', value: '#f4f4f5' },
  //     { name: 'gray-200', value: '#e4e4e7' },
  //     { name: 'gray-300', value: '#d4d4d8' },
  //     { name: 'gray-400', value: '#a1a1aa' },
  //     { name: 'gray-500', value: '#71717a' },
  //     { name: 'gray-600', value: '#52525b' },
  //     { name: 'gray-700', value: '#3f3f46' },
  //     { name: 'gray-800', value: '#27272a' },
  //     { name: 'gray-900', value: '#18181b' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-coolGray',
  //   name: 'Tailwind (coolGray)',
  //   colors: [
  //     { name: 'coolGray-50', value: '#f9fafb' },
  //     { name: 'coolGray-100', value: '#f3f4f6' },
  //     { name: 'coolGray-200', value: '#e5e7eb' },
  //     { name: 'coolGray-300', value: '#d1d5db' },
  //     { name: 'coolGray-400', value: '#9ca3af' },
  //     { name: 'coolGray-500', value: '#6b7280' },
  //     { name: 'coolGray-600', value: '#4b5563' },
  //     { name: 'coolGray-700', value: '#374151' },
  //     { name: 'coolGray-800', value: '#1f2937' },
  //     { name: 'coolGray-900', value: '#111827' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
  // {
  //   id: 'tailwind-blueGray',
  //   name: 'Tailwind (blueGray)',
  //   colors: [
  //     { name: 'blueGray-50', value: '#f8fafc' },
  //     { name: 'blueGray-100', value: '#f1f5f9' },
  //     { name: 'blueGray-200', value: '#e2e8f0' },
  //     { name: 'blueGray-300', value: '#cbd5e1' },
  //     { name: 'blueGray-400', value: '#94a3b8' },
  //     { name: 'blueGray-500', value: '#64748b' },
  //     { name: 'blueGray-600', value: '#475569' },
  //     { name: 'blueGray-700', value: '#334155' },
  //     { name: 'blueGray-800', value: '#1e293b' },
  //     { name: 'blueGray-900', value: '#0f172a' },
  //   ].map((c) => {
  //     return { ...c, id: uuid() };
  //   }),
  // },
];

export const initialPalettes = [
  ...tailwindPalettes,
  {
    name: 'Almost Summer',
    id: 'almost-summer',
    colors: [
      { name: '#3e9cbf', value: '#3e9cbf' },
      { name: '#a7ecf2', value: '#a7ecf2' },
      { name: '#f2c43d', value: '#f2c43d' },
      { name: '#f17c37', value: '#f17c37' },
      { name: '#f26d50', value: '#f26d50' },
    ].map((c) => {
      return { ...c, id: uuid() };
    }),
  },
  {
    name: 'Pop',
    id: 'pop',
    colors: [
      { name: '#00ff3f', value: '#00ff3f' },
      { name: '#35b5ff', value: '#35b5ff' },
      { name: '#ff479c', value: '#ff479c' },
      { name: '#fffb38', value: '#fffb38' },
    ].map((c) => {
      return { ...c, id: uuid() };
    }),
  },
  {
    name: 'Bubbles',
    id: 'bubbles',
    colors: [
      { name: '#f8cd82', value: '#f8cd82' },
      { name: '#f65b74', value: '#f65b74' },
      { name: '#f72078', value: '#f72078' },
      { name: '#23b0bd', value: '#23b0bd' },
      { name: '#0df7db', value: '#0df7db' },
      { name: '#ff9684', value: '#ff9684' },
    ].map((c) => {
      return { ...c, id: uuid() };
    }),
  },
  {
    name: 'Pascal',
    id: 'pascal',
    colors: [
      { name: '#89d1dc', value: '#89d1dc' },
      { name: '#f89cfa', value: '#f89cfa' },
      { name: '#c386f1', value: '#c386f1' },
      { name: '#f0d689', value: '#f0d689' },
      { name: '#aff28b', value: '#aff28b' },
    ].map((c) => {
      return { ...c, id: uuid() };
    }),
  },
];

