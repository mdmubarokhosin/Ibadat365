/**
 * "Rate Mihrab" — distribution-aware review prompt.
 *
 *   iOS            → SKStoreReviewController in-app sheet (native RateApp
 *                    module; no store id needed, never leaves the app).
 *   Android play   → Play Store listing deep link (market://, with an
 *                    https fallback for devices without the Play app).
 *   Android fdroid → the project's GitHub page — F-Droid has no ratings,
 *                    so stars/issues are the equivalent signal. Keeps the
 *                    F-Droid build 100% Google-free.
 */
import { Linking, NativeModules, Platform } from 'react-native';
import { getAndroidDistribution } from '../distribution';

const PLAY_MARKET_URL = 'market://details?id=com.mubarok.ibadat365';
const PLAY_WEB_URL =
  'https://play.google.com/store/apps/details?id=com.mubarok.ibadat365';
// The F-Droid build has no store to rate in; the developer's Facebook page
// is the feedback channel for this build.
const FEEDBACK_URL = 'https://www.facebook.com/id.mdmubarok';

type RateAppNative = { requestReview?: () => void };

export async function rateApp(): Promise<void> {
  if (Platform.OS === 'ios') {
    const native = NativeModules.RateApp as RateAppNative | undefined;
    if (native?.requestReview) {
      native.requestReview();
      return;
    }
    return; // module unavailable (should not happen) — silently no-op
  }

  if (getAndroidDistribution() === 'fdroid') {
    await Linking.openURL(FEEDBACK_URL).catch(() => undefined);
    return;
  }

  try {
    await Linking.openURL(PLAY_MARKET_URL);
  } catch {
    await Linking.openURL(PLAY_WEB_URL).catch(() => undefined);
  }
}
