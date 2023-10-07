<template>
  <div class="404-hastech-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="hastech-404-area-list">
            <div class="hastech-404-content">
              <h2>
                4
                <i class="fa fa-life-ring"></i>
                4!
              </h2>
            </div>
            <div class="error-heading">
              <h2>This page is not available</h2>
              <h3>
                We're sorry, but the Web address you've entered is no longer
                available.
              </h3>
            </div>
            <div class="error-form">
              <p>To find a product, please type its name in the field below.</p>

              <form
                class="error-ser-form"
                style="position: relative"
                @submit.prevent="handleClickSearch(searchName)"
              >
                <div class="error-form-group form-group">
                  <span>Search our product catalog :</span>
                  <input
                    type="text"
                    class="form-control input-feild"
                    v-model="searchName"
                  />
                  <input
                    type="submit"
                    class="error-search"
                    name="errorsearch"
                    value="search"
                  />
                </div>
                <ul
                  class="search-results home-two"
                  style="
                    position: absolute;
                    left: -1px;
                    top: 53.1px;
                    display: none;
                  "
                ></ul>
              </form>
            </div>
            <div class="error-back-home">
              <a href="/" class="add-tag-btn"
                ><i class="fa fa-chevron-left"></i> Home Page</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const searchName = ref("");
    const handleClickSearch = () => {
      const data = searchName.value;
      router.push(`/search/s=${data}`);
    };
    return {
      searchName,
      handleClickSearch,
    };
  },
};
</script>

<style>
.hastech-404-area-list {
  text-align: center;
  padding: 50px 0 30px;
}
.hastech-404-content h2 {
  font-size: 150px;
  font-weight: 600;
  letter-spacing: -20px;
}
.hastech-404-content i {
  color: #ff343b;
}
.error-heading h2 {
  color: #333;
  font-size: 28px;
  font-weight: normal;
  line-height: 34px;
  margin-bottom: 10px;
  margin-top: 18px;
  text-transform: uppercase;
}
.error-heading h3 {
  border-bottom: 1px solid #eee;
  color: #555454;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  margin-bottom: 20px;
  padding-bottom: 19px;
  text-transform: uppercase;
}
.error-form p {
  font-size: 16px;
  margin: 0 0 18px;
}
form.error-ser-form {
  overflow: hidden;
}
form.error-ser-form .error-form-group {
  margin: 15px 0;
}
form.error-ser-form span {
  display: inline-block;
  font-size: 16px;
  line-height: 30px;
  margin-right: 5px;
}
form.error-ser-form .input-feild {
  display: inline;
  margin-bottom: 20px;
  min-height: 40px;
  width: 30%;
  border: 1px solid #ddd;
}

form.error-ser-form .error-search {
  background-color: #ff343b;
  border: medium none;
  color: #fff;
  display: inline;
  font-size: 16px;
  line-height: 21px;
  margin-left: 10px;
  padding: 8.5px 15px 10px;
  border-radius: 4px;
}
a.add-tag-btn {
  background-color: #f65656;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  padding: 9px 25px 6px;
  text-transform: uppercase;
  margin-left: 16px;
  text-decoration: none;
}
form.error-ser-form .error-search:hover {
  background-color: #333;
  cursor: pointer;
}
a.add-tag-btn:hover {
  background-color: #333;
  transition: all linear 0.3s;
}

@media (max-width: 767.98px) {
  .hastech-404-content h2 {
    font-size: 100px;
    font-weight: 600;
    letter-spacing: -10px;
  }
  .error-heading h2 {
    font-size: 18px;
  }
  .error-heading h3 {
    font-size: 14px;
  }
  .error-form-group {
    display: block;
  }
  .error-form-group > span {
    width: 100%;
  }
}
</style>
