import { getEvents } from '@/mock-api';
import Link from 'next/link';

export default function Events() {
  const events = getEvents();
  return (
    <div className='flex justify-center'>
      <div className='flex w-[65ch] flex-col gap-4'>
        <h1 className='text-3xl font-bold'>
          Події у сфері стартапів, інвестицій, технологій та новітніх розробок
        </h1>
        {events.map(({ id, name, date, format }) => (
          <EventPreview
            key={id}
            id={id}
            name={name}
            date={date}
            format={format}
          />
        ))}
      </div>
    </div>
  );
}

function EventPreview({
  id,
  name,
  date,
  format
}: {
  id: number;
  name: string;
  date: string;
  format: string;
}) {
  return (
    <Link href={`/events/${id}`}>
      <section className='rounded-lg border-4 border-gray-200 bg-gray-100 p-4 transition-transform hover:scale-105'>
        <h2 className='text-lg font-bold'>{name}</h2>
        <p>Формат: {format}</p>
        <p>Дата: {date}</p>
      </section>
    </Link>
  );
}
