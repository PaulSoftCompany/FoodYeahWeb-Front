<template>
  <div>
    <h1 class="title">COMMERCE APP</h1>
    <h2 class="subtitle">Tu APP de gestión de ventas</h2>

    <p><b>{{user.lastName}}, {{user.name}}</b> desde esta APP podrás gestionar las ventas de su negocio.</p>
  </div>
</template>

<script>
export default {
  name: "Default",
  data() {
    return {
      user: this.$store.state.user
    }
  }
};
</script>
