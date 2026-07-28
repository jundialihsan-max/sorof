// Tashrif engine for Arabic conjugation calculations (Tsulatsi Mujarrad & Mazid)

export interface PronounConjugation {
  dhomirArabic: string;
  dhomirIndo: string;
  pronounType: string;
  madhi: string;
  mudhari: string;
  amr: string;
}

export interface WazanOption {
  id: string;
  name: string;
  patternMadhi: string;
  patternMudhari: string;
  patternAmr: string;
  patternMasdar: string;
  patternFail: string;
  patternMaful: string;
  patternNahi: string;
  patternZamanMakan: string;
  patternAlat: string;
  sampleMadhi: string;
  sampleMudhari: string;
  sampleAmr: string;
  sampleTranslation: string;
}

export const WAZAN_LIST: WazanOption[] = [
  {
    id: 'bab1',
    name: 'Bab 1: فَعَلَ - يَفْعُلُ',
    patternMadhi: 'فَعَلَ',
    patternMudhari: 'يَفْعُلُ',
    patternAmr: 'أُفْعُلْ',
    patternMasdar: 'فَعْلاً',
    patternFail: 'فَاعِلٌ',
    patternMaful: 'مَفْعُولٌ',
    patternNahi: 'لا تَفْعُلْ',
    patternZamanMakan: 'مَفْعَلٌ',
    patternAlat: 'مِفْعَلٌ',
    sampleMadhi: 'نَصَرَ',
    sampleMudhari: 'يَنْصُرُ',
    sampleAmr: 'أُنْصُرْ',
    sampleTranslation: 'Menolong'
  },
  {
    id: 'bab2',
    name: 'Bab 2: فَعَلَ - يَفْعِلُ',
    patternMadhi: 'فَعَلَ',
    patternMudhari: 'يَفْعِلُ',
    patternAmr: 'إِفْعِلْ',
    patternMasdar: 'فَعْلاً',
    patternFail: 'فَاعِلٌ',
    patternMaful: 'مَفْعُولٌ',
    patternNahi: 'لا تَفْعِلْ',
    patternZamanMakan: 'مَفْعِلٌ',
    patternAlat: 'مِفْعَلَةٌ',
    sampleMadhi: 'ضَرَبَ',
    sampleMudhari: 'يَضْرِبُ',
    sampleAmr: 'إِضْرِبْ',
    sampleTranslation: 'Mempukul'
  },
  {
    id: 'bab3',
    name: 'Bab 3: فَعَلَ - يَفْعَلُ',
    patternMadhi: 'فَعَلَ',
    patternMudhari: 'يَفْعَلُ',
    patternAmr: 'إِفْعَلْ',
    patternMasdar: 'فَتْحاً',
    patternFail: 'فَاعِلٌ',
    patternMaful: 'مَفْعُولٌ',
    patternNahi: 'لا تَفْعَلْ',
    patternZamanMakan: 'مَفْعَلٌ',
    patternAlat: 'مِفْعَالٌ',
    sampleMadhi: 'فَتَحَ',
    sampleMudhari: 'يَفْتَحُ',
    sampleAmr: 'إِفْتَحْ',
    sampleTranslation: 'Membuka'
  },
  {
    id: 'bab4',
    name: 'Bab 4: فَعِلَ - يَفْعَلُ',
    patternMadhi: 'فَعِلَ',
    patternMudhari: 'يَفْعَلُ',
    patternAmr: 'إِفْعَلْ',
    patternMasdar: 'عِلْمًا / فَعْلاً',
    patternFail: 'فَاعِلٌ',
    patternMaful: 'مَفْعُولٌ',
    patternNahi: 'لا تَفْعَلْ',
    patternZamanMakan: 'مَفْعَلٌ',
    patternAlat: 'مِفْعَلٌ',
    sampleMadhi: 'عَلِمَ',
    sampleMudhari: 'يَعْلَمُ',
    sampleAmr: 'إِعْلَمْ',
    sampleTranslation: 'Mengetahui'
  },
  {
    id: 'bab5',
    name: 'Bab 5: فَعُلَ - يَفْعُلُ',
    patternMadhi: 'فَعُلَ',
    patternMudhari: 'يَفْعُلُ',
    patternAmr: 'أُفْعُلْ',
    patternMasdar: 'حُسْنًا / فُعْلاً',
    patternFail: 'فَعِيلٌ',
    patternMaful: '-',
    patternNahi: 'لا تَفْعُلْ',
    patternZamanMakan: 'مَفْعَلٌ',
    patternAlat: '-',
    sampleMadhi: 'حَسُنَ',
    sampleMudhari: 'يَحْسُنُ',
    sampleAmr: 'أُحْسُنْ',
    sampleTranslation: 'Menjadi baik'
  },
  {
    id: 'bab6',
    name: 'Bab 6: فَعِلَ - يَفْعِلُ',
    patternMadhi: 'فَعِلَ',
    patternMudhari: 'يَفْعِلُ',
    patternAmr: 'إِفْعِلْ',
    patternMasdar: 'حُسْبَانًا',
    patternFail: 'فَاعِلٌ',
    patternMaful: 'مَفْعُولٌ',
    patternNahi: 'لا تَفْعِلْ',
    patternZamanMakan: 'مَفْعِلٌ',
    patternAlat: 'مِفْعَالٌ',
    sampleMadhi: 'حَسِبَ',
    sampleMudhari: 'يَحْسِبُ',
    sampleAmr: 'إِحْسِبْ',
    sampleTranslation: 'Menghitung / Mengira'
  },
  {
    id: 'mazid1',
    name: 'Mazid: أَفْعَلَ - يُفْعِلُ',
    patternMadhi: 'أَفْعَلَ',
    patternMudhari: 'يُفْعِلُ',
    patternAmr: 'أَفْعِلْ',
    patternMasdar: 'إِفْعَالاً',
    patternFail: 'مُفْعِلٌ',
    patternMaful: 'مُفْعَلٌ',
    patternNahi: 'لا تُفْعِلْ',
    patternZamanMakan: 'مُفْعَلٌ',
    patternAlat: '-',
    sampleMadhi: 'أَكْرَمَ',
    sampleMudhari: 'يُكْرِمُ',
    sampleAmr: 'أَكْرِمْ',
    sampleTranslation: 'Muliakan'
  },
  {
    id: 'mazid2',
    name: 'Mazid: فَعَّلَ - يُفَعِّلُ',
    patternMadhi: 'فَعَّلَ',
    patternMudhari: 'يُفَعِّلُ',
    patternAmr: 'فَعِّلْ',
    patternMasdar: 'تَفْعِيلاً',
    patternFail: 'مُفَعِّلٌ',
    patternMaful: 'مُفَعَّلٌ',
    patternNahi: 'لا تُفَعِّلْ',
    patternZamanMakan: 'مُفَعَّلٌ',
    patternAlat: '-',
    sampleMadhi: 'عَلَّمَ',
    sampleMudhari: 'يُعَلِّمُ',
    sampleAmr: 'عَلِّمْ',
    sampleTranslation: 'Mengajar'
  },
  {
    id: 'mazid3',
    name: 'Mazid: فَاعَلَ - يُفَاعِلُ',
    patternMadhi: 'فَاعَلَ',
    patternMudhari: 'يُفَاعِلُ',
    patternAmr: 'فَاعِلْ',
    patternMasdar: 'مُفَاعَلَةً',
    patternFail: 'مُفَاعِلٌ',
    patternMaful: 'مُفَاعَلٌ',
    patternNahi: 'لا تُفَاعِلْ',
    patternZamanMakan: 'مُفَاعَلٌ',
    patternAlat: '-',
    sampleMadhi: 'جَاهَدَ',
    sampleMudhari: 'يُجَاهِدُ',
    sampleAmr: 'جَاهِدْ',
    sampleTranslation: 'Bermujahadah'
  },
  {
    id: 'mazid4',
    name: 'Mazid: إِسْتَفْعَلَ - يَسْتَفْعِلُ',
    patternMadhi: 'إِسْتَفْعَلَ',
    patternMudhari: 'يَسْتَفْعِلُ',
    patternAmr: 'إِسْتَفْعِلْ',
    patternMasdar: 'إِسْتِفْعَالاً',
    patternFail: 'مُسْتَفْعِلٌ',
    patternMaful: 'مُسْتَفْعَلٌ',
    patternNahi: 'لا تَسْتَفْعِلْ',
    patternZamanMakan: 'مُسْتَفْعَلٌ',
    patternAlat: '-',
    sampleMadhi: 'إِسْتَغْفَرَ',
    sampleMudhari: 'يَسْتَغْفِرُ',
    sampleAmr: 'إِسْتَغْفِرْ',
    sampleTranslation: 'Memohon ampun'
  }
];

