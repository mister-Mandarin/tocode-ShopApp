<template>
  <div class="md-body">
    <div class="item__wrapper">
      <shop-items v-for="item of listItems" :key="item.id" :item="item"/>
    </div>
  </div>
</template>

<script>
import shopItems from '@/components/ShopItems';

export default {
  components: {shopItems},
  data() {
    return {
      listItems: null
    };
  },
  created() {
    this.listItems = this.$store.getters.getListItems;
    console.log(this.listItems);
  }
};
</script>
