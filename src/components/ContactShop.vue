<template>
  <section class="container col-12">
    <div class="row">
      <div class="col-sm-4 mt-2">
        <div class="contact contact-box">
          <p class="card-title">
            <i class="fa fa-envelope mr-1"></i>huongtran16720@gmail.com
          </p>
        </div>
      </div>
      <div class="col-sm-4 mt-2">
        <div class="contact contact-box">
          <p class="card-title"><i class="fa fa-phone mr-2"></i>038.6758.635</p>
        </div>
      </div>
      <div class="col-sm-4 mt-2">
        <div class="contact contact-box">
          <div class="card-title card-contact">
            <span class="card-title-text">Liên hệ: </span>
            <div class="tool-tip">
              <i class="fa fa-facebook-f px-1 contact-icon"></i>
              <span class="tooltip-text">Like 6k</span>
            </div>
            <div class="tool-tip">
              <i class="fa fa-twitter px-1 contact-icon"></i>
              <span class="tooltip-text">Followers 120k</span>
            </div>
            <div class="tool-tip">
              <i class="fa fa-linkedin px-1 contact-icon"></i>
              <span class="tooltip-text">Followers 16k</span>
            </div>
            <div class="tool-tip">
              <i class="fa fa-pinterest px-1 contact-icon"></i>
              <span class="tooltip-text">Followers 500k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.contact:hover {
  background-color: black;
  color: white;
  transition: all linear 0.3s;
}
.contact-box {
  border: 3.5px solid black;
  border-radius: 2px;
}
.card-contact {
  display: flex;
  justify-content: center;
}
.tool-tip {
  position: relative;
  cursor: pointer;
}
.tooltip-text {
  display: inline-block;
  position: absolute;
  visibility: hidden;
  font-size: 10px;
  bottom: 100%;
  left: 0;
  background-color: #ff343b;
  min-width: 50px;
  border-radius: 2px;
  padding: 4px 8px;
}
.tooltip-text::after {
  content: " ";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 20%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #ff343b transparent transparent transparent;
}
.tool-tip:hover .tooltip-text {
  visibility: visible;
}
</style>
<style scoped>
.card:hover .card-title {
  color: white;
}
.card-title p {
  color: black;
}
.card-title {
  margin: 0;
  padding: 20px;
  font-weight: 600;
  font-size: 20px;
}
@media (max-width: 767.98px) {
  .contact-icon::before {
    padding: 0 10px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .card-title {
    font-size: 16px;
    padding: 20px 10px;
  }
  .contact-icon::before {
    padding: 0 5px;
  }
}
@media (max-width: 991.98px) {
  .card-title-text {
    display: none;
  }
}
</style>
