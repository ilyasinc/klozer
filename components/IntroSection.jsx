import { Button } from './Button';

const IntroSection = ({
  smallHeading,
  mainHeading,
  paragraph,
  Title1,
  Title2,
  Title3,
  showButton,
}) => {
  return (
    <div className=''>
      <div className='bg-gray-100'>
        <div className='px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 text-center'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-indigo-600 uppercase rounded-full bg-teal-accent-400'>
                {smallHeading}
              </p>
            </div>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
              <span className='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='currentColor'
                  className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                >
                  <defs>
                    <pattern
                      id='dc223fcc-6d72-4ebc-b4ef-abe121034d6e'
                      x='0'
                      y='0'
                      width='.135'
                      height='.30'
                    >
                      <circle cx='1' cy='1' r='.7' />
                    </pattern>
                  </defs>
                  <rect
                    fill='url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)'
                    width='52'
                    height='24'
                  />
                </svg>
                <span className='relative'>{mainHeading}</span>
              </span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>{paragraph}</p>
          </div>
          {showButton ? (
            <div className='flex items-center justify-center'>
              <Button href='/contact' txt='Contact Us' />
            </div>
          ) : null}
        </div>
      </div>
      <div className='relative px-4 sm:px-0'>
        <div className='absolute inset-0 bg-gray-100 h-full' />
        <div className='relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md'>
          <div className='p-8 text-center items-center justify-center flex'>
            <p className='font-bold tracking-wide text-indigo-600'>{Title1}</p>
          </div>
          <div className='inline-block p-8 text-center'>
            <p className='font-bold tracking-wide text-indigo-600'>{Title2}</p>
          </div>
          <div className='p-8 text-center items-center justify-center flex'>
            <p className='font-bold tracking-wide text-indigo-600'>{Title3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntroSection;
