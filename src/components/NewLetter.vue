<template>
  <section class="mt-5 bg-secondary text-white">
    <h1 class="newLetter__heading">New Letter</h1>
    <p>Get the latest new and special offers</p>
    <div class="container newLetter-form col-12">
      <div v-if="userInfo._id">
        <img :src="img_svg" alt="" class="newLetter-svg" />
      </div>
      <div v-else>
        <input
          type="email"
          placeholder="email@example.com"
          class="form-email"
        />

        <a href="" class="btn-sign ml-3" @click.prevent="handleToSignIn">
          <span class="btn-label">sign up</span>
        </a>
      </div>
    </div>
    <div class="container col-12">
      <hr />
      <div class="row">
        <div class="col-sm letter-text">
          <h5 class="letter__header">MY ACCOUNT</h5>
          <div class="list-letter">
            <li><a href="">My Account</a></li>
            <li><a href="">My Cart</a></li>
            <li><a href="">My Checkout</a></li>
            <li><a href="">My Wishlist</a></li>
            <li><a href="">My Wishlist</a></li>
            <li><a href="">Login</a></li>
          </div>
        </div>
        <div class="col-sm letter-text">
          <h5 class="letter__header">INFORMATION</h5>
          <div class="list-letter">
            <li><a href="">My Account</a></li>
            <li><a href="">My Cart</a></li>
            <li><a href="">My Checkout</a></li>
            <li><a href="">My Wishlist</a></li>
            <li><a href="">Login</a></li>
          </div>
        </div>
        <div class="col-sm letter-text">
          <h5 class="letter__header">CUSTOMER SERVICE</h5>
          <div class="list-letter">
            <li><a href="">My Account</a></li>
            <li><a href="">My Cart</a></li>
            <li><a href="">My Checkout</a></li>
            <li><a href="">My Wishlist</a></li>
            <li><a href="">My Login</a></li>
          </div>
        </div>
        <div class="col-sm letter-text">
          <h5 class="letter__header">STORE INFORMATION</h5>
          <div class="list-letter-2 mt-3">
            <p>Địa chỉ: Ngã tư Minh Hòa, Hưng Hà, Thái Bình</p>
            <p>Liên hệ: 0367773541</p>
            <p>Email: tabao08102000@gmail.com</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
    <div class="footer container">
      <p>
        Copyright <a href="" class="text-danger">©Tạ Quốc Bảo</a>.All Rights
        Reserved
      </p>
      <div class="icon">
        <img v-for="img in listImg" :key="img.id" :src="img.image" alt="" />
      </div>
    </div>
  </section>
  <div class="scrollTop" ref="srTop">
    <div class="backToTop" @click="moveTop"></div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("user");
import shopping from "../../public/image/shopping.svg";
import visa from "../assets/images/visa.png";
export default {
  data() {
    return {
      listImg: [
        {
          id: 1,
          image: visa,
        },
      ],
      img_svg: shopping,
    };
  },
  methods: {
    moveTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleToSignIn() {
      this.$router.push("/login");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    const totop = this.$refs.srTop;
    window.addEventListener("scroll", () => {
      let y = scrollY;
      if (y > 200) {
        totop.classList.add("activeTop");
      } else {
        totop.classList.remove("activeTop");
      }
    });
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo,
    }),
  },
};
</script>

<style>
.footer {
  display: flex;
  justify-content: space-between;
}
.list-letter li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}
.list-letter li :hover {
  color: red;
  transition: all 0.2s ease-in-out;
}
.list-letter li {
  padding: 4px 0;
}
.list-letter {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
  margin-left: 50px;
}
.form-email {
  padding: 10px;
  border-radius: 5px;
  border: none;
  width: 300px;
  outline: none;
  margin-left: -150px;
}
.newLetter-form {
  display: block;
}

.letter__header {
  font-weight: 700;
}
.newLetter__heading::before {
  content: "";
  width: 102px;
  height: 25px;
  display: inline-block;
  background: url(https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/bkg_title2.png)
    no-repeat 50% 50%;
  margin-right: 15px;
}
.newLetter__heading::after {
  content: "";
  width: 102px;
  height: 25px;
  display: inline-block;
  background: url(https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/bkg_title2.png)
    no-repeat 50% 50%;
  margin-left: 15px;
  transform: rotate(180deg);
}
.newLetter__heading {
  font-weight: bold;
}
.letter-text::after {
  content: "";
  position: absolute;
  border-left: 1px solid #999999;
  height: 80%;
  left: 0;
  top: 45%;
  transform: translateY(-50%);
}
.letter-text:first-child::after {
  visibility: hidden;
}
.newLetter-svg {
  width: 20%;
}
/* Mobile */
@media (max-width: 767.98px) {
  .letter__header {
    text-align: left;
    position: relative;
    left: 30px;
  }
  .letter-text {
    text-align: left;
    margin-top: 20px;
  }
  .list-letter {
    margin-top: 0px;
  }
  .list-letter-2 {
    margin-left: 40px;
  }
  .newLetter__heading::before {
    display: none;
  }
  .newLetter__heading::after {
    display: none;
  }
  .letter-text::after {
    display: none;
  }
  .form-email {
    margin: auto;
  }
  .btn-sign {
    margin: auto;
  }
  .newLetter-form {
    height: 100px;
  }
}
/* Tablet */
@media (min-width: 768px) and (max-width: 991.98px) {
  .list-letter {
    margin-left: 20px;
    font-size: 12px;
  }
  .letter__header {
    font-size: 13px;
  }
}
.backToTop {
  right: 20px;
  bottom: 35px;
  display: block;
  position: fixed;
  right: 12px;
  cursor: pointer;
  width: 46px;
  height: 65px;
  background: url(https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/back-top.png)
    no-repeat 0 0;
}
.backToTop:hover {
  background-position: 0 100%;
}
.scrollTop {
  position: fixed;
  z-index: 10;
  bottom: 0;
  right: 0;
  display: none;
}
.activeTop {
  display: block;
}
</style>
<style scoped>
.btn-sign {
  background: transparent;
  text-align: center;
  letter-spacing: 1px;
  font-size: 1.2em;
  line-height: 1.4em;
  font-weight: 500;
  position: absolute;
  width: 140px;
  height: 45px;
  padding: 10px 0;
  border: 1px solid #fff;
  overflow: hidden;
  transition: all 0.5s;
  box-shadow: 0px 3px 0px #fff;
  border-radius: 4px;
  text-transform: uppercase;
}

.btn-sign:hover,
.btn-sign:active {
  text-decoration: none;
  color: #fff;
  border-color: #ff343b;
  background: #ff343b;
  box-shadow: 0 0 0 #ff343b;
}

.btn-label {
  position: relative;
  padding-right: 0;
  transition: padding-right 0.5s;
  color: #fff;
  font-family: "Exo 2", sans-serif;
  font-weight: 200;
}
.btn-label:after {
  content: "";
  position: absolute;
  right: -50px;
  opacity: 0;
  top: 22%;
  width: 10px;
  height: 10px;

  background: rgba(0, 0, 0, 0);
  border: 3px solid #fff;
  border-top: none;
  border-right: none;
  transition: opacity 0.5s, top 0.5s, right 0.5s;
  transform: rotate(225deg);
}

.btn-sign:hover .btn-label,
.btn-sign:active .btn-label {
  padding-right: 30px;
  color: #f5f1e7;
}

.btn-sign:hover .btn-label:after,
.btn-sign:active .btn-label:after {
  transition: opacity 0.5s, top 0.5s, right 0.5s;
  opacity: 1;
  right: 10px;
  top: 22%;
}
</style>
