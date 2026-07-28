import React, { useRef, useState } from 'react';
import { Download, Upload, RotateCcw, CheckCircle, Award, BookOpen, Layers, ShieldCheck, Sparkles } from 'lucide-react';

interface SettingsTabProps {
  onExportJSON: () => void;
  onImportJSON: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetData: () => void;
  completedBabCount: number;
  totalBabCount: number;
  fiilCount: number;
  isimCount: number;
  kaidahCount: number;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({
  onExportJSON,
  onImportJSON,
  onResetData,
  completedBabCount,
  totalBabCount,
  fiilCount,
  isimCount,
  kaidahCount
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resetConfirmed, setResetConfirmed] = useState(false);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Overview Statistics Card */}
      <div className="bg-[#141418] border border-white/10 p-6 rounded-2xl shadow-xl space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>Statistik & Ringkasan Data Aplikasi</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 text-center space-y-1">
            <BookOpen className="w-5 h-5 text-amber-400 mx-auto" />
            <span className="text-xs text-neutral-400 block">Progress Bab</span>
            <p className="text-xl font-bold text-amber-300">{completedBabCount} / {totalBabCount}</p>
          </div>

          <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 text-center space-y-1">
            <BookOpen className="w-5 h-5 text-amber-400 mx-auto" />
            <span className="text-xs text-neutral-400 block">Total Fi'il</span>
            <p className="text-xl font-bold text-amber-400">{fiilCount}</p>
          </div>

          <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 text-center space-y-1">
            <Layers className="w-5 h-5 text-amber-400 mx-auto" />
            <span className="text-xs text-neutral-400 block">Total Isim</span>
            <p className="text-xl font-bold text-amber-300">{isimCount}</p>
          </div>

          <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 text-center space-y-1">
            <Award className="w-5 h-5 text-amber-400 mx-auto" />
            <span className="text-xs text-neutral-400 block">Total Kaidah</span>
            <p className="text-xl font-bold text-amber-400">{kaidahCount}</p>
          </div>
        </div>
      </div>

      {/* Backup, Export & Import */}
      <div className="bg-[#141418] border border-white/10 p-6 rounded-2xl shadow-xl space-y-4">
        <h3 className="text-lg font-bold text-white">Penyimpanan & Cadangan Data (Backup / Restore)</h3>
        <p className="text-xs text-neutral-400 leading-relaxed">
          Semua perubahan data (penambahan, penyuntingan, atau penghapusan materi, kata kerja, dan kata benda) tersimpan secara otomatis di peramban Anda (localStorage). Anda dapat mengekspor data ke berkas JSON atau memulihkannya kapan saja.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            onClick={onExportJSON}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg text-xs md:text-sm shadow-md shadow-amber-500/20 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Ekspor Data ke Berkas JSON</span>
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#050505] hover:bg-white/5 text-neutral-200 border border-white/10 rounded-lg text-xs md:text-sm font-semibold transition-all"
          >
            <Upload className="w-4 h-4" />
            <span>Impor Data dari JSON</span>
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={onImportJSON}
            accept=".json"
            className="hidden"
          />
        </div>
      </div>

      {/* Reset Data to Original Defaults */}
      <div className="bg-[#141418] border border-rose-500/20 p-6 rounded-2xl shadow-xl space-y-4">
        <h3 className="text-lg font-bold text-rose-300 flex items-center gap-2">
          <RotateCcw className="w-5 h-5 text-rose-400" />
          <span>Reset ke Kurikulum Awal</span>
        </h3>
        <p className="text-xs text-neutral-400 leading-relaxed">
          Tindakan ini akan mengembalikan seluruh database (36 Bab, 500 Fi'il, 500 Isim, dan Kaidah) ke konfigurasi awal dari penyusun.
        </p>

        {!resetConfirmed ? (
          <button
            onClick={() => setResetConfirmed(true)}
            className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-lg text-xs font-semibold transition-all"
          >
            Kembalikan Data ke Setelan Awal
          </button>
        ) : (
          <div className="bg-rose-950/40 p-4 rounded-xl border border-rose-500/30 space-y-3">
            <p className="text-xs text-rose-200 font-semibold">
              Apakah Anda yakin ingin menghapus semua edit kustom dan mengembalikan data awal?
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => { onResetData(); setResetConfirmed(false); }}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold"
              >
                Ya, Reset Sekarang
              </button>
              <button
                onClick={() => setResetConfirmed(false)}
                className="px-4 py-2 bg-[#050505] hover:bg-white/5 text-neutral-300 rounded-lg text-xs border border-white/10"
              >
                Batal
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Author & Compiler Credits Card */}
      <div className="bg-[#0F0F12] border border-amber-500/30 p-6 rounded-2xl shadow-xl space-y-3">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-amber-500" />
          <h3 className="text-lg font-bold text-white">Informasi Penyusun & Sekolah</h3>
        </div>
        <div className="text-xs md:text-sm text-neutral-300 leading-relaxed space-y-1 pt-1">
          <p>
            <strong>Nama Aplikasi:</strong> Shorof SMP IT Umar bin Al Khattab Cirebon
          </p>
          <p>
            <strong>Penyusun Utama:</strong> Ust. Jundi Abdul Syahid, S.Pd. <span className="text-amber-400 font-medium">(Orang Dalam Genetik Jawa)</span>
          </p>
          <p>
            <strong>Instansi:</strong> SMP IT Umar bin Al Khattab Cirebon
          </p>
          <p>
            <strong>Cakupan Kurikulum:</strong> Berjenjang Kelas 7, 8, dan 9 (Total 36 Bab Materi, 3 Soal Essay Buku Catatan per Bab, 500 Fi'il, 500 Isim, dan Kaidah Shorfiyah).
          </p>
        </div>
      </div>
    </div>
  );
};
