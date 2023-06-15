import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Image } from 'qwik-image';
import logo from '~/assets/images/logo.png';
import robby from '~/assets/images/robby.webp';

export default component$(() => {
  return (
    <div class="p-10">
      <Image
        layout="fixed"
        objectFit="contain"
        width="160"
        height="28"
        src={logo}
        alt="logo"
      />
      <div class="flex flex-1 flex-col-reverse p-20 2xl:flex-row 2xl:flex-2 2xl:p-60">
        <div class="flex flex-1 flex-col justify-center items-center">
          <h1 class="text-3xl font-semibold font-courier-prime whitespace-nowrap my-10">Hello World 👋</h1>
          <p class="font-semibold animate-type whitespace-nowrap overflow-hidden font-courier-prime text-center">
              I'm <span class="font-extrabold text-xl text-blue-300">Robby Widyahartono.</span>
          </p>
          <p class="font-semibold animate-type whitespace-nowrap overflow-hidden font-courier-prime text-center">
              I'm a Full Stack TypeScript Engineer
          </p>
          <p class="font-semibold animate-type whitespace-nowrap overflow-hidden font-courier-prime text-center">
              specializing in React Native,
          </p>
          <p class="font-semibold animate-type whitespace-nowrap overflow-hidden font-courier-prime text-center">
              ReactJS, NestJS, Remix, and Qwik.
          </p>
          <p class="font-semibold animate-type whitespace-nowrap overflow-hidden font-courier-prime text-center">
              I'm a highly experienced software engineer
          </p>
          <p class="font-semibold animate-type whitespace-nowrap overflow-hidden font-courier-prime text-center">
              with 11 years of expertise in the field.
          </p>
        </div>
        <div class="flex flex-1 justify-center items-center p-2">
          <Image
            layout="fixed"
            objectFit="cover"
            width="200"
            height="200"
            src={robby}
            alt="avatar"
            class="rounded-full"
          />
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'robbywh',
  meta: [
    {
      name: 'description',
      content: 'Hello World!',
    },
  ],
};
