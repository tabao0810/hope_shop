<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-lg-12">
        <div class="blog__icon-link">
          <router-link to="/thehome" class="blog__icon-text"
            ><i class="fa fa-home px-1"></i>home</router-link
          >
          <span class="blog__icon-text-active">news</span>
        </div>
      </div>
    </div>
  </div>
  <div class="blog-content">
    <div class="container">
      <div class="row">
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
            <div class="banner_block">
              <a>
                <img
                  class="sidebar-image"
                  src="https://file.hstatic.net/1000003969/file/5_4e8bbd11e68d4e08a72d2d9b4738f03b.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div class="add_r_sidebar">
            <div class="banner_block">
              <a>
                <img
                  class="sidebar-image"
                  src="https://file.hstatic.net/1000003969/file/3_bdbb2eb57de648dabcdb98fb58fb360d.jpg"
                  alt=""
                />
              </a>
            </div>
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
        <div class="col-lg-9">
          <div v-for="blog in getItems" :key="blog._id" class="single-blog">
            <div class="">
              <a href="" @click.prevent="handleBlogDetail(blog._id)">
                <img :src="blog.image" class="blog_router-img" alt="" />
              </a>
            </div>
            <div class="blog-router-detail">
              <i class="fa fa-video-camera"></i>
              <div class="blog_details_list">
                <div class="blog_details-icon">
                  <i class="fa fa-user px-1"></i>h&m
                  <i class="fa fa-clock-o px-1 ml-1"></i>
                  {{ formatBlogRouterDate(blog.createdAt) }}
                </div>
              </div>
              <div class="blog_info_details">
                <h2>
                  <a
                    class="blog_info_heading"
                    href=""
                    @click="handleBlogDetail(blog._id)"
                    >{{ blog.description }}</a
                  >
                </h2>

                <p class="blog_info_text">
                  {{ blog.text }}
                </p>

                <div class="blog-router-btn">
                  <a
                    class="readmore_link"
                    @click.prevent="handleBlogDetail(blog._id)"
                    href=""
                    title="Images"
                    >Đọc thêm</a
                  >

                  <a class="comments_link" href="">
                    <span>{{ blog.comments.length }}</span> bình luận
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
              v-if="getPaginationCount > 1"
              :page-count="getPaginationCount"
              :page-range="2"
              :margin-pages="2"
              :click-handler="clickCallback"
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
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="blog_banner_area">
          <img
            src="https://file.hstatic.net/200000355547/file/headline_juno_1_71eab1e1bf874661802a268e5d04c300.jpeg"
            alt=""
            class="banner_home_img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    store.dispatch("blogs/getAllBlogAction");
    const blogList = computed(() => store.state.blogs.blogList);
    return { blogList };
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 3,
    };
  },
  components: {
    Paginate,
  },
  computed: {
    getItems() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.blogList.slice(start, end);
    },
    getPaginationCount() {
      return Math.ceil(this.blogList.length / this.perPage);
    },
  },
  methods: {
    handleBlogDetail(a) {
      this.$router.push(`/blog-detail/${a}`);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
    clickCallback(pagenum) {
      this.currentPage = Number(pagenum);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
    formatBlogRouterDate(a) {
      const time = new Date(a);
      return time.toDateString().slice(3);
    },
  },
  created() {
    this.blogList.map((item) => {
      this.items.push(item);
    });
  },
};
</script>

<style>
:root {
  --blog-width: 90%;
}
.blog__icon-link {
  text-transform: uppercase;
  text-align: left;
  position: relative;
  padding: 30px 0 5px;
  font-size: 10px;
}
.blog__icon-link::before {
  content: "";
  position: absolute;
  height: 10px;
  border-bottom: 0.5px solid #ccc;
  top: 38px;
  width: 100%;
}
.blog__icon-text {
  margin-right: 14px;
  cursor: pointer;
  color: black;
  text-decoration: none;
}
.blog__icon-text:hover {
  color: #ff343b;
  text-decoration: none;
}
.blog__icon-text-active {
  color: #ff343b;
}
.blog__icon-text-active::before {
  content: "";
  position: absolute;
  height: 10px;
  top: 32px;
  border-left: 1px solid #ff343b;
  left: 54px;
}
.blog-content {
  margin-top: 30px;
}
.blog__right-title {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.blog__right-title::after {
  content: "";
  position: absolute;
  border-bottom: 0.5px solid #ccc;
  left: 15px;
  top: 30px;
  width: var(--blog-width);
}
.blog__right-title::before {
  content: "";
  position: absolute;
  border-bottom: 3px solid #ccc;
  left: 15px;
  top: 28px;
  width: 15%;
}
.blog__right-title-2 {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin: 45px 0 20px;
  padding: 0 0 15px;
}
.blog__right-title-2::after {
  content: "";
  position: absolute;
  border-bottom: 0.5px solid #ccc;
  left: 15px;
  top: 230px;
  width: var(--blog-width);
}
.blog__right-title-2::before {
  content: "";
  position: absolute;
  border-bottom: 3px solid #ccc;
  left: 15px;
  top: 228px;
  width: 15%;
}
.blog__right-title-3 {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  padding: 0 0 15px;
  margin: 40px 0 15px;
}
.blog__right-title-3::after {
  content: "";
  position: absolute;
  border-bottom: 0.5px solid #ccc;
  left: 15px;
  top: 590px;
  width: var(--blog-width);
}
.blog__right-title-3::before {
  content: "";
  position: absolute;
  border-bottom: 3px solid #ccc;
  left: 15px;
  top: 588px;
  width: 15%;
}
.blog_router-img {
  width: fill;
}
.single-blog:hover .blog_router-img {
  filter: brightness(80%);
}
.blog-router-detail {
  margin: 20px 0 40px 0;
}
.blog_details-icon {
  display: flex;
  text-transform: uppercase;
  align-items: center;
  flex-wrap: wrap;
}
.blog_details-icon span {
  color: #ff343b;
  text-decoration: none;
  margin-left: 4px;
}
.blog_details-icon a:hover {
  text-decoration: none;
}
.blog-router-detail > i {
  float: left;
  background: #ff343b;
  padding: 10px;
  color: #fff;
  font-size: 30px;
  border-radius: 3px;
  margin-right: 15px;
}
.blog_info_details > h2 {
  text-align: left;
  font-size: 27px;

  margin: 0;
}
.blog_info_details > h2 > a {
  color: #222;
  transition: all linear 0.3s;
}
.blog_info_details > h2 > a:hover {
  text-decoration: none;
  color: #ff343b;
}
.blog_info_text {
  margin: 15px 0px 25px 0px;
  text-align: left;
  line-height: 1.6;
  height: 72px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-indent: 50px;
  text-align: justify;
}
.blog-router-btn {
  display: flex;
}
.readmore_link,
.comments_link {
  border: 1px solid #a5a9ac;
  border-radius: 3px;
  padding: 10px;
  color: #444;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s linear;
  margin: 0 4px;
  font-weight: 600;
}
.readmore_link:hover,
.comments_link:hover {
  background: #ff343b;
  border: 1px solid #ff343b;
  color: #fff;
  text-decoration: none;
}
.blog__right-email {
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
}
.blog__right-btn {
  /* float: left; */
  display: flex;
  justify-content: left;
  align-items: flex-start;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0 0;
  background: #555;
  border: 0px;
  font-size: 15px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  transition: all linear 0.2s;
  /* clear: both; */
}
.blog__right-btn:hover {
  background: #ff343b;
}
.single-l-post {
  border-bottom: 1px solid #e8e8e8;
  overflow: hidden;
  padding: 9px 0;
}
.single-l-post .grid-item {
  float: left;
  padding-right: 10px;
  width: 30%;
}
.single-l-post .post-sidebar-info {
  float: right;
  width: 70%;
}
.post-sidebar-info h6 {
  margin: 0 0 5px;
  font-size: 12px;
}
.post-sidebar-info h6 a {
  color: #444;
  font-size: 14px;
  transition: all linear 0.3s;
}
.post-sidebar-info h6 a:hover {
  color: #ff343b;
  text-decoration: none;
}
.single-l-post .post-sidebar-info > span {
  color: #666;
  font-size: 11px;
  margin: 0 2px;
}
.tags-list {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
}
.tags-list > li {
  padding: 12px 2px;
}
.tags-list > li a {
  padding: 10px 10px;
  text-decoration: none;
  background: #e5e5e5;
  color: #666;
  text-transform: uppercase;
  margin-bottom: 5px;
  border: 2px solid #e5e5e5;
  transition: all linear 0.3s;
}
.tags-list > li:hover a {
  border: 2px solid #ff343b;
  color: #ff343b;
  background: #fff;
}
.add_r_sidebar {
  margin-top: 25px;
}
.sidebar-image {
  position: relative;
  top: 0;
  left: 0;
  cursor: default;
}
.add_r_sidebar:hover .sidebar-image {
  top: -10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all linear 0.3s;
}

.pagination {
  display: inline-block;
  float: right;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
  text-align: center;
}
.pagination span {
  cursor: pointer;
  display: inline-block;
  border: 1px solid #eeeeee;
  border-color: #ddd;
  color: #666;
  padding: 6px 12px !important;
  margin: 0 2px;
  transition: all linear 0.3s;
}
.pagination span.current {
  background: #ff343b;
  border: 1px solid #ff343b;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  color: #fff;
}
.pagination span a {
  color: #333;
  padding: 0;
}
.pagination span:hover {
  background: #ff343b;
  border: 1px solid #ff343b;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  color: #fff;
}
.pagination span:hover a {
  text-decoration: none;
  color: #fff;
}
.blog_banner_area {
  margin-top: 10px;
  margin-bottom: 40px;
  width: 100%;
}
.banner_home_img {
  width: 100%;
  object-fit: fill;
  cursor: default;
}

.latest-posts {
  text-align: left;
  overflow: hidden;
}
@media (max-width: 991.98px) {
  .add_r_sidebar,
  .blog__right-sidebar {
    display: none;
  }
  .blog_tags {
    margin-bottom: 24px;
  }
  .grid-item {
    margin: 0;
    padding: 0;
  }
  .article__image {
    width: 80%;
  }
  :root {
    --blog-width: 95%;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .article__image {
    width: 35%;
  }
}
</style>
<style scoped>
@media (max-width: 991.98px) {
  .container {
    width: 100%;
    padding-right: 40px;
    padding-left: 40px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
