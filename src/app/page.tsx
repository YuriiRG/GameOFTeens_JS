export default function Landing() {
  return (
    <div className='flex flex-col items-center gap-12'>
      <div className='flex flex-col items-center justify-center gap-4 sm:flex-row sm:p-2'>
        <h1 className='text-4xl font-bold leading-normal sm:max-w-[50%] sm:text-5xl sm:leading-normal'>
          GoITeens Lab — лабораторія стартапів розроблених підлітками 🚀
        </h1>
        <img
          src='/undraw_project_team.svg'
          className='min-w-0 flex-shrink object-contain'
          alt=''
        />
      </div>
      <div className='flex justify-center'>
        <a
          href='/projects'
          className='block rounded-full bg-blue-600 p-6 text-center text-2xl font-bold text-white transition-transform hover:scale-105 sm:text-3xl'
        >
          Відкрийте для себе нові стартапи
        </a>
      </div>
    </div>
  );
}
