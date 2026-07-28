import React from 'react';
import { ActiveTab } from '../types';
import { BookOpen, Calculator, BookMarked, Layers, Award, FileSpreadsheet, Settings, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  completedBabCount: number;
  totalBabCount: number;
  fiilCount: number;
  isimCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  completedBabCount,
  totalBabCount,
  fiilCount,
  isimCount
}) => {
  return (
    <header className="bg-[#0F0F12] border-b border-white/10 sticky top-0 z-40 shadow-2xl">
      {/* Top Banner / Branding */}
      <div className="max-w-7xl mx-auto px-4 py-3.5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-black text-xl font-serif shrink-0 shadow-lg shadow-amber-500/20">
              ص
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-base md:text-lg font-bold tracking-tight text-white uppercase">
                  Aplikasi Shorof Digital <span className="text-amber-500 text-xs ml-1 opacity-90 font-mono">v1.0</span>
                </h1>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                  36 Bab Resmi
                </span>
              </div>
              <p className="text-[11px] md:text-xs text-neutral-400 font-medium flex items-center gap-1.5 mt-0.5">
                <span>SMP IT Umar bin Al Khattab Cirebon</span>
                <span className="text-neutral-600">•</span>
                <strong className="text-amber-200/90 font-semibold">Ust. Jundi Abdul Syahid, S.Pd.</strong>
                <span className="text-neutral-500 text-[10px] hidden sm:inline">(Orang Dalam Genetik Jawa)</span>
              </p>
            </div>
          </div>

          {/* Quick Info Badges */}
          <div className="flex items-center gap-2 text-xs flex-wrap">
            <div className="bg-white/5 border border-white/10 rounded-md px-3 py-1.5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-neutral-400 font-medium">Progress:</span>
              <span className="text-amber-400 font-bold">{completedBabCount}/{totalBabCount} Bab</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-md px-3 py-1.5 flex items-center gap-2">
              <span className="text-amber-400 font-bold">{fiilCount}</span>
              <span className="text-neutral-400">Fi'il</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-md px-3 py-1.5 flex items-center gap-2">
              <span className="text-amber-400 font-bold">{isimCount}</span>
              <span className="text-neutral-400">Isim</span>
            </div>
          </div>
        </div>

        {/* Flexible Navigation Tabs */}
        <nav className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs md:text-sm">
          <button
            onClick={() => setActiveTab('materi')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-md font-medium whitespace-nowrap transition-all duration-150 ${
              activeTab === 'materi'
                ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                : 'text-neutral-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>36 Bab Berjenjang</span>
          </button>

          <button
            onClick={() => setActiveTab('tashrif')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-md font-medium whitespace-nowrap transition-all duration-150 ${
              activeTab === 'tashrif'
                ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                : 'text-neutral-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Kalkulator Tashrif</span>
          </button>

          <button
            onClick={() => setActiveTab('fiil')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-md font-medium whitespace-nowrap transition-all duration-150 ${
              activeTab === 'fiil'
                ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                : 'text-neutral-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>500 Kata Kerja (Fi'il)</span>
          </button>

          <button
            onClick={() => setActiveTab('isim')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-md font-medium whitespace-nowrap transition-all duration-150 ${
              activeTab === 'isim'
                ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                : 'text-neutral-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>500 Kata Benda (Isim)</span>
          </button>

          <button
            onClick={() => setActiveTab('kaidah')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-md font-medium whitespace-nowrap transition-all duration-150 ${
              activeTab === 'kaidah'
                ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                : 'text-neutral-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Kaidah Shorfiyah</span>
          </button>

          <button
            onClick={() => setActiveTab('latihan')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-md font-medium whitespace-nowrap transition-all duration-150 ${
              activeTab === 'latihan'
                ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                : 'text-neutral-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>3 Soal Essay Catatan</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-md font-medium whitespace-nowrap transition-all duration-150 ${
              activeTab === 'settings'
                ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                : 'text-neutral-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Pengaturan & Backup</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
