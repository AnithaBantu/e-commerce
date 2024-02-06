<template>
    <div>
        <div class="productlist-background-image">
            <h1 style="color: #000000;font-size: 48px;margin-bottom: 0px;">Shop</h1>
            <p style="font-size: 16px;color: #000000;"><span style="font-weight: 600;">Home</span><span style="padding:0px 8px"><img style="margin-bottom: -2px;" src="/static/Images/descending.svg"/></span> Shop</p>
        </div>
        <div class="pL-pagination">
            <div>
                <span><img style="margin-bottom: -4px;padding-right: 12px;" src="/static/Images/filter_image1.svg"/></span>
                <span>Filter</span>
                <span><img style="margin-bottom: -4px;padding: 0px 12px;" src="/static/Images/filter_image2.svg"/></span>
                <span><img style="margin-bottom: -4px;" src="/static/Images/filter_image3.svg"/></span>
                <span style="padding:0px 16px"><img style="margin-bottom: -14px;" src="/static/Images/pass_through.svg"/></span>
                <span>Showing 1–16 of 32 results</span>
            </div>

            <div>
                <span>Show</span>
                <span><input placeholder="16" class="show-results"/></span>
                <span>Sort by</span>
                <span><input placeholder="Default" class="sort-by"/></span>
            </div>
        </div>
        <div class="pl-container">
            <div class="home-related-products">
                <div class="home-product-card" v-for="product in productDetails" :key="product.id">
                    <img :src='product.image' width="100%" />
                    <div class="card-details">
                        <h3>{{ product.name }}</h3>
                        <p style="color: #898989;font-size: 14px;margin: 0px;">{{ product.description }}</p>
                        <p><span style="color: #3A3A3A;font-size: 14px;font-weight: 600;">{{ product.currentRate }}</span> <span v-if="product.strikedRate" style="color: #898989;font-size: 14px;"><s>{{ product.strikedRate }}</s></span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pl-pagination-btns">
            <button class="pl-bg-btn">1</button>
            <button class="pl-pagination-number-btn">2</button>
            <button class="pl-pagination-number-btn">3</button>
            <button class="pl-pagination-number-btn">Next</button>
        </div>

          <div style="background-color: #FAF3EA;display: flex;justify-content: space-between;padding:46px;text-align: left;">
            <div style="display: flex;">
                <div><img src="/static/Images/quality.svg" class="pl-footer-img"/></div>
                <div>
                    <p style="line-height: 24px;">
                        <span style="font-size: 20px;color: #242424;font-weight: 550;">High Quality</span><br/>
                        <span style="font-size: 16px;color: #898989;">crafted from top materials</span>
                    </p>
                </div>
            </div>
            <div style="display: flex;">
                <div><img src="/static/Images/warranty.svg" class="pl-footer-img"/></div>
                <div>
                    <p style="line-height: 24px;">
                        <span style="font-size: 20px;color: #242424;font-weight: 550;">Warranty Protection</span><br/>
                        <span style="font-size: 16px;color: #898989;">Over 2 years</span>
                    </p>
                </div>
            </div>
            <div style="display: flex;">
                <div><img src="/static/Images/shipping.svg" class="pl-footer-img"/></div>
                <div>
                    <p style="line-height: 24px;">
                        <span style="font-size: 20px;color: #242424;font-weight: 550;">Free Shipping</span><br/>
                        <span style="font-size: 16px;color: #898989;">Order over 150 $</span>
                    </p>
                </div>
            </div>
            <div style="display: flex;">
                <div><img src="/static/Images/support.svg" class="pl-footer-img"/></div>
                <div>
                    <p style="line-height: 24px;">
                        <span style="font-size: 20px;color: #242424;font-weight: 550;">24 / 7 Support</span><br/>
                        <span style="font-size: 16px;color: #898989;">Dedicated support</span>
                    </p>
                </div>
            </div>
          </div>
    </div>
