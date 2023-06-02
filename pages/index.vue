<template>
  <div class="hero min-h-screen" style="background-image: url(/img/forest.jpg)">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-lg">
        <h1 class="mb-5 text-5xl font-bold">New Mayapur</h1>
        <p class="mb-5 md:text-lg">
          <b>Discover</b> beauty and serenity. <br />
          <b>Learn</b> ancient spiritual knowledge.
          <br />
          <b>Grow</b> on your inner journey.
        </p>
      </div>
    </div>
  </div>
  <div
    class="grid lg:grid-cols-2 py-24 2xl:py-4 px-4 2xl:px-20 items-center justify-center gap-12"
  >
    <div class="carousel rounded-2xl max-w-[470px] max-h-[800px] mx-auto">
      <div id="slide1" class="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=788&q=80"
          class="w-full"
        />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=788&q=80"
          class="w-full"
        />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    <UISectionGridWrapper>
      <UISectionGridItem
        v-for="slide in content.data.attributes.Hero"
        :title="slide.Title"
        :description="slide.Description"
      />
    </UISectionGridWrapper>
  </div>
  <UISectionParagraphWrapperThree
    :section0="content.data.attributes.SectionWrapperThird.Section0"
    :section1="content.data.attributes.SectionWrapperThird.Section1"
    :section2="content.data.attributes.SectionWrapperThird.Section2"
    :bg-color="content.data.attributes.SectionWrapperThird.BgColor"
  />
  <div
    class="pb-32 pt-32 lg:px-4 2xl:px-28 grid grid-cols-1 mx-4 lg:mx-0 lg:grid-cols-2 gap-6 2xl:gap-24"
  >
    <UIMiscUpcomingEvents v-if="content.data.attributes.ShowUpcomingEvents" />
    <UIMiscGallery v-if="content.data.attributes.ShowShopGallery" />
  </div>
  <!-- <UISectionFullScreen
    v-if="'FullScreenSection' in content.data.attributes"
    :title="content.data.attributes.FullScreenSection.Title"
    :description="content.data.attributes.FullScreenSection.Description"
    :image="
      config.public.strapiBase +
      content.data.attributes.FullScreenSection.Image.data.attributes.formats
        .medium.url
    "
    :buttonText="content.data.attributes.FullScreenSection.ButtonText"
    :buttonLink="content.data.attributes.FullScreenSection.ButtonLink"
    :bgColor="content.data.attributes.FullScreenSection.BgColor"
  /> -->
  <UIMiscBlogPreview
    :title="content.data.attributes.BlogPreview.Title"
    :ionIcon="content.data.attributes.BlogPreview.IonIcon"
    :description="content.data.attributes.BlogPreview.Description"
    :showArticles="content.data.attributes.BlogPreview.ShowArticles"
  />
  <UIMiscNewsletterForm v-if="content.data.attributes.ShowNewsletterForm" />
</template>

<script setup>
const { find } = useStrapi();

const content = await find("Homepage", {
  populate: {
    Hero: {
      populate: "*",
    },
    SectionWrapperThird: {
      populate: "*",
    },
    FullScreenSection: {
      populate: "*",
    },
    BlogPreview: {
      populate: "*",
    },
  },
});

const config = useRuntimeConfig();
</script>
