<template>
  <div class="blog-item">
    <div class="blogContent">
      <div class="card text-left">
        <img
          class="card-img-top blog-img"
          :src="blogList.image"
          alt=""
          @click="handleBlogDetail(blogList._id)"
        />
      </div>
      <div class="cardBody m-3">
        <h5
          class="card-title cart-to-detail"
          @click="handleBlogDetail(blogList._id)"
        >
          {{ blogList.description }}
        </h5>
        <p
          class="card-text content-text"
          @click="handleBlogDetail(blogList._id)"
        >
          {{ blogList.text }}
        </p>
        <p class="blogText">
          {{ formatDateBlog(blogList.createdAt) }}
          <a
            class="text-cmt"
            href=""
            @click.prevent="handleBlogDetail(blogList._id)"
            ><i class="fa fa-comments mr-1 ml-2"></i
            ><span class="mr-1">{{ blogList.comments.length }}</span
            >COMMENTS</a
          >
        </p>
      </div>
    </div>
    <a @click.prevent="handleBlogDetail(blogList._id)">
      <div class="link-blog">
        <i class="fa fa-angle-right link-icon"></i>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    blogList: {
      type: Object,
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
    formatDateBlog(a) {
      const time = new Date(a);
      return time.toDateString().slice(3);
    },
  },
};
</script>

<style scoped>
.card-text {
  height: 72px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.blog-item {
  position: relative;
}
.blogContent {
  border: 1px solid #ccc;
  border-radius: 2px;
  text-align: left;
  overflow: hidden;
}
.card {
  overflow: hidden;
  border: none;
}
.text-cmt {
  color: black;
  text-decoration: none;
  font-weight: bolder;
}
.text-cmt:hover {
  color: red;
}
.blog-img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s linear;
  transition: 0.3s linear;
  object-fit: fill;
}
/* .blogContent .card:hover .blog-img{
    -webkit-transform: scale(1.3);
	transform: scale(1.3);
    cursor: pointer;
} */

.blogContent:hover .blog-img {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  cursor: pointer;
}
.link-blog {
  position: relative;
  bottom: 0;
  right: 0;
  display: none;
  border-right: 40px solid #ccc;
  border-top: 40px solid transparent;
  z-index: 2;
  position: absolute;
}
.blog-item:hover .link-blog {
  -webkit-transition: 0.3s linear;
  transition: 0.3s linear;
  display: block;
  animation: ani 0.7s;
  cursor: pointer;
}
.link-blog:hover {
  border-right: 40px solid red;
  border-top: 40px solid transparent;
}
.link-icon {
  position: absolute;
  bottom: 5px;
  right: -30px;
  color: white;
}
@keyframes ani {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
.cart-to-detail {
  color: #222;
  display: block;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1.6;
  cursor: pointer;
  max-height: 20px;
  overflow: hidden;
  -webkit-line-clamp: 1; /* số dòng hiển thị */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
.cart-to-detail:hover {
  color: #ff343b;
  transition: all linear 0.3s;
}
.content-text {
  cursor: pointer;
}
.formatDateBlog {
}
</style>
