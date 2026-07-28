export type GradeLevel = 'Kelas 7' | 'Kelas 8' | 'Kelas 9';

export interface EssayQuestion {
  id: string;
  questionArabic: string;
  questionIndo: string;
  instruction: string; // e.g. "Tuliskan jawaban di buku catatan lengkap dengan harakat."
  answerKey: string;
}

export interface BabMateri {
  id: number; // 1 to 36
  grade: GradeLevel;
  titleArabic: string;
  titleIndo: string;
  summary: string;
  contentMarkdown: string;
  kaidahPoints: string[];
  examples: Array<{
    arabic: string;
    indo: string;
    wazan?: string;
  }>;
  exercises: EssayQuestion[];
  isCompleted?: boolean;
}

export interface FiilEntry {
  id: string;
  root: string; // e.g., "نصّر" or "ن - ص - ر"
  madhi: string; // e.g., نَصَرَ
  mudhari: string; // e.g., يَنْصُرُ
  amr: string; // e.g., أُنْصُرْ
  masdar: string; // e.g., نَصْرًا
  isimFail: string; // e.g., نَاصِرٌ
  isimMaful: string; // e.g., مَنْصُورٌ
  babWazan: string; // e.g., "Bab 1 (فَعَلَ - يَفْعُلُ)"
  type: 'Tsulatsi Mujarrad' | 'Tsulatsi Mazid';
  category: string; // e.g., "Ibadah", "Pendidikan", "Aktivitas Harian", "Sosial", "Alam", dll.
  translation: string;
  jumlahMufidahArabic: string;
  jumlahMufidahIndo: string;
}

export interface IsimEntry {
  id: string;
  mufrad: string; // e.g., كِتَابٌ
  jamak: string; // e.g., كُتُبٌ
  typeCategory: 'Masdar' | 'Isim Fa\'il' | 'Isim Maf\'ul' | 'Isim Zaman/Makan' | 'Isim Alat' | 'Jamak Taksir' | 'Isim Jamid';
  translation: string;
  jumlahMufidahArabic: string;
  jumlahMufidahIndo: string;
}

export interface KaidahShorfiyah {
  id: string;
  titleArabic: string;
  titleIndo: string;
  ruleArabic: string;
  explanation: string;
  examples: Array<{
    arabic: string;
    indo: string;
  }>;
  category: 'I\'lal' | 'Bina\'' | 'Wazan' | 'Umum';
}

export type ActiveTab = 'materi' | 'tashrif' | 'fiil' | 'isim' | 'kaidah' | 'latihan' | 'settings';
