<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-lg-12">
        <div class="blog__icon-link">
          <router-link to="/" class="blog__icon-text"
            ><i class="fa fa-home px-1"></i>home</router-link
          >
          <router-link
            to="/blognew"
            class="blog__icon-text blog__icon-text-detail"
            >news</router-link
          >
          <span class="blog__icon-text-active">blog detail</span>
        </div>
      </div>
    </div>
  </div>
  <div class="blog-content col-12">
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <div class="blog__router-detail">
            <img
              :src="blogDetail.image"
              alt=""
              class="h-100 w-100"
              loading="lazy"
              style="object-fit: cover"
              v-show="!isLoading"
            />
            <image-skeleton v-if="isLoading" />
          </div>
          <div class="blog-router-detail">
            <i class="fa fa-picture-o"></i>
            <div class="blog_details_list">
              <div class="blog_details-icon">
                <i class="fa fa-user px-1"></i>h&m
                <i class="fa fa-clock-o px-1 ml-1"></i>
                {{ formatDateDetail(blogDetail.createdAt) }}
              </div>
            </div>
            <div class="blog_info_details">
              <h2>
                <a class="blog_info_heading" href="">{{
                  blogDetail.description
                }}</a>
              </h2>

              <div class="blog_info_text-detail">
                {{ blogDetail.text }}
              </div>
            </div>
          </div>
          <hr />
          <div class="blog__detail-cmt-heading">
            <h2>
              <span>{{ blogDetail.comments.length }}</span> bình luận
            </h2>
          </div>

          <div v-for="(cmt, index) in getComments" :key="index">
            <div class="listComment mt-3">
              <div class="commentImg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbGozsS9QP10p16rZiCrQD0koXVkI4c7LwUHab9dkmFRcN0VqCkB37f2y0EnySItwykg&usqp=CAU"
                  alt=""
                  class="commentImg_image"
                />
              </div>
              <div class="commentContent">
                <div class="commentContent_list">
                  <p class="commentContent_name">{{ cmt.name }}</p>
                  <p class="commentContent_cnt">{{ cmt.content }}</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin clearfix">
            <paginate
              v-if="getPaginationCountComment > 1"
              :page-count="getPaginationCountComment"
              :page-range="2"
              :margin-pages="2"
              :click-handler="clickCallbackComment"
              :prev-text="'←'"
              :next-text="'→'"
              :container-class="'pagination'"
              :page-class="'page-item'"
              :page-link-class="'page-link'"
              :prev-class="'page-item'"
              :prev-link-class="'page-link'"
              :next-class="'page-item'"
              :next-link-class="'page-link'"
              :hide-prev-next="true"
            >
            </paginate>
          </div>
          <div class="blog__detail-cmt">
            <h5>Thêm bình luận</h5>
            <div class="row">
              <div class="col-lg-12">
                <input
                  type="text"
                  placeholder="Name"
                  class="blog__detail-text"
                  v-model="cmt.name"
                />
              </div>
              <div class="col-lg-12">
                <textarea
                  type="text"
                  placeholder="Message"
                  class="blog__detail-text blog__detail-text-2 mt-2"
                  rows="4"
                  cols="50"
                  v-model="cmt.content"
                />
              </div>
            </div>
            <div class="blog__detail-link">
              <a href="" @click.prevent="postComment()">Đăng</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="blog__right-sidebar">
            <h2 class="blog__right-title">newsletter</h2>
            <div>
              <input
                type="email"
                class="blog__right-email"
                placeholder="email@example.com"
              />
              <button class="blog__right-btn">Subscribe</button>
            </div>
          </div>
          <div class="add_r_sidebar">
            <p class="banner_block">
              <a>
                <img
                  class="sidebar-image"
                  src="https://file.hstatic.net/1000003969/file/5_4e8bbd11e68d4e08a72d2d9b4738f03b.jpg"
                  alt=""
                />
              </a>
            </p>
          </div>
          <div class="add_r_sidebar">
            <p class="banner_block">
              <a>
                <img
                  class="sidebar-image"
                  src="https://file.hstatic.net/1000003969/file/3_bdbb2eb57de648dabcdb98fb58fb360d.jpg"
                  alt=""
                />
              </a>
            </p>
          </div>
          <div class="add_r_sidebar">
            <div class="banner_block">
              <a>
                <img
                  class="sidebar-image"
                  src="https://file.hstatic.net/1000003969/file/1_bd94c2d5fef549f2ae4465bb6732fc0f.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="blog_banner_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="banner_home_inner">
            <div class="banner_home_effect">
              <a>
                <img
                  src="https://file.hstatic.net/200000355547/file/headline_juno_1_71eab1e1bf874661802a268e5d04c300.jpeg"
                  alt=""
                  class="banner_home_img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, reactive, ref, watch } from "vue";
