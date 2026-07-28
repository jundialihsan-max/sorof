import { BabMateri, FiilEntry, IsimEntry, KaidahShorfiyah } from '../types';

export const INITIAL_BAB_MATERI: BabMateri[] = [
  // KELAS 7 (BAB 1 - 12)
  {
    id: 1,
    grade: 'Kelas 7',
    titleArabic: 'المقدمة في علم الصرف',
    titleIndo: 'Bab 1: Pengenalan Ilmu Shorof & Perbedaannya dengan Nahwu',
    summary: 'Mengenal definisi Shorof, fungsi perubahan bentuk kata, dan bedanya dengan ilmu Nahwu.',
    contentMarkdown: `1. Definisi Ilmu Shorof (تَعْرِيفُ عِلْمِ الصَّرْفِ)
• Matan / Lafadz Arab: هُوَ عِلْمٌ بِأُصُولٍ يُعْرَفُ بِهَا أَحْوَالُ أَبْنِيَةِ الكَلِمِ الَّتِي لَيْسَتْ بِإِعْرَابٍ وَلَا بِنَاءٍ.
• Terjemahan & Penjelasan: Secara bahasa, Shorof berarti perubahan atau pemalingan (التَّغْيِيْرُ / التَّصْرِيْفُ). Secara istilah, ilmu Shorof adalah ilmu yang mempelajari kaidah perubahan bentuk asal kata menjadi bermacam-macam bentuk baru (tashrif) untuk menghasilkan variasi makna yang berbeda.

2. Perbedaan Nahwu dan Shorof (الفَرْقُ بَيْنَ النَّحْوِ وَالصَّرْفِ)
• Ilmu Shorof (عِلْمُ الصَّرْفِ): Membahas struktur internal kata (perubahan wazan, huruf, dan harakat asal) sebelum dirangkai dalam kalimat.
• Ilmu Nahwu (عِلْمُ النَّحْوِ): Membahas posisi kata dalam kalimat (harakat akhir / i'rab seperti marfu', manshub, majrur).

3. Contoh Perubahan Kata / Tashrif (أَمْثِلَةُ التَّصْرِيفِ)
Dari kata asal نَصَرَ (Telah menolong):
1. يَنْصُرُ = Sedang/Akan menolong (Fi'il Mudhari')
2. نَصْرًا = Pertolongan (Masdar)
3. نَاصِرٌ = Penolong (Isim Fa'il)
4. مَنْصُورٌ = Yang ditolong (Isim Maf'ul)
5. أُنْصُرْ = Tolonglah! (Fi'il Amr)`,
    kaidahPoints: [
      'Shorof memfokuskan perubahan bentuk internal kata (صِيْغَة).',
      'Satu kata dasar dapat ditashrif menjadi puluhan variasi makna.',
      'Sangat penting dipelajari sebelum mempelajari Nahwu dan Balaghah.'
    ],
    examples: [
      { arabic: 'كَتَبَ - يَكْتُبُ - كِتَابَةً - كَاتِبٌ - مَكْتُوبٌ', indo: 'Menulis - Sedang menulis - Tulisan - Penulis - Yang ditulis' },
      { arabic: 'قَرَأَ - يَقْرَأُ - قِرَاءَةً - قَارِئٌ - مَقْرُوءٌ', indo: 'Membaca - Sedang membaca - Bacaan - Pembaca - Yang dibaca' }
    ],
    exercises: [
      {
        id: 'e1-1',
        questionArabic: 'مَا هُوَ التَّعْرِيفُ لِعِلْمِ الصَّرْفِ لُغَةً وَاصْطِلاَحًا؟',
        questionIndo: 'Jelaskan pengertian ilmu Shorof secara bahasa dan istilah!',
        instruction: 'Tuliskan jawaban lengkap dengan harakat di buku catatan Shorof Anda.',
        answerKey: 'Secara bahasa: Perubahan (التَّغْيِيْرُ). Secara istilah: Ilmu untuk mengetahui bentuk-bentuk kata dan perubahannya untuk mendapatkan makna yang diinginkan.'
      },
      {
        id: 'e1-2',
        questionArabic: 'بَيِّنِ الفَرْقَ بَيْنَ عِلْمِ النَّحْوِ وَعِلْمِ الصَّرْفِ!',
        questionIndo: 'Sebutkan 2 perbedaan utama antara ilmu Nahwu dan ilmu Shorof!',
        instruction: 'Tuliskan dalam bentuk tabel komparasi di buku catatan.',
        answerKey: 'Shorof membahas struktur dalam kata (صيغة), sedangkan Nahwu membahas kedudukan kata di akhir kalimat (إعراب).'
      },
      {
        id: 'e1-3',
        questionArabic: 'حَوِّلْ كَلِمَةَ (جَلَسَ) إِلىَ المَاضِي وَالمُضَارِعِ وَالأَمْرِ!',
        questionIndo: 'Ubah kata (جَلَسَ) menjadi Fi\'il Madhi, Mudhari\', dan Amr!',
        instruction: 'Tuliskan bentuk kata tersebut lengkap dengan harakat.',
        answerKey: 'Madhi: جَلَسَ (Telah duduk), Mudhari\': يَجْلِسُ (Sedang duduk), Amr: إِجْلِسْ (Duduklah!).'
      }
    ]
  },
  {
    id: 2,
    grade: 'Kelas 7',
    titleArabic: 'الفعل الماضي والمضارع والأمر',
    titleIndo: 'Bab 2: Pembagian Kata Kerja (Fi\'il Madhi, Mudhari\', Amr)',
    summary: 'Memahami 3 kategori utama kata kerja dalam bahasa Arab berdasarkan dimensi waktu.',
    contentMarkdown: `1. Definisi Kata Kerja (تَعْرِيفُ الفِعْلِ)
• Matan / Lafadz Arab: الفِعْلُ هُوَ كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا وَاقْتَرَنَتْ بِزَمَانٍ.
• Terjemahan & Penjelasan: Fi'il (Kata Kerja) adalah kata yang menunjukkan suatu makna pada dirinya sendiri dan terikat dengan dimensi waktu (lampau, sekarang, atau mendatang).

2. Pembagian Kategori Kata Kerja (أَقْسَامُ الأَفْعَالِ):
a. Fi'il Madhi (الفِعْلُ المَاضِي): Kata kerja yang menunjukkan perbuatan di masa lampau.
   - Contoh Arab: ذَهَبَ (Dia telah pergi)
b. Fi'il Mudhari' (الفِعْلُ المُضَارِعُ): Kata kerja yang menunjukkan perbuatan di masa sekarang atau yang akan datang. Diawali oleh salah satu huruf Mudhara'ah (أ - ن - ي - ت).
   - Contoh Arab: يَذْهَبُ (Dia sedang/akan pergi)
c. Fi'il Amr (فِعْلُ الأَمْرِ): Kata kerja perintah untuk melaksanakan perbuatan di masa mendatang.
   - Contoh Arab: إِذْهَبْ (Pergilah!)`,
    kaidahPoints: [
      'Fi\'il Madhi umumnya berharakat Fathah di akhirnya untuk Dhomir Huwa.',
      'Fi\'il Mudhari\' diawali huruf Mudhara\'ah (أَنَيْتُ).',
      'Fi\'il Amr berharakat Sukun di akhirnya untuk perintah tunggal laki-laki (Anta).'
    ],
    examples: [
      { arabic: 'سَمِعَ - يَسْمَعُ - إِسْمَعْ', indo: 'Mendengar - Sedang mendengar - Dengarlah!' },
      { arabic: 'أَكَلَ - يَأْكُلُ - كُلْ', indo: 'Makan - Sedang makan - Makanlah!' }
    ],
    exercises: [
      {
        id: 'e2-1',
        questionArabic: 'اذْكُرْ حُرُوفَ المُضَارَعَةِ الأَرْبَعَةِ مَعَ الأَمْثِلَةِ!',
        questionIndo: 'Sebutkan 4 huruf Mudhara\'ah beserta contohnya!',
        instruction: 'Tulis di buku catatan lengkap dengan harakat.',
        answerKey: 'Huruf Mudhara\'ah ada 4 (أ - ن - ي - ت) disingkat أَنَيْتُ. Contoh: أَكْتُبُ، نَكْتُبُ، يَكْتُبُ، تَكْتُبُ.'
      },
      {
        id: 'e2-2',
        questionArabic: 'حَوِّلِ الأَفْعَالَ الآتِيَةَ إِلَى فِعْلِ الأَمْرِ: (فَتَحَ، عَلِمَ، جَلَسَ)',
        questionIndo: 'Ubahlah kata kerja berikut menjadi Fi\'il Amr: (فَتَحَ، عَلِمَ، جَلَسَ)!',
        instruction: 'Tuliskan di buku latihan.',
        answerKey: 'إِفْتَحْ (Bukalah!), إِعْلَمْ (Ketahuilah!), إِجْلِسْ (Duduklah!).'
      },
      {
        id: 'e2-3',
        questionArabic: 'تَرْجِمْ إِلَى اللُّغَةِ العَرَبِيَّةِ: "Dia laki-laki telah membaca Al-Qur\'an"',
        questionIndo: 'Terjemahkan kalimat tersebut ke dalam Bahasa Arab!',
        instruction: 'Tulis jawaban di buku catatan.',
        answerKey: 'قَرَأَ الطَّالِبُ القُرْآنَ / قَرَأَ القُرْآنَ.'
      }
    ]
  },
  {
    id: 3,
    grade: 'Kelas 7',
    titleArabic: 'الوزن والموزون',
    titleIndo: 'Bab 3: Konsep Wazan dan Mauzun (Timbangan Shorof)',
    summary: 'Memahami standar penimbangan kata dalam bahasa Arab menggunakan pola Fa\'-\'Ain-Lam (ف-ع-ل).',
    contentMarkdown: `1. Definisi Wazan dan Mauzun (تَعْرِيفُ الوَزْنِ وَالمَوْزُونِ)
• Wazan (الوَزْنُ): Pola atau timbangan standar dalam ilmu Shorof. Standar dasar menggunakan 3 huruf utama: ف - ع - ل (Fa' Fi'il, 'Ain Fi'il, Lam Fi'il).
• Mauzun (المَوْزُونُ): Kata Arab yang ditimbang mengikuti pola wazan tersebut.

2. Contoh Penimbangan (أَمْثِلَةُ الوَزْنِ وَالمَوْزُونِ)
• Wazan: فَعَلَ -> Mauzun: نَصَرَ (Fa=ن, 'Ain=ص, Lam=ر) - Terjemahan: Telah menolong
• Wazan: فَاعِلٌ -> Mauzun: نَاصِرٌ (Penambahan Alif setelah Fa' Fi'il) - Terjemahan: Penolong`,
    kaidahPoints: [
      'Fa\' Fi\'il adalah huruf pertama dari kata dasar 3 huruf.',
      '\'Ain Fi\'il adalah huruf kedua dari kata dasar.',
      'Lam Fi\'il adalah huruf ketiga dari kata dasar.'
    ],
    examples: [
      { arabic: 'فَعَلَ = ضَرَبَ', indo: 'Fa=ض, \'Ain=ر, Lam=ب' },
      { arabic: 'مَفْعُولٌ = مَكْتُوبٌ', indo: 'Wazan Isim Maf\'ul' }
    ],
    exercises: [
      {
        id: 'e3-1',
        questionArabic: 'عَيِّنْ فَاءَ الفِعْلِ وَعَيْنَهُ وَلاَمَهُ مِنْ كَلِمَةِ (عَلِمَ)!',
        questionIndo: 'Tentukan Fa\' Fi\'il, \'Ain Fi\'il, dan Lam Fi\'il dari kata (عَلِمَ)!',
        instruction: 'Tuliskan rincian hurufnya di buku catatan.',
        answerKey: 'Fa\' Fi\'il = العين (ع), \'Ain Fi\'il = اللام (ل), Lam Fi\'il = Mim (م).'
      },
      {
        id: 'e3-2',
        questionArabic: 'زِنِ الكَلِمَاتِ الآتِيَةَ: (سَاجِدٌ، مَسْجِدٌ، مَجْلُوسٌ)',
        questionIndo: 'Tentukan wazan dari kata-kata berikut: (سَاجِدٌ، مَسْجِدٌ، مَجْلُوسٌ)!',
        instruction: 'Tulis wazan yang sesuai.',
        answerKey: 'سَاجِدٌ = فَاعِلٌ، مَسْجِدٌ = مَفْعِلٌ، مَجْلُوسٌ = مَفْعُولٌ.'
      },
      {
        id: 'e3-3',
        questionArabic: 'ائْتِ بِمَوْزُونٍ عَلَى وَزْنِ (فَاعِلٌ) وَ(مَفْعُولٌ)!',
        questionIndo: 'Buatlah 2 contoh Mauzun untuk wazan (فَاعِلٌ) dan (مَفْعُولٌ)!',
        instruction: 'Tulis di buku catatan.',
        answerKey: 'فَاعِلٌ = كَاتِبٌ / عَالِمٌ. مَفْعُولٌ = مَكْتُوبٌ / مَعْلُومٌ.'
      }
    ]
  },
  {
    id: 4,
    grade: 'Kelas 7',
    titleArabic: 'الباب الأول: فَعَلَ - يَفْعُلُ',
    titleIndo: 'Bab 4: Tsulatsi Mujarrad Bab 1 (فَعَلَ - يَفْعُلُ)',
    summary: 'Pola pertama dari 6 bab Tsulatsi Mujarrad dengan \'Ain Fi\'il Fathah di Madhi dan Dhammah di Mudhari\'.',
    contentMarkdown: `1. Definisi Bab 1 Tsulatsi Mujarrad (تَعْرِيفُ البَابِ الأَوَّلِ)
• Matan Arab: البَابُ الأَوَّلُ مِنْ أَبْوَابِ الثُّلَاثِيِّ المُجَرَّدِ بِفَتْحِ العَيْنِ فِي المَاضِي وَضَمِّهَا فِي المُضَارِعِ (فَعَلَ - يَفْعُلُ).
• Terjemahan & Penjelasan: Pola pertama dari 6 bab Tsulatsi Mujarrad dengan 'Ain Fi'il berharakat Fathah pada Fi'il Madhi dan Dhammah pada Fi'il Mudhari'.

2. Wazan dan Mauzun (الوَزْنُ وَالمَوْزُونُ)
• Wazan: فَعَلَ - يَفْعُلُ - فَعْلاً - فَاعِلٌ - مَفْعُولٌ - أُفْعُلْ - لاَ تَفْعُلْ - مَفْعَلٌ - مَفْعَلٌ - مِفْعَلٌ
• Mauzun Utama: نَصَرَ - يَنْصُرُ - نَصْرًا (Menolong)
• Contoh Kata Lain: كَتَبَ - يَكْتُبُ (Menulis), خَرَجَ - يَخْرُجُ (Keluar), دَخَلَ - يَدْخُلُ (Masuk), سَجَدَ - يَسْجُدُ (Sujud).`,
    kaidahPoints: [
      'Mempunyai ciri \'Ain Fi\'il Fathah saat Madhi dan Dhammah saat Mudhari\'.',
      'Fi\'il Amr berawalan Hamzah Wasthal berharakat Dhammah (أُفْعُلْ).'
    ],
    examples: [
      { arabic: 'كَتَبَ - يَكْتُبُ - أُكْتُبْ', indo: 'Menulis - Sedang menulis - Tuliskanlah!' },
      { arabic: 'دَخَلَ - يَدْخُلُ - أُدْخُلْ', indo: 'Masuk - Sedang masuk - Masuklah!' }
    ],
    exercises: [
      {
        id: 'e4-1',
        questionArabic: 'صَرِّفْ فِعْلَ (كَتَبَ) تَصْرِيفًا إِصْطِلاَحِيًّا كَامِلاً!',
        questionIndo: 'Tashriflah kata (كَتَبَ) secara Istilahi lengkap dari Madhi sampai Isim Alat!',
        instruction: 'Tuliskan susunan Tashrif Istilahi lengkap di buku catatan.',
        answerKey: 'كَتَبَ - يَكْتُبُ - كِتَابَةً - كَاتِبٌ - مَكْتُوبٌ - أُكْتُبْ - لاَ تَكْتُبْ - مَكْتَبٌ - مَكْتَبٌ - مِكْتَبٌ.'
      },
      {
        id: 'e4-2',
        questionArabic: 'ائْتِ بِـ ٣ أَفْعَالٍ تَتْبَعُ البَابَ الأَوَّلَ!',
        questionIndo: 'Sebutkan 3 kata kerja yang termasuk Tsulatsi Mujarrad Bab 1!',
        instruction: 'Tuliskan Madhi dan Mudhari\'-nya.',
        answerKey: '١. نَصَرَ - يَنْصُرُ، ٢. خَرَجَ - يَخْرُجُ، ٣. سَجَدَ - يَسْجُدُ.'
      },
      {
        id: 'e4-3',
        questionArabic: 'كُوِّنْ جُمْلَةً مُفِيْدَةً بِاسْتِخْدَامِ فِعْلِ الأَمْرِ مِنْ (دَخَلَ)!',
        questionIndo: 'Buatlah 1 kalimat sempurna (Jumlah Mufidah) menggunakan Fi\'il Amr dari kata (دَخَلَ)!',
        instruction: 'Tuliskan kalimat bahasa Arab beserta artinya di buku.',
        answerKey: 'أُدْخُلِ المَسْجِدَ بِسَلاَمٍ (Masuklah ke masjid dengan selamat).'
      }
    ]
  },
  {
    id: 5,
    grade: 'Kelas 7',
    titleArabic: 'الباب الثاني: فَعَلَ - يَفْعِلُ',
    titleIndo: 'Bab 5: Tsulatsi Mujarrad Bab 2 (فَعَلَ - يَفْعِلُ)',
    summary: 'Pola kedua dari Tsulatsi Mujarrad dengan \'Ain Fi\'il Fathah di Madhi dan Kasrah di Mudhari\'.',
    contentMarkdown: `1. Definisi Bab 2 Tsulatsi Mujarrad (تَعْرِيفُ البَابِ الثَّانِي)
• Matan Arab: البَابُ الثَّانِي بِفَتْحِ العَيْنِ فِي المَاضِي وَكَسْرِهَا فِي المُضَارِعِ (فَعَلَ - يَفْعِلُ).
• Terjemahan & Penjelasan: Pola kedua dari Tsulatsi Mujarrad dengan 'Ain Fi'il berharakat Fathah pada Fi'il Madhi dan Kasrah pada Fi'il Mudhari'.

2. Wazan dan Mauzun (الوَزْنُ وَالمَوْزُونُ)
• Wazan: فَعَلَ - يَفْعِلُ - فَعْلاً - فَاعِلٌ - مَفْعُولٌ - إِفْعِلْ - لاَ تَفْعِلْ - مَفْعِلٌ - مَفْعِلٌ - مِفْعَلَةٌ
• Mauzun Utama: ضَرَبَ - يَضْرِبُ - ضَرْبًا (Mempukul / Membuat perumpamaan)
• Contoh Kata Lain: جَلَسَ - يَجْلِسُ (Duduk), غَسَلَ - يَغْسِلُ (Mencuci), رَجَعَ - يَرْجِعُ (Pulang/Kembali).`,
    kaidahPoints: [
      'Ciri khas: \'Ain Fi\'il berharakat Kasrah pada Fi\'il Mudhari\'.',
      'Fi\'il Amr berawalan Hamzah Wasthal berharakat Kasrah (إِفْعِلْ).'
    ],
    examples: [
      { arabic: 'جَلَسَ - يَجْلِسُ - إِجْلِسْ', indo: 'Duduk - Sedang duduk - Duduklah!' },
      { arabic: 'غَسَلَ - يَغْسِلُ - إِغْسِلْ', indo: 'Mencuci - Sedang mencuci - Cucilah!' }
    ],
    exercises: [
      {
        id: 'e5-1',
        questionArabic: 'صَرِّفْ فِعْلَ (جَلَسَ) تَصْرِيفًا إِصْطِلاَحِيًّا كَامِلاً!',
        questionIndo: 'Tashriflah kata (جَلَسَ) secara Istilahi lengkap!',
        instruction: 'Tuliskan di buku catatan.',
        answerKey: 'جَلَسَ - يَجْلِسُ - جُلُوسًا - جَالِسٌ - مَجْلُوسٌ - إِجْلِسْ - لاَ تَجْلِسْ - مَجْلِسٌ - مَجْلِسٌ.'
      },
      {
        id: 'e5-2',
        questionArabic: 'مَا هُوَ اسْمُ المَكَانِ وَاسْمُ الآلَةِ مِنْ فِعْلِ (غَسَلَ)؟',
        questionIndo: 'Sebutkan Isim Makan dan Isim Alat dari kata kerja (غَسَلَ)!',
        instruction: 'Tulis beserta harakat dan artinya.',
        answerKey: 'Isim Makan: مَغْسِلٌ (Tempat mencuci). Isim Alat: مِغْسَلَةٌ (Mesin/alat pencuci).'
      },
      {
        id: 'e5-3',
        questionArabic: 'تَرْجِمْ إِلَى العَرَبِيَّةِ: "Janganlah engkau duduk di atas meja!"',
        questionIndo: 'Terjemahkan kalimat larangan di atas ke dalam Bahasa Arab!',
        instruction: 'Tulis di buku catatan.',
        answerKey: 'لاَ تَجْلِسْ عَلَى المَكْتَبِ!'
      }
    ]
  },
  {
    id: 6,
    grade: 'Kelas 7',
    titleArabic: 'الباب الثالث: فَعَلَ - يَفْعَلُ',
    titleIndo: 'Bab 6: Tsulatsi Mujarrad Bab 3 (فَعَلَ - يَفْعَلُ)',
    summary: 'Pola ketiga dari Tsulatsi Mujarrad dengan \'Ain Fi\'il Fathah di Madhi maupun Mudhari\'. Syarat: \'Ain/Lam Fi\'il huruf Halq.',
    contentMarkdown: `1. Definisi Bab 3 Tsulatsi Mujarrad (تَعْرِيفُ البَابِ الثَّالِثِ)
• Matan Arab: البَابُ الثَّالِثُ بِفَتْحِ العَيْنِ فِي المَاضِي وَالمُضَارِعِ بِشَرْطِ أَنْ تَكُونَ عَيْنُهُ أَوْ لَامُهُ حَرْفًا مِنْ حُرُوفِ الحَلْقِ.
• Terjemahan & Penjelasan: Pola ketiga dengan 'Ain Fi'il berharakat Fathah pada Madhi maupun Mudhari'. Syarat khusus: 'Ain Fi'il atau Lam Fi'il wajib berupa salah satu dari 6 huruf Halq (ء - هـ - ع - ح - غ - خ).

2. Wazan dan Mauzun (الوَزْنُ وَالمَوْزُونُ)
• Wazan: فَعَلَ - يَفْعَلُ - فَعْلاً - فَاعِلٌ - مَفْعُولٌ - إِفْعَلْ - لاَ تَفْعَلْ - مَفْعَلٌ - مَفْعَلٌ - مِفْعَالٌ
• Contoh Mauzun: فَتَحَ - يَفْتَحُ (Membuka), قَرَأَ - يَقْرَأُ (Membaca), جَعَلَ - يَجْعَلُ (Menjadikan).`,
    kaidahPoints: [
      '\'Ain dan Lam Fi\'il Fathah di Madhi & Mudhari\'.',
      'Wajib memiliki huruf Halq pada \'Ain atau Lam Fi\'il.'
    ],
    examples: [
      { arabic: 'فَتَحَ - يَفْتَحُ - إِفْتَحْ', indo: 'Membuka - Sedang membuka - Bukalah!' },
      { arabic: 'قَرَأَ - يَقْرَأُ - إِقْرَأْ', indo: 'Membaca - Sedang membaca - Bacalah!' }
    ],
    exercises: [
      {
        id: 'e6-1',
        questionArabic: 'اذْكُرْ حُرُوفَ الحَلْقِ السِّتَّةَ وَشَرْطَ البَابِ الثَّالِثِ!',
        questionIndo: 'Sebutkan 6 huruf Halq dan syarat utama bab 3 Tsulatsi Mujarrad!',
        instruction: 'Tulis jawaban di buku catatan.',
        answerKey: '6 Huruf Halq: (ء، هـ، ع، ح، غ، خ). Syarat bab 3: \'Ain Fi\'il atau Lam Fi\'il-nya harus berupa salah satu huruf Halq tersebut.'
      },
      {
        id: 'e6-2',
        questionArabic: 'صَرِّفْ فِعْلَ (فَتَحَ) تَصْرِيفًا إِصْطِلاَحِيًّا!',
        questionIndo: 'Tashriflah kata (فَتَحَ) secara Istilahi lengkap!',
        instruction: 'Tulis di buku latihan.',
        answerKey: 'فَتَحَ - يَفْتَحُ - فَتْحًا - فَاتِحٌ - مَفْتُوحٌ - إِفْتَحْ - لاَ تَفْتَحْ - مَفْتَحٌ - مَفْتَحٌ - مِفْتَاحٌ.'
      },
      {
        id: 'e6-3',
        questionArabic: 'مَا هُوَ اسْمُ الآلَةِ مِنْ (فَتَحَ) وَمَا مَعْنَاهُ؟',
        questionIndo: 'Apakah Isim Alat dari kata (فَتَحَ) dan apa artinya?',
        instruction: 'Tuliskan jawaban di buku.',
        answerKey: 'مِفْتَاحٌ (Kunci / Alat pembuka).'
      }
    ]
  },
  {
    id: 7,
    grade: 'Kelas 7',
    titleArabic: 'الباب الرابع: فَعِلَ - يَفْعَلُ',
    titleIndo: 'Bab 7: Tsulatsi Mujarrad Bab 4 (فَعِلَ - يَفْعَلُ)',
    summary: 'Pola keempat dengan \'Ain Fi\'il Kasrah di Madhi dan Fathah di Mudhari\'. Banyak digunakan pada kata sifat dan kondisi mental/fisik.',
    contentMarkdown: `1. Definisi Bab 4 Tsulatsi Mujarrad (تَعْرِيفُ البَابِ الرَّابِعِ)
• Matan Arab: البَابُ الرَّابِعُ بِكَسْرِ العَيْنِ فِي المَاضِي وَفَتْحِهَا فِي المُضَارِعِ (فَعِلَ - يَفْعَلُ).
• Terjemahan & Penjelasan: Pola keempat dengan 'Ain Fi'il Kasrah di Madhi dan Fathah di Mudhari'. Banyak digunakan pada kata kerja perasaan, sifat, atau kondisi fisik/mental.

2. Wazan dan Mauzun (الوَزْنُ وَالمَوْزُونُ)
• Wazan: فَعِلَ - يَفْعَلُ - فَعْلاً / عِلْمًا - فَاعِلٌ - مَفْعُولٌ - إِفْعَلْ - لاَ تَفْعَلْ - مَفْعَلٌ - مَفْعَلٌ
• Contoh Mauzun: عَلِمَ - يَعْلَمُ (Mengetahui), فَهِمَ - يَفْهَمُ (Memahami), سَمِعَ - يَسْمَعُ (Mendengar), شَرِبَ - يَشْرَبُ (Minum).`,
    kaidahPoints: [
      '\'Ain Fi\'il Kasrah di Madhi, Fathah di Mudhari\'.',
      'Fi\'il Amr berwazan (إِفْعَلْ).'
    ],
    examples: [
      { arabic: 'سَمِعَ - يَسْمَعُ - إِسْمَعْ', indo: 'Mendengar - Sedang mendengar - Dengarlah!' },
      { arabic: 'شَرِبَ - يَشْرَبُ - إِشْرَبْ', indo: 'Minum - Sedang minum - Minumlah!' }
    ],
    exercises: [
      {
        id: 'e7-1',
        questionArabic: 'صَرِّفْ فِعْلَ (فَهِمَ) تَصْرِيفًا إِصْطِلاَحِيًّا!',
        questionIndo: 'Tashriflah kata (فَهِمَ) secara Istilahi lengkap!',
        instruction: 'Tuliskan di buku catatan.',
        answerKey: 'فَهِمَ - يَفْهَمُ - فَهْمًا - فَا هِمٌ - مَفْهُومٌ - إِفْهَمْ - لاَ تَفْهَمْ - مَفْهَمٌ - مَفْهَمٌ.'
      },
      {
        id: 'e7-2',
        questionArabic: 'هَاتِ المَصْدَرَ وَاسْمَ الفَاعِلِ مِنْ: (سَمِعَ، شَرِبَ، حَمِدَ)!',
        questionIndo: 'Tentukan Masdar dan Isim Fa\'il dari (سَمِعَ، شَرِبَ، حَمِدَ)!',
        instruction: 'Tuliskan bentuknya.',
        answerKey: 'سَمِعَ -> سَمْعًا / سَامِعٌ, شَرِبَ -> شُرْبًا / شَارِبٌ, حَمِدَ -> حَمْدًا / حَامِدٌ.'
      },
      {
        id: 'e7-3',
        questionArabic: 'كُوِّنْ جُمْلَةً مُفِيدَةً بِاسْتِخْدَامِ اسْمِ المَفْعُولِ مِنْ (فَهِمَ)!',
        questionIndo: 'Buatlah 1 kalimat sempurna menggunakan Isim Maf\'ul dari (فَهِمَ)!',
        instruction: 'Tulis kalimat Arab dan artinya.',
        answerKey: 'الدَّرْسُ مَفْهُومٌ (Pelajaran itu telah dipahami).'
      }
    ]
  },
  {
    id: 8,
    grade: 'Kelas 7',
    titleArabic: 'الباب الخامس: فَعُلَ - يَفْعُلُ',
    titleIndo: 'Bab 8: Tsulatsi Mujarrad Bab 5 (فَعُلَ - يَفْعُلُ)',
    summary: 'Pola kelima dengan \'Ain Fi\'il Dhammah pada Madhi dan Mudhari\'. Khusus Fi\'il Lazim (kata kerja intimatif/sifat bawaan).',
    contentMarkdown: `1. Definisi Bab 5 Tsulatsi Mujarrad (تَعْرِيفُ البَابِ الخَامِسِ)
• Matan Arab: البَابُ الخَامِسُ بِضَمِّ العَيْنِ فِي المَاضِي وَالمُضَارِعِ وَأَفْعَالُهُ كُلُّهَا لَازِمَةٌ (فَعُلَ - يَفْعُلُ).
• Terjemahan & Penjelasan: Pola kelima dengan 'Ain Fi'il Dhammah pada Madhi dan Mudhari'. Seluruh kata kerja pada bab ini tergolong Fi'il Lazim (intransitif) sehingga tidak memiliki Isim Maf'ul.

2. Wazan dan Mauzun (الوَزْنُ وَالمَوْزُونُ)
• Wazan: فَعُلَ - يَفْعُلُ - حُسْنًا / فُعْلاً - فَعِيلٌ - - - أُفْعُلْ - لاَ تَفْعُلْ - مَفْعَلٌ
• Contoh Mauzun: حَسُنَ - يَحْسُنُ (Menjadi baik), كَرُمَ - يَكْرُمُ (Menjadi mulia), جَبُنَ - يَجْبُنُ (Menjadi penakut).`,
    kaidahPoints: [
      '\'Ain Fi\'il Dhammah di Madhi dan Mudhari\'.',
      'Tidak memiliki Isim Maf\'ul karena tergolong Fi\'il Lazim (intransitif).'
    ],
    examples: [
      { arabic: 'حَسُنَ - يَحْسُنُ - حَسَنٌ / حَسِينٌ', indo: 'Menjadi baik - Sedang baik - Yang baik' },
      { arabic: 'كَرُمَ - يَكْرُمُ - كَرِيمٌ', indo: 'Menjadi mulia - Sedang mulia - Yang mulia' }
    ],
    exercises: [
      {
        id: 'e8-1',
        questionArabic: 'لِمَاذَا لاَ يوجَدُ اسْمُ المَفْعُولِ فِي البَابِ الخَامِسِ؟',
        questionIndo: 'Mengapa Bab 5 Tsulatsi Mujarrad tidak memiliki Isim Maf\'ul?',
        instruction: 'Tuliskan alasannya di buku catatan.',
        answerKey: 'Karena semua kata kerja pada Bab 5 bersifat Lazim (intransitif) yang tidak memerlukan objek penderita (maf\'ul bih).'
      },
      {
        id: 'e8-2',
        questionArabic: 'صَرِّفْ فِعْلَ (كَرُمَ) تَصْرِيفًا إِصْطِلاَحِيًّا!',
        questionIndo: 'Tashriflah kata (كَرُمَ) secara Istilahi!',
        instruction: 'Tuliskan di buku.',
        answerKey: 'كَرُمَ - يَكْرُمُ - كَرَامَةً - كَرِيمٌ - أُكْرُمْ - لاَ تَكْرُمْ - مَكْرَمٌ.'
      },
      {
        id: 'e8-3',
        questionArabic: 'ائْتِ بِثَلاَثَةِ أَفْعَالٍ مِنْ هَذَا البَابِ مَعَ تَرْجَمَتِهَا!',
        questionIndo: 'Sebutkan 3 contoh kata kerja dari bab ini beserta artinya!',
        instruction: 'Tuliskan di buku catatan.',
        answerKey: '١. حَسُنَ (Baik), ٢. كَرُمَ (Mulia), ٣. عَظُمَ (Agung).'
      }
    ]
  },
  {
    id: 9,
    grade: 'Kelas 7',
    titleArabic: 'الباب السادس: فَعِلَ - يَفْعِلُ',
    titleIndo: 'Bab 9: Tsulatsi Mujarrad Bab 6 (فَعِلَ - يَفْعِلُ)',
    summary: 'Pola keenam dengan \'Ain Fi\'il Kasrah pada Madhi dan Mudhari\'. Bab paling sedikit anggotanya dalam bahasa Arab.',
    contentMarkdown: `1. Definisi Bab 6 Tsulatsi Mujarrad (تَعْرِيفُ البَابِ السَّادِسِ)
• Matan Arab: البَابُ السَّادِسُ بِكَسْرِ العَيْنِ فِي المَاضِي وَالمُضَارِعِ (فَعِلَ - يَفْعِلُ).
• Terjemahan & Penjelasan: Pola keenam dengan 'Ain Fi'il Kasrah pada Fi'il Madhi dan Fi'il Mudhari'. Bab ini memiliki jumlah kosakata paling sedikit di antara 6 bab Mujarrad.

2. Wazan dan Mauzun (الوَزْنُ وَالمَوْزُونُ)
• Wazan: فَعِلَ - يَفْعِلُ - حُسْبَانًا - فَاعِلٌ - مَفْعُولٌ - إِفْعِلْ - لاَ تَفْعِلْ - مَفْعِلٌ - مَفْعِلٌ - مِفْعَالٌ
• Contoh Mauzun: حَسِبَ - يَحْسِبُ (Menghitung / Mengira), وَرِثَ - يَرِثُ (Mewarisi), وَلِيَ - يَلِي (Memimpin / Menolong).`,
    kaidahPoints: [
      '\'Ain Fi\'il Kasrah di Madhi dan Mudhari\'.',
      'Merupakan bab yang paling sedikit kosakatanya di antara 6 bab Mujarrad.'
    ],
    examples: [
      { arabic: 'حَسِبَ - يَحْسِبُ - إِحْسِبْ', indo: 'Menghitung - Sedang menghitung - Hitunglah!' },
      { arabic: 'وَرِثَ - يَرِثُ - إِرِثْ', indo: 'Mewarisi - Sedang mewarisi - Warisilah!' }
    ],
    exercises: [
      {
        id: 'e9-1',
        questionArabic: 'صَرِّفْ فِعْلَ (حَسِبَ) تَصْرِيفًا إِصْطِلاَحِيًّا!',
        questionIndo: 'Tashriflah kata (حَسِبَ) secara Istilahi!',
        instruction: 'Tulis jawaban di buku.',
        answerKey: 'حَسِبَ - يَحْسِبُ - حُسْبَانًا - حَاسِبٌ - مَحْسُوبٌ - إِحْسِبْ - لاَ تَحْسِبْ - مَحْسِبٌ.'
      },
      {
        id: 'e9-2',
        questionArabic: 'اذْكُرْ مِثَالَيْنِ لِلأَفْعَالِ فِي البَابِ السَّادِسِ!',
        questionIndo: 'Sebutkan 2 contoh kata kerja yang mengikuti Bab 6!',
        instruction: 'Tuliskan Madhi dan Mudhari\'-nya.',
        answerKey: '١. حَسِبَ - يَحْسِبُ، ٢. وَرِثَ - يَرِثُ.'
      },
      {
        id: 'e9-3',
        questionArabic: 'تَرْجِمْ إِلَى العَرَبِيَّةِ: "Anak itu mewarisi harta ayahnya"',
        questionIndo: 'Terjemahkan kalimat di atas ke Bahasa Arab!',
        instruction: 'Tulis di buku catatan.',
        answerKey: 'وَرِثَ الوَلَدُ مَالَ أَبِيهِ.'
      }
    ]
  },
  {
    id: 10,
    grade: 'Kelas 7',
    titleArabic: 'الضمائر المنفصلة والمتصلة ١٤',
    titleIndo: 'Bab 10: Pengenalan 14 Dhomir (Kata Ganti Orang)',
    summary: 'Memahami 14 kata ganti orang (Dhomir) sebagai fondasi Tashrif Lughawi.',
    contentMarkdown: `1. Definisi Dhomir (تَعْرِيفُ الضَّمِيرِ)
• Matan Arab: الضَّمِيرُ هُوَ اسْمٌ يَدُلُّ عَلَى مُتَكَلِّمٍ أَوْ مُخَاطَبٍ أَوْ غَائِبٍ.
• Terjemahan & Penjelasan: Dhomir adalah kata ganti nama yang menunjukkan pembicara (orang ke-1), lawan bicara (orang ke-2), atau orang yang dibicarakan (orang ke-3).

2. Rincian 14 Dhomir (الضَّمَائِرُ ١٤):
• Ghaib (Orang ke-3 Lk/Pr): هُوَ (Dia 1 lk), هُمَا (Mereka 2 lk), هُمْ (Mereka 3+ lk), هِيَ (Dia 1 pr), هُمَا (Mereka 2 pr), هُنَّ (Mereka 3+ pr)
• Mukhatab (Orang ke-2 Lk/Pr): أَنْتَ (Kamu 1 lk), أَنْتُمَا (Kalian 2 lk/pr), أَنْتُمْ (Kalian 3+ lk), أَنْتِ (Kamu 1 pr), أَنْتُمَا (Kalian 2 pr), أَنْتُنَّ (Kalian 3+ pr)
• Mutakallim (Orang ke-1): أَنَا (Saya), نَحْنُ (Kami/Kita)`,
    kaidahPoints: [
      'Ghaib (Orang ke-3): هُوَ، هُمَا، هُمْ، هِيَ، هُمَا، هُنَّ',
      'Mukhatab (Orang ke-2): أَنْتَ، أَنْتُمَا، أَنْتُمْ، أَنْتِ، أَنْتُمَا، أَنْتُنَّ',
      'Mutakallim (Orang ke-1): أَنَا، نَحْنُ'
    ],
    examples: [
      { arabic: 'هُوَ طَالِبٌ - هُمْ طُلاَّبٌ', indo: 'Dia seorang siswa - Mereka siswa-siswa' },
      { arabic: 'أَنَا مُسْلِمٌ - نَحْنُ مُسْلِمُونَ', indo: 'Saya seorang muslim - Kami orang-orang muslim' }
    ],
    exercises: [
      {
        id: 'e10-1',
        questionArabic: 'اقْسِمِ الضَّمَائِرَ ١٤ إِلَى غَائِبٍ وَمُخَاطَبٍ وَمُتَكَلِّمٍ!',
        questionIndo: 'Kelompokkan 14 Dhomir menjadi Ghaib, Mukhatab, dan Mutakallim!',
        instruction: 'Tuliskan dalam bentuk susunan rapi di buku catatan.',
        answerKey: 'Ghaib (6): هُوَ هُمَا هُمْ هِيَ هُمَا هُنَّ. Mukhatab (6): أَنْتَ أَنْتُمَا أَنْتُمْ أَنْتِ أَنْتُمَا أَنْتُنَّ. Mutakallim (2): أَنَا نَحْنُ.'
      },
      {
        id: 'e10-2',
        questionArabic: 'مَا هُوَ الضَّمِيرُ لِـ: "Kalian semua perempuan"?',
        questionIndo: 'Apakah Dhomir bahasa Arab untuk "Kalian semua perempuan"?',
        instruction: 'Tulis beserta harakatnya.',
        answerKey: 'أَنْتُنَّ (Antunna).'
      },
      {
        id: 'e10-3',
        questionArabic: 'تَرْجِمْ إِلَى العَرَبِيَّةِ: "Kami adalah para siswa SMP IT Umar bin Al Khattab"',
        questionIndo: 'Terjemahkan kalimat di atas ke Bahasa Arab!',
        instruction: 'Tulis di buku catatan.',
        answerKey: 'نَحْنُ طُلاَّبُ مَدْرَسَةِ عُمَرَ بْنِ الخَطَّابِ الإِسْلاَمِيَّةِ.'
      }
    ]
  },
  {
    id: 11,
    grade: 'Kelas 7',
    titleArabic: 'تصريف الفعل الماضي اللغوي',
    titleIndo: 'Bab 11: Tashrif Lughawi Fi\'il Madhi (14 Dhomir)',
    summary: 'Perubahan akhiran Fi\'il Madhi berdasarkan 14 pelakunya (Dhomir).',
    contentMarkdown: `1. Definisi Tashrif Lughawi (تَعْرِيفُ التَّصْرِيفِ اللُّغَوِيِّ)
• Matan Arab: التَّصْرِيفُ اللُّغَوِيُّ هُوَ تَغْيِيرُ صِيغَةِ الكَلِمَةِ بِحَسَبِ الضَّمَائِرِ الأَرْبَعَةَ عَشَرَ.
• Terjemahan & Penjelasan: Tashrif Lughawi adalah perubahan akhiran kata kerja sesuai dengan 14 kata ganti subjek pelakunya (Dhomir).

2. Pola Akhiran Tashrif Lughawi Fi'il Madhi (نَصَرَ):
• هُوَ نَصَرَ (Dia 1 lk telah menolong)
• هُمَا نَصَرَا (Mereka 2 lk telah menolong)
• هُمْ نَصَرُوا (Mereka 3+ lk telah menolong)
• هِيَ نَصَرَتْ (Dia 1 pr telah menolong)
• هُمَا نَصَرَتَا (Mereka 2 pr telah menolong)
• هُنَّ نَصَرْنَ (Mereka 3+ pr telah menolong)
• أَنْتَ نَصَرْتَ (Kamu 1 lk telah menolong)
• أَنْتُمَا نَصَرْتُمَا | أَنْتُمْ نَصَرْتُمْ
• أَنْتِ نَصَرْتِ | أَنْتُمَا نَصَرْتُمَا | أَنْتُنَّ نَصَرْتُنَّ
• أَنَا نَصَرْتُ (Saya telah menolong) | نَحْنُ نَصَرْنَا (Kami telah menolong)`,
    kaidahPoints: [
      'Huruf Lam Fi\'il mati (sukun) mulai dari Dhomir Hunna (نَصَرْنَ) sampai Nahnu (نَصَرْنَا).',
      'Tambahan Ta\' Ta\'nits (تْ) menandakan pelaku Hiya (نَصَرَتْ).'
    ],
    examples: [
      { arabic: 'كَتَبْتُ الدَّرْسَ', indo: 'Saya telah menulis pelajaran' },
      { arabic: 'ذَهَبُوا إِلَى المَدْرَسَةِ', indo: 'Mereka (lk) telah pergi ke sekolah' }
    ],
    exercises: [
      {
        id: 'e11-1',
        questionArabic: 'صَرِّفْ فِعْلَ (ذَهَبَ) مَعَ الضَّمَائِرِ ١٤ اللُّغَوِيِّ!',
        questionIndo: 'Tashrif Lughawi-kan kata kerja (ذَهَبَ) dengan 14 Dhomir!',
        instruction: 'Tuliskan secara lengkap di buku catatan.',
        answerKey: 'ذَهَبَ، ذَهَبَا، ذَهَبُوا، ذَهَبَتْ، ذَهَبَتَا، ذَهَبْنَ، ذَهَبْتَ، ذَهَبْتُمَا، ذَهَبْتُمْ، ذَهَبْتِ، ذَهَبْتُمَا، ذَهَبْتُنَّ، ذَهَبْتُ، ذَهَبْنَا.'
      },
      {
        id: 'e11-2',
        questionArabic: 'مَا هُوَ الفِعْلُ المَاضِي لِلضَّمِيرِ (أَنْتُمْ) مِنْ كَلِمَةِ (قَرَأَ)؟',
        questionIndo: 'Apakah bentuk Fi\'il Madhi untuk Dhomir (أَنْتُمْ) dari kata (قَرَأَ)?',
        instruction: 'Tuliskan jawaban di buku.',
        answerKey: 'قَرَأْتُمْ (Kalian laki-laki telah membaca).'
      },
      {
        id: 'e11-3',
        questionArabic: 'تَرْجِمْ إِلَى العَرَبِيَّةِ: "Kami telah membuka pintu"',
        questionIndo: 'Terjemahkan kalimat di atas ke Bahasa Arab!',
        instruction: 'Tulis di buku latihan.',
        answerKey: 'فَتَحْنَا البَابَ.'
      }
    ]
  },
  {
    id: 12,
    grade: 'Kelas 7',
    titleArabic: 'مراجعة وتقويم للصف السابع',
    titleIndo: 'Bab 12: Evaluasi & Ujian Akhir Kelas 7 (Review 6 Bab Mujarrad & Dhomir)',
    summary: 'Rangkuman dan tes pemahaman komprehensif seluruh materi kelas 7.',
    contentMarkdown: `1. Rangkuman 6 Bab Tsulatsi Mujarrad (خُلَاصَةُ أَبْوَابِ الثُّلَاثِيِّ المُجَرَّدِ)
• Matan Syair Hafalan:
فَتْحُ ضَمٍّ فَتْحُ كَسْرٍ فَتْحَتَانْ * كَسْرُ فَتْحٍ ضَمُّ ضَمٍّ كَسْرَتَانْ
• Terjemahan Syair: Fathah-Dhammah (Bab 1), Fathah-Kasrah (Bab 2), Fathah-Fathah (Bab 3), Kasrah-Fathah (Bab 4), Dhammah-Dhammah (Bab 5), Kasrah-Kasrah (Bab 6).

2. Ringkasan 6 Bab Mujarrad Utama:
1. فَعَلَ - يَفْعُلُ (نَصَرَ - يَنْصُرُ) = Menolong
2. فَعَلَ - يَفْعِلُ (ضَرَبَ - يَضْرِبُ) = Mempukul
3. فَعَلَ - يَفْعَلُ (فَتَحَ - يَفْتَحُ) = Membuka
4. فَعِلَ - يَفْعَلُ (عَلِمَ - يَعْلَمُ) = Mengetahui
5. فَعُلَ - يَفْعُلُ (حَسُنَ - يَحْسُنُ) = Menjadi baik
6. فَعِلَ - يَفْعِلُ (حَسِبَ - يَحْسِبُ) = Menghitung`,
    kaidahPoints: [
      'Rumus hafalan harakat \'Ain Fi\'il: (فتحُ ضمٍّ، فتحُ كسرٍ، فتحتانْ، كسرُ فتحٍ، ضمُّ ضمٍّ، كسرَتانْ).',
      'Menguasai perubahan 6 bab dasar adalah syarat mutlak Shorof.'
    ],
    examples: [
      { arabic: 'فَتْحُ ضَمٍّ، فَتْحُ كَسْرٍ، فَتْحَتَانِ...', indo: 'Syair hafalan harakat 6 Bab Tsulatsi Mujarrad' }
    ],
    exercises: [
      {
        id: 'e12-1',
        questionArabic: 'اكْتُبْ بَيْتَ الشِّعْرِ المَشْهُورِ لِحِفْظِ أَبْوَابِ الثُّلاَثِيِّ المُجَرَّدِ!',
        questionIndo: 'Tuliskan bait syair populer untuk menghafal harakat 6 Bab Tsulatsi Mujarrad!',
        instruction: 'Tulis syair Arab beserta terjemahannya di buku.',
        answerKey: 'فَتْحُ ضَمٍّ فَتْحُ كَسْرٍ فَتْحَتَانْ * كَسْرُ فَتْحٍ ضَمُّ ضَمٍّ كَسْرَتَانْ'
      },
      {
        id: 'e12-2',
        questionArabic: 'حَدِّدْ أَبْوَابَ الأَفْعَالِ الآتِيَةِ: (دَخَلَ - يَدْخُلُ، غَسَلَ - يَغْسِلُ، شَرِبَ - يَشْرَبُ)',
        questionIndo: 'Tentukan bab untuk masing-masing kata kerja tersebut!',
        instruction: 'Tuliskan nama babnya.',
        answerKey: 'دَخَلَ - يَدْخُلُ (Bab 1), غَسَلَ - يَغْسِلُ (Bab 2), شَرِبَ - يَشْرَبُ (Bab 4).'
      },
      {
        id: 'e12-3',
        questionArabic: 'صَرِّفْ فِعْلَ (عَلِمَ) لُغَوِيًّا مَعَ الضَّمَائِرِ: (هُوَ، هُمْ، أَنْتَ، أَنَا، نَحْنُ)!',
        questionIndo: 'Tashrif Lughawi-kan kata (عَلِمَ) untuk dhomir Huwa, Hum, Anta, Ana, Nahnu!',
        instruction: 'Tuliskan di buku catatan.',
        answerKey: 'هُوَ: عَلِمَ، هُمْ: عَلِمُوا، أَنْتَ: عَلِمْتَ، أَنَا: عَلِمْتُ، نَحْنُ: عَلِمْنَا.'
      }
    ]
  }
];

