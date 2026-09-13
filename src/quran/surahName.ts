/**
 * Surah names that follow the app language (v2.8.4; Bengali in Ibadat 365).
 *
 * The reader's header, its fullscreen label and the surah title all showed
 * the ENGLISH name unconditionally — so an app running in Arabic put
 * "Al-Fatihah" (or, in fullscreen, "The Opening") above a page of Arabic
 * script. The catalogue already carries both forms; this picks the one the
 * reader's language actually wants.
 *
 * Arabic script rather than "is RTL": Urdu and Persian readers know the
 * Arabic surah names, and that is the form printed in their mushafs too.
 *
 * Bengali (this build's default language) gets its own name list: the
 * কুরআন সূচি, the search and every header show আল-ফাতিহা, আল-বাকারা… in
 * Bengali script. Both catalogues are keyed on their Latin names, so one
 * map serves `quran.ts` (romanized) and `pages.ts` (englishName).
 */
import i18n from '../i18n';

const ARABIC_SCRIPT_LANGUAGES = ['ar', 'ur', 'fa', 'ps', 'sd', 'ckb'];

/** All 114 surah names in Bengali script, indexed by surah number − 1. */
export const SURAHS_BN: ReadonlyArray<string> = [
  'আল-ফাতিহা', 'আল-বাকারা', 'আলে ইমরান', 'আন-নিসা', 'আল-মায়িদা',
  'আল-আনআম', 'আল-আরাফ', 'আল-আনফাল', 'আত-তাওবা', 'ইউনুস',
  'হুদ', 'ইউসুফ', 'আর-রাদ', 'ইব্রাহিম', 'আল-হিজর',
  'আন-নাহল', 'আল-ইসরা', 'আল-কাহফ', 'মারইয়াম', 'ত্বা-হা',
  'আল-আম্বিয়া', 'আল-হাজ্জ', 'আল-মুমিনুন', 'আন-নূর', 'আল-ফুরকান',
  'আশ-শুআরা', 'আন-নামল', 'আল-কাসাস', 'আল-আনকাবুত', 'আর-রূম',
  'লুকমান', 'আস-সাজদা', 'আল-আহযাব', 'সাবা', 'ফাতির',
  'ইয়া-সীন', 'আস-সাফফাত', 'সাদ', 'আয-যুমার', 'গাফির',
  'ফুসসিলাত', 'আশ-শূরা', 'আয-যুখরুফ', 'আদ-দুখান', 'আল-জাসিয়া',
  'আল-আহকাফ', 'মুহাম্মদ', 'আল-ফাতহ', 'আল-হুজুরাত', 'কাফ',
  'আয-যারিয়াত', 'আত-তূর', 'আন-নাজম', 'আল-কামার', 'আর-রহমান',
  'আল-ওয়াকেয়া', 'আল-হাদিদ', 'আল-মুজাদালা', 'আল-হাশর', 'আল-মুমতাহিনা',
  'আস-সাফ', 'আল-জুমুআ', 'আল-মুনাফিকুন', 'আত-তাগাবুন', 'আত-তালাক',
  'আত-তাহরিম', 'আল-মুলক', 'আল-কালাম', 'আল-হাক্কা', 'আল-মাআরিজ',
  'নূহ', 'আল-জিন', 'আল-মুযযাম্মিল', 'আল-মুদ্দাসসির', 'আল-কিয়ামা',
  'আল-ইনসান', 'আল-মুরসালাত', 'আন-নাবা', 'আন-নাযিআত', 'আবাসা',
  'আত-তাকবির', 'আল-ইনফিতার', 'আল-মুতাফফিফিন', 'আল-ইনশিকাক', 'আল-বুরুজ',
  'আত-তারিক', 'আল-আলা', 'আল-গাশিয়া', 'আল-ফাজর', 'আল-বালাদ',
  'আশ-শামস', 'আল-লাইল', 'আদ-দুহা', 'আল-ইনশিরাহ', 'আত-তীন',
  'আল-আলাক', 'আল-কদর', 'আল-বাইয়িনা', 'আয-যিলযাল', 'আল-আদিয়াত',
  'আল-কারিয়া', 'আত-তাকাসুর', 'আল-আসর', 'আল-হুমাযা', 'আল-ফীল',
  'কুরাইশ', 'আল-মাউন', 'আল-কাওসার', 'আল-কাফিরুন', 'আন-নাসর',
  'আল-লাহাব', 'আল-ইখলাস', 'আল-ফালাক', 'আন-নাস',
];

export function usesArabicScript(language?: string): boolean {
  const lang = (language ?? i18n.language ?? '').slice(0, 2).toLowerCase();
  return ARABIC_SCRIPT_LANGUAGES.includes(lang);
}

