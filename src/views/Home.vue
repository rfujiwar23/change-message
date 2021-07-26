<template>
  <div class="home">
    <h1>{{ storedMsg }}</h1>
    <button @click="changeMsg">メッセージを変更</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    storedMsg(){
      return this.$store.state.message
    }
  },
  methods: {
    changeMsg(){
      this.$store.commit('changeMsg')
    }
  }
}
</script>
