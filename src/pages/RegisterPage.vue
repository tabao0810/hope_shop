<template>
  <div class="register-page container">
    <div class="row">
      <div class="col-lg-10 col-md-12 col-sm-12">
        <div class="create_account">
          <h2>Register pages</h2>
        </div>
      </div>
      <div class="col-lg-10 col-md-12 col-sm-12">
        <div class="form-vertical customer_register_page">
          <h3>Create Account</h3>

          <form id="create_customer" accept-charset="UTF-8">
            <label for="FirstName" class="hidden-label">First Name</label>
            <input
              type="text"
              id="FirstName"
              class="input-full"
              placeholder="First Name"
              autofocus=""
              v-model="userResgister.firstName"
            />

            <label for="LastName" class="hidden-label">Last Name</label>
            <input
              type="text"
              id="LastName"
              class="input-full"
              placeholder="Last Name"
              v-model="userResgister.lastName"
            />

            <label for="Email" class="hidden-label">Email</label>
            <input
              type="email"
              id="Email"
              class="input-full"
              placeholder="Email"
              v-model="userResgister.email"
            />

            <label for="CreatePassword" class="hidden-label">Password</label>
            <input
              type="password"
              id="CreatePassword"
              class="input-full"
              placeholder="Password"
              v-model="userResgister.password"
            />
            <label for="Re-enterPassword" class="hidden-label">Password</label>
            <input
              type="password"
              id="Re-enterPassword"
              class="input-full"
              placeholder="Re-enter password"
              v-model="userResgister.rePassword"
            />

            <div class="register_submit_option">
              <a href="/">Return to Store</a>
              <a
                href=""
                @click.prevent="handleSignIn(userResgister)"
                class="btn btn-sm animated-button thar-three"
                >Submit</a
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useLoading } from "vue-loading-overlay";

export default {
  setup() {
    const $loading = useLoading();
    const router = useRouter();
    const store = useStore();

    const userResgister = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
    });
    const handleSignIn = () => {
      if (
        userResgister.firstName.length !== 0 &&
        userResgister.lastName.length !== 0 &&
        userResgister.email.length !== 0
      ) {
        if (userResgister.password.length > 7) {
          if (userResgister.password === userResgister.rePassword) {
            const loader = $loading.show({
              isFullPage: true,
              loader: "bars",
              width: 80,
              height: 80,
            });
            const data = {
              firstName: userResgister.firstName,
              lastName: userResgister.lastName,
              email: userResgister.email,
              password: userResgister.password,
            };
            setTimeout(() => {
              loader.hide();
              store.dispatch("user/SignInAction", { data, router });
            }, 2000);
          } else {
            alert("Mời bạn nhập lại mật khẩu");
          }
        } else {
          alert(
            "Mật khẩu yếu (mời bạn nhập lại mật khẩu có độ dài lơn hơn 7 kí tự)"
          );
        }
      } else {
        alert("Họ tên hoặc email không được để trống!!");
      }
    };
    return {
      userResgister,
      handleSignIn,
    };
  },
};
</script>

<style>
.register-page {
  margin-top: 60px;
}
.form-vertical.customer_register_page {
  border: 1px solid #e5e5e5;
  margin: 25px auto;
  padding: 20px;
}
.customer_register_page h3 {
  background: #f1f1f1;
  padding: 10px;
  font-size: 1.08em;
  line-height: 1.25;
  margin: 0 0 20px;
  text-transform: uppercase;
  font-weight: bold;
}
.hidden-label {
  position: absolute;
  height: 0;
  width: 0;
  margin-bottom: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}
.register_submit_option {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
<style>
a.animated-button.thar-three {
  color: #fff;
  cursor: pointer;
  display: block;
  position: relative;
  border: 2px solid #8a8a8a;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1) 0s;
  text-decoration: none;
  text-transform: uppercase;
  color: #111;
  padding: 8px 16px;
  font-weight: 600;
}
a.animated-button.thar-three:hover {
  color: #fff !important;
  background-color: transparent;
  border: 2px solid #ff343b;
}
a.animated-button.thar-three:hover:before {
  left: -1px;
  right: auto;
  width: 102%;
}
a.animated-button.thar-three:before {
  display: block;
  position: absolute;
  top: -1px;
  right: 0px;
  height: 105%;
  width: 0px;
  z-index: -1;
  content: "";
  color: #000 !important;
  background: #ff343b;
  transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1) 0s;
}
</style>
