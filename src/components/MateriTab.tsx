import React, { useState } from 'react';
import { BabMateri, GradeLevel } from '../types';
import { Search, Plus, CheckCircle, Circle, Edit3, Trash2, BookOpen, ChevronRight, HelpCircle, FileText, X, Sparkles } from 'lucide-react';

interface MateriTabProps {
  materiList: BabMateri[];
  onToggleComplete: (id: number) => void;
  onOpenAddModal: () => void;
  onOpenEditModal: (bab: BabMateri) => void;
  onDeleteBab: (id: number) => void;
}

export const MateriTab: React.FC<MateriTabProps> = ({
  materiList,
  onToggleComplete,
  onOpenAddModal,
  onOpenEditModal,
  onDeleteBab
}) => {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | 'Semua'>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBab, setSelectedBab] = useState<BabMateri | null>(null);
  const [showAnswerKeys, setShowAnswerKeys] = useState<{ [key: string]: boolean }>({});

  const filteredList = materiList.filter(bab => {
    const matchGrade = selectedGrade === 'Semua' || bab.grade === selectedGrade;
    const q = searchQuery.toLowerCase();
    const matchQuery =
      bab.titleIndo.toLowerCase().includes(q) ||
      bab.titleArabic.includes(searchQuery) ||
      bab.summary.toLowerCase().includes(q);
    return matchGrade && matchQuery;
  });

  const toggleAnswerKey = (exerciseId: string) => {
    setShowAnswerKeys(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  return (
    <div className="space-y-6">
      {/* Grade Selector & Action Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#0F0F12] p-4 rounded-xl border border-white/10 shadow-lg">
        {/* Grade Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {(['Semua', 'Kelas 7', 'Kelas 8', 'Kelas 9'] as const).map(grade => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={`px-3.5 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedGrade === grade
                  ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'bg-[#141418] text-neutral-300 hover:bg-white/5 border border-white/10'
              }`}
            >
              {grade === 'Semua' ? 'Semua (36 Bab)' : grade}
            </button>
          ))}
        </div>

        {/* Search & Add */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari Bab, judul, atau kata kunci..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-[#050505] border border-white/10 text-neutral-200 text-xs md:text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-2 px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-black text-xs md:text-sm font-bold rounded-lg transition-all shadow-md shadow-amber-500/20 whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Bab</span>
          </button>
        </div>
      </div>

      {/* Grid of Bab Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredList.map(bab => (
          <div
            key={bab.id}
            className={`bg-[#141418] rounded-2xl border transition-all duration-200 p-5 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-xl relative ${
              bab.isCompleted ? 'border-amber-500/30 bg-[#18181e]' : 'border-white/10'
            }`}
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                  {bab.grade} • Bab {bab.id}
                </span>
                <button
                  onClick={() => onToggleComplete(bab.id)}
                  title={bab.isCompleted ? 'Tandai Belum Selesai' : 'Tandai Selesai'}
                  className="flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-amber-400 transition-colors"
                >
                  {bab.isCompleted ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400 text-xs font-semibold">Selesai</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4 text-neutral-600" />
                      <span className="text-xs">Tandai</span>
                    </>
                  )}
                </button>
              </div>

              {/* Arabic & Indo Title */}
              <h3 className="font-serif text-2xl font-bold text-amber-400 text-right dir-rtl my-1">
                {bab.titleArabic}
              </h3>
              <h4 className="font-bold text-white text-sm md:text-base leading-snug mb-2">
                {bab.titleIndo}
              </h4>
              <p className="text-neutral-400 text-xs line-clamp-2 mb-4 leading-relaxed">
                {bab.summary}
              </p>
            </div>

            {/* Bottom Controls */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-2">
              <button
                onClick={() => setSelectedBab(bab)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 rounded-lg text-xs font-semibold transition-all"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Pelajari & Latihan</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => onOpenEditModal(bab)}
                  title="Edit Bab Ini"
                  className="p-1.5 text-neutral-400 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDeleteBab(bab.id)}
                  title="Hapus Bab Ini"
                  className="p-1.5 text-neutral-400 hover:text-rose-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredList.length === 0 && (
        <div className="text-center py-16 bg-[#141418] rounded-2xl border border-white/10 text-neutral-400">
          <BookOpen className="w-12 h-12 mx-auto text-neutral-600 mb-3" />
          <p className="text-lg font-medium text-neutral-300">Tidak ada materi bab yang cocok</p>
          <p className="text-xs text-neutral-500 mt-1">Coba ubah kata kunci pencarian atau filter kelas Anda.</p>
        </div>
      )}

      {/* BAB DETAIL & EXERCISE MODAL */}
      {selectedBab && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-3 md:p-6 overflow-y-auto">
          <div className="bg-[#141418] border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col my-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#0F0F12] border-b border-white/10 p-5 flex items-start justify-between z-10">
              <div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                  {selectedBab.grade} • Bab {selectedBab.id}
                </span>
                <h2 className="font-serif text-3xl font-bold text-amber-400 dir-rtl text-right mt-2">
                  {selectedBab.titleArabic}
                </h2>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {selectedBab.titleIndo}
                </h3>
              </div>
              <button
                onClick={() => setSelectedBab(null)}
                className="p-2 text-neutral-400 hover:text-white bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 text-neutral-300 text-sm leading-relaxed">
              {/* Summary Box */}
              <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5">
                <p className="font-medium text-neutral-200">{selectedBab.summary}</p>
              </div>

              {/* Main Content Markdown Render */}
              <div className="prose prose-invert max-w-none space-y-3">
                <div className="whitespace-pre-wrap font-sans text-neutral-200 leading-relaxed">
                  {selectedBab.contentMarkdown ? selectedBab.contentMarkdown.replace(/#/g, '') : ''}
                </div>
              </div>

              {/* Kaidah Points */}
              {selectedBab.kaidahPoints && selectedBab.kaidahPoints.length > 0 && (
                <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl space-y-2">
                  <h4 className="font-bold text-amber-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Poin Kaidah Penting</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-neutral-300 text-xs md:text-sm">
                    {selectedBab.kaidahPoints.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Examples Table */}
              {selectedBab.examples && selectedBab.examples.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-bold text-white text-base">Contoh Penerapan:</h4>
                  <div className="bg-[#1D1D22] border border-white/5 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs md:text-sm">
                      <thead className="bg-white/5 text-neutral-300 font-semibold border-b border-white/10">
                        <tr>
                          <th className="p-3 text-right">Lafadz Arab (التصريف / المثال)</th>
                          <th className="p-3">Terjemahan / Penjelasan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {selectedBab.examples.map((ex, idx) => (
                          <tr key={idx} className="hover:bg-white/5">
                            <td className="p-3 font-serif text-xl text-amber-300 text-right dir-rtl">
                              {ex.arabic}
                            </td>
                            <td className="p-3 text-neutral-300">{ex.indo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 3 Essay Exercises Section */}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-500" />
                    <h4 className="font-bold text-lg text-white">
                      Latihan 3 Soal Essay (Buku Catatan)
                    </h4>
                  </div>
                  <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2.5 py-1 rounded border border-amber-500/30 font-bold uppercase">
                    Instruksi Khusus
                  </span>
                </div>

                <div className="bg-amber-500/5 border border-amber-500/20 p-3 rounded-xl text-xs text-amber-200/90 leading-relaxed">
                  📌 <strong>Petunjuk untuk Siswa:</strong> Kerjakan 3 soal essay di bawah ini secara mandiri dengan menuliskan jawaban lengkap beserta harakatnya di **buku catatan Shorof** masing-masing. Setelah selesai, Anda dapat memeriksa kebenaran jawaban melalui kunci jawaban terlampir.
                </div>

                <div className="space-y-4">
                  {selectedBab.exercises.map((ex, idx) => (
                    <div
                      key={ex.id}
                      className="bg-[#1D1D22] border border-white/5 p-4 rounded-xl space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                          {idx + 1}
                        </span>
                        <div className="flex-1 space-y-1">
                          <p className="font-serif text-2xl text-amber-300 text-right dir-rtl font-semibold">
                            {ex.questionArabic}
                          </p>
                          <p className="font-medium text-white text-sm">
                            {ex.questionIndo}
                          </p>
                          <p className="text-xs text-neutral-400 italic">
                            Instruksi: {ex.instruction}
                          </p>
                        </div>
                      </div>

                      {/* Answer Key Toggle */}
                      <div className="pt-2 border-t border-white/5 flex flex-col items-start gap-2">
                        <button
                          onClick={() => toggleAnswerKey(ex.id)}
                          className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>{showAnswerKeys[ex.id] ? 'Sembunyikan Kunci Jawaban' : 'Tampilkan Kunci Jawaban & Pembahasan'}</span>
                        </button>

                        {showAnswerKeys[ex.id] && (
                          <div className="w-full bg-[#141418] border border-white/10 p-3 rounded-lg text-xs text-neutral-300 space-y-1 animate-fadeIn">
                            <span className="font-bold text-amber-400 block">Kunci Jawaban Guru:</span>
                            <p className="text-neutral-200">{ex.answerKey}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-[#0F0F12] border-t border-white/10 p-4 flex justify-between items-center">
              <button
                onClick={() => onToggleComplete(selectedBab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 ${
                  selectedBab.isCompleted
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-white/5 text-neutral-200 hover:bg-white/10 border border-white/10'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                <span>{selectedBab.isCompleted ? 'Sudah Selesai Dipelajari' : 'Tandai Selesai'}</span>
              </button>
              <button
                onClick={() => setSelectedBab(null)}
                className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold rounded-lg"
              >
                Tutup Materi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