export function usesBengali(language?: string): boolean {
  const lang = (language ?? i18n.language ?? '').slice(0, 2).toLowerCase();
  return lang === 'bn';
}

/** Bengali name for a 1-based surah number, or undefined when out of range. */
export function bnSurahName(number: number): string | undefined {
  return number >= 1 && number <= SURAHS_BN.length
    ? SURAHS_BN[number - 1]
    : undefined;
}

/** Bengali name matching a Latin catalogue name ("Al-Baqarah"), if present. */
const BN_BY_LATIN: ReadonlyMap<string, string> = new Map(
  // quran.ts romanizes without the trailing -h of englishName
  // ("An-Nisa" vs "An-Nisaa"); normalise by stripping vowels is fragile,
  // so both Latin forms are stored from the two catalogues.
  [
    ['Al-Faatiha', 'আল-ফাতিহা'], ['Al-Fatihah', 'আল-ফাতিহা'],
    ['Al-Baqarah', 'আল-বাকারা'],
    ['Aal-i-Imran', 'আলে ইমরান'], ['Aal-Imran', 'আলে ইমরান'], ['Ali Imran', 'আলে ইমরান'],
    ['An-Nisa', 'আন-নিসা'], ['An-Nisaa', 'আন-নিসা'],
    ['Al-Maidah', 'আল-মায়িদা'], ['Al-Maaida', 'আল-মায়িদা'],
    ['Al-Anam', 'আল-আনআম'], ['Al-An\'aam', 'আল-আনআম'],
    ['Al-Araf', 'আল-আরাফ'], ['Al-A\'raaf', 'আল-আরাফ'],
    ['Al-Anfal', 'আল-আনফাল'],
    ['At-Tawbah', 'আত-তাওবা'], ['At-Tawba', 'আত-তাওবা'],
    ['Yunus', 'ইউনুস'],
    ['Hud', 'হুদ'],
    ['Yusuf', 'ইউসুফ'],
    ['Ar-Rad', 'আর-রাদ'], ['Ar-Ra\'d', 'আর-রাদ'],
    ['Ibrahim', 'ইব্রাহিম'],
    ['Al-Hijr', 'আল-হিজর'], ['Al-Hijr (Al-Isra)', 'আল-হিজর'],
    ['An-Nahl', 'আন-নাহল'],
    ['Al-Isra', 'আল-ইসরা'], ['Bani Isra\'il', 'আল-ইসরা'], ['Al-Israa', 'আল-ইসরা'],
    ['Al-Kahf', 'আল-কাহফ'], ['Al-Kahfi', 'আল-কাহফ'],
    ['Maryam', 'মারইয়াম'],
    ['Ta-Ha', 'ত্বা-হা'], ['Taa-Haa', 'ত্বা-হা'], ['Taha', 'ত্বা-হা'],
    ['Al-Anbiya', 'আল-আম্বিয়া'], ['Al-Anbiyaa', 'আল-আম্বিয়া'],
    ['Al-Hajj', 'আল-হাজ্জ'], ['Al-Hajj (The Pilgrimage)', 'আল-হাজ্জ'],
    ['Al-Muminun', 'আল-মুমিনুন'], ['Al-Mu\'minun', 'আল-মুমিনুন'],
    ['An-Nur', 'আন-নূর'], ['An-Noor', 'আন-নূর'],
    ['Al-Furqan', 'আল-ফুরকান'],
    ['Ash-Shuara', 'আশ-শুআরা'], ['Ash-Shu\'araa', 'আশ-শুআরা'],
    ['An-Naml', 'আন-নামল'],
    ['Al-Qasas', 'আল-কাসাস'],
    ['Al-Ankabut', 'আল-আনকাবুত'], ['Al-\'Ankaboot', 'আল-আনকাবুত'],
    ['Ar-Rum', 'আর-রূম'], ['Ar-Room', 'আর-রূম'],
    ['Luqman', 'লুকমান'],
    ['As-Sajda', 'আস-সাজদা'], ['As-Sajdah', 'আস-সাজদা'],
    ['Al-Ahzab', 'আল-আহযাব'], ['Al-Ahzaab', 'আল-আহযাব'],
    ['Saba', 'সাবা'], ['Saba\'', 'সাবা'],
    ['Fatir', 'ফাতির'],
    ['Yasin', 'ইয়া-সীন'], ['Yaseen', 'ইয়া-সীন'], ['Ya-Sin', 'ইয়া-সীন'],
    ['As-Saffat', 'আস-সাফফাত'], ['As-Saaffaat', 'আস-সাফফাত'],
    ['Sad', 'সাদ'],
    ['Az-Zumar', 'আয-যুমার'],
    ['Ghafir', 'গাফির'], ['Al-Ghafir', 'গাফির'], ['Al-Mumin', 'গাফির'],
    ['Fussilat', 'ফুসসিলাত'], ['Fussilat (Ha-Mim)', 'ফুসসিলাত'],
    ['Ash-Shura', 'আশ-শূরা'], ['Ash-Shoora', 'আশ-শূরা'],
    ['Az-Zukhruf', 'আয-যুখরুফ'],
    ['Ad-Dukhan', 'আদ-দুখান'],
    ['Al-Jathiya', 'আল-জাসিয়া'], ['Al-Jaathiyah', 'আল-জাসিয়া'],
    ['Al-Ahqaf', 'আল-আহকাফ'], ['Al-Ahqaf (The Valleys)', 'আল-আহকাফ'],
    ['Muhammad', 'মুহাম্মদ'],
    ['Al-Fath', 'আল-ফাতহ'], ['Al-Fath (Victory)', 'আল-ফাতহ'],
    ['Al-Hujurat', 'আল-হুজুরাত'], ['Al-Hujuraat', 'আল-হুজুরাত'],
    ['Qaf', 'কাফ'],
    ['Adh-Dhariyat', 'আয-যারিয়াত'], ['Adh-Dhaariyat', 'আয-যারিয়াত'],
    ['At-Tur', 'আত-তূর'],
    ['An-Najm', 'আন-নাজম'],
    ['Al-Qamar', 'আল-কামার'],
    ['Ar-Rahman', 'আর-রহমান'], ['Ar-Rahmaan', 'আর-রহমান'],
    ['Al-Waqi\'a', 'আল-ওয়াকেয়া'], ['Al-Waaqi\'ah', 'আল-ওয়াকেয়া'],
    ['Al-Hadid', 'আল-হাদিদ'],
    ['Al-Mujadila', 'আল-মুজাদালা'], ['Al-Mujaadilah', 'আল-মুজাদালা'],
    ['Al-Hashr', 'আল-হাশর'],
    ['Al-Mumtahanah', 'আল-মুমতাহিনা'], ['Al-Mumtahina', 'আল-মুমতাহিনা'],
    ['As-Saff', 'আস-সাফ'], ['As-Saff (Battle Array)', 'আস-সাফ'],
    ['Al-Jumu\'ah', 'আল-জুমুআ'], ['Al-Jumu\'aa', 'আল-জুমুআ'],
    ['Al-Munafiqun', 'আল-মুনাফিকুন'],
    ['At-Taghabun', 'আত-তাগাবুন'], ['At-Taghaabun', 'আত-তাগাবুন'],
    ['At-Talaq', 'আত-তালাক'], ['At-Talaaq', 'আত-তালাক'],
    ['At-Tahrim', 'আত-তাহরিম'], ['At-Tahreem', 'আত-তাহরিম'],
    ['Al-Mulk', 'আল-মুলক'],
    ['Al-Qalam', 'আল-কালাম'],
    ['Al-Haqqah', 'আল-হাক্কা'],
    ['Al-Ma\'arij', 'আল-মাআরিজ'], ['Al-Ma\'aarij', 'আল-মাআরিজ'],
    ['Nuh', 'নূহ'], ['Nooh', 'নূহ'],
    ['Al-Jinn', 'আল-জিন'],
    ['Al-Muzzammil', 'আল-মুযযাম্মিল'],
    ['Al-Muddaththir', 'আল-মুদ্দাসসির'], ['Al-Muddathir', 'আল-মুদ্দাসসির'],
    ['Al-Qiyamah', 'আল-কিয়ামা'], ['Al-Qiyaamah', 'আল-কিয়ামা'],
    ['Al-Insan', 'আল-ইনসান'], ['Al-Insaan', 'আল-ইনসান'], ['Ad-Dahr', 'আল-ইনসান'],
    ['Al-Mursalat', 'আল-মুরসালাত'], ['Al-Mursalaat', 'আল-মুরসালাত'],
    ['An-Naba', 'আন-নাবা'], ['An-Naba\'', 'আন-নাবা'],
    ['An-Nazi\'at', 'আন-নাযিআত'], ['An-Naazi\'aat', 'আন-নাযিআত'],
    ['\'Abasa', 'আবাসা'], ['Abasa', 'আবাসা'],
    ['At-Takwir', 'আত-তাকবির'], ['At-Takweer', 'আত-তাকবির'],
    ['Al-Infitar', 'আল-ইনফিতার'],
    ['Al-Mutaffifin', 'আল-মুতাফফিফিন'],
    ['Al-Inshiqaq', 'আল-ইনশিকাক'],
    ['Al-Buruj', 'আল-বুরুজ'],
    ['At-Tariq', 'আত-তারিক'], ['At-Taariq', 'আত-তারিক'],
    ['Al-A\'la', 'আল-আলা'], ['Al-A\'laa', 'আল-আলা'],
    ['Al-Ghashiyah', 'আল-গাশিয়া'], ['Al-Ghaashiyah', 'আল-গাশিয়া'],
    ['Al-Fajr', 'আল-ফাজর'],
    ['Al-Balad', 'আল-বালাদ'],
    ['Ash-Shams', 'আশ-শামস'], ['Ash-Sharh', 'আল-ইনশিরাহ'],
    ['Al-Layl', 'আল-লাইল'], ['Al-Lail', 'আল-লাইল'],
    ['Ad-Duha', 'আদ-দুহা'],
    ['Ash-Sharh (Al-Inshirah)', 'আল-ইনশিরাহ'], ['Al-Inshirah', 'আল-ইনশিরাহ'], ['Alam Nashrah', 'আল-ইনশিরাহ'],
    ['At-Tin', 'আত-তীন'], ['At-Teen', 'আত-তীন'],
    ['Al-\'Alaq', 'আল-আলাক'], ['Al-Alaq', 'আল-আলাক'],
    ['Al-Qadr', 'আল-কদর'],
    ['Al-Bayyinah', 'আল-বাইয়িনা'], ['Al-Bayyinah (Al-Zilzal)', 'আল-বাইয়িনা'],
    ['Az-Zalzalah', 'আয-যিলযাল'], ['Az-Zilzal', 'আয-যিলযাল'], ['Az-Zalzala', 'আয-যিলযাল'],
    ['Al-\'Adiyat', 'আল-আদিয়াত'], ['Al-\'Aadiyaat', 'আল-আদিয়াত'],
    ['Al-Qari\'ah', 'আল-কারিয়া'], ['Al-Qaari\'ah', 'আল-কারিয়া'],
    ['At-Takathur', 'আত-তাকাসুর'], ['At-Takaathur', 'আত-তাকাসুর'],
    ['Al-\'Asr', 'আল-আসর'], ['Al-Asr', 'আল-আসর'],
    ['Al-Humazah', 'আল-হুমায়া'], ['Al-Humaza', 'আল-হুমায়া'],
    ['Al-Fil', 'আল-ফীল'],
    ['Quraysh', 'কুরাইশ'], ['Quraish', 'কুরাইশ'],
    ['Al-Ma\'un', 'আল-মাউন'], ['Al-Maa\'oon', 'আল-মাউন'],
    ['Al-Kawthar', 'আল-কাওসার'], ['Al-Kauthar', 'আল-কাওসার'],
    ['Al-Kafirun', 'আল-কাফিরুন'], ['Al-Kaafiroon', 'আল-কাফিরুন'],
    ['An-Nasr', 'আন-নাসর'],
    ['Al-Masad', 'আল-লাহাব'], ['Al-Lahab', 'আল-লাহাব'],
    ['Al-Ikhlas', 'আল-ইখলাস'], ['Al-Ikhlaas', 'আল-ইখলাস'],
    ['Al-Falaq', 'আল-ফালাক'],
    ['An-Nas', 'আন-নাস'],
  ],
);