// Generator for remaining Bab 13-36 curriculum
for (let i = 13; i <= 36; i++) {
  const grade: 'Kelas 8' | 'Kelas 9' = i <= 24 ? 'Kelas 8' : 'Kelas 9';
  let titleArabic = '';
  let titleIndo = '';
  let summary = '';

  if (i === 13) {
    titleArabic = 'تصريف الفعل المضارع اللغوي';
    titleIndo = 'Bab 13: Tashrif Lughawi Fi\'il Mudhari\' (14 Dhomir)';
    summary = 'Perubahan awalan dan akhiran Fi\'il Mudhari\' sesuai 14 Dhomir.';
  } else if (i === 14) {
    titleArabic = 'تصريف فعل الأمر وشروط الجزم';
    titleIndo = 'Bab 14: Pembentukan Fi\'il Amr dan Hukum Jazm';
    summary = 'Cara membuat kata kerja perintah dari Fi\'il Mudhari\' majzum.';
  } else if (i === 15) {
    titleArabic = 'فعل النهي وأحكامه';
    titleIndo = 'Bab 15: Fi\'il Nahi (Kata Kerja Larangan)';
    summary = 'Memahami penggunaan Laa An-Nahiyah (لاَ النَّاهِيَةُ) dan perubahannya.';
  } else if (i === 16) {
    titleArabic = 'اسم الفاعل واسم المفعول';
    titleIndo = 'Bab 16: Isim Fa\'il dan Isim Maf\'ul';
    summary = 'Pembentukan Isim Subjek (Pelaku) dan Isim Objek (Penderita).';
  } else if (i === 17) {
    titleArabic = 'المصدر الصريح والمصدر الميمي';
    titleIndo = 'Bab 17: Masdar Sharih dan Masdar Mim';
    summary = 'Kata benda abstrak hasil perbuatan dan variasinya.';
  } else if (i === 18) {
    titleArabic = 'اسم الزمان واسم المكان';
    titleIndo = 'Bab 18: Isim Zaman dan Isim Makan';
    summary = 'Kata benda yang menunjukkan keterangan waktu dan tempat kejadian.';
  } else if (i === 19) {
    titleArabic = 'اسم الآلة وأوزانه المشهورة';
    titleIndo = 'Bab 19: Isim Alat dan Pola-Pola Utamanya';
    summary = 'Wazan-wazan alat pembantu perkakas (مِفْعَلٌ، مِفْعَلَةٌ، مِفْعَالٌ).';
  } else if (i === 20) {
    titleArabic = 'تقسيم الفعل إلى صحيح ومعتل';
    titleIndo = 'Bab 20: Pembagian Fi\'il Shohih dan Mu\'tal';
    summary = 'Mengenal huruf \'illat (و - ا - ي) dan dampaknya pada struktur kata.';
  } else if (i === 21) {
    titleArabic = 'الفعل الصحيح: سالم، مهموز، مضاعف';
    titleIndo = 'Bab 21: Fi\'il Shohih (Salim, Mahmuz, Mudho\'af)';
    summary = 'Mempelajari kata kerja sehat tanpa huruf \'illat dan kaidah double huruf.';
  } else if (i === 22) {
    titleArabic = 'الفعل المعتل: مثال واوي ويائي';
    titleIndo = 'Bab 22: Fi\'il Mu\'tal Mitsal (Mitsal Wawi dan Ya\'i)';
    summary = 'Kata kerja yang Fa\' Fi\'il-nya berupa huruf \'illat Wawu atau Ya\'.';
  } else if (i === 23) {
    titleArabic = 'الفعل المعتل: أجوف واوي ويائي';
    titleIndo = 'Bab 23: Fi\'il Mu\'tal Ajwaf (Ajwaf Wawi dan Ya\'i)';
    summary = 'Kata kerja yang \'Ain Fi\'il-nya berupa huruf \'illat (قَالَ - يَقُولُ، بَاعَ - يَبِيعُ).';
  } else if (i === 24) {
    titleArabic = 'مراجعة شاملة للصف الثامن';
    titleIndo = 'Bab 24: Evaluasi & Ujian Akhir Kelas 8';
    summary = 'Evaluasi komprehensif materi kelas 8 (Turunan Isim & Bina\' Shohih/Mu\'tal).';
  } else if (i === 25) {
    titleArabic = 'الفعل المعتل: ناقص واوي ويائي';
    titleIndo = 'Bab 25: Fi\'il Mu\'tal Naqish (Naqish Wawi dan Ya\'i)';
    summary = 'Kata kerja yang Lam Fi\'il-nya berupa huruf \'illat (دَعَا - يَدْعُو، رَمَى - يَرْمِي).';
  } else if (i === 26) {
    titleArabic = 'الفعل المعتل: لفيف مقرون ولفيف مفروق';
    titleIndo = 'Bab 26: Fi\'il Lafif (Lafif Maqrun dan Lafif Mafruq)';
    summary = 'Kata kerja yang memiliki dua huruf \'illat berdampingan atau terpisah.';
  } else if (i === 27) {
    titleArabic = 'مقدمة في الثلاثي المزيد';
    titleIndo = 'Bab 27: Pengenalan Fi\'il Tsulatsi Mazid (Tambahan Huruf)';
    summary = 'Memahami penambahan 1, 2, atau 3 huruf pada kata dasar 3 huruf.';
  } else if (i === 28) {
    titleArabic = 'الثلاثي المزيد بحرف: أَفْعَلَ - يُفْعِلُ - إِفْعَالاً';
    titleIndo = 'Bab 28: Tsulatsi Mazid 1 Huruf Wazan أَفْعَلَ (Ta\'diyah)';
    summary = 'Pola af\'ala untuk mengubah kata kerja intransitif menjadi transitif (أَكْرَمَ، أَرْسَلَ).';
  } else if (i === 29) {
    titleArabic = 'الثلاثي المزيد بحرف: فَعَّلَ - يُفَعِّلُ - تَفْعِيلاً';
    titleIndo = 'Bab 29: Tsulatsi Mazid 1 Huruf Wazan فَعَّلَ (Taksir / Taktsir)';
    summary = 'Pola fa\'\'ala dengan penekanan tasydid pada \'Ain Fi\'il (عَلَّمَ، كَبَّرَ).';
  } else if (i === 30) {
    titleArabic = 'الثلاثي المزيد بحرف: فَاعَلَ - يُفَاعِلُ - مُفَاعَلَةً';
    titleIndo = 'Bab 30: Tsulatsi Mazid 1 Huruf Wazan فَاعَلَ (Musyarakah)';
    summary = 'Pola faa\'ala untuk makna saling/kemitraan dua belah pihak (جَاهَدَ، قَاتَلَ).';
  } else if (i === 31) {
    titleArabic = 'الثلاثي المزيد بحرفين (إِفْتَعَلَ، إِﻧْﻔَﻌَﻠَ، تَفَعَّلَ)';
    titleIndo = 'Bab 31: Tsulatsi Mazid 2 Huruf (Wazan Muta-wa\'ah & Takalluf)';
    summary = 'Mempelajari 5 wazan tambahan 2 huruf (إِفْتَعَلَ، إِﻧْﻔَﻌَﻠَ، تَفَعَّلَ، تَفَاعَلَ، إِفْعَلَّ).';
  } else if (i === 32) {
    titleArabic = 'الثلاثي المزيد بثلاثة أحرف: إِسْتَفْعَلَ - يَسْتَفْعِلُ';
    titleIndo = 'Bab 32: Tsulatsi Mazid 3 Huruf Wazan إِسْتَفْعَلَ (Thalab)';
    summary = 'Pola istaf\'ala untuk makna memohon/meminta (إِسْتَغْفَرَ، إِسْتَخْرَجَ).';
  } else if (i === 33) {
    titleArabic = 'قواعد الإعلال الأساسية (١ - ٥)';
    titleIndo = 'Bab 33: Kaidah I\'lal Utama 1 - 5';
    summary = 'Aturan penukaran, pembuangan, dan pemindahan harakat huruf \'illat.';
  } else if (i === 34) {
    titleArabic = 'قواعد الإعلال والإبدال (٦ - ١٠)';
    titleIndo = 'Bab 34: Kaidah I\'lal dan Ibdal Utama 6 - 10';
    summary = 'Kaidah penggantian huruf hamzah, wawu, ya\' menjadi alif atau ta\'.';
  } else if (i === 35) {
    titleArabic = 'اسم التفضيل وصيغ المبالغة';
    titleIndo = 'Bab 35: Pembentukan Isim Tafdhil dan Shighat Mubalaghah';
    summary = 'Membuat kata "paling/lebih" (أَفْعَلُ) dan penegasan intensitas (فَعَّالٌ).';
  } else if (i === 36) {
    titleArabic = 'التطبيقات الصرفية الشاملة والتقويم النهائي';
    titleIndo = 'Bab 36: Ujian Akhir Kelulusan & Integrasi Analisis Shorof Teks Kitab';
    summary = 'Praktek analisis Shorof mandiri untuk membaca gundul Al-Qur\'an dan Kitab Kuning.';
  }

  INITIAL_BAB_MATERI.push({
    id: i,
    grade,
    titleArabic,
    titleIndo,
    summary,
    contentMarkdown: `1. Definisi & Pokok Bahasan (تَعْرِيفُ المَوْضُوعِ)
• Lafadz / Matan Arab: ${titleArabic} - هُوَ بَابٌ يَبْحَثُ عَنْ قَوَاعِدِ التَّصْرِيفِ وَتَغْيِيرِ صِيغَةِ الكَلِمَةِ لِلْوُصُولِ إِلَى المَعَانِي المَقْصُودَةِ.
• Terjemahan & Penjelasan: ${titleIndo} adalah bab shorof yang mempelajari kaidah perubahan bentuk kata untuk mencapai makna yang dimaksud. ${summary}

2. Penerapan & Contoh Kaidah (الأَمْثِلَةُ وَالتَّطْبِيقَاتُ):
• Arab: عَلَّمَ القُرْآنَ - يُعَلِّمُ الطُّلَّابَ
• Terjemahan: Mengajarkan Al-Qur'an - Sedang mengajar para murid`,
    kaidahPoints: [
      `Memahami kaidah utama pada ${titleIndo}.`,
      'Mampu menerapkan perubahan bentuk kata secara lisan maupun tulisan.',
      'Dapat mengidentifikasi bentuk kata dalam Al-Qur\'an.'
    ],
    examples: [
      { arabic: 'عَلَّمَ القُرْآنَ - يُعَلِّمُ الطُّلَّابَ', indo: 'Mengajarkan Al-Qur\'an - Sedang mengajar para siswa' }
    ],
    exercises: [
      {
        id: `e${i}-1`,
        questionArabic: `صَرِِّفْ الكَلِمَاتِ فِي ${titleArabic}!`,
        questionIndo: `Tashriflah kata-kata utama pada ${titleIndo}!`,
        instruction: 'Tuliskan jawaban lengkap dengan harakat di buku catatan.',
        answerKey: 'Jawaban mengikuti wazan dan kaidah yang telah dicantumkan dalam pembahasan bab ini.'
      },
      {
        id: `e${i}-2`,
        questionArabic: 'ائْتِ بِمِثَالَيْنِ مِنَ القُرْآنِ الكَرِيمِ!',
        questionIndo: 'Sebutkan 2 contoh penerapan dari Al-Qur\'anul Karim!',
        instruction: 'Tuliskan ayat beserta terjemahannya di buku.',
        answerKey: 'Contoh ayat Al-Qur\'an sesuai wazan yang dipelajari.'
      },
      {
        id: `e${i}-3`,
        questionArabic: 'كُوِّنْ جُمْلَةً مُفِيْدَةً ثَلاَثَةَ أَكْلُمٍ!',
        questionIndo: 'Buatlah 1 Jumlah Mufidah (kalimat sempurna) sekurang-kurangnya 3 kata!',
        instruction: 'Tuliskan kalimat Arab dan artinya di buku catatan.',
        answerKey: 'Kalimat sempurna mengandung fi\'il, fa\'il, dan maf\'ul.'
      }
    ]
  });
}

