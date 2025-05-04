'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageProps, MasonryGridProps } from './types'
import { X } from 'lucide-react'
import { throttle } from '@/lib/throttle'

const MasonryGrid: React.FC<MasonryGridProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null)
  const [columns, setColumns] = useState(3)
  const gridRef = useRef<HTMLDivElement>(null)

  // Function to calculate the number of columns based on viewport width
  const calculateColumns = useCallback(() => {
    if (typeof window === 'undefined') return 3
    const width = window.innerWidth
    return width < 640 ? 1 : width < 1024 ? 2 : 3
  }, [])

  useEffect(() => {
    setColumns(calculateColumns())

    const handleResize = throttle(() => {
      setColumns(calculateColumns())
    }, 200)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [calculateColumns])

  // Distribute images into columns
  const getColumnImages = useMemo(() => {
    const cols: ImageProps[][] = Array.from({ length: columns }, () => [])

    images.forEach((img, i) => cols[i % columns].push(img))
    return cols
  }, [images, columns])

  const handleImageClick = (image: ImageProps) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div ref={gridRef} className='w-full'>
      {/* Masonry Grid */}
      <div className='flex gap-4'>
        {getColumnImages.map((column, columnIndex) => (
          <div key={columnIndex} className='flex-1 flex flex-col gap-4'>
            {column.map((image, imageIndex) => (
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: imageIndex * 0.05 }}
                className='relative overflow-hidden rounded-lg cursor-pointer'
                onClick={() => handleImageClick(image)}
                whileHover={{ scale: 1.02 }}
                tabIndex={0}
                role='button'
                aria-label={`View ${image.alt}`}
                onKeyDown={(e) => e.key === 'Enter' && handleImageClick(image)}
              >
                <div
                  className='relative w-full aspect-[4/3]'
                  style={{ paddingBottom: `${(image.height / image.width) * 100}%` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading='lazy'
                    className='object-cover'
                    sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${100 / columns}vw`}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                    <p className='text-foreground text-sm font-medium'>{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className='relative max-w-4xl max-h-[90vh] flex items-center justify-center'
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={Math.min(selectedImage.width, 900)}
                height={Math.min(
                  selectedImage.height,
                  900 * (selectedImage.height / selectedImage.width)
                )}
                className='object-contain max-h-[80vh]'
              />
              <button
                className='absolute top-4 right-4 bg-background/50 text-foreground rounded-full p-2 hover:bg-opacity-70 transition-colors cursor-pointer'
                onClick={closeLightbox}
                aria-label='Close lightbox'
              >
                <X className='h-6 w-6' />
              </button>
              <div className='absolute bottom-0 left-0 right-0 bg-background/60 p-4 text-center text-sm font-semibold'>
                {selectedImage.alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MasonryGrid
