<template>
    <div>
        <div class="background-image">
            <div class="home-page-bgStyle" style="background-color: #FFF3E3;">
              <p style="font-size: 12px;font-weight:600;">New Arrival</p>
              <p class="new-collection-style">Discover Our New Colection</p>
              <p class="para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
              <button class="buy-now-btn">BUY NOW</button>
            </div>
          </div>
          <div style="padding: 16px 56px;">
            <h1 style="color: #333333;">Browse The Range</h1>
              <p style="color: #666666;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div style="display: flex;justify-content: space-between;">
                <div>
                    <img src="./../content/Images/Dining.svg" width="360px">
                    <p>Dining</p>
                </div>
                <div>
                    <img src="./../content/Images/livingroom.svg"  width="360px">
                    <p>Living</p>
                </div>
                <div>
                    <img src="./../content/Images/bedroom.svg"  width="360px">
                    <p>Bedroom</p>
                </div>
              </div>
          </div>
          <div style="padding: 16px 56px;">
            <h1 style="color: #333333;">Our Products</h1>
            <div class="home-related-products">
                <div class="home-product-card" v-for="product in productDetails" :key="product.id">
                    <img :src='product.image' width="100%">
                    <div class="card-details">
                        <h3>{{ product.name }}</h3>
                        <p style="color: #898989;font-size: 14px;margin: 0px;">{{ product.description }}</p>
                        <p><span style="color: #3A3A3A;font-size: 14px;font-weight: 600;">{{ product.currentRate }}</span> <span v-if="product.strikedRate" style="color: #898989;font-size: 14px;"><s>{{ product.strikedRate }}</s></span></p>
                    </div>
                </div>
              </div>
          </div>
          <div style="padding: 16px;padding-bottom: 64px;">
            <button class="show-more-btn">Show More</button>
          </div>

          <div style="background-color: #FCF8F3;">
            <img src="/static/Images/footerImage.svg" width="100%">
          </div>
          <div style="padding: 32px 0px;border-bottom: 1px solid #D9D9D9">
            <p style="color: #666666;">Share your setup with</p>
            <h1 style="color: #333333;">#FuniroFurniture</h1>
            <!-- <div class="product-grid">
              <div class="product" style="grid-area: 1/1/2/2;">
                  <img src="static/Images/furniture1.svg">
              </div>
              <div class="product" style="grid-area: 1/2/3/3">
                  <img src="static/Images/furniture2.svg">
              </div>
              <div class="product" style="grid-area: 3/1/4/2">
                  <img src="static/Images/furniture3.svg">
              </div>
            </div> -->

            <div class="row">
              <div class="column" style="flex: 8%;">
    <img src="static/Images/furniture1.svg">
  </div>
  <div class="column" style="flex: 24%;">
    <img style="padding-top:64px" src="static/Images/furniture3.svg">
    <img src="static/Images/figure12.svg">
  </div>
  <div class="column">
    <img style="padding-top:100px" src="static/Images/furniture2.svg">
    <img src="static/Images/furniture22.svg">
  </div>
  <div class="column">
    <img style="padding-top:56px" src="static/Images/furniture4.svg">
    <img src="static/Images/furniture42.svg">
  </div>
  <div class="column">
    <img src="static/Images/furniture5.svg">
    <img src="static/Images/furniture52.svg">
  </div>
</div>
            </div>
    </div>
</template>
<script>
export default {
  name: 'HomePageDesign',
  data () {
    return {
      productDetails: [
        {
          id: 1,
          name: 'Syltherine',
          description: 'Stylish cafe chair',
          image: '/static/Images/featured_1.svg',
          currentRate: 'Rp 2.500.000',
          strikedRate: 'Rp 3.500.000'
        },
        {
          id: 2,
          name: 'Leviosa',
          description: 'Stylish cafe chair',
          image: '/static/Images/image2.svg',
          currentRate: 'Rp 2.500.000'
        },
        {
          id: 3,
          name: 'Lolito',
          description: 'Luxury big sofa',
          image: '/static/Images/lolito.svg',
          currentRate: 'Rp 7.000.000',
          strikedRate: 'Rp 14.000.000'
        },
        {
          id: 4,
          name: 'Respira',
          description: 'Outdoor bar table and stool',
          image: '/static/Images/respira.svg',
          currentRate: 'Rp 500.000'
        },
        {
          id: 5,
          name: 'Grifo',
          description: 'Night lamp',
          image: '/static/Images/grifo.svg',
          currentRate: 'Rp 1.500.000'
        },
        {
          id: 6,
          name: 'Muggo',
          description: 'Small mug',
          image: '/static/Images/muggo.svg',
          currentRate: 'Rp 1.500.000'
        },
        {
          id: 7,
          name: 'Pingky',
          description: 'Cute bed set',
          image: '/static/Images/pingky.svg',
          currentRate: 'Rp 7.000.000',
          strikedRate: 'Rp 14.000.000'
        },
        {
          id: 8,
          name: 'Potty',
          description: 'Minimalist flower pot',
          image: '/static/Images/potty.svg',
          currentRate: 'Rp 500.000'
        }
      ]
    }
  }
}
</script>
<style scoped>
.row {
  display: -ms-flexbox; /* IE 10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE 10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create two equal columns that sits next to each other */
.column {
  -ms-flex: 18%; /* IE 10 */
  flex: 18%;
  padding: 0 4px;
}

.column img {
  width: 100%;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 20px;
}
      .product-card {
      border: 1px solid #ccc;
      padding: 10px;
    }
    .name-styling{
        overflow: hidden;
        white-space: nowrap
    }
    .background-image {
    background-image: url('./../content/Images/bgImage_icon.svg'); /* Replace with the actual path to your image */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* color: #ffffff; */
    position: relative
}
.home-page-bgStyle{
  background-color: #FFF3E3;
  padding: 24px;
  text-align: left;
  position: absolute;
    top: 50%;
    left: 63%;
    transform: translate(-50%, -50%);
}
.new-collection-style{
    color: rgb(184, 142, 47);
    font-size: 34px;
    font-weight: 600;
    margin-top: 0px;
    margin-bottom: 0px;
}
.buy-now-btn{
    background-color: #B88E2F;
    border: 0.2px solid;
    border-radius: 2px;
    padding: 16px 32px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 12px;
}
.para-text{
    font-size: 14px;
    color: #333333;
    padding-bottom: 16px;
}
.home-related-products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
.home-product-card{
    background-color: #F4F5F7;
}
.card-details{
    padding:0px 10px;text-align: left;
}
.show-more-btn{
  background-color: #FFFFFF;
    border: 0.2px solid #B88E2F;
    border-radius: 2px;
    padding: 16px 48px;
    color: #B88E2F;
    font-weight: bold;
    font-size: 12px;
}
</style>
