/* eslint-disable prettier/prettier */
import type { Metadata } from 'next';

import Title from '@/components/shared/Title';

import { BOX_DATA } from './_components/constants';
import Shape from './_components/Shape';

export const metadata: Metadata = {
  title: 'Interactive Shape | Nextjs',
  description:
    '🚀 Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, React Testing Library, PostCSS, Tailwind CSS, Storybook, Plop, GH actions.'
};

const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <Title className="font-bold text-center">Interactive Shape</Title>

      <Shape data={BOX_DATA} />
    </section>
  );
};

export default Page;
