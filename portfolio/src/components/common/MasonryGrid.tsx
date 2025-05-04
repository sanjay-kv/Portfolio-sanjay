'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ImageProps, MasonryGridProps } from './types'

const MasonryGrid: React.FC<MasonryGridProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null)
  const [columns, setColumns] = useState(3)
  const gridRef = useRef<HTMLDivElement>(null)

  // Function to calculate the number of columns based on viewport width
  const calculateColumns = () => {
    const width = window.innerWidth
    if (width < 640) return 1          // Mobile
    if (width < 1024) return 2          // Tablet
    return 3                           // Desktop
  }

  // Update columns on resize
  useEffect(() => {
    const handleResize = () => {
      setColumns(calculateColumns())
    }

    // Initial setup
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Clean up
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Distribute images into columns
  const getColumnImages = () => {
    const columnImages: ImageProps[][] = Array.from({ length: columns }, () => [])

    images.forEach((image, index) => {
      const columnIndex = index % columns
      columnImages[columnIndex].push(image)
    })

    return columnImages
  }

  // Image click handler for lightbox
  const handleImageClick = (image: ImageProps) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden' // Prevent scrolling when lightbox is open
  }

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto' // Re-enable scrolling
  }

  return (
    <div ref={gridRef} className="w-full">
      {/* Masonry Grid */}
      <div className="flex gap-4">
        {getColumnImages().map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 flex flex-col gap-4">
            {column.map((image, imageIndex) => (
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: imageIndex * 0.1 }}
                className="relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => handleImageClick(image)}
                whileHover={{ scale: 1.02 }}
                tabIndex={0}
                role="button"
                aria-label={`View ${image.alt}`}
                onKeyDown={(e) => e.key === 'Enter' && handleImageClick(image)}
              >
                <div
                  className="relative aspect-auto"
                  style={{ paddingBottom: `${(image.height / image.width) * 100}%` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${100 / columns}vw`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-4xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={Math.min(selectedImage.width, 900)}
                height={Math.min(selectedImage.height, 900 * (selectedImage.height / selectedImage.width))}
                className="object-contain max-h-[80vh]"
              />
              <button
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-colors"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <p className="text-white text-center">{selectedImage.alt}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default MasonryGrid
