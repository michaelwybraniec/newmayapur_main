<template>
  <UISliderSimple :images="content.data.attributes.Slider.data" />
  <UISectionParagraphWrapperTwo
    :section0="content.data.attributes.SectionWrapperTwo.Section0"
    :section1="content.data.attributes.SectionWrapperTwo.Section1"
    :bg-color="content.data.attributes.SectionWrapperTwo.BgColor"
  />
  <UIMiscTheMenu />
  <UIMisc8Gallery :images="content.data.attributes.Pictures.data" />
  <div class="pb-32 py-28 2xl:px-10 bg-base-200">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 px-4 lg:gap-x-10 2xl:px-20 items-start 2xl:gap-x-16"
    >
      <div class="order-2 lg:order-1 md:px-24 lg:px-0 mb-24 lg:mb-0">
        <img
          src="/img/le-gout-superieur.jpg"
          class="rounded-xl max-w-sm"
          alt=""
        />

        <h2 class="text-xl mt-12 uppercase font-bold">Recipe Books</h2>
        <p class="pt-3 text-lg">
          If you're after delicious vegetarian recipes, you've come to the right
          place! The <b>Hare Krishna</b> movement is famous for its authentic
          indian & continental cuisine worldwide. Shop our recipe books online.
        </p>
        <a href="https://www.vedalivres.com/">
          <button class="btn btn-outline btn-primary mt-5">Shop Now</button>
        </a>
      </div>
      <div class="order-2 lg:order-1 md:px-24 lg:px-0 mb-24 lg:mb-0">
        <img src="/img/gopal.jpg" class="rounded-xl max-w-sm" alt="" />
        <h2 class="text-xl mt-12 uppercase font-bold">Le Gopal</h2>
        <p class="pt-3 text-lg">
          <b>Le Gopal</b> is a restaurant ran by members of the New Mayapur
          congregation in the center of Tours, France. They host regular kirtan
          and mantra meditation events, along with serving an ever growing
          customer base.
        </p>
        <a href="https://legopal.fr/">
          <button class="btn btn-outline btn-primary mt-5">Learn More</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { find } = useStrapi();

const content = await find("catering-page", {
  populate: {
    Slider: {
      populate: "*",
    },
    SectionWrapperTwo: {
      populate: "*",
    },
    Menu: {
      populate: "*",
    },
    Pictures: {
      populate: "*",
    },
    ImgBtnColWrapper: {
      populate: "*",
    },
  },
});

const config = useRuntimeConfig();

useHead({
  title: "New Mayapur - Catering",
});
</script>
