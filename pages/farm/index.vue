<template>
  <UtilitiesTranslateContent :renderComponent="renderComponent">
    <UISectionImgText
      :title="content.data.attributes.Header.Title"
      :description="content.data.attributes.Header.Text"
      :image="
        config.public.strapiBase +
        content.data.attributes.Header.Image.data.attributes.formats.medium.url
      "
      :bg-color="content.data.attributes.Header.BgColor"
      :image-place="content.data.attributes.Header.ImagePlace"
    />
    <UISectionParagraphWrapperThree
      :section0="content.data.attributes.Thirds.Section0"
      :section1="content.data.attributes.Thirds.Section1"
      :section2="content.data.attributes.Thirds.Section2"
      :bg-color="content.data.attributes.Thirds.BgColor"
    />
    <UIAccordionWrapper
      :title="content.data.attributes.AccordionSection.Title"
      :images="content.data.attributes.AccordionSection.Images.data"
    >
      <UIAccordionItem
        v-for="item in content.data.attributes.AccordionSection.AccordionItem"
        :title="item.Title"
        :text="item.Description"
      />
    </UIAccordionWrapper>
    <UICardsVertical
      :title="content.data.attributes.Volunteering.Title"
      :description="content.data.attributes.Volunteering.Description"
      :btn1="content.data.attributes.Volunteering.btn1"
      :btn2="content.data.attributes.Volunteering.btn2"
      :link1="content.data.attributes.Volunteering.link1"
      :link2="content.data.attributes.Volunteering.link2"
      :img="
        config.public.strapiBase +
        content.data.attributes.Volunteering.img.data.attributes.formats.medium
          .url
      "
    />
    <div class="py-24 grid lg:grid-cols-2 xl:px-32 gap-16 mx-4">
      <div>
        <h2 class="uppercase text-xl font-bold mb-6 border-b-2">
          Our Latest News
        </h2>
        <div class="space-y-3">
          <div v-for="post in posts.data">
            <NuxtLink :to="'/posts/' + post.id">
              <div
                class="p-4 lg:p-8 border-2 rounded-2xl flex items-center justify-between"
              >
                <p class="text-lg font-bold">
                  {{
                    post.attributes.Title.length > 22
                      ? post.attributes.Title.substring(0, 24) + "..."
                      : post.attributes.Title
                  }}
                </p>
                <Icon name="ion:arrow-forward-circle-outline" size="32px" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div>
        <h2 class="uppercase text-xl font-bold mb-8 border-b-2">
          View Our Gallery
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <NuxtLink to="/farm/gallery">
            <img
              src="/img/cow_dev.jpg"
              class="w-full rounded-xl cursor-pointer hover:-translate-y-2 transition-all"
            />
          </NuxtLink>
          <NuxtLink to="/farm/gallery">
            <img
              src="/img/dharma.jpg"
              class="w-full rounded-xl cursor-pointer hover:-translate-y-2 transition-all"
            /> </NuxtLink
          ><NuxtLink to="/farm/gallery">
            <img
              src="/img/teaching_cows.jpg"
              class="w-full rounded-xl cursor-pointer hover:-translate-y-2 transition-all"
            /> </NuxtLink
          ><NuxtLink to="/farm/gallery">
            <img
              src="/img/white_goat.jpg"
              class="w-full rounded-xl cursor-pointer hover:-translate-y-2 transition-all"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </UtilitiesTranslateContent>
</template>

<script setup>
import { useLocaleStore } from "../../stores/locale";
import { storeToRefs } from "pinia";

const { find } = useStrapi();
const store = useLocaleStore();
const { locale } = storeToRefs(store);
const renderComponent = ref(true);

let content = await find("farm-page", {
  populate: {
    Header: {
      populate: "*",
    },
    Thirds: {
      populate: "*",
    },
    AccordionSection: {
      populate: "*",
    },
    Volunteering: {
      populate: "*",
    },
  },
  locale: locale.value,
});

const posts = await find("posts", {
  pagination: {
    pageSize: 3,
    page: 1,
  },
  filters: {
    Category: "Farm",
  },
  sort: ["publishedAt:desc"],
});

watch(locale, async (newValue) => {
  renderComponent.value = false;
  content = await find("farm-page", {
    populate: {
      Header: {
        populate: "*",
      },
      Thirds: {
        populate: "*",
      },
      AccordionSection: {
        populate: "*",
      },
      Volunteering: {
        populate: "*",
      },
    },
    locale: newValue,
  });
  await sleep(900);
  renderComponent.value = true;
});

const config = useRuntimeConfig();

useHead({
  title: "New Mayapur - Farm",
});
</script>