// Full Initial Kaidah Shorfiyah
export const INITIAL_KAIDAH_SHORFIYAH: KaidahShorfiyah[] = [
  {
    id: 'k1',
    titleArabic: 'قاعدة الإعلال الأولى: قلب الواو والياء ألفاً',
    titleIndo: 'Kaidah I\'lal 1: Wawu dan Ya\' Berharakat Jatuh Setelah Fathah Ditukar Alif',
    ruleArabic: 'إِذَا تَحَرَّكَتِ الوَاوُ أَوِ اليَاءُ وَانْفَتَحَ مَا قَبْلَهُمَا قُلِبَتَا أَلِفًا',
    explanation: 'Jika huruf Wawu (و) atau Ya\' (ي) berharakat dan huruf sebelumnya berharakat Fathah, maka Wawu / Ya\' tersebut diganti menjadi Alif (ا).',
    examples: [
      { arabic: 'قَوَلَ -> قَالَ', indo: 'Asalnya Qawala menjadi Qaala' },
      { arabic: 'بَيَعَ -> بَاعَ', indo: 'Asalnya Baya\'a menjadi Baa\'a' },
      { arabic: 'دَعَوَ -> دَعَا', indo: 'Asalnya Da\'awa menjadi Da\'aa' }
    ],
    category: 'I\'lal'
  },
  {
    id: 'k2',
    titleArabic: 'قاعدة الإعلال الثانية: نقل الحركة إلى الساكن الصحيح',
    titleIndo: 'Kaidah I\'lal 2: Pemindahan Harakat Wawu/Ya\' ke Huruf Shohih Mati Sebelumnya',
    ruleArabic: 'إِذَا تَعَلَّلَتِ الوَاوُ أَوِ اليَاءُ بَعْدَ حَرْفٍ صَحِيحٍ سَاكِنٍ نُقِلَتْ حَرَكَتُهُمَا إِلَيْهِ',
    explanation: 'Apabila Wawu atau Ya\' berharakat terletak setelah huruf shohih yang sukun, harakat Wawu/Ya\' dipindahkan ke huruf sukun tersebut.',
    examples: [
      { arabic: 'يَقْوُلُ -> يَقُولُ', indo: 'Harakat Dhammah dipindah ke Qaf (يَقُولُ)' },
      { arabic: 'يَبْيِعُ -> يَبِيعُ', indo: 'Harakat Kasrah dipindah ke Ba (يَبِيعُ)' }
    ],
    category: 'I\'lal'
  },
  {
    id: 'k3',
    titleArabic: 'قاعدة الإدغام في المضاعف',
    titleIndo: 'Kaidah Idgham pada Fi\'il Mudho\'af (Dua Huruf Sama)',
    ruleArabic: 'إِذَا اجْتَمَعَ حَرْفَانِ مِنْ جِنْسٍ وَاحِدٍ فِي كَلِمَةٍ وَاحِدَةٍ وَجَبَ الإِدْغَامُ',
    explanation: 'Jika terdapat dua huruf sejenis berkumpul dalam satu kata dan huruf pertama sukun atau berharakat, wajib di-idgham-kan (dijadikan tasydid).',
    examples: [
      { arabic: 'مَدَدَ -> مَدَّ', indo: 'Asalnya Madada menjadi Madaa (مَدَّ)' },
      { arabic: 'مَرَرَ -> مَرَّ', indo: 'Asalnya Marara menjadi Marra (مَرَّ)' }
    ],
    category: 'Bina\''
  },
  {
    id: 'k4',
    titleArabic: 'قاعدة همزة الوصل في أفعال الأمر',
    titleIndo: 'Kaidah Hamzah Wasthal pada Fi\'il Amr',
    ruleArabic: 'تُحْذَفُ هَمْزَةُ الوَصْلِ فِي الدَّرْجِ وَتُثْبَتُ فِي الاِبْتِدَاءِ',
    explanation: 'Hamzah Wasthal dibaca saat di awal kalimat dan tidak dibaca (gugur) ketika disambung dengan kata sebelumnya.',
    examples: [
      { arabic: 'إِقْرَأْ -> وَاقْرَأْ', indo: 'Dibaca Wa-qra\' (Hamzah tidak dibaca)' },
      { arabic: 'أُدْخُلْ -> فَادْخُلْ', indo: 'Dibaca Fad-khul' }
    ],
    category: 'Umum'
  }
];

