# ইবাদাত ৩৬৫ (Ibadat 365)

নামাজের সময়, কিবলা কম্পাস, কুরআন, দোয়া ও জিকির — সম্পূর্ণ অফলাইন, একটি অ্যাপেই।

**ডেভেলপার:** Md Mubarok
- **Email:** contact.mdmubarok@gmail.com
- **Facebook:** [@id.mdmubarok](https://www.facebook.com/id.mdmubarok)
- **Instagram:** [@mdmubarokbd](https://www.instagram.com/mdmubarokbd)

- **প্যাকেজ নেম:** `com.mubarok.ibadat365`
- **ভার্সন:** 0.00.01 (001)
- **ডিফল্ট ভাষা:** বাংলা (অন্যান্য ভাষা: English, العربية, اردو, हिन्दी, Svenska, Français, Español, Deutsch, Türkçe, Bahasa Indonesia, Русский, 中文)

---

## বৈশিষ্ট্যসমূহ

- সুনির্ভুল নামাজের সময় (একাধিক গণনা পদ্ধতি ও ডেটা প্রোভাইডার)
- আযান নোটিফিকেশন ও প্রি-প্রেয়ার রিমাইন্ডার (কাস্টম আযান সাউন্ডসহ)
- কিবলা কম্পাস
- সম্পূর্ণ কুরআন — আরবি মুসহাফ, ১৪টি অনুবাদ (বাংলা অনুবাদসহ), ১১৪ সূরার বাংলা নাম
- ১২৪টি দোয়া — আরবি, উচ্চারণ ও **সম্পূর্ণ বাংলা অনুবাদ ও সূত্রসহ**
- জিকির রিমাইন্ডার — **বাংলা লিপিতে** (সুবহানাল্লাহ, আলহামদুলিল্লাহ…)
- তাসবিহ কাউন্টার ও হোম-স্ক্রিন উইজেট (৯ ধরনের)
- নামাজ জার্নাল, রোজার চেকলিস্ট, খতমা ট্র্যাকার
- ডিভাইস ব্যাকআপ ও ডিভাইস-টু-ডিভাইস সিঙ্ক

## প্রথমবার চালু

অ্যাপ প্রথমবার খুললে **সবার আগে ভাষা নির্বাচনের স্ক্রিন** আসবে — এরপর স্বাগত, লোকেশন ও নোটিফিকেশন পারমিশন। ফোনের ভাষা বাংলা হলে অ্যাপ নিজে থেকেই বাংলায় খুলবে; অন্য সাপোর্টেড ভাষার ফোনে সেই ভাষায়।

---

## সোর্স কোড থেকে বিল্ড

### প্রয়োজনীয় টুল

- Node.js ≥ 20
- JDK 17 বা 21
- Android SDK (compileSdk 37, build-tools 37.0.0, NDK 27.1.12297006)

### ধাপ

```bash
npm install          # patch-package অটো চলবে (postinstall)
cd android
./gradlew assembleFdroidRelease   # সাইনড রিলিজ APK
```

সাইনিং কনফিগ `android/keystore.properties`-এ আছে এবং কিস্টোর ফাইল
`android/app/ibadat365-release.keystore` — **দুটোই খুব সাবধানে সংরক্ষণ করুন।
একই কিস্টোর দিয়েই ভবিষ্যতের আপডেট সাইন করতে হবে** (হারালে একই প্যাকেজ নেমে
আর আপডেট দেওয়া যাবে না)।

কিস্টোর পাসওয়ার্ড: `Ibadat365@2026` (store ও key দুটোই) — প্রোডাকশনে নেওয়ার
আগে বদলে নিন।

### আউটপুট

```
android/app/build/outputs/apk/fdroid/release/app-fdroid-release.apk
```

---

## প্রজেক্ট স্ট্রাকচার

```
├── App.tsx                  # অ্যাপ এন্ট্রি
├── index.js                 # RN বুটস্ট্র্যাপ
├── src/
│   ├── i18n/                # ১৩টি ভাষার অনুবাদ (bn.json = বাংলা)
│   ├── duas/duas.ts         # ১২৪ দোয়ার ডেটা
│   ├── dhikr/dhikr.ts       # জিকির (বাংলা লিপি সহ)
│   ├── quran/surahName.ts   # ১১৪ সূরার বাংলা নাম
│   ├── screens/             # সব স্ক্রিন
│   ├── notifications/       # আযান ও রিমাইন্ডার শিডিউলিং
│   └── settings/            # সেটিংস স্টোর
├── android/                 # নেটিভ অ্যান্ড্রয়েড (Kotlin)
└── assets/quran/            # কুরআন অনুবাদ ডেটা (অফলাইন)
```

## ভাষা যোগ বা সম্পাদনা

- অ্যাপের টেক্সট: `src/i18n/locales/bn.json`
- দোয়ার অনুবাদ: `src/i18n/locales/bn.json` → `duas.<id>.translation` / `duas.<id>.source`
- সূরার নাম: `src/quran/surahName.ts` → `SURAHS_BN`
- উইজেটের টেক্সট: `android/app/src/main/res/values-bn/strings.xml`

## লাইসেন্স

AGPL-3.0 — উপরের [Mihrab](https://github.com/Hassan-PS/Mihrab) প্রজেক্টের উপর ভিত্তি করে নির্মিত।
