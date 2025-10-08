
import { LocalStore } from './storage/local.js';
export const store = new LocalStore('rl_course_data_v1');
export const progressStore = new LocalStore('rl_progress_v1');

export function getProgress(){ return progressStore.get() || { xp:0, completed:{}, streak:0, lastDay:null, badges:[], grades:{} }; }
export function setProgress(p){ progressStore.set(p); }
export function addXP(amount){
  const p = getProgress(); p.xp += amount;
  const today = new Date().toISOString().slice(0,10);
  if(p.lastDay===today){} else { if(!p.lastDay){ p.streak=1; } else { const prev=new Date(p.lastDay); const next=new Date(prev); next.setDate(prev.getDate()+1); p.streak = (today===next.toISOString().slice(0,10))?p.streak+1:1; } p.lastDay=today; }
  unlockBadges(p); setProgress(p);
}
export function levelFromXP(x){ return Math.floor(x/100)+1; }
export function xpIntoLevel(x){ return x % 100; }
export function unlockBadges(p){ const add=id=>{if(!p.badges.includes(id)) p.badges.push(id)}; if(p.streak>=3) add('streak3'); if(p.streak>=7) add('streak7'); if(p.xp>=200) add('xp200'); if(p.xp>=500) add('xp500'); }
export function el(html){ const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstElementChild; }
