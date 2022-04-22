<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-lg-12">
        <div class="blog__icon-link">
          <router-link to="/thehome" class="blog__icon-text"
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
          <img :src="blogDetail.image" alt="" class="blog__router-detail" />
          <div class="blog-router-detail">
            <i class="fa fa-picture-o"></i>
            <div class="blog_details_list">
              <div class="blog_details-icon">
                <i class="fa fa-folder-open-o"></i>
                <a href=""><span class="mr-1">blog</span></a
                >, <a href=""><span class="mr-1">mohin</span></a
                >, <a href=""><span class="mr-1">nirob</span></a
                >,
                <a href=""><span>salim</span></a>
                <i class="fa fa-user px-1 ml-2"></i>Boot Experts
                <i class="fa fa-clock-o px-1 ml-1"></i>
                {{ formatDateDetail(blogDetail.createdAt) }}
              </div>
            </div>
            <div class="blog_info_details">
              <h2>
                <a
                  class="blog_info_heading"
                  href="/blogs/news/127241219-praesent-ornare-tortor"
                  >{{ blogDetail.description }}</a
                >
              </h2>

              <p class="blog_info_text-detail">
                {{ blogDetail.text }}
              </p>
            </div>
          </div>
          <hr />
          <div class="blog__detail-cmt-heading">
            <h2>
              <span>{{ blogDetail.comments.length }}</span> comments
            </h2>
          </div>
          <hr />
          <div v-for="(cmt, index) in blogDetail.comments" :key="index">
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
          <div class="blog__detail-cmt">
            <h5>Add comment</h5>
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
              <a href="" @click.prevent="postComment(cmt)">Post comment</a>
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
          <div class="latest-posts">
            <div class="blog__right-sidebar-2">
              <h2 class="blog__right-title-2">recent posts</h2>
            </div>

            <div class="single-l-post">
              <p class="grid-item">
                <a href="/blogs/news/127241219-praesent-ornare-tortor" title=""
                  ><img
                    src="//cdn.shopify.com/s/files/1/1309/3901/articles/blog-5_50x50.jpg?v=1464181744"
                    alt="Praesent ornare tortor"
                    class="article__image"
                /></a>
              </p>

              <div class="post-sidebar-info">
                <h6>
                  <a href="/blogs/news/127241219-praesent-ornare-tortor"
                    >Praesent ornare tortor</a
                  >
                </h6>
                <span>
                  <i class="fa fa-user"></i> <span>Boot Experts</span>
                </span>
                <span> <i class="fa fa-clock-o"></i> 2016-05-25 </span>
              </div>
            </div>

            <div class="single-l-post">
              <p class="grid-item">
                <a href="/blogs/news/127241155-praesent-ornare-tortor" title=""
                  ><img
                    src="//cdn.shopify.com/s/files/1/1309/3901/articles/blog-4_50x50.jpg?v=1464181673"
                    alt="Praesent ornare tortor"
                    class="article__image"
                /></a>
              </p>

              <div class="post-sidebar-info">
                <h6>
                  <a href="/blogs/news/127241155-praesent-ornare-tortor"
                    >Praesent ornare tortor</a
                  >
                </h6>
                <span>
                  <i class="fa fa-user"></i> <span>Boot Experts</span>
                </span>
                <span> <i class="fa fa-clock-o"></i> 2016-05-25 </span>
              </div>
            </div>

            <div class="single-l-post">
              <p class="grid-item">
                <a href="/blogs/news/127240899-william-eto" title=""
                  ><img
                    src="//cdn.shopify.com/s/files/1/1309/3901/articles/blog-3_50x50.jpg?v=1464181623"
                    alt="william eto"
                    class="article__image"
                /></a>
              </p>

              <div class="post-sidebar-info">
                <h6>
                  <a href="/blogs/news/127240899-william-eto">william eto</a>
                </h6>
                <span>
                  <i class="fa fa-user"></i> <span>Boot Experts</span>
                </span>
                <span> <i class="fa fa-clock-o"></i> 2016-05-25 </span>
              </div>
            </div>

            <div class="single-l-post">
              <p class="grid-item">
                <a href="/blogs/news/127240579-praesent-ornare-tortor" title=""
                  ><img
                    src="//cdn.shopify.com/s/files/1/1309/3901/articles/blog-2_50x50.jpg?v=1464181554"
                    alt="Praesent ornare tortor"
                    class="article__image"
                /></a>
              </p>

              <div class="post-sidebar-info">
                <h6>
                  <a href="/blogs/news/127240579-praesent-ornare-tortor"
                    >Praesent ornare tortor</a
                  >
                </h6>
                <span>
                  <i class="fa fa-user"></i> <span>Boot Experts</span>
                </span>
                <span> <i class="fa fa-clock-o"></i> 2016-05-25 </span>
              </div>
            </div>
          </div>
          <div class="blog_tags">
            <h2 class="blog__right-title-3">all tags</h2>
            <div class="block-content">
              <ul class="tags-list">
                <li>
                  <a
                    href="/blogs/news/tagged/blog"
                    title="Show articles tagged blog"
                    >blog</a
                  >
                </li>

                <li>
                  <a
                    href="/blogs/news/tagged/mohin"
                    title="Show articles tagged mohin"
                    >mohin</a
                  >
                </li>

                <li>
                  <a
                    href="/blogs/news/tagged/nirob"
                    title="Show articles tagged nirob"
                    >nirob</a
                  >
                </li>

                <li>
                  <a
                    href="/blogs/news/tagged/salim"
                    title="Show articles tagged salim"
                    >salim</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="add_r_sidebar">
            <p class="banner_block">
              <a href="">
                <img
                  src="//cdn.shopify.com/s/files/1/1309/3901/t/2/assets/3_002.jpg?v=14417891289564973374"
                  alt=""
                />
              </a>
            </p>
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
              <a href="">
                <img
                  src="//cdn.shopify.com/s/files/1/1309/3901/t/2/assets/2.jpg?v=3670722495055676451"
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
import { useRoute } from "vue-router";
import { createNamespacedHelpers, useStore } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("blogs");
export default {
  data() {
    return {
      cmt: {
        name: "",
        content: "",
      },
    };
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    store.dispatch("blogs/getSingleBlogAction", route.params.blogId);
  },
  methods: {
    ...mapActions({
      postComment: "addCommentAction",
    }),
    formatDateDetail(a) {
      const time = new Date(a);
      return time.toDateString().slice(3);
    },
  },
  computed: {
    ...mapState({
      blogDetail: (state) => state.blogDetail,
    }),
  },
};
</script>

<style>
.blog__router-detail {
  width: 100%;
  height: auto;
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