function bnNameByLatin(latin: string): string | undefined {
  if (!latin) return undefined;
  const direct = BN_BY_LATIN.get(latin);
  if (direct) return direct;
  // Fallback: the two catalogues hyphenate and transliterate differently —
  // strip non-letters and compare case-insensitively.
  const norm = latin.toLowerCase().replace(/[^a-z]/g, '');
  for (const [k, v] of BN_BY_LATIN.entries()) {
    if (k.toLowerCase().replace(/[^a-z]/g, '') === norm) return v;
  }
  return undefined;
}

/** Name for a `MUSHAF_SURAHS` entry (`pages.ts` shape). */
export function mushafSurahName(
  meta: { name: string; englishName: string; number?: number },
  language?: string,
): string {
  if (usesArabicScript(language)) return meta.name;
  if (usesBengali(language)) {
    const bn =
      (meta.number !== undefined ? bnSurahName(meta.number) : undefined) ??
      bnNameByLatin(meta.englishName);
    if (bn) return bn;
  }
  return meta.englishName;
}

/** Name for a `SURAHS` entry (`quran.ts` shape). */
export function surahName(
  meta: { number?: number; arabic: string; romanized: string },
  language?: string,
): string {
  if (usesArabicScript(language)) return meta.arabic;
  if (usesBengali(language)) {
    const bn =
      (meta.number !== undefined ? bnSurahName(meta.number) : undefined) ??
      bnNameByLatin(meta.romanized);
    if (bn) return bn;
  }
  return meta.romanized;
}
