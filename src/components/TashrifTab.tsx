import React, { useState } from 'react';
import { WAZAN_LIST, generateTashrifLughawi, WazanOption } from '../utils/tashrifEngine';
import { Calculator, Copy, Check, Sparkles, RefreshCw, Layers } from 'lucide-react';

export const TashrifTab: React.FC = () => {
  const [selectedWazanId, setSelectedWazanId] = useState<string>('bab1');
  const [customMadhi, setCustomMadhi] = useState<string>('نَصَرَ');
  const [customMudhari, setCustomMudhari] = useState<string>('يَنْصُرُ');
  const [customAmr, setCustomAmr] = useState<string>('أُنْصُرْ');
  const [activeSubTab, setActiveSubTab] = useState<'istilahi' | 'lughawi'>('istilahi');
  const [copied, setCopied] = useState(false);

  const selectedWazan: WazanOption = WAZAN_LIST.find(w => w.id === selectedWazanId) || WAZAN_LIST[0];

  const handleWazanChange = (wId: string) => {
    setSelectedWazanId(wId);
    const target = WAZAN_LIST.find(w => w.id === wId);
    if (target) {
      setCustomMadhi(target.sampleMadhi);
      setCustomMudhari(target.sampleMudhari);
      setCustomAmr(target.sampleAmr);
    }
  };

  const lughawiConjugations = generateTashrifLughawi(customMadhi, customMudhari, customAmr);

  const handleCopyTable = () => {
    let textToCopy = `Tashrif ${selectedWazan.name}\n\n`;
    if (activeSubTab === 'istilahi') {
      textToCopy += `Madhi: ${customMadhi}\nMudhari: ${customMudhari}\nAmr: ${customAmr}\nMasdar: ${selectedWazan.patternMasdar}\nFa'il: ${selectedWazan.patternFail}\nMaf'ul: ${selectedWazan.patternMaful}\nNahi: ${selectedWazan.patternNahi}\nZaman/Makan: ${selectedWazan.patternZamanMakan}\nAlat: ${selectedWazan.patternAlat}`;
    } else {
      textToCopy += `Dhomir\tMadhi\tMudhari\tAmr\n`;
      lughawiConjugations.forEach(c => {
        textToCopy += `${c.dhomirArabic} (${c.dhomirIndo})\t${c.madhi}\t${c.mudhari}\t${c.amr}\n`;
      });
    }
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-[#0F0F12] p-6 rounded-2xl border border-white/10 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-bold text-white">Kalkulator & Generator Tashrif Otomatis</h2>
            </div>
            <p className="text-xs md:text-sm text-neutral-400">
              Pilih Wazan standar atau masukkan kata kerja untuk melihat perubahan bentuk secara Istilahi dan Lughawi (14 Dhomir).
            </p>
          </div>
          <button
            onClick={handleCopyTable}
            className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg text-xs shadow-md shadow-amber-500/20 transition-all shrink-0"
          >
            {copied ? <Check className="w-4 h-4 text-black" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Berhasil Menyalin!' : 'Salin Tabel Tashrif'}</span>
          </button>
        </div>
      </div>

      {/* Control Panel: Wazan Selector & Inputs */}
      <div className="bg-[#141418] border border-white/10 p-5 rounded-2xl space-y-4 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Wazan Selector */}
          <div className="md:col-span-2 space-y-1.5">
            <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-500" />
              <span>Pilih Wazan / Bab Shorof:</span>
            </label>
            <select
              value={selectedWazanId}
              onChange={e => handleWazanChange(e.target.value)}
              className="w-full bg-[#050505] border border-white/10 text-amber-400 font-serif text-sm md:text-base rounded-lg px-3 py-2.5 focus:outline-none focus:border-amber-500 transition-colors"
            >
              {WAZAN_LIST.map(w => (
                <option key={w.id} value={w.id}>
                  {w.name} ({w.sampleTranslation})
                </option>
              ))}
            </select>
          </div>

          {/* Custom Fi'il Madhi */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-300">
              Fi'il Madhi (الماضي):
            </label>
            <input
              type="text"
              value={customMadhi}
              onChange={e => setCustomMadhi(e.target.value)}
              className="w-full bg-[#050505] border border-white/10 text-amber-300 font-serif text-xl rounded-lg px-3 py-2 text-right dir-rtl focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Custom Fi'il Mudhari */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-300">
              Fi'il Mudhari' (المضارع):
            </label>
            <input
              type="text"
              value={customMudhari}
              onChange={e => setCustomMudhari(e.target.value)}
              className="w-full bg-[#050505] border border-white/10 text-amber-300 font-serif text-xl rounded-lg px-3 py-2 text-right dir-rtl focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Sub Tab Switcher: Istilahi vs Lughawi */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-2">
        <button
          onClick={() => setActiveSubTab('istilahi')}
          className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${
            activeSubTab === 'istilahi'
              ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
              : 'bg-[#141418] text-neutral-400 hover:text-white border border-white/10'
          }`}
        >
          Tashrif Istilahi (التصريف الاصطلاحي)
        </button>
        <button
          onClick={() => setActiveSubTab('lughawi')}
          className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${
            activeSubTab === 'lughawi'
              ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
              : 'bg-[#141418] text-neutral-400 hover:text-white border border-white/10'
          }`}
        >
          Tashrif Lughawi 14 Dhomir (التصريف اللغوي)
        </button>
      </div>

      {/* VIEW 1: TASHRIF ISTILAHI */}
      {activeSubTab === 'istilahi' && (
        <div className="bg-[#141418] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 bg-[#0F0F12] border-b border-white/10 flex items-center justify-between">
            <span className="font-bold text-white text-sm">
              Skema Tashrif Istilahi — {selectedWazan.name}
            </span>
            <span className="text-xs text-amber-400 font-medium">
              Contoh Arti: {selectedWazan.sampleTranslation}
            </span>
          </div>

          <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-[11px] font-semibold text-neutral-400 block">الفعل الماضي (Madhi)</span>
              <p className="font-serif text-2xl text-amber-300 font-bold dir-rtl">{customMadhi}</p>
              <span className="text-[10px] text-neutral-500 block">Wazan: {selectedWazan.patternMadhi}</span>
            </div>

            <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-[11px] font-semibold text-neutral-400 block">الفعل المضارع (Mudhari')</span>
              <p className="font-serif text-2xl text-amber-300 font-bold dir-rtl">{customMudhari}</p>
              <span className="text-[10px] text-neutral-500 block">Wazan: {selectedWazan.patternMudhari}</span>
            </div>

            <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-[11px] font-semibold text-neutral-400 block">المصدر (Masdar)</span>
              <p className="font-serif text-2xl text-amber-400 font-bold dir-rtl">{selectedWazan.patternMasdar}</p>
              <span className="text-[10px] text-neutral-500 block">Asal Perbuatan</span>
            </div>

            <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-[11px] font-semibold text-neutral-400 block">اسم الفاعل (Isim Fa'il)</span>
              <p className="font-serif text-2xl text-amber-300 font-bold dir-rtl">{selectedWazan.patternFail}</p>
              <span className="text-[10px] text-neutral-500 block">Pelaku / Subjek</span>
            </div>

            <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-[11px] font-semibold text-neutral-400 block">اسم المفعول (Isim Maf'ul)</span>
              <p className="font-serif text-2xl text-amber-300 font-bold dir-rtl">{selectedWazan.patternMaful}</p>
              <span className="text-[10px] text-neutral-500 block">Objek Penderita</span>
            </div>

            <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-[11px] font-semibold text-neutral-400 block">فعل الأمر (Fi'il Amr)</span>
              <p className="font-serif text-2xl text-amber-400 font-bold dir-rtl">{customAmr}</p>
              <span className="text-[10px] text-neutral-500 block">Perintah (Lakukan!)</span>
            </div>

            <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-[11px] font-semibold text-neutral-400 block">فعل النهي (Fi'il Nahi)</span>
              <p className="font-serif text-2xl text-amber-300 font-bold dir-rtl">{selectedWazan.patternNahi}</p>
              <span className="text-[10px] text-neutral-500 block">Larangan (Jangan!)</span>
            </div>

            <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-[11px] font-semibold text-neutral-400 block">اسم الزمان / المكان</span>
              <p className="font-serif text-2xl text-amber-300 font-bold dir-rtl">{selectedWazan.patternZamanMakan}</p>
              <span className="text-[10px] text-neutral-500 block">Waktu / Tempat</span>
            </div>

            <div className="bg-[#1D1D22] p-4 rounded-xl border border-white/5 space-y-1 col-span-2 md:col-span-1">
              <span className="text-[11px] font-semibold text-neutral-400 block">اسم الآلة (Isim Alat)</span>
              <p className="font-serif text-2xl text-amber-400 font-bold dir-rtl">{selectedWazan.patternAlat}</p>
              <span className="text-[10px] text-neutral-500 block">Alat Pembantu</span>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: TASHRIF LUGHAWI 14 DHOMIR */}
      {activeSubTab === 'lughawi' && (
        <div className="bg-[#141418] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 bg-[#0F0F12] border-b border-white/10 flex items-center justify-between">
            <span className="font-bold text-white text-sm">
              Tabel Konjugasi 14 Dhomir (Tashrif Lughawi)
            </span>
            <span className="text-xs text-amber-400 font-semibold">
              Madhi: {customMadhi} | Mudhari': {customMudhari} | Amr: {customAmr}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-[#050505] text-neutral-300 font-semibold border-b border-white/10">
                <tr>
                  <th className="p-3">Dhomir (الضمير)</th>
                  <th className="p-3">Kategori Pelaku</th>
                  <th className="p-3 text-right">الماضي (Madhi)</th>
                  <th className="p-3 text-right">المضارع (Mudhari')</th>
                  <th className="p-3 text-right">الأمر (Amr)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {lughawiConjugations.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-xl font-bold text-amber-400">{row.dhomirArabic}</span>
                        <span className="text-neutral-400 text-xs">({row.dhomirIndo})</span>
                      </div>
                    </td>
                    <td className="p-3 text-neutral-400 text-xs font-medium">
                      {row.pronounType}
                    </td>
                    <td className="p-3 text-right font-serif text-xl text-amber-300 dir-rtl font-semibold">
                      {row.madhi}
                    </td>
                    <td className="p-3 text-right font-serif text-xl text-amber-300 dir-rtl font-semibold">
                      {row.mudhari}
                    </td>
                    <td className="p-3 text-right font-serif text-xl text-amber-400 dir-rtl font-semibold">
                      {row.amr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
