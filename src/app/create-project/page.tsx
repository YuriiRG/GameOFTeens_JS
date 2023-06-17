import CreateProjectForm from './CreateProjectForm';

export const metadata = {
  title: 'Створити новий проект'
};

export default function CreateProject() {
  return (
    <div className='flex justify-center'>
      <CreateProjectForm />
    </div>
  );
}
