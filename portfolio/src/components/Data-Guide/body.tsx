'use client'
import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import CircleStrokeText from '../common/CircleStrokeText'
import HighlightedText from '../common/HighlightedText'
import UnderlineEffect from '../common/UnderlineEffect'

// Option Button Component with Animation
const OptionButton = ({
  text,
  clickHandler,
  isActive = false,
  index = 0,
}: {
  text: string
  clickHandler?: () => void
  isActive?: boolean
  index?: number
}) => {
  return (
    <motion.button
      className={`w-full ${isActive ? 'bg-[#1da1f2]' : 'bg-[#1da1f2]/80'} text-foreground py-2 px-4 rounded-md mb-3 text-center font-medium hover:bg-blue-400 transition-colors relative overflow-hidden`}
      onClick={clickHandler}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 120,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      viewport={{ once: true }}
    >
      <motion.div
        className='absolute inset-0 bg-white opacity-20'
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.4 }}
      />
      {text}
    </motion.button>
  )
}

// Animated paragraph component
const AnimatedParagraph = ({ children, delay = 0 }) => (
  <motion.p
    className='text-lg'
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      delay: delay,
      ease: 'easeOut',
    }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.p>
)

const DataJourneyBody: React.FC = () => {
  const [activeOption, setActiveOption] = useState('ALL')
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 })

  // Scroll-based parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const leftColumnY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const rightColumnOpacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  return (
    <motion.div
      ref={containerRef}
      className='bg-background text-foreground w-full flex flex-col md:flex-row min-h-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Column - 40% */}
      <motion.div
        className='w-full md:w-[40%] px-6 relative flex flex-col items-center justify-start'
        style={{ y: leftColumnY }}
      >
        <motion.div
          className='bg-radial px-16 py-20 md:py-32 md:px-20'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className='w-full max-w-xs space-y-4 relative z-10'>
            <OptionButton
              text='ALL'
              clickHandler={() => setActiveOption('ALL')}
              isActive={activeOption === 'ALL'}
              index={0}
            />
            <OptionButton
              text='1:1 Call'
              clickHandler={() => setActiveOption('1:1 Call')}
              isActive={activeOption === '1:1 Call'}
              index={1}
            />
            <OptionButton
              text='Priority DM'
              clickHandler={() => setActiveOption('Priority DM')}
              isActive={activeOption === 'Priority DM'}
              index={2}
            />
            <OptionButton
              text='Digital Product'
              clickHandler={() => setActiveOption('Digital Product')}
              isActive={activeOption === 'Digital Product'}
              index={3}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column - 60% */}
      <motion.div
        className='w-full md:w-[60%] p-6 md:p-12 flex flex-col justify-center'
        style={{ opacity: rightColumnOpacity }}
      >
        <div className='max-w-2xl'>
          <motion.div
            ref={titleRef}
            className='flex flex-col items-start'
            initial={{ opacity: 0 }}
            animate={isTitleInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center'
              initial={{ opacity: 0, y: 30 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              ULTIMATE{' '}
              <motion.span
                className='relative inline-block'
                initial={{ opacity: 0 }}
                animate={isTitleInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                DATA PORTFOLIO
                <UnderlineEffect stroke='#2878F2' className='mix-blend-difference' />
              </motion.span>
            </motion.h1>
          </motion.div>

          <div className='mt-6 space-y-4'>
            <motion.h2
              className='text-xl md:text-2xl font-semibold'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              What if I told you I have the ultimate package to land your dream data job?
            </motion.h2>

            <AnimatedParagraph delay={0.1}>The Ultimate Data Portfolio.</AnimatedParagraph>

            <AnimatedParagraph delay={0.2}>
              Together with 6 bonuses covering every aspect of data analysis.
            </AnimatedParagraph>

            <AnimatedParagraph delay={0.3}>
              From the first time you think about having a data career to climbing the career ladder
              in the data world.
            </AnimatedParagraph>

            <AnimatedParagraph delay={0.4}>
              Let me help you
              <motion.span
                className='bg-[#2878F2] px-2 py-1 mx-1 inline-block'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  type: 'spring',
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                GET the job you want.
              </motion.span>
            </AnimatedParagraph>

            <AnimatedParagraph delay={0.5}>
              You don&apos;t need to worry if you don&apos;t know anything about data.
            </AnimatedParagraph>

            <motion.h3
              className='text-xl font-bold mt-4'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              The <CircleStrokeText height={52} width={262} text='ULTIMATE DATA ROADMAP' /> will
              help you with your first formula in Excel.
            </motion.h3>

            <AnimatedParagraph delay={0.2}>
              It has tasks for you to complete, such as using SQL to query data.
            </AnimatedParagraph>

            <AnimatedParagraph delay={0.25}>
              Not only that, but you&apos;ll be exploring DAX in Power BI.
            </AnimatedParagraph>

            <AnimatedParagraph delay={0.3}>Creating Scatter Plots in Tableau.</AnimatedParagraph>

            <AnimatedParagraph delay={0.35}>Writing entire scripts in Python.</AnimatedParagraph>

            <AnimatedParagraph delay={0.4}>But that&apos;s just the beginning.</AnimatedParagraph>

            <AnimatedParagraph delay={0.45}>
              It has Analytical Knowledge and Critical Thinking modules.
            </AnimatedParagraph>

            <AnimatedParagraph delay={0.5}>
              Not to mention Stakeholder Management and Data Storytelling.
            </AnimatedParagraph>

            <AnimatedParagraph delay={0.55}>
              Industry knowledge in Financial Services and Healthcare.
            </AnimatedParagraph>

            <AnimatedParagraph delay={0.6}>
              Digital Marketing, Retail, Energy, and even Manufacturing.
            </AnimatedParagraph>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <HighlightedText
                tag='h3'
                text="You'll have the essential Soft Skills and Domain Knowledge to succeed in the data world."
              />
            </motion.div>

            <AnimatedParagraph delay={0.3}>The stats don&apos;t lie.</AnimatedParagraph>

            <motion.q
              className='text-lg italic block'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                type: 'spring',
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              Interviewees with no knowledge of the company get rejected by 47% of recruiters.
            </motion.q>

            <AnimatedParagraph delay={0.5}>But you will be ready.</AnimatedParagraph>

            <AnimatedParagraph delay={0.6}>
              For the more experienced and knowledgeable, I&apos;ve made it even easier.
            </AnimatedParagraph>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default DataJourneyBody
