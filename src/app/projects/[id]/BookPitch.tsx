'use client';
import { Button, ErrorsBlock, TextInput } from '@/app/form-utils';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  date: z.string().min(1, "Дата є обов'язковою"),
  place: z.string().min(1, "Місце є обов'язковим"),
  notes: z.string()
});

export default function BookPitch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: '',
      notes: '',
      place: ''
    }
  });
  const isValidationError = !Object.values(errors).every(
    (error) => error === undefined
  );
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>Забронювати зустріч</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/50' />
        <Dialog.Content className='fixed left-1/2 top-1/2 flex w-[99vw] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg bg-white p-6 sm:w-[50vw]'>
          <div>
            <Dialog.Title className='text-3xl font-bold'>
              Нова зустріч
            </Dialog.Title>
            <Dialog.Description>
              Бронювання зустрічі з командою стартапу для пітчінигу
            </Dialog.Description>
          </div>
          <fieldset className='flex flex-col items-start'>
            <label htmlFor='date'>Оберіть дату та час</label>
            <input
              type='datetime-local'
              className={`rounded-lg border-2 p-3 ${
                errors.date !== undefined
                  ? 'border-red-600 bg-red-50 outline-2 outline-red-600 focus:outline'
                  : 'border-gray-200 bg-gray-100'
              }`}
              min={(() => {
                const now = new Date();
                now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
                return now.toISOString().slice(0, 16);
              })()}
              {...register('date')}
            />
          </fieldset>
          <fieldset>
            <label htmlFor='place'>Оберіть місце</label>
            <TextInput
              isError={errors.place !== undefined}
              className='w-full'
              {...register('place')}
            />
          </fieldset>
          <fieldset>
            <label htmlFor='notes'>
              Укажіть додаткову інформацію, якщо бажаєте
            </label>
            <TextInput
              isError={errors.notes !== undefined}
              className='w-full'
              {...register('notes')}
            />
          </fieldset>
          <div className='flex justify-between'>
            <Button
              onClick={(e) =>
                void handleSubmit((data) => {
                  console.log(data);
                  setOpen(false);
                })(e)
              }
            >
              Відправити запит
            </Button>
            <Dialog.Close asChild>
              <Button
                className='bg-red-700 hover:enabled:bg-red-600 active:enabled:bg-red-500'
                onClick={() => reset()}
              >
                Відмінити
              </Button>
            </Dialog.Close>
          </div>
          <ErrorsBlock
            errors={Object.values(errors).map((error) => error.message)}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
