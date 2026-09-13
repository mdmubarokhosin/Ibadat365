/**
 * The addresses the app points people at, in one place.
 *
 * Ibadat 365 — developer contact information for Md Mubarok. These were
 * literals scattered across screens in the upstream project; they now live
 * here so a correction in one place is a correction everywhere.
 *
 * The upstream source repository stays linked from the attributions page,
 * where the AGPL licence asks it to be.
 */

/**
 * The app's main website — the front door. What a stranger should be
 * handed: the QR on the shared month sheet points here, and so does the
 * link at the foot of Settings → About.
 */
export const APP_WEBSITE = 'https://ibadat365.pages.dev/';

/** Shown rather than linked — a bare host reads better than a URL. */
export const APP_WEBSITE_LABEL = 'ibadat365.pages.dev';

export const DEVELOPER_NAME = 'Md Mubarok';

/** The developer's public Facebook page. */
export const DEVELOPER_FACEBOOK = 'https://www.facebook.com/id.mdmubarok';
export const DEVELOPER_FACEBOOK_LABEL = 'facebook.com/id.mdmubarok';

export const DEVELOPER_INSTAGRAM = 'https://www.instagram.com/mdmubarokbd';
export const DEVELOPER_INSTAGRAM_LABEL = '@mdmubarokbd';

export const DEVELOPER_EMAIL = 'contact.mdmubarok@gmail.com';

/** Compose-window links: opening them should start a message, not a profile view. */
export const DEVELOPER_EMAIL_URL = 'mailto:contact.mdmubarok@gmail.com';
export const DEVELOPER_FACEBOOK_MSG = 'https://m.me/id.mdmubarok';

/**
 * The upstream project this app is built on (AGPL-3.0). Still linked from
 * the attributions, where it belongs.
 */
export const UPSTREAM_REPO = 'https://github.com/Hassan-PS/Mihrab';

// ── Back-compat aliases (the app was forked from Mihrab) ────────────────
// The website alias is the APP's site, not the developer's Facebook —
// every QR, footer and About row that once pointed at the upstream
// project's page now hands people ibadat365.pages.dev.
export const MIHRAB_WEBSITE = APP_WEBSITE;
export const MIHRAB_WEBSITE_LABEL = APP_WEBSITE_LABEL;
export const MIHRAB_REPO = UPSTREAM_REPO;
