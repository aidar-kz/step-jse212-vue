<template>
  <nav class="navbar navbar-expand-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">App</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" aria-current="page">Главная</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/directives" class="nav-link">Директивы</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/shop" class="nav-link">Магазин</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>