<template>
  <div class="item__wrapper">
    <div class="container">
      <div class="product__wrapper">

        <div class="product-slider">
          <carousel :settings="settings">
            <template #slides>
              <slide v-for="(slide, index) in product.gallery" :key="index">
                <div class="carousel__item">
                  <img :src="slide.img" :alt="slide.name">
                </div>
              </slide>
            </template>
            <template #addons>
              <navigation/>
              <pagination/>
            </template>
          </carousel>
        </div>

        <div class="product-content">
          <p>Инвентарный номер: {{ product.id }}</p>
          <h2 class="title">Название: {{ product.title }}</h2>
          <p>Описание: {{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      product: null,
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      }
    };
  },
  created() {
    this.product = this.$store.getters.getProduct(this.$route.params.id)
  }
};
</script>

<style lang="scss">
.product__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-slider, .product-content {
  max-width: 48%;
  text-align: center;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
