<script setup lang="ts">
</script>

<template>
  <main class="w-full overflow-x-hidden min-h-screen grid pt-[9.19rem] px-6 md:px-0 md:pt-[10.81rem] justify-items-center items-start bg-blue-600 relative">

    <section class="bg-white-pure z-20 w-full max-w-[21.875rem] rounded-[0.9375rem;] grid-cols-1 grid-rows-[8.75rem,1fr]">
      <img src="/bg-thumbnail.svg" alt="">

      <div class="relative flex flex-col items-center">
        <img class="absolute top-0 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2" src="/profile.png" alt="">

        <div class="mt-[4.5rem] flex gap-2">
          <h2 class="heading-s text-grey-600 font-bold">Victor Crest</h2>
          <p class="heading-s text-grey-300">26</p>
        </div>
        <p class="mt-[.8rem] body text-grey-300">London</p>

        <div class="mt-5 w-full border-t border-t-white-300 p-6 flex justify-evenly">
          <div class="flex flex-col items-center">
            <h3 class="heading-s text-grey-600 font-bold">80K</h3>
            <p class="subtitle text-grey-300">Followers</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="heading-s text-grey-600 font-bold">803K</h3>
            <p class="subtitle text-grey-300">Likes</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="heading-s text-grey-600 font-bold">1.4k</h3>
            <p class="subtitle text-grey-300">Photos</p>
          </div>
        </div>
      </div>
    </section>

    <picture>
      <source media="(max-width: 767px)" srcset="/mobile-bg-top-left.svg" />
      <source media="(min-width: 768px)" srcset="/bg-top-left.svg" />
      <img class="absolute top-0 left-0 min-w-max" src="/bg-top-left.svg" alt="Chris standing up holding his daughter Elva" />
    </picture>
    <picture>
      <source media="(max-width: 767px)" srcset="/mobile-bg-bottom-right.svg" />
      <source media="(min-width: 768px)" srcset="/bg-bottom-right.svg" />
      <img class="absolute bottom-0 right-0 min-w-max" src="/bg-bottom-right.svg" alt="Chris standing up holding his daughter Elva" />
    </picture>
  </main>
</template>
