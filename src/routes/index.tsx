import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Image } from 'qwik-image';
import logo from '~/assets/images/logo-robby.webp';
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
      <div class="flex flex-1 flex-col-reverse 2xl:flex-row 2xl:flex-2 p-60">
        <div class="flex flex-1 flex-col justify-center items-center">
          <h1 class="text-2xl font-semibold font-courier-prime whitespace-nowrap">Hello World 👋</h1>
          <p class="font-semibold animate-type whitespace-nowrap overflow-hidden font-courier-prime text-center">
              I'm Robby Widyahartono.
          </p>
          <p class="font-semibold animate-type whitespace-nowrap overflow-hidden font-courier-prime text-center">
              I'm a Full Stack TypeScript Engineer
          </p>
          <p class="font-semibold animate-type whitespace-nowrap overflow-hidden font-courier-prime text-center">
              specializing in React Native, ReactJS, NestJS, Remix, and Qwik.
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
