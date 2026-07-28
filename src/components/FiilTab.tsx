import React, { useState } from 'react';
import { FiilEntry } from '../types';
import { Search, Plus, Filter, Edit3, Trash2, Eye, Sparkles, BookOpen, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface FiilTabProps {
  fiilList: FiilEntry[];
  onOpenAddModal: () => void;
  onOpenEditModal: (fiil: FiilEntry) => void;
  onDeleteFiil: (id: string) => void;
}

export const FiilTab: React.FC<FiilTabProps> = ({
  fiilList,
  onOpenAddModal,
  onOpenEditModal,
  onDeleteFiil
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedBab, setSelectedBab] = useState<string>('Semua');
  const [selectedFiil, setSelectedFiil] = useState<FiilEntry | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 30;

  // Categories list
  const categories = ['Semua', ...Array.from(new Set(fiilList.map(f => f.category)))];
  const babList = ['Semua', ...Array.from(new Set(fiilList.map(f => f.babWazan)))];

  const filtered = fiilList.filter(f => {
    const matchCat = selectedCategory === 'Semua' || f.category === selectedCategory;
    const matchBab = selectedBab === 'Semua' || f.babWazan === selectedBab;
    const q = searchQuery.toLowerCase();
    const matchQuery =
      f.madhi.includes(searchQuery) ||
      f.mudhari.includes(searchQuery) ||
      f.root.includes(searchQuery) ||
      f.translation.toLowerCase().includes(q) ||
      f.jumlahMufidahIndo.toLowerCase().includes(q);
    return matchCat && matchBab && matchQuery;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedList = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-6">
      {/* Search & Filter Header */}
      <div className="bg-[#0F0F12] border border-white/10 p-5 rounded-2xl space-y-4 shadow-lg">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" />
              <span>Kamus & Database Kata Kerja (500 Fi'il)</span>
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Dilengkapi Tashrif lengkap dan contoh penerapan dalam Jumlah Mufidah (Kalimat Sempurna).
            </p>
          </div>

          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black text-xs md:text-sm font-bold rounded-lg shadow-md shadow-amber-500/20 transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Fi'il Baru</span>
          </button>
        </div>

        {/* Filters & Search Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 border-t border-white/10">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari lafadz Arab, terjemahan, atau makna..."
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full bg-[#050505] border border-white/10 text-neutral-200 text-xs md:text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <select
              value={selectedCategory}
              onChange={e => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
              className="w-full bg-[#050505] border border-white/10 text-neutral-300 text-xs md:text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500"
            >
              {categories.map((c, i) => (
                <option key={i} value={c}>Kategori: {c}</option>
              ))}
            </select>
          </div>

          <div>
            <select
              value={selectedBab}
              onChange={e => { setSelectedBab(e.target.value); setCurrentPage(1); }}
              className="w-full bg-[#050505] border border-white/10 text-neutral-300 text-xs md:text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500"
            >
              {babList.map((b, i) => (
                <option key={i} value={b}>Wazan: {b}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Fi'il Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedList.map(item => (
          <div
            key={item.id}
            className="bg-[#141418] border border-white/10 hover:border-amber-500/40 p-4 rounded-2xl flex flex-col justify-between transition-all duration-200 group hover:shadow-xl relative"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                  {item.babWazan}
                </span>
                <span className="text-[10px] text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  {item.category}
                </span>
              </div>

              {/* Arabic Core Word */}
              <div className="flex items-baseline justify-between gap-2 my-2">
                <h3 className="font-serif text-2xl font-bold text-amber-400 dir-rtl">
                  {item.madhi} - {item.mudhari}
                </h3>
                <span className="text-xs font-bold text-amber-300 font-serif">
                  {item.amr}
                </span>
              </div>

              {/* Translation */}
              <p className="text-white font-bold text-sm mb-2">
                {item.translation}
              </p>

              {/* Short Sample Sentence */}
              <div className="bg-[#1D1D22] p-2.5 rounded-xl border border-white/5 space-y-1">
                <p className="font-serif text-lg text-amber-300 text-right dir-rtl">
                  {item.jumlahMufidahArabic}
                </p>
                <p className="text-[11px] text-neutral-400 line-clamp-1 italic">
                  "{item.jumlahMufidahIndo}"
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-3">
              <button
                onClick={() => setSelectedFiil(item)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 rounded-lg text-xs font-semibold"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Detail & Tashrif</span>
              </button>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => onOpenEditModal(item)}
                  title="Edit Fi'il"
                  className="p-1.5 text-neutral-400 hover:text-amber-400 hover:bg-white/5 rounded-lg"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onDeleteFiil(item.id)}
                  title="Hapus Fi'il"
                  className="p-1.5 text-neutral-400 hover:text-rose-400 hover:bg-white/5 rounded-lg"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-[#141418] rounded-2xl border border-white/10 text-neutral-400">
          <BookOpen className="w-12 h-12 mx-auto text-neutral-600 mb-3" />
          <p className="text-lg font-medium text-neutral-300">Tidak ada Fi'il yang ditemukan</p>
          <p className="text-xs text-neutral-500 mt-1">Coba gunakan kata kunci atau filter yang berbeda.</p>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-[#0F0F12] border border-white/10 p-4 rounded-xl">
          <span className="text-xs text-neutral-400">
            Menampilkan {startIndex + 1} - {Math.min(startIndex + itemsPerPage, filtered.length)} dari {filtered.length} Fi'il
          </span>
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              className="p-2 rounded-lg bg-[#050505] border border-white/10 text-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/5"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-amber-400 px-2">
              Halaman {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              className="p-2 rounded-lg bg-[#050505] border border-white/10 text-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/5"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* FI'IL DETAIL MODAL */}
      {selectedFiil && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#141418] border border-white/10 rounded-2xl max-w-2xl w-full p-6 space-y-6 my-auto shadow-2xl">
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                  {selectedFiil.babWazan} • {selectedFiil.type}
                </span>
                <h2 className="font-serif text-3xl font-bold text-amber-400 dir-rtl text-right mt-2">
                  {selectedFiil.madhi} - {selectedFiil.mudhari}
                </h2>
                <p className="text-lg font-bold text-white mt-1">
                  {selectedFiil.translation}
                </p>
              </div>
              <button
                onClick={() => setSelectedFiil(null)}
                className="p-2 text-neutral-400 hover:text-white bg-white/5 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tashrif Istilahi Grid */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm">Tashrif Istilahi Ringkas:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center text-xs">
                <div className="bg-[#1D1D22] p-3 rounded-xl border border-white/5">
                  <span className="text-neutral-400 text-[10px] block">الماضي</span>
                  <p className="font-serif text-xl text-amber-300 font-bold dir-rtl">{selectedFiil.madhi}</p>
                </div>
                <div className="bg-[#1D1D22] p-3 rounded-xl border border-white/5">
                  <span className="text-neutral-400 text-[10px] block">المضارع</span>
                  <p className="font-serif text-xl text-amber-300 font-bold dir-rtl">{selectedFiil.mudhari}</p>
                </div>
                <div className="bg-[#1D1D22] p-3 rounded-xl border border-white/5">
                  <span className="text-neutral-400 text-[10px] block">الأمر</span>
                  <p className="font-serif text-xl text-amber-400 font-bold dir-rtl">{selectedFiil.amr}</p>
                </div>
                <div className="bg-[#1D1D22] p-3 rounded-xl border border-white/5">
                  <span className="text-neutral-400 text-[10px] block">المصدر</span>
                  <p className="font-serif text-xl text-amber-400 font-bold dir-rtl">{selectedFiil.masdar}</p>
                </div>
                <div className="bg-[#1D1D22] p-3 rounded-xl border border-white/5">
                  <span className="text-neutral-400 text-[10px] block">اسم الفاعل</span>
                  <p className="font-serif text-xl text-amber-300 font-bold dir-rtl">{selectedFiil.isimFail}</p>
                </div>
                <div className="bg-[#1D1D22] p-3 rounded-xl border border-white/5">
                  <span className="text-neutral-400 text-[10px] block">اسم المفعول</span>
                  <p className="font-serif text-xl text-amber-300 font-bold dir-rtl">{selectedFiil.isimMaful}</p>
                </div>
              </div>
            </div>

            {/* Jumlah Mufidah */}
            <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl space-y-2">
              <h4 className="font-bold text-amber-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Penggunaan dalam Jumlah Mufidah (Kalimat Sempurna)</span>
              </h4>
              <p className="font-serif text-2xl text-amber-300 text-right dir-rtl font-semibold py-1">
                {selectedFiil.jumlahMufidahArabic}
              </p>
              <p className="text-neutral-300 text-xs md:text-sm italic">
                "{selectedFiil.jumlahMufidahIndo}"
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedFiil(null)}
                className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold rounded-lg"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
