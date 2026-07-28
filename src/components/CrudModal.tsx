import React, { useState, useEffect } from 'react';
import { BabMateri, FiilEntry, IsimEntry, KaidahShorfiyah } from '../types';
import { X, Save, Plus } from 'lucide-react';

export type CrudType = 'bab' | 'fiil' | 'isim' | 'kaidah';

interface CrudModalProps {
  isOpen: boolean;
  type: CrudType;
  initialData?: any;
  onClose: () => void;
  onSaveBab?: (data: Partial<BabMateri>) => void;
  onSaveFiil?: (data: Partial<FiilEntry>) => void;
  onSaveIsim?: (data: Partial<IsimEntry>) => void;
  onSaveKaidah?: (data: Partial<KaidahShorfiyah>) => void;
}

export const CrudModal: React.FC<CrudModalProps> = ({
  isOpen,
  type,
  initialData,
  onClose,
  onSaveBab,
  onSaveFiil,
  onSaveIsim,
  onSaveKaidah
}) => {
  if (!isOpen) return null;

  // Local Form States
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      if (type === 'bab') {
        setFormData({
          grade: 'Kelas 7',
          titleArabic: '',
          titleIndo: '',
          summary: '',
          contentMarkdown: '',
          kaidahPoints: [''],
          examples: [{ arabic: '', indo: '' }],
          exercises: [
            { id: `e-${Date.now()}-1`, questionArabic: '', questionIndo: '', instruction: 'Tuliskan jawaban di buku catatan.', answerKey: '' },
            { id: `e-${Date.now()}-2`, questionArabic: '', questionIndo: '', instruction: 'Tuliskan jawaban di buku catatan.', answerKey: '' },
            { id: `e-${Date.now()}-3`, questionArabic: '', questionIndo: '', instruction: 'Tuliskan jawaban di buku catatan.', answerKey: '' }
          ]
        });
      } else if (type === 'fiil') {
        setFormData({
          root: 'ف - ع - ل',
          madhi: '',
          mudhari: '',
          amr: '',
          masdar: '',
          isimFail: '',
          isimMaful: '',
          babWazan: 'Bab 1 (فَعَلَ - يَفْعُلُ)',
          type: 'Tsulatsi Mujarrad',
          category: 'Aktivitas Harian',
          translation: '',
          jumlahMufidahArabic: '',
          jumlahMufidahIndo: ''
        });
      } else if (type === 'isim') {
        setFormData({
          mufrad: '',
          jamak: '',
          typeCategory: 'Jamak Taksir',
          translation: '',
          jumlahMufidahArabic: '',
          jumlahMufidahIndo: ''
        });
      } else if (type === 'kaidah') {
        setFormData({
          titleArabic: '',
          titleIndo: '',
          ruleArabic: '',
          explanation: '',
          category: 'I\'lal',
          examples: [{ arabic: '', indo: '' }]
        });
      }
    }
  }, [initialData, type, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'bab' && onSaveBab) onSaveBab(formData);
    if (type === 'fiil' && onSaveFiil) onSaveFiil(formData);
    if (type === 'isim' && onSaveIsim) onSaveIsim(formData);
    if (type === 'kaidah' && onSaveKaidah) onSaveKaidah(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#141418] border border-white/10 rounded-2xl max-w-2xl w-full p-6 space-y-6 my-auto shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-lg font-bold text-white capitalize">
            {initialData ? 'Edit' : 'Tambah'} {type.toUpperCase()}
          </h2>
          <button onClick={onClose} className="p-2 text-neutral-400 hover:text-white bg-white/5 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
          {/* FORM BAB */}
          {type === 'bab' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-neutral-300 font-semibold block mb-1">Tingkat Kelas:</label>
                  <select
                    value={formData.grade || 'Kelas 7'}
                    onChange={e => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-neutral-200 focus:border-amber-500"
                  >
                    <option value="Kelas 7">Kelas 7</option>
                    <option value="Kelas 8">Kelas 8</option>
                    <option value="Kelas 9">Kelas 9</option>
                  </select>
                </div>
                <div>
                  <label className="text-neutral-300 font-semibold block mb-1">Judul Indonesia:</label>
                  <input
                    type="text"
                    required
                    value={formData.titleIndo || ''}
                    onChange={e => setFormData({ ...formData, titleIndo: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-neutral-200 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-neutral-300 font-semibold block mb-1">Judul Arab:</label>
                <input
                  type="text"
                  required
                  value={formData.titleArabic || ''}
                  onChange={e => setFormData({ ...formData, titleArabic: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-amber-400 font-serif text-xl dir-rtl text-right focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-neutral-300 font-semibold block mb-1">Ringkasan Bab:</label>
                <textarea
                  rows={2}
                  value={formData.summary || ''}
                  onChange={e => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-neutral-200 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-neutral-300 font-semibold block mb-1">Penjelasan Lengkap (Markdown/Text):</label>
                <textarea
                  rows={5}
                  value={formData.contentMarkdown || ''}
                  onChange={e => setFormData({ ...formData, contentMarkdown: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-neutral-200 font-mono text-xs focus:border-amber-500"
                />
              </div>
            </>
          )}

          {/* FORM FIIL */}
          {type === 'fiil' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-neutral-300 font-semibold block mb-1">Fi'il Madhi:</label>
                  <input
                    type="text"
                    required
                    value={formData.madhi || ''}
                    onChange={e => setFormData({ ...formData, madhi: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-2 text-amber-400 font-serif text-xl dir-rtl text-right focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-neutral-300 font-semibold block mb-1">Fi'il Mudhari':</label>
                  <input
                    type="text"
                    required
                    value={formData.mudhari || ''}
                    onChange={e => setFormData({ ...formData, mudhari: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-2 text-amber-400 font-serif text-xl dir-rtl text-right focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-neutral-300 font-semibold block mb-1">Fi'il Amr:</label>
                  <input
                    type="text"
                    value={formData.amr || ''}
                    onChange={e => setFormData({ ...formData, amr: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-2 text-amber-300 font-serif text-lg dir-rtl text-right focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-neutral-300 font-semibold block mb-1">Masdar:</label>
                  <input
                    type="text"
                    value={formData.masdar || ''}
                    onChange={e => setFormData({ ...formData, masdar: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-2 text-amber-300 font-serif text-lg dir-rtl text-right focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-neutral-300 font-semibold block mb-1">Wazan / Bab:</label>
                  <input
                    type="text"
                    value={formData.babWazan || ''}
                    onChange={e => setFormData({ ...formData, babWazan: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-2 text-neutral-200 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-neutral-300 font-semibold block mb-1">Terjemahan Indonesia:</label>
                <input
                  type="text"
                  required
                  value={formData.translation || ''}
                  onChange={e => setFormData({ ...formData, translation: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-neutral-200 focus:border-amber-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-neutral-300 font-semibold block">Penggunaan Jumlah Mufidah:</label>
                <input
                  type="text"
                  placeholder="Kalimat Arab (contoh: نَصَرَ المُسْلِمُ أَخَاهُ)"
                  value={formData.jumlahMufidahArabic || ''}
                  onChange={e => setFormData({ ...formData, jumlahMufidahArabic: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-amber-300 font-serif text-lg dir-rtl text-right focus:border-amber-500"
                />
                <input
                  type="text"
                  placeholder="Terjemahan Kalimat (contoh: Seorang muslim menolong saudaranya)"
                  value={formData.jumlahMufidahIndo || ''}
                  onChange={e => setFormData({ ...formData, jumlahMufidahIndo: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-neutral-200 focus:border-amber-500"
                />
              </div>
            </>
          )}

          {/* FORM ISIM */}
          {type === 'isim' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-neutral-300 font-semibold block mb-1">Isim Mufrad (Tunggal):</label>
                  <input
                    type="text"
                    required
                    value={formData.mufrad || ''}
                    onChange={e => setFormData({ ...formData, mufrad: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-2 text-amber-400 font-serif text-xl dir-rtl text-right focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-neutral-300 font-semibold block mb-1">Isim Jamak (Plural):</label>
                  <input
                    type="text"
                    required
                    value={formData.jamak || ''}
                    onChange={e => setFormData({ ...formData, jamak: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-2 text-amber-300 font-serif text-xl dir-rtl text-right focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-neutral-300 font-semibold block mb-1">Kategori Isim:</label>
                <select
                  value={formData.typeCategory || 'Jamak Taksir'}
                  onChange={e => setFormData({ ...formData, typeCategory: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-neutral-200 focus:border-amber-500"
                >
                  <option value="Jamak Taksir">Jamak Taksir</option>
                  <option value="Isim Jamid">Isim Jamid</option>
                  <option value="Isim Fa'il">Isim Fa'il</option>
                  <option value="Isim Maf'ul">Isim Maf'ul</option>
                  <option value="Masdar">Masdar</option>
                  <option value="Isim Zaman/Makan">Isim Zaman/Makan</option>
                  <option value="Isim Alat">Isim Alat</option>
                </select>
              </div>

              <div>
                <label className="text-neutral-300 font-semibold block mb-1">Terjemahan Indonesia:</label>
                <input
                  type="text"
                  required
                  value={formData.translation || ''}
                  onChange={e => setFormData({ ...formData, translation: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-neutral-200 focus:border-amber-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-neutral-300 font-semibold block">Penggunaan Jumlah Mufidah:</label>
                <input
                  type="text"
                  placeholder="Kalimat Arab"
                  value={formData.jumlahMufidahArabic || ''}
                  onChange={e => setFormData({ ...formData, jumlahMufidahArabic: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-amber-300 font-serif text-lg dir-rtl text-right focus:border-amber-500"
                />
                <input
                  type="text"
                  placeholder="Terjemahan Kalimat"
                  value={formData.jumlahMufidahIndo || ''}
                  onChange={e => setFormData({ ...formData, jumlahMufidahIndo: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-neutral-200 focus:border-amber-500"
                />
              </div>
            </>
          )}

          {/* FORM KAIDAH */}
          {type === 'kaidah' && (
            <>
              <div>
                <label className="text-neutral-300 font-semibold block mb-1">Judul Kaidah (Indonesia):</label>
                <input
                  type="text"
                  required
                  value={formData.titleIndo || ''}
                  onChange={e => setFormData({ ...formData, titleIndo: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-neutral-200 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-neutral-300 font-semibold block mb-1">Lafadz Kaidah Arab (الضابط):</label>
                <textarea
                  rows={2}
                  required
                  value={formData.ruleArabic || ''}
                  onChange={e => setFormData({ ...formData, ruleArabic: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-amber-400 font-serif text-xl dir-rtl text-right focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-neutral-300 font-semibold block mb-1">Penjelasan Kaidah:</label>
                <textarea
                  rows={3}
                  required
                  value={formData.explanation || ''}
                  onChange={e => setFormData({ ...formData, explanation: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-neutral-200 focus:border-amber-500"
                />
              </div>
            </>
          )}

          <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#050505] hover:bg-white/5 text-neutral-300 rounded-lg border border-white/10"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Data</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
