import React, { useState } from 'react';
import { BabMateri, GradeLevel } from '../types';
import { FileSpreadsheet, HelpCircle, BookOpen, CheckCircle, Search } from 'lucide-react';

interface LatihanTabProps {
  materiList: BabMateri[];
}

export const LatihanTab: React.FC<LatihanTabProps> = ({ materiList }) => {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | 'Semua'>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [openKeys, setOpenKeys] = useState<{ [key: string]: boolean }>({});

  const toggleKey = (id: string) => {
    setOpenKeys(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredMateri = materiList.filter(b => {
    const matchGrade = selectedGrade === 'Semua' || b.grade === selectedGrade;
    const q = searchQuery.toLowerCase();
    const matchSearch = b.titleIndo.toLowerCase().includes(q) || b.titleArabic.includes(searchQuery);
    return matchGrade && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-[#0F0F12] border border-white/10 p-6 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/30">
            <FileSpreadsheet className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">
              Modul Latihan Essay Buku Catatan (3 Soal per Bab • Total 108 Soal)
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              SMP IT Umar bin Al Khattab Cirebon — Disusun oleh Jundi Abdul Syahid, S.Pd.
            </p>
          </div>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl text-xs text-amber-200 leading-relaxed">
          📌 <strong>Instruksi Pengerjaan Siswa:</strong> Setiap bab/materi memiliki 3 soal essay pilihan. Siswa diminta untuk **menuliskan jawaban lengkap menggunakan harakat yang tepat di buku catatan Shorof**. Gunakan tombol kunci jawaban di bawah setiap soal untuk mencocokkan hasil tulisan tangan Anda dengan pembetulan guru.
        </div>

        {/* Grade Pills & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {(['Semua', 'Kelas 7', 'Kelas 8', 'Kelas 9'] as const).map(grade => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedGrade === grade
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'bg-[#050505] text-neutral-300 border border-white/10 hover:bg-white/5'
                }`}
              >
                {grade}
              </button>
            ))}
          </div>

          <div className="relative md:w-64">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari bab atau soal..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-[#050505] border border-white/10 text-neutral-200 text-xs rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Accordion List of Bab Exercises */}
      <div className="space-y-6">
        {filteredMateri.map(bab => (
          <div key={bab.id} className="bg-[#141418] border border-white/10 rounded-2xl p-5 space-y-4 shadow-lg relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                  {bab.grade} • Bab {bab.id}
                </span>
                <h3 className="font-bold text-white text-base md:text-lg mt-1">
                  {bab.titleIndo}
                </h3>
              </div>
              <span className="font-serif text-xl font-bold text-amber-400 dir-rtl">
                {bab.titleArabic}
              </span>
            </div>

            {/* Exercises Grid */}
            <div className="space-y-3">
              {bab.exercises.map((ex, exIdx) => (
                <div key={ex.id} className="bg-[#1D1D22] border border-white/5 p-4 rounded-xl space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 border border-amber-500/30">
                      {exIdx + 1}
                    </span>
                    <div className="flex-1 space-y-1">
                      <p className="font-serif text-xl text-amber-300 text-right dir-rtl font-semibold">
                        {ex.questionArabic}
                      </p>
                      <p className="text-white text-sm font-medium">
                        {ex.questionIndo}
                      </p>
                      <p className="text-xs text-neutral-400 italic">
                        {ex.instruction}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <button
                      onClick={() => toggleKey(ex.id)}
                      className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 bg-[#050505] px-3 py-1.5 rounded-lg border border-white/10"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>{openKeys[ex.id] ? 'Sembunyikan Kunci Jawaban' : 'Tampilkan Kunci Jawaban & Pembahasan'}</span>
                    </button>

                    {openKeys[ex.id] && (
                      <div className="mt-2 bg-[#050505] border border-white/10 p-3 rounded-lg text-xs text-neutral-300 space-y-1 animate-fadeIn">
                        <strong className="text-amber-400 block">Pembahasan & Jawaban Guru:</strong>
                        <p className="text-neutral-200 leading-relaxed">{ex.answerKey}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
