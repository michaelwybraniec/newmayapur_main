<template>
  <div class="mx-4">
    <div class="carousel max-w-[800px] mx-auto rounded-xl mt-20">
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
  <div class="pb-32 py-28 2xl:px-10">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 px-4 lg:gap-x-10 2xl:px-20 items-start 2xl:gap-x-16"
    >
      <div class="md:px-24 lg:px-0 mb-24 lg:mb-0">
        <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
          <Icon name="ion:musical-notes-outline" size="28px" />
        </div>
        <h2 class="text-xl mt-12 uppercase font-bold">Music Festivals</h2>
        <p class="pt-3 text-lg">
          What better way to give a taste of Krishna Consciousness than by
          sharing prasadam with everyone? We have a dedicated group of cooks who
          are offering wholesome vegetarian meals in France's biggest music
          festivals, which sometimes gather more than a hundred thousand people!
        </p>
      </div>
      <div class="md:px-24 lg:px-0 mb-24 lg:mb-0">
        <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
          <Icon name="ion:pizza-outline" size="28px" />
        </div>
        <h2 class="text-xl mt-12 uppercase font-bold">Private Events</h2>
        <p class="pt-3 text-lg">
          Are you searching for the perfect meal to compliment your wedding
          ceremony, or any other significant occasion? We also provide
          high-class, vegetarian catering services for all of your private
          events. Please contact us, and we will get back to you as soon as
          possible.
        </p>
      </div>
    </div>
  </div>
  <div class="bg-base-200 pb-28 py-28 lg:px-10">
    <h2 class="text-2xl font-bold text-center mb-2">Our Menus</h2>
    <div class="lg:pb-16 pt-16 lg:px-10">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-20 items-start gap-x-16"
      >
        <div class="md:px-24 lg:px-0 mb-24 lg:mb-0">
          <h2 class="uppercase font-bold text-xl mb-4">Plats au Choix</h2>
          <table class="table-auto border-2 w-full rounded-xl">
            <tbody class="border-2">
              <tr class="border-2">
                <td class="px-6 py-4">Curry au Lait de Coco</td>
              </tr>
              <tr class="border-2">
                <td class="px-6 py-4">Koftas (Boulettes de Légumes) + Sauce</td>
              </tr>
              <tr class="border-2">
                <td class="px-6 py-4">Halva et/ou Besan Ladoo (Desserts)</td>
              </tr>
              <tr class="border-2">
                <td class="px-6 py-4">Dal (Soupe de Lentilles)</td>
              </tr>
              <tr>
                <td class="px-6 py-4">Salade</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="md:px-24 lg:px-0 mb-24 lg:mb-0">
          <h2 class="uppercase font-bold text-xl mb-4">à l'unité</h2>
          <table class="table-auto border-2 w-full rounded-xl">
            <tbody class="border-2">
              <tr class="border-2">
                <td class="px-6 py-4">Samosa</td>
                <td>3,00€</td>
              </tr>
              <tr class="border-2">
                <td class="px-6 py-4">Chaï</td>
                <td>1,50€</td>
              </tr>
              <tr class="border-2">
                <td class="px-6 py-4">Lassi</td>
                <td>2,00€</td>
              </tr>
              <tr class="border-2">
                <td class="px-6 py-4">Chaï (Avec Menu)</td>
                <td>1,00€</td>
              </tr>
              <tr class="border-2">
                <td class="px-6 py-4">Lassi (Avec Menu)</td>
                <td>1,50€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="lg:pb-16 lg:py-16 lg:px-10">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-20 items-start gap-x-16"
      >
        <div class="md:px-24 lg:px-0 mb-24 lg:mb-0">
          <h2 class="uppercase font-bold text-xl mb-4">Formules</h2>
          <table class="table-auto border-2 w-full rounded-xl">
            <tbody class="border-2">
              <tr class="border-2">
                <td class="px-6 py-4">Riz + 5 Plats</td>
                <td>15,00€</td>
              </tr>
              <tr class="border-2">
                <td class="px-6 py-4">Riz + 4 Plats</td>
                <td>14,00€</td>
              </tr>
              <tr class="border-2">
                <td class="px-6 py-4">Riz + 3 Plats</td>
                <td>12,00€</td>
              </tr>
              <tr>
                <td class="px-6 py-4">Riz + 2 Plats</td>
                <td>10,00€</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="md:px-24 lg:px-0 mb-24 lg:mb-0">
          <h2 class="uppercase font-bold text-xl mb-4">Formules Bols</h2>
          <table class="table-auto border-2 w-full rounded-xl">
            <tbody class="border-2">
              <tr class="border-2">
                <td class="px-6 py-4">Riz + 1 Plat</td>
                <td>6,00€</td>
              </tr>
              <tr class="border-2">
                <td class="px-6 py-4">Bol de Koftas</td>
                <td>5,00€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="py-32 pb-36 2xl:px-10">
    <div
      class="grid grid-cols-1 lg:grid-cols-4 px-4 2xl:px-20 items-start gap-16"
    >
      <img src="/img/prasad.jpg" class="rounded-xl mx-auto" alt="" />
      <img src="/img/prasad1.jpg" class="rounded-xl mx-auto" alt="" />
      <img src="/img/prasad2.jpg" class="rounded-xl mx-auto" alt="" />
      <img src="/img/prasad3.jpg" class="rounded-xl mx-auto" alt="" />
      <img src="/img/prasad4.jpg" class="rounded-xl mx-auto" alt="" />
      <img src="/img/prasad5.jpg" class="rounded-xl mx-auto" alt="" />
      <img src="/img/prasad6.jpg" class="rounded-xl mx-auto" alt="" />
      <img src="/img/prasad7.jpg" class="rounded-xl mx-auto" alt="" />
    </div>
  </div>
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
        <button class="btn btn-outline btn-primary mt-5">Shop Now</button>
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
        <button class="btn btn-outline btn-primary mt-5">Learn More</button>
      </div>
    </div>
  </div>
</template>
