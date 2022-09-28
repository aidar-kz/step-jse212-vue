<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})    
</script>

<template>
  <div class="card w-100">
    <img :src="product.image" />

    <div class="card-body d-flex flex-column">
      <h6 class="card-title">{{ product.brand }} {{ product.model }}</h6>

      <p class="card-text" v-price="product.price" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  max-height: 200px;
  object-fit: contain;
}
</style>