export const DHOMIR_14 = [
  { arabic: 'هُوَ', indo: 'Dia (1 lk)', type: 'Mufrad Mudzakkar' },
  { arabic: 'هُمَا', indo: 'Mereka berdua (2 lk)', type: 'Mutsanna Mudzakkar' },
  { arabic: 'هُمْ', indo: 'Mereka (3+ lk)', type: 'Jamak Mudzakkar' },
  { arabic: 'هِيَ', indo: 'Dia (1 pr)', type: 'Mufrad Muannats' },
  { arabic: 'هُمَا', indo: 'Mereka berdua (2 pr)', type: 'Mutsanna Muannats' },
  { arabic: 'هُنَّ', indo: 'Mereka (3+ pr)', type: 'Jamak Muannats' },
  { arabic: 'أَنْتَ', indo: 'Kamu (1 lk)', type: 'Mufrad Mudzakkar (Mukhatab)' },
  { arabic: 'أَنْتُمَا', indo: 'Kalian berdua (2 lk/pr)', type: 'Mutsanna (Mukhatab)' },
  { arabic: 'أَنْتُمْ', indo: 'Kalian (3+ lk)', type: 'Jamak Mudzakkar (Mukhatab)' },
  { arabic: 'أَنْتِ', indo: 'Kamu (1 pr)', type: 'Mufrad Muannats (Mukhatab)' },
  { arabic: 'أَنْتُمَا', indo: 'Kalian berdua (2 pr)', type: 'Mutsanna (Mukhatab)' },
  { arabic: 'أَنْتُنَّ', indo: 'Kalian (3+ pr)', type: 'Jamak Muannats (Mukhatab)' },
  { arabic: 'أَنَا', indo: 'Saya', type: 'Mutakallim Wahid' },
  { arabic: 'نَحْنُ', indo: 'Kami / Kita', type: 'Mutakallim Ma\'al Ghair' },
];

