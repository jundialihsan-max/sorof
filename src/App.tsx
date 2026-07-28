import React, { useState, useEffect } from 'react';
import { ActiveTab, BabMateri, FiilEntry, IsimEntry, KaidahShorfiyah } from './types';
import { INITIAL_BAB_MATERI, INITIAL_KAIDAH_SHORFIYAH, generateInitialFiilData, generateInitialIsimData } from './data/initialData';
import { Header } from './components/Header';
import { MateriTab } from './components/MateriTab';
import { TashrifTab } from './components/TashrifTab';
import { FiilTab } from './components/FiilTab';
import { IsimTab } from './components/IsimTab';
import { KaidahTab } from './components/KaidahTab';
import { LatihanTab } from './components/LatihanTab';
import { SettingsTab } from './components/SettingsTab';
import { CrudModal, CrudType } from './components/CrudModal';

const STORAGE_KEYS = {
  MATERI: 'shorof_materi_v2',
  FIIL: 'shorof_fiil_v2',
  ISIM: 'shorof_isim_v2',
  KAIDAH: 'shorof_kaidah_v2'
};

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('materi');

  // Load from localStorage or initialize with 36 Bab, 500 Fi'il, 500 Isim, Kaidah
  const [materiList, setMateriList] = useState<BabMateri[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MATERI);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load materi from localStorage', e);
    }
    return INITIAL_BAB_MATERI;
  });

  const [fiilList, setFiilList] = useState<FiilEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FIIL);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load fiil from localStorage', e);
    }
    return generateInitialFiilData();
  });

  const [isimList, setIsimList] = useState<IsimEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ISIM);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load isim from localStorage', e);
    }
    return generateInitialIsimData();
  });

  const [kaidahList, setKaidahList] = useState<KaidahShorfiyah[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.KAIDAH);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load kaidah from localStorage', e);
    }
    return INITIAL_KAIDAH_SHORFIYAH;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MATERI, JSON.stringify(materiList));
    } catch (e) {
      console.error(e);
    }
  }, [materiList]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FIIL, JSON.stringify(fiilList));
    } catch (e) {
      console.error(e);
    }
  }, [fiilList]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ISIM, JSON.stringify(isimList));
    } catch (e) {
      console.error(e);
    }
  }, [isimList]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.KAIDAH, JSON.stringify(kaidahList));
    } catch (e) {
      console.error(e);
    }
  }, [kaidahList]);

  // CRUD Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<CrudType>('bab');
  const [modalEditItem, setModalEditItem] = useState<any>(null);

  const openAddModal = (type: CrudType) => {
    setModalType(type);
    setModalEditItem(null);
    setModalOpen(true);
  };

  const openEditModal = (type: CrudType, item: any) => {
    setModalType(type);
    setModalEditItem(item);
    setModalOpen(true);
  };

  // Toggle Bab Completion
  const handleToggleCompleteBab = (id: number) => {
    setMateriList(prev =>
      prev.map(b => (b.id === id ? { ...b, isCompleted: !b.isCompleted } : b))
    );
  };

  // Save Handlers
  const handleSaveBab = (data: Partial<BabMateri>) => {
    if (modalEditItem) {
      setMateriList(prev => prev.map(b => (b.id === modalEditItem.id ? { ...b, ...data } : b)));
    } else {
      const nextId = materiList.length > 0 ? Math.max(...materiList.map(b => b.id)) + 1 : 1;
      const newBab: BabMateri = {
        id: nextId,
        grade: data.grade || 'Kelas 7',
        titleArabic: data.titleArabic || '',
        titleIndo: data.titleIndo || '',
        summary: data.summary || '',
        contentMarkdown: data.contentMarkdown || '',
        kaidahPoints: data.kaidahPoints || [],
        examples: data.examples || [],
        exercises: data.exercises || []
      };
      setMateriList(prev => [...prev, newBab]);
    }
  };

  const handleSaveFiil = (data: Partial<FiilEntry>) => {
    if (modalEditItem) {
      setFiilList(prev => prev.map(f => (f.id === modalEditItem.id ? { ...f, ...data } : f)));
    } else {
      const newFiil: FiilEntry = {
        id: `f-${Date.now()}`,
        root: data.root || 'ف - ع - ل',
        madhi: data.madhi || '',
        mudhari: data.mudhari || '',
        amr: data.amr || '',
        masdar: data.masdar || '',
        isimFail: data.isimFail || '',
        isimMaful: data.isimMaful || '',
        babWazan: data.babWazan || 'Bab 1',
        type: data.type || 'Tsulatsi Mujarrad',
        category: data.category || 'Umum',
        translation: data.translation || '',
        jumlahMufidahArabic: data.jumlahMufidahArabic || '',
        jumlahMufidahIndo: data.jumlahMufidahIndo || ''
      };
      setFiilList(prev => [newFiil, ...prev]);
    }
  };

  const handleSaveIsim = (data: Partial<IsimEntry>) => {
    if (modalEditItem) {
      setIsimList(prev => prev.map(i => (i.id === modalEditItem.id ? { ...i, ...data } : i)));
    } else {
      const newIsim: IsimEntry = {
        id: `i-${Date.now()}`,
        mufrad: data.mufrad || '',
        jamak: data.jamak || '',
        typeCategory: data.typeCategory || 'Jamak Taksir',
        translation: data.translation || '',
        jumlahMufidahArabic: data.jumlahMufidahArabic || '',
        jumlahMufidahIndo: data.jumlahMufidahIndo || ''
      };
      setIsimList(prev => [newIsim, ...prev]);
    }
  };

  const handleSaveKaidah = (data: Partial<KaidahShorfiyah>) => {
    if (modalEditItem) {
      setKaidahList(prev => prev.map(k => (k.id === modalEditItem.id ? { ...k, ...data } : k)));
    } else {
      const newKaidah: KaidahShorfiyah = {
        id: `k-${Date.now()}`,
        titleArabic: data.titleArabic || '',
        titleIndo: data.titleIndo || '',
        ruleArabic: data.ruleArabic || '',
        explanation: data.explanation || '',
        category: data.category || 'Umum',
        examples: data.examples || []
      };
      setKaidahList(prev => [newKaidah, ...prev]);
    }
  };

  // Delete Handlers
  const handleDeleteBab = (id: number) => {
    if (confirm(`Apakah Anda yakin ingin menghapus Bab ${id}?`)) {
      setMateriList(prev => prev.filter(b => b.id !== id));
    }
  };

  const handleDeleteFiil = (id: string) => {
    setFiilList(prev => prev.filter(f => f.id !== id));
  };

  const handleDeleteIsim = (id: string) => {
    setIsimList(prev => prev.filter(i => i.id !== id));
  };

  const handleDeleteKaidah = (id: string) => {
    setKaidahList(prev => prev.filter(k => k.id !== id));
  };

  // Export Data to JSON
  const handleExportJSON = () => {
    const fullBackup = {
      materiList,
      fiilList,
      isimList,
      kaidahList,
      exportedAt: new Date().toISOString()
    };
    const jsonStr = JSON.stringify(fullBackup, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shorof_smp_it_umar_bin_hattab_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import Data from JSON
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = event => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.materiList) setMateriList(parsed.materiList);
        if (parsed.fiilList) setFiilList(parsed.fiilList);
        if (parsed.isimList) setIsimList(parsed.isimList);
        if (parsed.kaidahList) setKaidahList(parsed.kaidahList);
        alert('Data berhasil diimpor!');
      } catch (err) {
        alert('Gagal mengimpor data. Format berkas JSON tidak valid.');
      }
    };
    reader.readAsText(file);
  };

  // Reset Data to Defaults
  const handleResetData = () => {
    setMateriList(INITIAL_BAB_MATERI);
    setFiilList(generateInitialFiilData());
    setIsimList(generateInitialIsimData());
    setKaidahList(INITIAL_KAIDAH_SHORFIYAH);
    localStorage.removeItem(STORAGE_KEYS.MATERI);
    localStorage.removeItem(STORAGE_KEYS.FIIL);
    localStorage.removeItem(STORAGE_KEYS.ISIM);
    localStorage.removeItem(STORAGE_KEYS.KAIDAH);
  };

  const completedBabCount = materiList.filter(b => b.isCompleted).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Header & Main Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completedBabCount={completedBabCount}
        totalBabCount={materiList.length}
        fiilCount={fiilList.length}
        isimCount={isimList.length}
      />

      {/* Main View Container */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'materi' && (
          <MateriTab
            materiList={materiList}
            onToggleComplete={handleToggleCompleteBab}
            onOpenAddModal={() => openAddModal('bab')}
            onOpenEditModal={bab => openEditModal('bab', bab)}
            onDeleteBab={handleDeleteBab}
          />
        )}

        {activeTab === 'tashrif' && <TashrifTab />}

        {activeTab === 'fiil' && (
          <FiilTab
            fiilList={fiilList}
            onOpenAddModal={() => openAddModal('fiil')}
            onOpenEditModal={fiil => openEditModal('fiil', fiil)}
            onDeleteFiil={handleDeleteFiil}
          />
        )}

        {activeTab === 'isim' && (
          <IsimTab
            isimList={isimList}
            onOpenAddModal={() => openAddModal('isim')}
            onOpenEditModal={isim => openEditModal('isim', isim)}
            onDeleteIsim={handleDeleteIsim}
          />
        )}

        {activeTab === 'kaidah' && (
          <KaidahTab
            kaidahList={kaidahList}
            onOpenAddModal={() => openAddModal('kaidah')}
            onOpenEditModal={kaidah => openEditModal('kaidah', kaidah)}
            onDeleteKaidah={handleDeleteKaidah}
          />
        )}

        {activeTab === 'latihan' && <LatihanTab materiList={materiList} />}

        {activeTab === 'settings' && (
          <SettingsTab
            onExportJSON={handleExportJSON}
            onImportJSON={handleImportJSON}
            onResetData={handleResetData}
            completedBabCount={completedBabCount}
            totalBabCount={materiList.length}
            fiilCount={fiilList.length}
            isimCount={isimList.length}
            kaidahCount={kaidahList.length}
          />
        )}
      </main>

      {/* Universal CRUD Modal */}
      <CrudModal
        isOpen={modalOpen}
        type={modalType}
        initialData={modalEditItem}
        onClose={() => setModalOpen(false)}
        onSaveBab={handleSaveBab}
        onSaveFiil={handleSaveFiil}
        onSaveIsim={handleSaveIsim}
        onSaveKaidah={handleSaveKaidah}
      />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-400">
            Shorof SMP IT Umar bin Al Khattab Cirebon
          </p>
          <p>
            Disusun oleh: <strong className="text-amber-400">Jundi Abdul Syahid, S.Pd.</strong> (Orang Dalam Genetik Jawa)
          </p>
          <p className="text-[11px] text-slate-600">
            © {new Date().getFullYear()} All Rights Reserved. Bebas diakses, diedit, dan dikembangkan untuk keperluan pendidikan Islam.
          </p>
        </div>
      </footer>
    </div>
  );
}
