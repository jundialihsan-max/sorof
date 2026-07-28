import React, { useState } from 'react';
import { IsimEntry } from '../types';
import { Search, Plus, Edit3, Trash2, Eye, Layers, Sparkles, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface IsimTabProps {
  isimList: IsimEntry[];
  onOpenAddModal: () => void;
  onOpenEditModal: (isim: IsimEntry) => void;
  onDeleteIsim: (id: string) => void;
}

export const IsimTab: React.FC<IsimTabProps> = ({
  isimList,
  onOpenAddModal,
  onOpenEditModal,
  onDeleteIsim
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedIsim, setSelectedIsim] = useState<IsimEntry | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 30;

  const categories = ['Semua', ...Array.from(new Set(isimList.map(i => i.typeCategory)))];

  const filtered = isimList.filter(item => {
    const matchCat = selectedCategory === 'Semua' || item.typeCategory === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchQuery =
      item.mufrad.includes(searchQuery) ||
      item.jamak.includes(searchQuery) ||
      item.translation.toLowerCase().includes(q) ||
      item.jumlahMufidahIndo.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedList = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="bg-[#0F0F12] border border-white/10 p-5 rounded-2xl space-y-4 shadow-lg">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-500" />
              <span>Kamus & Database Kata Benda (500 Isim)</span>
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Dilengkapi bentuk Mufrad (Tunggal), Jamak (Plural), kategori Shorof, dan Jumlah Mufidah.
            </p>
          </div>

          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black text-xs md:text-sm font-bold rounded-lg shadow-md shadow-amber-500/20 transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Isim Baru</span>
          </button>
        </div>

        {/* Filter Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-white/10">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari kata benda Arab, jamak, atau arti..."
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
              {categories.map((cat, i) => (
                <option key={i} value={cat}>Kategori Isim: {cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Isim Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedList.map(item => (
          <div
            key={item.id}
            className="bg-[#141418] border border-white/10 hover:border-amber-500/40 p-4 rounded-2xl flex flex-col justify-between transition-all duration-200 hover:shadow-xl relative"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                  {item.typeCategory}
                </span>
              </div>

              {/* Mufrad and Jamak */}
              <div className="flex items-baseline justify-between gap-2 my-2">
                <div>
                  <span className="text-[10px] text-neutral-500 block">Mufrad (مُفْرَدٌ)</span>
                  <h3 className="font-serif text-2xl font-bold text-amber-400 dir-rtl">
                    {item.mufrad}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-neutral-500 block">Jamak (جَمْعٌ)</span>
                  <h4 className="font-serif text-xl font-semibold text-amber-300 dir-rtl">
                    {item.jamak}
                  </h4>
                </div>
              </div>

              <p className="text-white font-bold text-sm my-2">
                {item.translation}
              </p>

              {/* Jumlah Mufidah Preview */}
              <div className="bg-[#1D1D22] p-2.5 rounded-xl border border-white/5 space-y-1">
                <p className="font-serif text-lg text-amber-300 text-right dir-rtl">
                  {item.jumlahMufidahArabic}
                </p>
                <p className="text-[11px] text-neutral-400 line-clamp-1 italic">
                  "{item.jumlahMufidahIndo}"
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-3">
              <button
                onClick={() => setSelectedIsim(item)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 rounded-lg text-xs font-semibold"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Lihat Detail</span>
              </button>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => onOpenEditModal(item)}
                  title="Edit Isim"
                  className="p-1.5 text-neutral-400 hover:text-amber-400 hover:bg-white/5 rounded-lg"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onDeleteIsim(item.id)}
                  title="Hapus Isim"
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
          <Layers className="w-12 h-12 mx-auto text-neutral-600 mb-3" />
          <p className="text-lg font-medium text-neutral-300">Tidak ada Isim yang ditemukan</p>
          <p className="text-xs text-neutral-500 mt-1">Coba sesuaikan pencarian atau filter kategori Anda.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-[#0F0F12] border border-white/10 p-4 rounded-xl">
          <span className="text-xs text-neutral-400">
            Menampilkan {startIndex + 1} - {Math.min(startIndex + itemsPerPage, filtered.length)} dari {filtered.length} Isim
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

      {/* ISIM DETAIL MODAL */}
      {selectedIsim && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#141418] border border-white/10 rounded-2xl max-w-xl w-full p-6 space-y-6 my-auto shadow-2xl">
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                  {selectedIsim.typeCategory}
                </span>
                <div className="flex items-baseline gap-4 mt-2">
                  <div>
                    <span className="text-xs text-neutral-400 block">Mufrad:</span>
                    <h2 className="font-serif text-3xl font-bold text-amber-400 dir-rtl">
                      {selectedIsim.mufrad}
                    </h2>
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">Jamak:</span>
                    <h3 className="font-serif text-2xl font-semibold text-amber-300 dir-rtl">
                      {selectedIsim.jamak}
                    </h3>
                  </div>
                </div>
                <p className="text-base font-bold text-white mt-2">
                  {selectedIsim.translation}
                </p>
              </div>
              <button
                onClick={() => setSelectedIsim(null)}
                className="p-2 text-neutral-400 hover:text-white bg-white/5 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Jumlah Mufidah */}
            <div className="bg-[#1D1D22] border border-white/5 p-4 rounded-xl space-y-2">
              <h4 className="font-bold text-amber-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Penggunaan Kata Benda dalam Jumlah Mufidah</span>
              </h4>
              <p className="font-serif text-2xl text-amber-300 text-right dir-rtl font-semibold py-1">
                {selectedIsim.jumlahMufidahArabic}
              </p>
              <p className="text-neutral-300 text-xs md:text-sm italic">
                "{selectedIsim.jumlahMufidahIndo}"
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedIsim(null)}
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
