import { getProject } from '@/mock-api';
import BookPitch from './BookPitch';
import { Button } from '@/app/form-utils';

export function generateMetadata({
  params: { id }
}: {
  params: { id: string };
}) {
  return {
    title: `${getProject(Number(id)).name}`,
    description: `${getProject(Number(id)).description}`
  };
}

export default function Project({
  params: { id }
}: {
  params: { id: string };
}) {
  const project = getProject(Number(id));

  return (
    <>
      <div className='flex justify-center'>
        <div className='grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-[1fr_20rem]'>
          <div className='flex items-center justify-center'>
            <img
              src={project.bigImage}
              alt={`An illustration for ${project.name}`}
              className='max-h-[30rem] min-w-0 rounded-lg object-contain'
            />
          </div>
          <div className='p-4'>
            <h1 className='text-3xl font-bold'>{project.name}</h1>
            <p className='text-lg'>{project.description}</p>
          </div>
          <div className='flex justify-center'>
            <div className='flex max-w-prose flex-col gap-4 text-justify'>
              {project.longDescription
                .split('\n')
                .filter((p) => p.length > 0)
                .map((p) => (
                  <p key={p}>{p}</p>
                ))}
            </div>
          </div>
          <div className='row-start-3 flex flex-col gap-4 sm:row-start-auto'>
            <Button>Профінансувати</Button>
            <BookPitch />
          </div>
        </div>
      </div>
    </>
  );
}
