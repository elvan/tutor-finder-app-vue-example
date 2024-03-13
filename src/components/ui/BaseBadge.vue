<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  color: #252525;
  background-color: #ccc;
}

.frontend {
  color: white;
  background-color: #3d008d;
}

.backend {
  color: white;
  background-color: #71008d;
}

.career {
  color: white;
  background-color: #8d006e;
}
</style>