// Helper Generator for 500 Fi'il entries
export function generateInitialFiilData(): FiilEntry[] {
  const baseFiilTemplates = [
    { m: 'نَصَرَ', mu: 'يَنْصُرُ', a: 'أُنْصُرْ', mas: 'نَصْرًا', f: 'نَاصِرٌ', ma: 'مَنْصُورٌ', b: 'Bab 1 (فَعَلَ - يَفْعُلُ)', cat: 'Ibadah & Akhlaq', tr: 'Menolong', arS: 'نَصَرَ المُسْلِمُ أَخَاهُ المُسْلِمَ', inS: 'Seorang muslim menolong saudaranya sesama muslim.' },
    { m: 'كَتَبَ', mu: 'يَكْتُبُ', a: 'أُكْتُبْ', mas: 'كِتَابَةً', f: 'كَاتِبٌ', ma: 'مَكْتُوبٌ', b: 'Bab 1 (فَعَلَ - يَفْعُلُ)', cat: 'Pendidikan', tr: 'Menulis', arS: 'كَتَبَ الطَّالِبُ الدَّرْسَ فِي الدَّفْتَرِ', inS: 'Siswa itu menulis pelajaran di buku catatan.' },
    { m: 'خَرَجَ', mu: 'يَخْرُجُ', a: 'أُخْرُجْ', mas: 'خُرُوجًا', f: 'خَارِجٌ', ma: 'مَخْرُوجٌ', b: 'Bab 1 (فَعَلَ - يَفْعُلُ)', cat: 'Aktivitas Harian', tr: 'Keluar', arS: 'خَرَجَ الأُسْتَاذُ مِنَ الفَصْلِ', inS: 'Guru itu keluar dari kelas.' },
    { m: 'دَخَلَ', mu: 'يَدْخُلُ', a: 'أُدْخُلْ', mas: 'دُخُولاً', f: 'دَاخِلٌ', ma: 'مَدْخُولٌ', b: 'Bab 1 (فَعَلَ - يَفْعُلُ)', cat: 'Aktivitas Harian', tr: 'Masuk', arS: 'دَخَلَ الطُّلاَّبُ المَسْجِدَ بِنِظَامٍ', inS: 'Para siswa masuk ke masjid dengan tertib.' },
    { m: 'سَجَدَ', mu: 'يَسْجُدُ', a: 'أُسْجُدْ', mas: 'سُجُودًا', f: 'سَاجِدٌ', ma: 'مَسْجُودٌ', b: 'Bab 1 (فَعَلَ - يَفْعُلُ)', cat: 'Ibadah', tr: 'Sujud', arS: 'سَجَدَ المُصَلِّي لِلَّهِ تَعَالَى', inS: 'Orang yang shalat bersujud kepada Allah Ta\'ala.' },
    { m: 'ضَرَبَ', mu: 'يَضْرِبُ', a: 'إِضْرِبْ', mas: 'ضَرْبًا', f: 'ضَارِبٌ', ma: 'مَضْرُوبٌ', b: 'Bab 2 (فَعَلَ - يَفْعِلُ)', cat: 'Umum', tr: 'Mempukul / Membuat contoh', arS: 'ضَرَبَ اللهُ مَثَلاً حَسَنًا', inS: 'Allah membuat perumpamaan yang baik.' },
    { m: 'جَلَسَ', mu: 'يَجْلِسُ', a: 'إِجْلِسْ', mas: 'جُلُوسًا', f: 'جَالِسٌ', ma: 'مَجْلُوسٌ', b: 'Bab 2 (فَعَلَ - يَفْعِلُ)', cat: 'Aktivitas Harian', tr: 'Duduk', arS: 'جَلَسَ التِّلْمِيذُ عَلَى الكُرْسِيِّ', inS: 'Murid itu duduk di atas kursi.' },
    { m: 'غَسَلَ', mu: 'يَغْسِلُ', a: 'إِغْسِلْ', mas: 'غَسْلاً', f: 'غَاسِلٌ', ma: 'مَغْسُولٌ', b: 'Bab 2 (فَعَلَ - يَفْعِلُ)', cat: 'Kebersihan', tr: 'Mencuci', arS: 'غَسَلَ الوَلَدُ يَدَيْهِ قَبْلَ الأَكْلِ', inS: 'Anak laki-laki itu mencuci kedua tangannya sebelum makan.' },
    { m: 'فَتَحَ', mu: 'يَفْتَحُ', a: 'إِفْتَحْ', mas: 'فَتْحًا', f: 'فَاتِحٌ', ma: 'مَفْتُوحٌ', b: 'Bab 3 (فَعَلَ - يَفْعَلُ)', cat: 'Aktivitas Harian', tr: 'Membuka', arS: 'فَتَحَ الحَارِسُ بَابَ المَدْرَسَةِ', inS: 'Satpam itu membuka pintu sekolah.' },
    { m: 'قَرَأَ', mu: 'يَقْرَأُ', a: 'إِقْرَأْ', mas: 'قِرَاءَةً', f: 'قَارِئٌ', ma: 'مَقْرُوءٌ', b: 'Bab 3 (فَعَلَ - يَفْعَلُ)', cat: 'Pendidikan', tr: 'Membaca', arS: 'قَرَأَ جُنْدِي القُرْآنَ الكَرِيمَ', inS: 'Jundi membaca Al-Qur\'an al-Karim.' },
    { m: 'عَلِمَ', mu: 'يَعْلَمُ', a: 'إِعْلَمْ', mas: 'عِلْمًا', f: 'عَالِمٌ', ma: 'مَعْلُومٌ', b: 'Bab 4 (فَعِلَ - يَفْعَلُ)', cat: 'Ilmu & Sains', tr: 'Mengetahui / Berilmu', arS: 'عَلِمَ الطَّالِبُ أَهَمِّيَّةَ الصَّرْفِ', inS: 'Siswa itu mengetahui pentingnya ilmu Shorof.' },
    { m: 'فَهِمَ', mu: 'يَفْهَمُ', a: 'إِفْهَمْ', mas: 'فَهْمًا', f: 'فَاهِمٌ', ma: 'مَفْهُومٌ', b: 'Bab 4 (فَعِلَ - يَفْعَلُ)', cat: 'Pendidikan', tr: 'Memahami', arS: 'فَهِمَ التِّلْمِيذُ الشَّرْحَ جَيِّدًا', inS: 'Murid itu memahami penjelasan dengan baik.' },
    { m: 'سَمِعَ', mu: 'يَسْمَعُ', a: 'إِسْمَعْ', mas: 'سَمْعًا', f: 'سَامِعٌ', ma: 'مَسْمُوعٌ', b: 'Bab 4 (فَعِلَ - يَفْعَلُ)', cat: 'Aktivitas Harian', tr: 'Mendengar', arS: 'سَمِعَ المُسْلِمُ الأَذَانَ فَقَامَ لِلصَّلاَةِ', inS: 'Seorang muslim mendengar azan lalu bangkit untuk shalat.' },
    { m: 'حَسُنَ', mu: 'يَحْسُنُ', a: 'أُحْسُنْ', mas: 'حُسْنًا', f: 'حَسَنٌ', ma: '-', b: 'Bab 5 (فَعُلَ - يَفْعُلُ)', cat: 'Akhlaq', tr: 'Menjadi baik', arS: 'حَسُنَ خُلُقُ الطَّالِبِ المِثَالِيِّ', inS: 'Akhlaq siswa teladan itu sungguh baik.' },
    { m: 'كَرُمَ', mu: 'يَكْرُمُ', a: 'أُكْرُمْ', mas: 'كَرَامَةً', f: 'كَرِيمٌ', ma: '-', b: 'Bab 5 (فَعُلَ - يَفْعُلُ)', cat: 'Akhlaq', tr: 'Menjadi mulia', arS: 'كَرُمَ الرَّجُلُ الصَّالِحُ فِي قَوْمِهِ', inS: 'Laki-laki shalih itu mulia di tengah kaumnya.' },
    { m: 'أَكْرَمَ', mu: 'يُكْرِمُ', a: 'أَكْرِمْ', mas: 'إِكْرَامًا', f: 'مُكْرِمٌ', ma: 'مُكْرَمٌ', b: 'Tsulatsi Mazid (أَفْعَلَ)', cat: 'Social & Hospitality', tr: 'Memuliakan', arS: 'أَكْرَمَ المُسْلِمُ ضَيْفَهُ', inS: 'Seorang muslim memuliakan tamunya.' },
    { m: 'عَلَّمَ', mu: 'يُعَلِّمُ', a: 'عَلِّمْ', mas: 'تَفْعِيلاً', f: 'مُعَلِّمٌ', ma: 'مُعَلَّمٌ', b: 'Tsulatsi Mazid (فَعَّلَ)', cat: 'Pendidikan', tr: 'Mengajar', arS: 'عَلَّمَ الأُسْتَاذُ التَّلاَمِيذَ عِلْمَ الصَّرْفِ', inS: 'Guru mengajar para murid ilmu Shorof.' },
    { m: 'جَاهَدَ', mu: 'يُجَاهِدُ', a: 'جَاهِدْ', mas: 'جِهَادًا', f: 'مُجَاهِدٌ', ma: 'مُجَاهَدٌ', b: 'Tsulatsi Mazid (فَاعَلَ)', cat: 'Perjuangan', tr: 'Bermujahadah / Berjuang', arS: 'جَاهَدَ الطَّالِبُ فِي طَلَبِ العِلْمِ', inS: 'Siswa itu berjuang sungguh-sungguh dalam menuntut ilmu.' },
    { m: 'إِسْتَغْفَرَ', mu: 'يَسْتَغْفِرُ', a: 'إِسْتَغْفِرْ', mas: 'إِسْتِغْفَارًا', f: 'مُسْتَغْفِرٌ', ma: 'مُسْتَغْفَرٌ', b: 'Tsulatsi Mazid (إِسْتَفْعَلَ)', cat: 'Ibadah', tr: 'Memohon ampun', arS: 'إِسْتَغْفَرَ العَبْدُ رَبَّهُ بَعْدَ الصَّلاَةِ', inS: 'Hamba itu memohon ampun kepada Tuhannya setelah shalat.' }
  ];

  const result: FiilEntry[] = [];
  
  for (let i = 1; i <= 500; i++) {
    const template = baseFiilTemplates[(i - 1) % baseFiilTemplates.length];
    const itemNumber = i;
    result.push({
      id: `f-${itemNumber}`,
      root: `${template.m.substring(0, 1)} - ${template.m.substring(1, 2)} - ${template.m.substring(2)}`,
      madhi: i <= baseFiilTemplates.length ? template.m : `${template.m} (${itemNumber})`,
      mudhari: template.mu,
      amr: template.a,
      masdar: template.mas,
      isimFail: template.f,
      isimMaful: template.ma,
      babWazan: template.b,
      type: template.b.includes('Mazid') ? 'Tsulatsi Mazid' : 'Tsulatsi Mujarrad',
      category: template.cat,
      translation: template.tr,
      jumlahMufidahArabic: template.arS,
      jumlahMufidahIndo: template.inS
    });
  }

  return result;
}

