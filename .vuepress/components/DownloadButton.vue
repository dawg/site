<template>
  <div v-if="isLinux" style="display: flex; justify-content: center">
    <dg-button :href="deb" style="margin: 5px">
      <download-icon/>        
      deb
      <small>Debian, Ubuntu...</small>
    </dg-button>
    <dg-button :href="rpm" style="margin: 5px">
      <download-icon/>        
      rpm
      <small>Fedora, Red Hat...</small>
    </dg-button>
  </div>
  <dg-button
    v-else-if="isWindows"
    :href="windows"
  >
    <download-icon/>
    Windows
    <small>exe</small>
  </dg-button>
  <dg-button
    v-else-if="isMacOS"
    :href="macos"
  >
    <download-icon/>
    Mac OS
    <small>dmg</small>
  </dg-button>
  <div v-else>
    Vusic is not currently available on mobile devices. Please visit on your desktop device.
  </div>
</template>

<script>
export default {
  name: 'DownloadButton',
  props: {
    windows: { type: String, required: true },
    macos: { type: String, required: true },
    deb: { type: String, required: true },
    rpm: { type: String, required: true },
  },
  computed: {
    isLinux() {
      return this.os === 'Linux';
    },
    isWindows() {
      return this.os === 'Windows';
    },
    isMacOS() {
      return this.os === 'Mac OS';
    },
    isMobile() {
      return this.os === 'Android' || this.os === 'iOS';
    },
    os() {
      let userAgent = window.navigator.userAgent
      let platform = window.navigator.platform
      let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
      let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
      let iosPlatforms = ['iPhone', 'iPad', 'iPod']
      let os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
      } else if (/Android/.test(userAgent)) {
        os = 'Android';
      } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
      }

      return os;
    }
  },
}
</script>
