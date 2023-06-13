import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="p-10">
      <h1 class="text-2xl">Hello World 👋</h1>
      <p class="font-bold">
          I'm Robby Widyahartono. I'm a Full Stack TypeScript Engineer specializing in TypeScript, React Native, ReactJS, NestJS, Remix, and Qwik. I'm a highly experienced software engineer with 11 years of expertise in the field.
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
