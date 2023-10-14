<template>
  <div class="blog-item">
    <router-link :to="`/blog-detail/${blogList._id}`">
      <div class="blog-img">
        <img :src="blogList.image" :alt="blogList.description" />
      </div>
      <div class="m-2">
        <h5 class="cart-to-detail">
          {{ blogList.description }}
        </h5>
        <p class="card-text">
          {{ blogList.text }}
        </p>
        <p style="display: flex; justify-content: space-between">
          {{ formatDateBlog(blogList.createdAt) }}
          <router-link class="text-cmt" :to="`/blog-detail/${blogList._id}`"
            ><i class="fa fa-comments mr-1 ml-2"></i
            ><span class="mr-1">{{ blogList.comments.length }}</span
            >COMMENTS</router-link
          >
        </p>
      </div>
    </router-link>
    <router-link :to="`/blog-detail/${blogList._id}`">
      <div class="link-blog">
        <i class="fa fa-angle-right link-icon"></i>
      </div>
    </router-link>
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
    formatDateBlog(a) {
      const time = new Date(a);
      return time.toLocaleDateString();
    },
  },
};
</script>
<style lang="scss" scoped>
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
.blog-item {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  a {
    text-align: left;
    text-decoration: none;
    color: #222;
  }
  .blog-img {
    display: block;
    position: relative;
    height: 100%;
    overflow: hidden;
    height: 160px;
    img {
      position: absolute;
      transition: 0.3s linear;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  &:hover {
    .blog-img {
      img {
        transform: scale(1.2);
      }
    }
    .cart-to-detail {
      color: #ff343b;
      transition: all linear 0.3s;
    }
    .link-blog {
      -webkit-transition: 0.3s linear;
      transition: 0.3s linear;
      display: block;
      animation: ani 0.7s;
      cursor: pointer;
    }
  }
}
.cart-to-detail {
  color: #222;
  display: block;
  font-size: 15px;
  margin-top: 12px;
  margin-bottom: 6px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1.6;
  max-height: 20px;
  overflow: hidden;
  -webkit-line-clamp: 1; /* số dòng hiển thị */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
.card-text {
  height: 72px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.text-cmt {
  color: black;
  text-decoration: none;
  font-weight: bolder;
  transition: all linear 0.2s;
  &:hover {
    color: red;
  }
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
  &:hover {
    border-right: 40px solid red;
    border-top: 40px solid transparent;
  }
}
.link-icon {
  position: absolute;
  bottom: 5px;
  right: -30px;
  color: white;
}
</style>
