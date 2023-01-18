import Text from 'components/atoms/Text'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
interface ImageCardProps {
  imageSrc: string
}
const ImageCard = ({
  imageSrc
}: ImageCardProps) => {
  const container: React.LegacyRef<HTMLDivElement> = useRef(null)
  const [imageSize, setImageSize] = useState({ width: 450, height: 450 })
  useEffect(() => {
    if (container.current?.clientWidth !== undefined) {
      setImageSize({
        width: container.current?.clientWidth,
        height: container.current?.clientWidth / 1.5,
      })
    }
    window.addEventListener('resize', () => {
      if (container.current?.clientWidth !== undefined) {
        setImageSize({
          width: container.current?.clientWidth,
          height: container.current?.clientWidth / 1.5,
        })
      }
    })
  }, [])
  return (
    <div className="w-full space-y-8" ref={container}>
      <Image
        width={imageSize.width}
        height={imageSize.height}
        src={imageSrc}
        quality={80}
        className='rounded-xl'
        alt='Blog Thumbnail'
      />
    </div>
  )
}

export default ImageCard
export type {ImageCardProps}