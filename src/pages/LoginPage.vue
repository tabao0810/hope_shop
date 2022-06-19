<template>
  <div class="my_account_page_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="create_account">
            <h2>Login or Create an Account</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
          <div class="new_customer register_field">
            <h3>Khách hàng mới</h3>
            <p>
              Bằng cách tạo tài khoản với cửa hàng của chúng tôi, bạn sẽ có thể
              thực hiện quy trình thanh toán nhanh hơn, lưu trữ nhiều địa chỉ
              giao hàng, xem và theo dõi đơn đặt hàng trong tài khoản của bạn và
              hơn thế nữa.
            </p>
          </div>
          <div class="create_button_area register_button">
            <router-link
              class="btn btn-sm animated-button thar-three"
              id="SubmitCreate"
              to="/register"
            >
              <span>Đăng kí</span>
            </router-link>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
          <div class="new_customer">
            <div
              class="note form-success"
              id="ResetSuccess"
              style="display: none"
            >
              We've sent you an email with a link to update your password.
            </div>
            <div class="form-vertical customer_login_form">
              <form>
                <h3>Đăng nhập</h3>
                <p v-if="errMes" class="errMess">
                  <span
                    >Đăng nhập thất bại! Vui lòng kiểm tra lại tài khoản hoặc
                    mật khẩu</span
                  >
                </p>
                <p v-else>If you have an account with us, please log in.</p>
                <label for="CustomerEmail" class="customer_label"
                  >Tài khoản/ Email*</label
                >
                <input
                  type="email"
                  id="CustomerEmail"
                  class="input-full"
                  placeholder="Email"
                  autofocus=""
                  v-model="userLogin.email"
                />

                <label for="CustomerPassword" class="customer_label"
                  >Mật khẩu*</label
                >
                <input
                  type="password"
                  id="CustomerPassword"
                  class="input-full"
                  placeholder="Password"
                  v-model="userLogin.password"
                />

                <div class="create_button_area">
                  <div class="forgot-passwrod-btn">
                    <div class="customer_login_canel">
                      <a href="/">Return to Store</a>
                    </div>
                  </div>
                  <a
                    href=""
                    @click.prevent.enter="handleLogin(userLogin)"
                    class="btn btn-sm animated-button thar-three"
                    >Đăng nhập</a
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useLoading } from "vue-loading-overlay";
export default {
  setup() {
    const $loading = useLoading();
    const store = useStore();
    const router = useRouter();
    const userLogin = reactive({
      email: "",
      password: "",
    });
    const handleLogin = () => {
      const loader = $loading.show({
        isFullPage: true,
        loader: "bars",
        width: 80,
        height: 80,
        backgroundColor: "#fff",
      });
      const data = {
        email: userLogin.email,
        password: userLogin.password,
      };

      setTimeout(() => {
        loader.hide();
        store.dispatch("user/LoginPageAction", { data, router });
      }, 1500);
    };
    const errMes = computed(() => store.state.user.errMes);
    return {
      userLogin,
      handleLogin,
      errMes,
    };
  },
};
</script>

<style>
.errMess {
  border: 1px solid #ff343b;
  background-color: #ff9599;

  padding: 10px;
}
.errMess > span {
  color: #fff;
  font-weight: 600;
}
.my_account_page_area {
  padding: 60px 0px;
  border-bottom: 1px solid #eee;
}
.create_account h2 {
  font-size: 32px;
  color: #555;
  text-align: left;
  font-weight: bold;
}
.new_customer.register_field {
  min-height: 330px;
}
.new_customer {
  min-height: 350px;
  padding: 20px;
  border: 1px solid #eee;
}
.new_customer.register_field {
  min-height: 330px;
}
.new_customer h3,
.customer_register_page h3 {
  background: #f1f1f1;
  padding: 10px;
  font-size: 1.08em;
  line-height: 1.25;
  margin: 0 0 20px;
  text-transform: uppercase;
  text-align: left;
  font-weight: bold;
}
.new_customer p {
  font-size: 13px;
  color: #555;
  text-align: left;
}
.create_button_area.register_button {
  margin-top: 0;
  text-align: left;
  min-height: 85px;
}
.create_button_area {
  padding: 10px 15px;
  border: 1px solid #eee;
  min-height: 70px;
}
.login_btn,
.btn.main-btn,
.rgister_btn {
  background: #afafaf;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  color: #fff;
  display: inline-block;
  font-weight: bold;
  padding: 10px 15px;
  transition: all 0.3s linear 0s;
  width: 88px;
}
.login_btn:hover,
.btn.main-btn:hover {
  background: #ff343b;
  border-color: #ff343b;
  text-decoration: none;
  cursor: pointer;
}
.form-vertical {
  margin-bottom: 15px;
}
label {
  display: inline-block;
  float: left;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
.input-full {
  background: #f0f0f0;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  height: 40px;
  width: 100%;
  outline: none;
  padding: 8px 10px;
  margin-bottom: 10px;
}
.create_button_area {
  margin-top: 35px;
  padding: 10px 15px;
  border: 1px solid #eee;
}
.forgot-passwrod-btn {
  display: inline-block;
  float: left;
  margin-right: 30px;
}
.create_button_area a {
  display: inline-block;
  float: left;
  font-size: 14px;
}
.customer_login_canel > a,
.custer_forgott_Password a,
.register_submit_option > a {
  color: #222;
}
.customer_login_canel > a:hover,
.custer_forgott_Password a:hover,
.register_submit_option > a:hover {
  color: #ff343b;
  text-decoration: underline;
  transition: all linear 0.3s;
}
</style>
