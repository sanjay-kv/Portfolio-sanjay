'use server'
import CircleStrokeText from '../common/CircleStrokeText'
import HighlightedText from '../common/HighlightedText'
import UnderlineEffect from '../common/UnderlineEffect'

// Option Button Component
const OptionButton = ({ text, clickHandler }: { text: string; clickHandler?: () => void }) => (
  <button
    className='w-full bg-[#1DA1F2] text-white py-2 px-4 rounded-md mb-3 text-center font-medium hover:bg-blue-400 transition-colors'
    onClick={clickHandler}
  >
    {text}
  </button>
)

const DataJourneyBody: React.FC = () => (
  <div className='bg-background text-white w-full flex flex-col md:flex-row min-h-screen'>
    {/* Left Column - 40% */}
    <div className='w-full md:w-[40%] px-6 relative flex flex-col items-center justify-start'>
      <div className='bg-radial px-16 py-20 md:py-32 md:px-20'>
        <div className='w-full max-w-xs space-y-4 relative z-10'>
          <OptionButton text='ALL' />
          <OptionButton text='1:1 Call' />
          <OptionButton text='Priority DM' />
          <OptionButton text='Digital Product' />
        </div>
      </div>
    </div>

    {/* Right Column - 60% */}
    <div className='w-full md:w-[60%] p-6 md:p-12 flex flex-col justify-center'>
      <div className='max-w-2xl'>
        <div className='flex flex-col items-start'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center'>
            ULTIMATE{' '}
            <span className='relative inline-block'>
              DATA PORTFOLIO
              <UnderlineEffect stroke='#2878F2' className='mix-blend-difference' />
            </span>
          </h1>
        </div>

        <div className='mt-6 space-y-4'>
          <h2 className='text-xl md:text-2xl font-semibold'>
            What if I told you I have the ultimate package to land your dream data job?
          </h2>

          {[
            'The Ultimate Data Portfolio.',
            'Together with 6 bonuses covering every aspect of data analysis.',
            'From the first time you think about having a data career to climbing the career ladder in the data world.',
          ].map((text, index) => (
            <p key={index} className='text-lg'>
              {text}
            </p>
          ))}

          <p className='text-lg'>
            Let me help you
            <span className='bg-[#2878F2] px-2 py-1 mx-1'>GET the job you want.</span>
          </p>

          <p className='text-lg'>
            You don&apos;t need to worry if you don&apos;t know anything about data.
          </p>

          <h3 className='text-xl font-bold mt-4'>
            The <CircleStrokeText height={52} width={262} text='ULTIMATE DATA ROADMAP' /> will help
            you with your first formula in Excel.
          </h3>

          {[
            'It has tasks for you to complete, such as using SQL to query data.',
            "Not only that, but you'll be exploring DAX in Power BI.",
            'Creating Scatter Plots in Tableau.',
            'Writing entire scripts in Python.',
            "But that's just the beginning.",
            'It has Analytical Knowledge and Critical Thinking modules.',
            'Not to mention Stakeholder Management and Data Storytelling.',
            'Industry knowledge in Financial Services and Healthcare.',
            'Digital Marketing, Retail, Energy, and even Manufacturing.',
          ].map((text, index) => (
            <p key={index} className='text-lg'>
              {text}
            </p>
          ))}

          <HighlightedText
            tag='h3'
            text="You'll have the essential Soft Skills and Domain Knowledge to succeed in the data world."
          />

          <p className='text-lg mt-4'>The stats don&apos;t lie.</p>

          <q className='text-lg italic block'>
            Interviewees with no knowledge of the company get rejected by 47% of recruiters.
          </q>

          <p className='text-lg'>But you will be ready.</p>

          <p className='text-lg'>
            For the more experienced and knowledgeable, I&apos;ve made it even easier.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default DataJourneyBody
