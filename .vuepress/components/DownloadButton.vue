<template>
  <div v-if="isAny" style="display: flex; flex-wrap: wrap">
    <dg-button 
      v-if="isLinux"
      :href="deb" 
      large="deb"
      small="Debian, Ubuntu..."
    ></dg-button>
    <div v-if="isLinux" style="margin: 20px"></div>
    <dg-button
      v-if="isLinux"
      :href="rpm"
      large="rpm"
      small="Fedora, Red Hat..."
    ></dg-button>
    <div v-if="isLinux" style="margin: 20px"></div>
    <dg-button
      v-if="isLinux"
      :href="appImage"
      large="AppImage"
      small="Any distribution..."
    ></dg-button>
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
  </div>
  <div v-else>
    <div class="warning custom-block">
      <p class="custom-block-title">WARNING</p> 
      <p>
        <div v-if="isMobile">
          <code>DAWG</code> is not currently available on mobile devices.
        </div>
        <div v-else>
          <code>DAWG</code> is not currently on your operating system. Please contact us with your operating system and we will see what we can do.
        </div>    
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadButton',
  data: () => ({
    userAgent: null,
    platform: null,
    location: null,
    json: null,
    error: null,
  }),
  async mounted() {
    this.userAgent = window.navigator.userAgent
    this.platform = window.navigator.platform
    this.location = window.location;

    try {
      const response = await fetch('https://api.github.com/repos/dawg/dawg/releases/latest');
      this.json = await response.json();
    } catch (e) {
      this.error = e.message;
    }
  },
  computed: {
    tag() {
      return this.json ? this.json.tag_name : '';
    },
    version() {
      return this.tag.slice(1);
    },
    base() {
      return `https://github.com/dawg/dawg/releases/download/${this.tag}/`;
    },
    windows() {
      return `${this.base}DAWG.Setup.${this.version}.exe`
    },
    macos() {
      return `${this.base}DAWG-${this.version}.dmg`
    },
    deb() {
      return `${this.base}dawg_${this.version}_amd64.deb`
    },
    rpm() {
      return `${this.base}dawg-${this.version}.x86_64.rpm`
    },
    appImage() {
      return `${this.base}DAWG-${this.version}.AppImage`
    },
    isLinux() {
      return this.os === 'linux';
    },
    isWindows() {
      return this.os === 'windows';
    },
    isMacOS() {
      this.$rout
      return this.os === 'mac';
    },
    isAny() {
      return this.isLinux || this.isWindows || this.isMacOS;
    },
    isMobile() {
      return this.os === 'android' || this.os === 'ios';
    },
    params() {
      if (!this.location) {
        return new URLSearchParams();
      }

      let uri = this.location.search.substring(1); 
      return new URLSearchParams(uri);
    },
    os() {
      if (this.params.has('system')) {
        return this.params.get('system');
      }

      let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
      let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
      let iosPlatforms = ['iPhone', 'iPad', 'iPod']
      let os = null;

      if (macosPlatforms.indexOf(this.platform) !== -1) {
        os = 'mac';
      } else if (iosPlatforms.indexOf(this.platform) !== -1) {
        os = 'ios';
      } else if (windowsPlatforms.indexOf(this.platform) !== -1) {
        os = 'windows';
      } else if (/Android/.test(this.userAgent)) {
        os = 'android';
      } else if (!os && /Linux/.test(this.platform)) {
        os = 'linux';
      }

      return os;
    }
  },
}
</script>


<style scoped>
.dg-button {
  margin: 5px;
}
</style>