/**
 * Generates Tashrif Lughawi table for 14 Pronouns based on base Madhi, Mudhari, Amr.
 */
export function generateTashrifLughawi(madhi: string, mudhari: string, amr: string): PronounConjugation[] {
  // Strip diacritics temporarily to analyze root length or simple endings
  // Or generate standard morphological endings for Madhi, Mudhari, Amr
  
  // Custom suffix templates for standard 3-letter verbs
  // Madhi endings: َ, َا, ُوا, َتْ, َتَا, ْنَ, ْتَ, ْتُمَا, ْتُمْ, ْتِ, ْتُمَا, ْتُنَّ, ْتُ, ْنَا
  // Mudhari prefixes & suffixes: يـ, يـَا, يـُونَ, تـ, تـَا, يـْنَ, تـ, تـَانِ, تـُونَ, تـِينَ, تـَانِ, تـْنَ, أـ, نـ
  // Amr endings (Mukhatab 6 only): ْ, َا, ُوا, ِي, َا, ْنَ

  // Let's create an illustrative smart conjugator that formats the base word with standard suffixes
  const cleanMadhi = madhi || 'فَعَلَ';
  const cleanMudhari = mudhari || 'يَفْعُلُ';
  const cleanAmr = amr || 'أُفْعُلْ';

  // Base stem extractions for template rendering
  const madhiStem = cleanMadhi.substring(0, Math.max(1, cleanMadhi.length - 1));
  
  return DHOMIR_14.map((d, index) => {
    let m = '';
    let mu = '';
    let a = '-';

    switch (index) {
      case 0: // Huwa
        m = cleanMadhi;
        mu = cleanMudhari;
        break;
      case 1: // Huma (lk)
        m = cleanMadhi.endsWith('َ') ? cleanMadhi + 'ا' : cleanMadhi + 'َا';
        mu = cleanMudhari.replace(/ُ$/, 'َانِ');
        break;
      case 2: // Hum
        m = cleanMadhi.replace(/َ$/, 'ُوا');
        mu = cleanMudhari.replace(/ُ$/, 'ُونَ');
        break;
      case 3: // Hiya
        m = cleanMadhi + 'تْ';
        mu = 'تَ' + cleanMudhari.substring(1);
        break;
      case 4: // Huma (pr)
        m = cleanMadhi + 'تَا';
        mu = 'تَ' + cleanMudhari.substring(1).replace(/ُ$/, 'َانِ');
        break;
      case 5: // Hunna
        m = madhiStem + 'ْنَ';
        mu = 'يَ' + cleanMudhari.substring(1).replace(/ُ$/, 'ْنَ');
        break;
      case 6: // Anta
        m = madhiStem + 'ْتَ';
        mu = 'تَ' + cleanMudhari.substring(1);
        a = cleanAmr;
        break;
      case 7: // Antuma (lk)
        m = madhiStem + 'ْتُمَا';
        mu = 'تَ' + cleanMudhari.substring(1).replace(/ُ$/, 'َانِ');
        a = cleanAmr.replace(/ْ$/, 'َا');
        break;
      case 8: // Antum
        m = madhiStem + 'ْتُمْ';
        mu = 'تَ' + cleanMudhari.substring(1).replace(/ُ$/, 'ُونَ');
        a = cleanAmr.replace(/ْ$/, 'ُوا');
        break;
      case 9: // Anti
        m = madhiStem + 'ْتِ';
        mu = 'تَ' + cleanMudhari.substring(1).replace(/ُ$/, 'ِينَ');
        a = cleanAmr.replace(/ْ$/, 'ِي');
        break;
      case 10: // Antuma (pr)
        m = madhiStem + 'ْتُمَا';
        mu = 'تَ' + cleanMudhari.substring(1).replace(/ُ$/, 'َانِ');
        a = cleanAmr.replace(/ْ$/, 'َا');
        break;
      case 11: // Antunna
        m = madhiStem + 'ْتُنَّ';
        mu = 'تَ' + cleanMudhari.substring(1).replace(/ُ$/, 'ْنَ');
        a = cleanAmr.replace(/ْ$/, 'ْنَ');
        break;
      case 12: // Ana
        m = madhiStem + 'ْتُ';
        mu = 'أَ' + cleanMudhari.substring(1);
        break;
      case 13: // Nahnu
        m = madhiStem + 'ْنَا';
        mu = 'نَ' + cleanMudhari.substring(1);
        break;
      default:
        m = cleanMadhi;
        mu = cleanMudhari;
    }

    return {
      dhomirArabic: d.arabic,
      dhomirIndo: d.indo,
      pronounType: d.type,
      madhi: m,
      mudhari: mu,
      amr: a
    };
  });
}
