/**
 * The dhikr a reminder can be set for — issue #29.
 *
 * ── WHERE THIS LIST COMES FROM ────────────────────────────────────────
 *
 * #29 asked for reminders for صلي على محمد, استغفر الله and لا إله إلا
 * الله. Those three are here, and so are five more, because the three
 * turn out to be part of a set that every comparable project ships. The
 * open-source dhikr reminders on GitHub were surveyed before this list
 * was written — shamsbd71/zikr (MIT), Muh-7/dhikr-firefox-extension
 * (MIT), ahmedkamel6/Azkar-Reminder (MIT) and others — and the same
 * phrases appear in all of them: the four of the post-prayer tasbīḥ,
 * istighfār, ṣalawāt on the Prophet ﷺ, the ḥawqala, and *subḥān Allāhi
 * wa bi-ḥamdih*. That is the core, it is short, and every line of it is
 * in Bukhārī or Muslim.
 *
 * Nothing was taken from those repositories. The overlap is what a
 * survey is for: it says which dhikr a reminder feature is expected to
 * offer, and the words themselves are the ummah's, not any project's.
 *
 * ── SIX OF THE EIGHT ARE ALREADY IN THE APP ───────────────────────────
 *
 * The Tasbih screen counts six of these, and its presets carry their
 * Arabic and their meaning. Those six take their text FROM the preset
 * rather than repeating it here: one set of words, spelled and vowelled
 * once, so a correction to the counter is a correction to the reminder.
 * The two the counter does not have carry their own.
 *
 * ── AND EVERY ONE OF THEM NAMES ITS REPORT ────────────────────────────
 *
 * `source` is not optional and is shown in the app, the same rule the
 * duas are held to (`src/duas/duas.ts`). A reminder is a thing this app
 * says to somebody several times a day; it can name where it comes from.
 */
import {
  TASBIH_PRESETS,
  findPreset,
  type TasbihPresetId,
} from '../tasbih/tasbih';
import i18n from '../i18n';

export type DhikrId =
  | 'subhanallah'
  | 'alhamdulillah'
  | 'allahuakbar'
  | 'lailaha'
  | 'astaghfirullah'
  | 'salahonprophet'
  | 'hawqala'
  | 'subhanallahwabihamdih';

export type DhikrEntry = {
  id: DhikrId;
  /**
   * The Tasbih preset that counts this dhikr, when the app has one.
   *
   * Two things hang off it: where a tapped reminder lands — the counter,
   * already set to these words — and where the Arabic comes from.
   */
  tasbihPresetId?: TasbihPresetId;
  /** Only for the two the counter does not have. See `dhikrArabic`. */
  arabic?: string;
  /** Bengali-script form (সুবহানাল্লাহ…), shown when the app language is bn. */
  bnWord: string;
  /** Hyphenated Latin guide, in the Tasbih screen's style. */
  pronunciation: string;
  /** i18n key for what the words MEAN — a transliteration is not one. */
  meaningKey: string;
  /** i18n key for the Bengali rendering of the report this stands on. */
  bnSourceKey: string;
  /** The report this stands on. Never omitted, and shown in the app. */
  source: string;
  /**
   * The number the report names, where it names one. Not a target and
   * not enforced — it is context for someone choosing what to be
   * reminded of, and it is what the counter's own target follows.
   */
  count?: number;
};

