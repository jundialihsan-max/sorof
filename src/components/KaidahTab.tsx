import React, { useState } from 'react';
import { KaidahShorfiyah } from '../types';
import { Award, Plus, Search, Edit3, Trash2, Sparkles, BookOpen } from 'lucide-react';

interface KaidahTabProps {
  kaidahList: KaidahShorfiyah[];
  onOpenAddModal: () => void;
  onOpenEditModal: (kaidah: KaidahShorfiyah) => void;
  onDeleteKaidah: (id: string) => void;
}

export const KaidahTab: React.FC<KaidahTabProps> = ({
  kaidahList,
  onOpenAddModal,
  onOpenEditModal,
  onDeleteKaidah
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', ...Array.from(new Set(kaidahList.map(k => k.category)))];

  const filtered = kaidahList.filter(k => {
    const matchCat = selectedCategory === 'Semua' || k.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchQuery =
      k.titleIndo.toLowerCase().includes(q) ||
      k.titleArabic.includes(searchQuery) ||
      k.ruleArabic.includes(searchQuery) ||
      k.explanation.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  return (
    <div className="space-y-6">
      {/* Header & Actions */}
      <div className="bg-[#0F0F12] border border-white/10 p-5 rounded-2xl space-y-4 shadow-lg">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Kaidah-Kaidah Shorfiyah Utama (Rumus Perubahan)</span>
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Rangkuman kaidah I'lal, Bina', Ibdal, dan pembentukan Wazan dasar.
            </p>
          </div>

          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black text-xs md:text-sm font-bold rounded-lg shadow-md shadow-amber-500/20 transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Kaidah Baru</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-white/10">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari kaidah, penjelasan, atau lafadz..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-[#050505] border border-white/10 text-neutral-200 text-xs md:text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full bg-[#050505] border border-white/10 text-neutral-300 text-xs md:text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500"
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>Kategori Kaidah: {cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Kaidah Cards */}
      <div className="space-y-4">
        {filtered.map((kaidah, idx) => (
          <div
            key={kaidah.id}
            className="bg-[#141418] border border-white/10 p-5 rounded-2xl space-y-4 hover:border-amber-500/40 transition-all shadow-lg relative"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                  {kaidah.category} • Kaidah No. {idx + 1}
                </span>
                <h3 className="font-bold text-white text-base md:text-lg">
                  {kaidah.titleIndo}
                </h3>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => onOpenEditModal(kaidah)}
                  className="p-1.5 text-neutral-400 hover:text-amber-400 hover:bg-white/5 rounded-lg"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDeleteKaidah(kaidah.id)}
                  className="p-1.5 text-neutral-400 hover:text-rose-400 hover:bg-white/5 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Arabic Matan / Rule Box */}
            <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 text-right dir-rtl">
              <span className="text-[10px] text-neutral-400 block mb-1">الضَّابِطُ / القَاعِدَةُ:</span>
              <p className="font-serif text-2xl text-amber-300 font-bold leading-relaxed">
                {kaidah.ruleArabic}
              </p>
            </div>

            {/* Explanation */}
            <div className="text-xs md:text-sm text-neutral-300 leading-relaxed bg-[#050505] p-3 rounded-xl border border-white/5">
              <strong className="text-amber-400">Penjelasan Kaidah: </strong>
              <span>{kaidah.explanation}</span>
            </div>

            {/* Examples */}
            {kaidah.examples && kaidah.examples.length > 0 && (
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold text-neutral-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Contoh Penerapan:</span>
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {kaidah.examples.map((ex, exIdx) => (
                    <div key={exIdx} className="bg-[#1D1D22] border border-white/5 p-2.5 rounded-lg text-center">
                      <p className="font-serif text-lg text-amber-300 dir-rtl font-semibold">{ex.arabic}</p>
                      <p className="text-[11px] text-neutral-400 mt-0.5">{ex.indo}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-[#141418] rounded-2xl border border-white/10 text-neutral-400">
          <BookOpen className="w-12 h-12 mx-auto text-neutral-600 mb-3" />
          <p className="text-lg font-medium text-neutral-300">Tidak ada kaidah yang ditemukan</p>
        </div>
      )}
    </div>
  );
};
