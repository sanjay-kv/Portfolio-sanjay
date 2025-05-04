import { memo } from 'react'
import { TabId, TabsNavigationProps } from '../types'

const TabsNavigation: React.FC<TabsNavigationProps> = memo(
  ({ tabs, activeTab, handleTabClick }) => (
    <nav className='flex mb-10 overflow-x-auto pb-2 py-2 px-2' aria-label='Portfolio categories'>
      <div role='tablist' className='flex space-x-2 min-w-max' aria-orientation='horizontal'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id as TabId)}
            className={`px-4 py-2 cursor-pointer rounded-full text-sm sm:text-md md:text-lg transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-foreground'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            role='tab'
            id={`tab-${tab.id}`}
            aria-controls={`panel-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-label={`Show ${tab.label} items`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  )
)

TabsNavigation.displayName = 'TabsNavigation'
export default TabsNavigation
