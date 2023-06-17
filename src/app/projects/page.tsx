import { getProjects } from '@/mock-api';
import Link from 'next/link';

export default function Home() {
  const projects = getProjects();

  return (
    <main className='flex justify-center'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold'>Стартапи</h1>
        <div className='flex max-w-[62rem] flex-wrap justify-center gap-4'>
          {projects.map(({ name, description, id, smallImage }) => (
            <ProjectPreview
              key={id}
              id={id}
              name={name}
              description={description}
              image={smallImage}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function ProjectPreview({
  id,
  image,
  name,
  description
}: {
  id: number;
  image: string;
  name: string;
  description: string;
}) {
  return (
    <Link href={`/projects/${id}`}>
      <section className='max-w-[20rem] rounded-2xl border-4 border-gray-200 bg-gray-100 p-4 transition-transform hover:scale-105'>
        <div>
          <img
            src={image}
            alt={`An illustration for ${name}`}
            className='aspect-square w-full object-cover'
          />
        </div>
        <h2 className='mt-2 text-xl font-bold'>{name}</h2>
        <p className='mt-1'>{description}</p>
      </section>
    </Link>
  );
}