</template>
<script>
export default {
  name: 'products-design',
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
          name: 'Syltherine',
          description: 'Stylish cafe chair',
          image: '/static/Images/featured_1.svg',
          currentRate: 'Rp 2.500.000',
          strikedRate: 'Rp 3.500.000'
        },
        {
          id: 6,
          name: 'Leviosa',
          description: 'Stylish cafe chair',
          image: '/static/Images/image2.svg',
          currentRate: 'Rp 2.500.000'
        },
        {
          id: 7,
          name: 'Lolito',
          description: 'Luxury big sofa',
          image: '/static/Images/lolito.svg',
          currentRate: 'Rp 7.000.000',
          strikedRate: 'Rp 14.000.000'
        },
        {
          id: 8,
          name: 'Respira',
          description: 'Outdoor bar table and stool',
          image: '/static/Images/respira.svg',
          currentRate: 'Rp 500.000'
        },
        {
          id: 9,
          name: 'Syltherine',
          description: 'Stylish cafe chair',
          image: '/static/Images/featured_1.svg',
          currentRate: 'Rp 2.500.000',
          strikedRate: 'Rp 3.500.000'
        },
        {
          id: 10,
          name: 'Leviosa',
          description: 'Stylish cafe chair',
          image: '/static/Images/image2.svg',
          currentRate: 'Rp 2.500.000'
        },
        {
          id: 11,
          name: 'Lolito',
          description: 'Luxury big sofa',
          image: '/static/Images/lolito.svg',
          currentRate: 'Rp 7.000.000',
          strikedRate: 'Rp 14.000.000'
        },
        {
          id: 12,
          name: 'Respira',
          description: 'Outdoor bar table and stool',
          image: '/static/Images/respira.svg',
          currentRate: 'Rp 500.000'
        },
        {
          id: 13,
          name: 'Syltherine',
          description: 'Stylish cafe chair',
          image: '/static/Images/featured_1.svg',
          currentRate: 'Rp 2.500.000',
          strikedRate: 'Rp 3.500.000'
        },
        {
          id: 14,
          name: 'Leviosa',
          description: 'Stylish cafe chair',
          image: '/static/Images/image2.svg',
          currentRate: 'Rp 2.500.000'
        },
        {
          id: 15,
          name: 'Lolito',
          description: 'Luxury big sofa',
          image: '/static/Images/lolito.svg',
          currentRate: 'Rp 7.000.000',
          strikedRate: 'Rp 14.000.000'
        },
        {
          id: 16,
          name: 'Respira',
          description: 'Outdoor bar table and stool',
          image: '/static/Images/respira.svg',
          currentRate: 'Rp 500.000'
        }
      ]
    }
  }
}
</script>
<style scoped>
.show-results{
    width: 18px;
    border: none;
    padding: 8px 10px;
    border-radius: 2px;
    margin-left: 8px;
    margin-right: 8px;
}
.sort-by{
    width: 86px;
    border: none;
    padding: 8px 16px;
    border-radius: 2px;
    margin-left: 8px;
}
    .productlist-background-image {
    background-image: url('./../content/Images/productsList_bg.svg'); /* Replace with the actual path to your image */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* color: #ffffff; */
    position: relative
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
.pL-pagination{
    background-color: rgb(249, 241, 231);
    padding: 16px 56px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    color: #000000;
    font-size: 14px;
}
.pl-container{
    padding: 48px 56px;
    text-align: left;
}
.pl-pagination-btns{
    padding-bottom: 48px;
}
.pl-bg-btn{
    background-color: #B88E2F;
    border: 0.2px solid #B88E2F;
    border-radius: 10px;
    padding: 16px 24px;
    color: #FFFFFF;
    font-size: 20px;
}
.pl-pagination-number-btn{
    background-color: #F9F1E7;
    border: 0.2px solid #F9F1E7;
    border-radius: 10px;
    padding: 16px 24px;
    color: #000000;
    font-size: 20px;
    margin-left: 36px;
}
.pl-footer-img{
    margin-top: 16px;
    width: 46px;
    padding-right: 8px;
}
</style>
