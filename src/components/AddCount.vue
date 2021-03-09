<template>
  <div class="add-count">
    <p>{{ count }}</p>
    <button @click="addCount">
      add count
    </button>
  </div>
</template>
<script>
export default {
  name: 'AddCount',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addCount() {
      this.count++
    }
  }
}
</script>