export const DHIKR: ReadonlyArray<DhikrEntry> = [
  {
    id: 'subhanallah',
    tasbihPresetId: 'subhanallah',
    bnWord: 'সুবহানাল্লাহ',
    pronunciation: 'Sub-haa-na ll-Laah',
    meaningKey: 'tasbih.meaning.subhanallah',
    bnSourceKey: 'dhikr.source.subhanallah',
    source:
      'Narrated by Muslim — “Subḥān Allāh and al-ḥamdu lillāh fill what is between the heavens and the earth.”',
    count: 33,
  },
  {
    id: 'alhamdulillah',
    tasbihPresetId: 'alhamdulillah',
    bnWord: 'আলহামদুলিল্লাহ',
    pronunciation: 'Al-ham-du li-l-Laah',
    meaningKey: 'tasbih.meaning.alhamdulillah',
    bnSourceKey: 'dhikr.source.alhamdulillah',
    source: 'Narrated by Muslim — “al-ḥamdu lillāh fills the scale.”',
    count: 33,
  },
  {
    id: 'allahuakbar',
    tasbihPresetId: 'allahuakbar',
    bnWord: 'আল্লাহু আকবার',
    pronunciation: 'Al-laa-hu Ak-bar',
    meaningKey: 'tasbih.meaning.allahuakbar',
    bnSourceKey: 'dhikr.source.allahuakbar',
    source:
      'Narrated by Muslim — among the four words most beloved to Allah.',
    count: 33,
  },
  {
    id: 'lailaha',
    tasbihPresetId: 'lailaha',
    bnWord: 'লা ইলাহা ইল্লাল্লাহ',
    pronunciation: 'Laa i-laa-ha il-la l-Laah',
    meaningKey: 'tasbih.meaning.lailaha',
    bnSourceKey: 'dhikr.source.lailaha',
    source:
      'Narrated by Muslim — among the four words most beloved to Allah.',
    count: 33,
  },
  {
    id: 'astaghfirullah',
    tasbihPresetId: 'astaghfirullah',
    bnWord: 'আস্তাগফিরুল্লাহ',
    pronunciation: 'As-tagh-fi-ru l-Laah',
    meaningKey: 'tasbih.meaning.astaghfirullah',
    bnSourceKey: 'dhikr.source.astaghfirullah',
    source:
      'Narrated by al-Bukhārī — the Prophet ﷺ sought forgiveness more than seventy times a day.',
    count: 100,
  },
  {
    id: 'salahonprophet',
    tasbihPresetId: 'salahonprophet',
    bnWord: 'আল্লাহুম্মা সাল্লি আলা সাইয়িদিনা মুহাম্মদ',
    pronunciation: "Al-laa-hum-ma sal-li 'a-laa Say-yi-di-naa Mu-ham-mad",
    meaningKey: 'tasbih.meaning.salahonprophet',
    bnSourceKey: 'dhikr.source.salahonprophet',
    source:
      'Narrated by Muslim — “Whoever sends blessings upon me once, Allah sends blessings upon him ten times.”',
    count: 10,
  },
  {
    id: 'hawqala',
    arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ',
    bnWord: 'লা হাওলা ওয়ালা কুওয়াতা ইল্লা বিল্লাহ',
    pronunciation: 'Laa haw-la wa-laa quw-wa-ta il-laa bi-l-Laah',
    meaningKey: 'dhikr.meaning.hawqala',
    bnSourceKey: 'dhikr.source.hawqala',
    source:
      'Narrated by al-Bukhārī and Muslim — “a treasure from the treasures of Paradise.”',
  },
  {
    id: 'subhanallahwabihamdih',
    arabic: 'سُبْحَانَ ٱللَّٰهِ وَبِحَمْدِهِ',
    bnWord: 'সুবহানাল্লাহি ওয়া বিহামদিহ',
    pronunciation: 'Sub-haa-na ll-Laa-hi wa-bi-ham-dih',
    meaningKey: 'dhikr.meaning.subhanallahwabihamdih',
    bnSourceKey: 'dhikr.source.subhanallahwabihamdih',
    source:
      'Narrated by al-Bukhārī and Muslim — said a hundred times in a day.',
    count: 100,
  },
] as const;

/**
 * The words, wherever they live.
 *
 * The six that the counter has take its spelling; the two that it does
 * not carry their own. A caller never has to know which is which.
 */
export function dhikrArabic(entry: DhikrEntry): string {
  if (entry.tasbihPresetId) return findPreset(entry.tasbihPresetId).arabic;
  return entry.arabic ?? '';
}

/**
 * The words in the reader's language.
 *
 * Arabic script is the religious text; but a Bengali reader opening the
 * reminder editor in Bengali expects the words they will SAY —
 * সুবহানাল্লাহ, আলহামদুলিল্লাহ — not a script they may not read. Every
 * other language keeps the Arabic, which the meanings row beneath it
 * already translates.
 */
export function dhikrWord(entry: DhikrEntry, language?: string): string {
  const lang = (language ?? i18n.language ?? '').slice(0, 2).toLowerCase();
  if (lang === 'bn' && entry.bnWord) return entry.bnWord;
  return dhikrArabic(entry);
}

export function findDhikr(id: string): DhikrEntry | undefined {
  return DHIKR.find(d => d.id === id);
}

export function isDhikrId(value: unknown): value is DhikrId {
  return typeof value === 'string' && DHIKR.some(d => d.id === value);
}

/** Every preset id this list points at actually exists. */
export function dhikrPresetsResolve(): boolean {
  return DHIKR.every(
    d =>
      !d.tasbihPresetId ||
      TASBIH_PRESETS.some(p => p.id === d.tasbihPresetId),
  );
}
