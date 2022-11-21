import Image from 'next/image';
import Link from 'next/link';
import klskyline from '../../../public/img/klskyline.jpeg';
import { Button } from '../../../components/Button';
import Hero from '../../../components/Hero';
import IntroSection from '../../../components/IntroSection';
import Form from '../../../components/Form';
import Faqs from '../../../components/Faqs';
import FaqCompanySetup from '../../../components/FaqData/FaqCompanySetup';

const posts = [
  {
    title: 'MSC Malaysia Status Application In Malaysia',
    href: '/services/b/msc-malaysia-status-application-in-malaysia',
    imageUrl: '/img/msc.png',
    description:
      'The MSC Malaysia status is given to companies, both local and foreign, that utilise and develop multimedia technologies in order to enhance or produce their products as well as their services. ',
  },

  {
    title: 'Foriegn Owned Company',
    href: '/services/foreignownedcompany',
    imageUrl: '/img/klskyline.jpeg',
    description:
      'The MSC Malaysia status is given to companies, both local and foreign, that utilise and develop multimedia technologies in order to enhance or produce their products as well as their services. ',
  },
];

const BusinessFormation = () => {
  return (
    <>
      <div className='bg-gray-100'>
        <IntroSection
          smallHeading='Ready to start a company?'
          mainHeading='Company Incorporation'
          paragraph='Looking for experienced accountants and ready to start a company? The first step is to contact us!'
          Title1='Over 1000+ Succesuful Incorparations'
          Title2='Response Within 2 Hours'
          Title3='Local & Expat Setup'
          showButton={true}
        />

        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-100 rounded-xl'>
          <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
              Begin Your Journey with Us. We Promise Satisfaction.
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              Basic Requirements You Need to Open a Company
            </p>
          </div>
          <div className='grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto'>
            <div className='grid grid-cols-2 gap-5'>
              <img
                className='object-cover w-full h-56 col-span-2 rounded shadow-lg'
                src='https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                alt=''
              />
              <img
                className='object-cover w-full h-48 rounded shadow-lg'
                src='https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                alt=''
              />
              <img
                className='object-cover w-full h-48 rounded shadow-lg'
                src='https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                alt=''
              />
            </div>
            <div className='flex flex-col justify-center'>
              <div className='pb-4 mb-4 border-b'>
                <h6 className='mb-2 font-semibold leading-5'>
                  Minimum of one subscriber to company shares.
                </h6>
                <p className='text-sm text-gray-900'>
                  If you are a non-Malaysian, you can be the the only
                  shareholder. However, if your company look forward to operate
                  in a certain specific industry which requires partial local
                  shareholding, then you will need a local shareholder.
                </p>
              </div>
              <div className='pb-4 mb-4 border-b'>
                <h6 className='mb-2 font-semibold leading-5'>
                  Minimum of one company secretary who is a member of one of the
                  predescribed professional bodies or licensed by SSM
                </h6>
                <p className='text-sm text-gray-900'>
                  A minimum of one company secretary. The individual has to be a
                  member of one of the professional bodies or licensed by the
                  SSM
                </p>
              </div>
              <div>
                <h6 className='mb-2 font-semibold leading-5'>
                  Minimum of one director
                </h6>
                <p className='text-sm text-gray-900'>
                  A minimum of one (1) director who is at least 18 years of age
                  and resides in Malaysia. The director must not be bankrupt and
                  must not have a criminal record.
                </p>
              </div>
              <Button href='/contact' txt='Contact Us' className='mt-5' />
            </div>
          </div>
        </div>
        <div className='bg-gray-100 '>
          <div className='mx-auto max-w-7xl py-10 px-4 sm:py-16 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h2 className='text-lg font-semibold text-indigo-600'>
                2 Hours Response Time
              </h2>
              <p className='mt-1 sm:text-4xl font-bold tracking-tight text-gray-900 text-3xl'>
                No clients are too large or small for us.
              </p>
              <p className='mx-auto mt-5 max-w-xl text-xl text-gray-500'>
                Make your life easier by filling all the information needed in
                the form while we working on transforming company and navigate
                your entire organisation. Registration takes 3-5 business days.
                Why dont you start with the form below?
              </p>
            </div>
          </div>
        </div>
        <Form />
        <Faqs faqs={FaqCompanySetup} />
        {/* Selection choices */}
        <div className='relative bg-gray-100 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
          <div className='absolute inset-0'>
            <div className='h-1/3 bg-gray-100 sm:h-2/3' />
          </div>
          <div className='relative mx-auto max-w-7xl'>
            <div className='text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Useful Guides
              </h2>
            </div>
            <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2'>
              {posts.map((post) => (
                <div
                  key={post.title}
                  className='flex flex-col overflow-hidden rounded-lg shadow-lg'
                >
                  <div className='flex-shrink-0'>
                    <Image
                      priority
                      className='h-48 w-full object-cover'
                      width={300}
                      height={300}
                      src={post.imageUrl}
                      alt=''
                    />
                  </div>
                  <div className='flex flex-1 flex-col justify-between bg-white p-6'>
                    <div className='flex-1'>
                      <a href={post.href} className='mt-2 block'>
                        <p className='text-xl font-semibold text-gray-900'>
                          {post.title}
                        </p>
                        <p className='mt-3 text-base text-gray-500'>
                          {post.description}
                        </p>
                      </a>
                    </div>
                    <div className='mt-6 flex items-center'>
                      <div className='flex-shrink-0'>
                        <Button href={post.href} txt='Learn More' />
                      </div>
                      <div className='ml-3'></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessFormation;
