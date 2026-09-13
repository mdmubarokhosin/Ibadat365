package com.mubarok.ibadat365

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

/**
 * Exposes installed app version metadata to JavaScript.
 */
class AppVersionModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String = NAME

  override fun getConstants(): Map<String, Any> =
    mapOf(
      "versionName" to BuildConfig.VERSION_NAME,
      "buildNumber" to BuildConfig.VERSION_CODE.toString().padStart(3, '0'),
    )

  companion object {
    const val NAME = "AppVersion"
  }
}
