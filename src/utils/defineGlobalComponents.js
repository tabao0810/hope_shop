import { defineAsyncComponent } from "vue";

const registerGlobalComponent = (app) => {
  app.component(
    "image-skeleton",
    defineAsyncComponent(() =>
      import("@/components/loading/ImageSkeleton.vue")
    )
  );
};

export default registerGlobalComponent;
