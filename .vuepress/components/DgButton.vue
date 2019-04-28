<template>
  <a 
    @click="click"
    :style="style"
    class="button"
    v-bind="$attrs"
  >
    <download-icon/>
    {{ large }}
    <small>{{ small }}</small>
  </a>
</template>

<script>
export default {
  name: 'DGButton',
  props: {
    disabled: Boolean,
    large: { type: String, required: true },
    small: { type: String, required: true },
  },
  computed: {
    style() {
      return {
        // TODO Hardoding
        backgroundColor: this.disabled ? '#999' : '#2284e5',
      }
    }
  },
  methods: {
    click(e) {
      if (!this.disabled) {
        this.$emit('click', e)
      }
    }
  }
}
</script>

<style scoped>
.button {
  color: white;
  margin: 20px 0 5px;
  padding: 10px 0;
  font-size: 1.8rem;
  width: 200px;
  border: none;
  text-align: center;
  box-shadow: -1px 4px 28px 1px rgba(0,0,0,0.30);
  border-radius: 10px;
}

.button:hover {
  text-decoration: none!important;
}
</style>

<style>
small {
  display: block;
  margin-top: 0.75rem;
  color: rgba(255,255,255,0.65);
  font-size: 1.2rem;
}
</style>
