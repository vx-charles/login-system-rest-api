<template>
  <div class="not-found-page">
    <h2>Error 404 - página não encontrada.</h2>
    <p>A página que você está procurando não existe mais, tente uma página existente.</p>
  </div>
</template>

<script>
export default {
  name: 'Error-404'
}
</script>

<style lang="scss" scoped>
  .not-found-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 30px;
    margin-bottom: 100px;
  }
</style>
