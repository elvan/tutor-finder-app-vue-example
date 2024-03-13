<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid #3a0061;
  border-radius: 30px;
  color: white;
  font: inherit;
  text-decoration: none;
  cursor: pointer;
  background-color: #3a0061;
}

a:hover,
a:active,
button:hover,
button:active {
  border-color: #270041;
  background-color: #270041;
}

.flat {
  border: none;
  color: #3a0061;
  background-color: transparent;
}

.outline {
  border-color: #270041;
  color: #270041;
  background-color: transparent;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>
