<template>
  <div v-if="isLinux" style="display: flex; justify-content: center">
    <dg-button 
      :href="deb" 
      style="margin: 5px"
      large="deb"
      small="Debian, Ubuntu..."
    ></dg-button>
    <dg-button 
      :href="rpm" 
      style="margin: 5px"
      large="rpm"
      small="Fedora, Red Hat..."
    ></dg-button>
  </div>
  <dg-button
    v-else-if="isWindows"
    :href="windows"
    large="Windows"
    small="exe"
  ></dg-button>
  <dg-button
    v-else-if="isMacOS"
    :href="macos"
    large="Mac OS"
    small="dmg"
  ></dg-button>
  <div v-else>
    <div class="warning custom-block">
      <p class="custom-block-title">WARNING</p> 
      <p>
        <div v-if="isMobile">
          <code>Vusic</code> is not currently available on mobile devices.
        </div>
        <div v-else>
          <code>Vusic</code> is not currently on your operating system. Please contact us with your operating system and we will see what we can do.
        </div>    
      </p>
    </div>
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
  data: () => ({
    userAgent: null,
    platform: null,
  }),
  mounted() {
    this.userAgent = window.navigator.userAgent
    this.platform = window.navigator.platform
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
      let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
      let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
      let iosPlatforms = ['iPhone', 'iPad', 'iPod']
      let os = null;

      if (macosPlatforms.indexOf(this.platform) !== -1) {
        os = 'Mac OS';
      } else if (iosPlatforms.indexOf(this.platform) !== -1) {
        os = 'iOS';
      } else if (windowsPlatforms.indexOf(this.platform) !== -1) {
        os = 'Windows';
      } else if (/Android/.test(this.userAgent)) {
        os = 'Android';
      } else if (!os && /Linux/.test(this.platform)) {
        os = 'Linux';
      }

      return os;
    }
  },
}
</script>