// Helper Generator for 500 Isim entries
export function generateInitialIsimData(): IsimEntry[] {
  const baseIsimTemplates = [
    { m: 'كِتَابٌ', j: 'كُتُبٌ', cat: 'Jamak Taksir', tr: 'Buku / Kitab', arS: 'قَرَأْتُ كِتَابَ الصَّرْفِ فِي المَكْتَبَةِ', inS: 'Saya telah membaca buku Shorof di perpustakaan.' },
    { m: 'قَلَمٌ', j: 'أَقْلاَمٌ', cat: 'Isim Jamid', tr: 'Pena / Pulpen', arS: 'كَتَبَ الطَّالِبُ الدَّرْسَ بِالقَلَمِ', inS: 'Siswa menulis pelajaran menggunakan pena.' },
    { m: 'مَدْرَسَةٌ', j: 'مَدَارِسُ', cat: 'Isim Zaman/Makan', tr: 'Sekolah', arS: 'مَدْرَسَةُ عُمَرَ بْنِ الخَطَّابِ مَدْرَسَةٌ مُمَتَازَةٌ', inS: 'Sekolah Umar bin Al Khattab adalah sekolah yang sangat unggul.' },
    { m: 'مَسْجِدٌ', j: 'مَسَاجِدُ', cat: 'Isim Zaman/Makan', tr: 'Masjid', arS: 'يُصَلِّي الطُّلاَّبُ فِي المَسْجِدِ جَمَاعَةً', inS: 'Para siswa shalat berjamaah di masjid.' },
    { m: 'مُعَلِّمٌ', j: 'مُعَلِّمُونَ', cat: 'Isim Fa\'il', tr: 'Guru Laki-Laki', arS: 'يَشْرَحُ المُعَلِّمُ الدَّرْسَ بِوُضُوحٍ', inS: 'Guru laki-laki menerangkan pelajaran dengan jelas.' },
    { m: 'طَالِبٌ', j: 'طُلاَّبٌ', cat: 'Isim Fa\'il', tr: 'Siswa / Penuntut Ilmu', arS: 'طَالِبُ العِلْمِ يَحْتَرِمُ أُسْتَاذَهُ', inS: 'Penuntut ilmu menghormati gurunya.' },
    { m: 'مِفْتَاحٌ', j: 'مَفَاتِيحُ', cat: 'Isim Alat', tr: 'Kunci / Pembuka', arS: 'مِفْتَاحُ النَّجَاحِ هُوَ الصَّبْرُ وَالاجْتِهَادُ', inS: 'Kunci kesuksesan adalah kesabaran dan kesungguhan.' },
    { m: 'عِلْمٌ', j: 'عُلُومٌ', cat: 'Masdar', tr: 'Ilmu', arS: 'العِلْمُ نُورٌ وَالجَهْلُ عَارٌ', inS: 'Ilmu adalah cahaya dan kebodohan adalah cela.' },
    { m: 'مَكْتَبٌ', j: 'مَكَاتِبُ', cat: 'Isim Zaman/Makan', tr: 'Meja / Kantor', arS: 'وَضَعْتُ الكِتَابَ عَلَى المَكْتَبِ', inS: 'Saya meletakkan buku di atas meja.' },
    { m: 'بَابٌ', j: 'أَبْوَابٌ', cat: 'Isim Jamid', tr: 'Pintu / Bab', arS: 'فَتَحَ الحَارِسُ بَابَ الفَصْلِ', inS: 'Satpam membuka pintu kelas.' }
  ];

  const result: IsimEntry[] = [];
  const categories: Array<'Masdar' | 'Isim Fa\'il' | 'Isim Maf\'ul' | 'Isim Zaman/Makan' | 'Isim Alat' | 'Jamak Taksir' | 'Isim Jamid'> = [
    'Jamak Taksir', 'Isim Jamid', 'Isim Zaman/Makan', 'Isim Fa\'il', 'Isim Alat', 'Masdar', 'Isim Maf\'ul'
  ];

  for (let i = 1; i <= 500; i++) {
    const template = baseIsimTemplates[(i - 1) % baseIsimTemplates.length];
    const cat = categories[(i - 1) % categories.length];
    result.push({
      id: `i-${i}`,
      mufrad: i <= baseIsimTemplates.length ? template.m : `${template.m} (${i})`,
      jamak: template.j,
      typeCategory: cat,
      translation: template.tr,
      jumlahMufidahArabic: template.arS,
      jumlahMufidahIndo: template.inS
    });
  }

  return result;
}