export default {
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 3,
    };
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const cmt = reactive({
      id: Math.floor(Math.random() * 10000),
      name: "",
      content: "",
    });
    const isLoading = ref(true);
    const EndTimeLoading = () => {
      isLoading.value = false;
    };
    store.dispatch("blogs/getSingleBlogAction", {
      id: route.params.blogId,
      loading: EndTimeLoading,
    });
    watch(route, (to) => {
      if (to.params.blogId) {
        store.dispatch("blogs/getSingleBlogAction", {
          id: to.params.blogId,
          loading: EndTimeLoading,
        });
      }
    });
    const blogDetail = computed(() => store.state.blogs.blogDetail);
    const blogComments = computed(() => store.state.blogs.blogDetail.comments);
    const postComment = () => {
      const data = {
        id: cmt.id,
        name: cmt.name,
        content: cmt.content,
      };
      if (data.name.length > 0) {
        if (data.content.length > 0) {
          store.dispatch("blogs/addCommentAction", data);
          (cmt.name = ""), (cmt.content = "");
        } else {
          alert("Vui lòng nhập bình luận");
        }
      } else {
        alert("Vui lòng điền tên trước khi bình luận");
      }
    };
    return {
      blogDetail,
      blogComments,
      cmt: cmt,
      isLoading,
      postComment,
      EndTimeLoading,
    };
  },
  methods: {
    formatDateDetail(a) {
      const time = new Date(a);
      return time.toDateString().slice(3);
    },
    clickCallbackComment(pagenum) {
      this.currentPage = Number(pagenum);
      window.scrollTo({
        bottom: 100,
        left: 100,
        behavior: "smooth",
      });
    },
  },
  computed: {
    getComments() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.blogComments.slice(start, end);
    },
    getPaginationCountComment() {
      return Math.ceil(this.blogComments.length / this.perPage);
    },
  },
  components: {
    Paginate,
  },
  // created() {
  //   console.log(this.blogDetail);
  //   this.blogDetail.map((item) => {
  //     this.items.push(item);
  //   });
  // },
};
</script>

<style>
.blog__router-detail {
  width: 100%;
  height: 480px;
}
.blog__icon-text-detail::before {
  content: "";
  position: absolute;
  height: 10px;
  top: 32px;
  border-left: 1px solid #ff343b;
  left: 96px;
}
.blog_info_text-detail {
  text-align: left;
  margin: 15px 0px 25px 0px;
  line-height: 1.6;
  width: 100%;
  text-align: justify;
  white-space: pre-line;
}
.blog__detail-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blog__detail-btn > a {
  color: #222;
}
.blog__detail-btn > a:hover {
  color: #ff343b;
  transition: all linear 0.3s;
}
.blog__detail-cmt-heading {
  text-align: left;
}
.blog__detail-cmt > h5 {
  font-size: 20px;
  border-top: 4px solid #464646;
  border-bottom: 1px solid #464646;
  padding: 10px 0px;
  margin-bottom: 30px;
  margin-top: 50px;
  text-align: left;
}
.blog__detail-text {
  border: 1px solid #ececec;
  height: 40px;
  line-height: 40px;
  margin-bottom: 11px;
  padding: 0 15px;
  width: 100%;
  outline: none;
}
.blog__detail-text-2 {
  height: 80px;
}
.blog__detail-text:focus {
  background-color: beige;
}
.blog__detail-link {
  text-align: left;
  padding: 20px 0 30px;
}
.blog__detail-link > a {
  background: #ff343b;
  color: #fff;
  font-weight: bold;
  height: 43px;
  margin-bottom: 0;
  margin-top: 8px;
  transition: all 0.3s ease 0s;
  width: 120px;
  border: 0;
  padding: 10px;
  border-radius: 4px;
}
.blog__detail-link > a:hover {
  background: #222;
  text-decoration: none;
  color: #fff;
}
</style>
<style scoped>
.blog__detail-btn > a > .fa {
  color: #ff343b;
}
.listComment {
  display: flex;
  align-items: center;
}
.commentImg {
  min-width: 45px;
  height: 45px;
}
.commentImg_image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.commentContent {
  margin-left: 10px;
  background-color: #e9e9e9;
  border-radius: 16px;
  flex-grow: inherit;
}
.commentContent_list > p {
  margin: 0;
  line-height: 18px;
  text-align: left;
}
.commentContent_list > p:first-child {
  text-transform: capitalize;
  font-weight: 550;
}
.commentContent_list > p:last-child {
  width: 100%;
  word-break: break-word;
  margin-top: 4px;
}
.commentContent_list {
  padding: 4px 20px;
}
</style>
<style scoped>
.pagination {
  margin: -5px 0;
}
</style>
