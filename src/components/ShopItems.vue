<template>
  <div class="items">
    <img :src="item.img"
         :alt="item.title">
    <router-link :to="/shop/ + item.id">{{ item.title }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    item: {type: Object}
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.item__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.items {
  max-width: 48%;
  text-align: center;

  p {
    font-size: 22px;
  }
}
</style>
