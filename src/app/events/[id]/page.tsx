import { getEvent } from '@/mock-api';

export default function Event({ params: { id } }: { params: { id: string } }) {
  const event = getEvent(Number(id));
  return (
    <div className='flex justify-center'>
      <article className='flex w-[65ch] flex-col gap-4'>
        <h1 className='text-3xl font-bold'>{event.name}</h1>
        <p className='text-xl'>Формат: {event.format}</p>
        <p className='text-xl'>Дата: {event.date}</p>
        <p>{event.description}</p>
      </article>
    </div>
  );
}
