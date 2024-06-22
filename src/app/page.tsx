import Link from 'next/link';

const featuresItems = [
  { icon: '🏁', name: 'Interactive Shape', href: '/interactive-shape' },
  { icon: '🔥', name: 'Type checking TypeScript', href: '/' },
  { icon: '💅', name: 'Tailwind CSS', href: '/' },
  { icon: '✨', name: 'ESlint', href: '/' },
  { icon: '✨', name: 'Prettier', href: '/' },
  { icon: '🧪', name: 'Jest', href: '/' },
  { icon: '🧪', name: 'React Testing Library', href: '/' },
  { icon: '📕', name: 'Storybook', href: '/' },
  { icon: '💎', name: 'Atomic Design', href: '/' },
  { icon: '🚀', name: 'GitHub Actions', href: '/' },
  { icon: '💻', name: 'T3 Env', href: '/' },
  { icon: '🏎️', name: 'Absolute Imports using `@` prefix', href: '/' }
];

const HomePage = () => (
  <div>
    <section className="px-4 bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            React.js Interview Questions
          </h1>
        </div>
      </div>
    </section>
    <div className="max-w-screen-lg px-4 mx-auto mt-4">
      <h2 className="mt-8 mb-10 text-3xl text-bold">🚀 Features:</h2>
      <ul className="grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {featuresItems.map(({ icon, name, href }) => (
          <Link
            href={href}
            key={name}
            className="flex flex-col items-center justify-center gap-2 px-4 py-6 text-center transition-all duration-300 border rounded-lg shadow hover:scale-105 hover:shadow-xl"
          >
            <span className="text-xl">{icon}</span>
            <span>{name}</span>
          </Link>
        ))}
      </ul>
    </div>
  </div>
);

export default HomePage;
