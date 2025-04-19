import Link from 'next/link'
import CircleStrokeText from '../common/CircleStrokeText'
import HighlightedText from '../common/HighlightedText'
import { LINKEDIN } from '@/constants/links'

const LeftColumn: React.FC = () => (
  <div className='text-foreground w-full md:w-[45%] px-6 relative flex flex-col justify-start'>
    <span className='bg-radial px-16 py-8 text-center inline'>
      <h3 className='text-xl font-bold inline'>
        <CircleStrokeText
          text='MAKE MONEY'
          height={82}
          width={162}
          textHeight={'text-2xl font-bold bg-transparent'}
        />{' '}
      </h3>
      <h3 className='text-xl font-bold inline text-nowrap whitespace-nowrap'>WITH DATA ANALYSIS</h3>
    </span>

    <p className='text-lg mt-4'>If you&apos;re new here, my name is Mo Chen.</p>

    <span className='mt-4 text-lg'>
      <HighlightedText tag='h4' text='$100k+ data job.' /> That&apos;s where I&apos;m at right now
      in my career. Financially at least.
    </span>

    <p className='text-lg mt-4'>
      It took me 5 years to get here from the moment I got my first corporate job.
    </p>

    <span className='mt-4 text-lg'>
      <HighlightedText tag='h4' text="Don't believe me?" /> I don&apos;t blame you.
    </span>

    <HighlightedText tag='h4' text='LET ME GIVE YOU THE FACTS.' className='mt-4 w-fit' />

    <p className='text-lg mt-4'>Please allow me to tell you.</p>

    <HighlightedText tag='h4' text='MY DATA ANALYSIS STORY.' className='mt-4 w-fit' />

    <p className='text-lg mt-6'>
      <strong className='font-bold'>2017:</strong> Got my BSc with Honours in Economics with a First
      Class result at City, University of London.
    </p>
    <p className='text-lg mt-2'>
      <strong className='font-bold'>2018:</strong> Finished my MSc in Finance &#38; Economics at the
      University of St Andrews, UK. Started my first corporate job in the Financial Services
      Industry as a Risk Graduate working with big data &#40;card transactions, payments, loans,
      mortgages, etc&#41;.
    </p>
    <p className='text-lg mt-2'>
      <strong className='font-bold'>2020:</strong> Broke into Investment Banking as a Credit
      Portfolio Manager. Looked after country, sector and product & asset class exposures.
    </p>
    <p className='text-lg mt-2'>
      <strong className='font-bold'>2021:</strong> Landed my Insights Analyst role which was all
      about allocating the organization&apos;s resources &#40;i.e. money&#41; using data-driven
      decisions in the most efficient way. Basically, I used my data analysis skills to cut costs
      and reallocate the funds in the most bang-for-buck way.
    </p>
    <p className='text-lg mt-2'>
      <strong className='font-bold'>2022:</strong> Landed my role as a Data & Analytics Analyst.
      Check my{' '}
      <Link href={LINKEDIN} target='_blank' className='underline'>
        LinkedIn
      </Link>{' '}
      where both my personal identity and my workplace is verified.
    </p>
  </div>
)

export default LeftColumn
