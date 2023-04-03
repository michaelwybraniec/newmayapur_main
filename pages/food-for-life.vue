<template>
  <div class="max-md:px-4">
    <div class="carousel max-w-[800px] mx-auto rounded-xl mt-20 mb-28">
      <div id="slide1" class="carousel-item relative w-full">
        <img src="https://picsum.photos/1920/1080" class="w-full" />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img src="https://picsum.photos/1920/1080" class="w-full" />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img src="https://picsum.photos/1920/1080" class="w-full" />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img src="https://picsum.photos/1920/1080" class="w-full" />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-base-200 py-28 lg:px-16">
    <div
      class="grid grid-rows-1 lg:grid-cols-2 px-4 lg:px-20 items-center gap-x-4"
    >
      <div class="order-2 lg:order-1 md:px-24 lg:px-0">
        <h2 class="text-xl uppercase font-bold">What is Food for Life?</h2>
        <p class="pt-3 text-lg">
          Food for Life is an international ISKCON initiative for providing food
          to those who need it the most. We are locally distributing
          <i>prasadam</i> free of charge in the nearby cities of Châteauroux and
          Tours weekly. We strongly believe this is a needed service, as
          currently there are in France around 5 to 7 million people who rely,
          at least partially, on food banks to get their daily meals.
        </p>
      </div>
      <img
        class="order-1 lg:max-w-lg max-w-xs md:max-w-md lg:order-2 mb-12 lg:mb-0 md:mb-24 lg:ml-auto lg:mr-0 mx-auto rounded-lg"
        src="/img/ffl.jpg"
      />
    </div>
  </div>
  <div class="py-24 px-4 lg:px-44 grid md:grid-cols-2 gap-24 items-center">
    <div>
      <img
        src="/img/prabhupada.jpg"
        class="h-44 mx-auto mb-8 rounded-full border-4"
      />
      <blockquote class="rounded-lg">
        <p class="text-lg italic">
          Nobody should go hungry within a ten miles radius of an ISKCON temple.
        </p>
      </blockquote>
      <p class="text-right mt-6">
        — Sri Srila A.C. Bhaktivedanta Swami Prabhupada
      </p>
    </div>
    <div class="order-2 lg:order-1 md:px-24 lg:px-0">
      <div>
        <div>
          <div
            class="p-5 px-1 pb-6 mx-auto inline border-2 border-base-300 bg-base-100 rounded-xl"
          >
            <Icon name="ion:globe-outline" class="m-5" size="28px" />
          </div>
          <h2 class="text-xl uppercase mt-4 font-bold">Official Website</h2>
          <p class="pt-3 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            porro reprehenderit rerum iste similique voluptates commodi
            distinctio neque, harum quos.
          </p>
          <button class="btn-primary btn mt-4">Learn More</button>
        </div>
        <div class="mt-12">
          <div
            class="p-5 px-1 pb-6 mx-auto inline border-2 border-base-300 bg-base-100 rounded-xl"
          >
            <Icon name="ion:heart-outline" class="m-5" size="28px" />
          </div>
          <h2 class="text-xl uppercase mt-4 font-bold">Contribute</h2>
          <p class="pt-3 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            porro reprehenderit rerum iste similique voluptates commodi
            distinctio neque, harum quos.
          </p>
          <button
            class="bg-red-600 text-white border-0 hover:bg-red-700 btn mt-4"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
</style>
