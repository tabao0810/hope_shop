<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
import MenuExtend from "@/components/MenuExtend.vue";
const route = useRoute();
const currentRoute = ref(route.params.type);
watch(route, (to) => {
  currentRoute.value = to.params.type;
});

const route_type = ref([
  { route: "Tính size quần áo", to: "/tutorial/size_clothes" },
  { route: "Tính size giày", to: "/tutorial/size_shoes" },
]);
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-lg-12">
        <div class="blog__icon-link">
          <router-link to="/" class="blog__icon-text"
            ><i class="fa fa-home px-1"></i>home</router-link
          >
          <span class="blog__icon-text-active">Tutorial</span>
        </div>
      </div>
      <div class="col-lg-3">
        <sidebar :routes="route_type" :title="'Tutorial'"></sidebar>
      </div>
      <div class="col-lg-9">
        <menu-extend :routes="route_type"
          ><div class="w-100"></div
        ></menu-extend>
        <div class="blog_banner_area" v-if="currentRoute === 'size_clothes'">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <img
                src="https://file.hstatic.net/1000003969/file/bang-size-juno_800-x-n_876ef0d4aedf452c9df5d266660a15bd.jpg"
                alt=""
                style="width: 100%"
              />
            </div>
          </div>
        </div>
        <div class="sizeShoe" v-if="currentRoute === 'size_shoes'">
          <h2>Hướng dẫn chọn size giày</h2>
          <p>
            Để biết cỡ chân của bạn phù hợp với Size giày bao nhiêu của Juno,
            bạn hãy thực hiện cách đo như sau.
          </p>

          <div class="mt-5">
            <hr />
            <p>
              <span style="font-weight: bold">Bước 1:</span>Đặt bàn chân lên tờ
              giấy trắng, rồi dùng bút vẽ bo hết bàn chân (để chính xác thì bạn
              phải đặt bút thẳng đứng và vuông góc với tờ giấy)
            </p>
            <img
              src="https://hstatic.net/969/1000003969/10/2015/4-11/huong_dan_cach_do_size_giay_01.jpg"
              alt=""
            />
          </div>

          <div class="mt-5">
            <hr />
            <p>
              <span style="font-weight: bold">Bước 2:</span>Dùng thước hay sợi
              dây đo một vòng khớp ngón phần rộng nhất của bàn chân ở tư thế
              ngồi hoặc đứng thẳng 2 chân.
            </p>
            <img
              src="https://file.hstatic.net/1000003969/file/capture_grande.png"
              alt=""
            />
          </div>
          <div class="mt-5">
            <hr />
            <p>
              <span style="font-weight: bold">Bước 3:</span>So sánh bảng dưới
              đây để biết size giày của bạn nhé!
            </p>
            <table border="1" cellpadding="15" style="text-align: center">
              <tr style="background-color: #ccc; font-weight: 600">
                <td>SIZE</td>
                <td>Chiều dài bàn chân</td>
                <td>Vòng khớp ngón (Đo ở tư thế ngồi ghế)</td>
                <td>Vòng khớp ngón (Đo ở tư thế đứng thẳng 2 chân)</td>
              </tr>
              <tr>
                <td>34</td>
                <td>21.2</td>
                <td>20.45</td>
                <td>20.65</td>
              </tr>
              <tr>
                <td>35</td>
                <td>21.9</td>
                <td>20.95</td>
                <td>21.15</td>
              </tr>
              <tr>
                <td>36</td>
                <td>22.5</td>
                <td>21.4</td>
                <td>21.6</td>
              </tr>
              <tr>
                <td>37</td>
                <td>23.2</td>
                <td>21.9</td>
                <td>22.1</td>
              </tr>
              <tr>
                <td>38</td>
                <td>23.9</td>
                <td>22.4</td>
                <td>22.6</td>
              </tr>
              <tr>
                <td>39</td>
                <td>24.5</td>
                <td>22.85</td>
                <td>23</td>
              </tr>
              <tr>
                <td>40</td>
                <td>25.2</td>
                <td>23.45</td>
                <td>23.55</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sizeShoe {
  text-align: left;
}
.blog__icon-link .blog__icon-text-active::before {
  left: 56px;
}
</style>
