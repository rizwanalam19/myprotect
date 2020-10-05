<template>
  <mdb-carousel
    :interval="8000"
    slide
    :items="items"

    controlls
  ></mdb-carousel>
</template>
<script>
  import { mdbCarousel } from "mdbvue";
  export default {
    name: "CarouselPage",
    components: {
      mdbCarousel
    },
    data() {
      return {
        items: [
          {
            img: true,

            src:
              "~/@/assets/banner.jpg"
          },
          {
            img: true,
            src:
              "@/assets/banner1.png"
          },
          {
            img: true,
            src:
              "https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
          }
        ]
      };
    }
  };
</script>
<style scoped>
mdb-carousel{
  height:200px !important;
}
</style>
