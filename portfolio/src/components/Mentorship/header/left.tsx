import HighlightedText from '@/components/common/HighlightedText'

const LeftColumn: React.FC = () => (
  <div className='text-foreground w-full md:w-[45%] px-6 relative flex flex-col justify-start'>
    <span className='bg-radial px-16 py-8 text-center inline'>
      <h3 className='text-xl font-bold inline uppercase'>1:1 MENTORSHIP PROGRAM</h3>
    </span>

    <span className='mt-4 text-lg'>
      This is a <HighlightedText tag='p' text='bespoke' /> service
    </span>

    <span className='mt-4 text-lg'>
      I&apos;m here to help you get the <HighlightedText tag='p' text='job' /> you want, the{' '}
      <HighlightedText tag='p' text='promotion' /> you want, the{' '}
      <HighlightedText tag='p' text='pay' /> you want, the <HighlightedText tag='p' text='skill' />{' '}
      you want.
    </span>

    <p className='text-lg mt-4'>
      In the <strong>fastest</strong> possible way.
    </p>

    <p className='text-lg mt-4'>
      I <strong>will not</strong> waste your time, so please <strong>do not</strong> waste mine
      either.
    </p>

    <p className='text-lg mt-4'>
      This program only works if you&apos;re truly <strong>committed</strong> to advancing your
      career.
    </p>

    <span className='text-lg mt-4'>
      My team and I go above and beyond to provide the <strong>most personalized</strong> career
      roadmap for <HighlightedText tag='p' text='you and only you.' />{' '}
    </span>

    <p className='text-lg mt-4'>
      I will give you absolutely no <strong>&lsquo;fluff&rsquo;</strong> advice.
    </p>

    <p className='text-lg mt-4'>
      Everything you&apos;ll learn will be <strong>applicable and actionable. Immediately.</strong>
    </p>

    <p className='text-lg mt-4'>
      I&apos;ve been <strong>there</strong> and <strong>done</strong> it.{' '}
    </p>

    <p className='text-lg mt-4'>
      You <strong>don&apos;t know</strong> what you <strong>don&apos;t know.</strong>
    </p>

    <span className='mt-4 text-lg'>
      And I will give you <HighlightedText tag='h4' text='everything I know' /> about the data
      industry, so that you can avoid all of the mistakes I made and replicate my successes.
    </span>

    <HighlightedText
      tag='h4'
      text='get the job you want in as little time as possible.'
      className='mt-4 w-fit'
    />
  </div>
)

export default LeftColumn
