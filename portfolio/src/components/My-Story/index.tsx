'use server'

import LeftColumn from "./LeftColumn"
import RightColumn from "./RightColumn"

const MyStoryPage: React.FC = () => (
  <div className='bg-background text-foreground px-8 py-8 md:px-24 md:py-8 w-full flex flex-col md:flex-row min-h-screen'>
    <LeftColumn />  {/* 45% Width */}
    <RightColumn /> {/* 55% Width */}
  </div>
)

export default MyStoryPage
