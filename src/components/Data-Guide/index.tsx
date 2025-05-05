'use server'
import DataJourneyBody from './body'
import DataJourneyHeader from './header'

const DataGuidePage: React.FC = () => (
  <div className='flex flex-col min-h-screen'>
    <DataJourneyHeader />
    <DataJourneyBody />
  </div>
)

export default DataGuidePage
