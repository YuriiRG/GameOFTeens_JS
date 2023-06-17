import { getProject } from '@/mock-api';

export default function Project({
  params: { id }
}: {
  params: { id: string };
}) {
  const project = getProject(Number(id));

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex max-w-6xl flex-col gap-8'>
          <div className='flex'>
            <img
              src={project.bigImage}
              alt={`An illustration for ${project.name}`}
              className='max-h-[30rem] min-w-0 flex-grow rounded-lg object-contain'
            />
            <div className='max-w-xs p-4'>
              <h1 className='text-xl font-bold'>{project.name}</h1>
              <p className='text-lg'>{project.description}</p>
            </div>
          </div>
          <div className='flex gap-8'>
            <div className='flex flex-col gap-4 text-justify'>
              {project.longDescription
                .split('\n')
                .filter((p) => p.length > 0)
                .map((p) => (
                  <p key={p}>{p}</p>
                ))}
            </div>
            <div className='flex flex-col gap-4'>
              <button className='rounded-lg bg-blue-700 p-4 text-lg text-white transition-all hover:scale-105 hover:bg-blue-600'>
                Профінансувати
              </button>
              <button className='rounded-lg bg-blue-700 p-4 text-lg text-white transition-all hover:scale-105 hover:bg-blue-600'>
                Забронювати зустріч
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
