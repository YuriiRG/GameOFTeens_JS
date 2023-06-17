'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextInput, Button, ErrorsBlock } from '@/app/form-utils';
const schema = z.object({
  name: z
    .string()
    .min(1, "Ім'я проєкту є обов'язковим")
    .max(20, "Ім'я проєкту не може бути довше 20 символів"),
  bigImage: z
    .string()
    .min(1, "Велике зображення є обов'язковим")
    .url('Посилання на велике зображення має бути коректним'),
  smallImage: z
    .string()
    .min(1, "Мале зображення є обов'язковим")
    .url('Посилання на мале зображення має бути коректним'),
  description: z
    .string()
    .min(1, "Опис проєкту є обов'язковим")
    .max(350, 'Опис проєкту має бути не довше 350 символів'),
  longDescription: z.string().min(1, "Довгий опис проєкту є обов'язковим")
});

export default function CreateProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  });
  const isValidationError = !Object.values(errors).every(
    (error) => error === undefined
  );
  return (
    <form
      className='flex w-[65ch] flex-col gap-6'
      onSubmit={(e) => void handleSubmit((data) => console.log(data))(e)}
    >
      <h1 className='text-3xl font-bold'>Новий проєкт</h1>
      <fieldset>
        <label htmlFor='name' className=''>
          Ім&apos;я проєкту:
        </label>
        <TextInput
          {...register('name')}
          isError={errors.name !== undefined}
          className='w-full'
          placeholder="Ім'я проєкту"
        />
      </fieldset>
      <fieldset>
        <label htmlFor='description' className=''>
          Короткий опис проєкту (декілька реченнь):
        </label>
        <TextInput
          {...register('description')}
          isError={errors.description !== undefined}
          className='w-full'
          placeholder='Опис проєкту'
        />
      </fieldset>
      <fieldset>
        <label htmlFor='bigImage' className=''>
          Посилання на велику іллюстрацію до проєкту:
        </label>
        <TextInput
          {...register('bigImage')}
          isError={errors.bigImage !== undefined}
          className='w-full'
          placeholder='Зображення'
        />
      </fieldset>
      <fieldset>
        <label htmlFor='smallImage' className=''>
          Посилання на малу та бажано квадратну іллюстрацію до проєкту:
        </label>
        <TextInput
          {...register('smallImage')}
          isError={errors.smallImage !== undefined}
          className='w-full'
          placeholder='Зображення'
        />
      </fieldset>
      <fieldset>
        <label htmlFor='longDescription' className=''>
          Довгий опис проєкту без обмежень по довжині:
        </label>
        <textarea
          {...register('longDescription')}
          rows={6}
          className={`w-full rounded-lg border-2 p-3 ${
            errors.longDescription !== undefined
              ? 'border-red-600 bg-red-50 outline-2 outline-red-600 focus:outline'
              : 'border-gray-200 bg-gray-100'
          }`}
        ></textarea>
      </fieldset>
      <Button type='submit' disabled={isValidationError}>
        Створити проєкт
      </Button>
      <ErrorsBlock
        errors={Object.values(errors).map((error) => error.message)}
      />
    </form>
  );
}
