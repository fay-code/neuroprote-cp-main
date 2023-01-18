import ButtonLink from 'components/atoms/Button/ButtonLink'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Text from 'components/atoms/Text'
interface ProjectCardProps {
  imageSrc: string
  title: string
  description: string
}
const ProjectCard = ({
  title,
  description,
  imageSrc
}: ProjectCardProps) => {
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
    <div className="w-full" ref={container}>
      <div className="">
        <Image
          width={imageSize.width}
          height={imageSize.height}
          src={imageSrc}
          quality={80}
          className='rounded-xl'
          alt='Project Thumbnail'
        />
      </div>
      <div className="flex flex-col place-items-center text-center mt-10">
        <div className="mb-2.5">
          <Text value={title} textStyle="ProjectTitle" />
        </div>
        <div className="mb-9">
          <Text value={description} textStyle="ProjectDescription" />
        </div>
        <div className="">
          <ButtonLink
            value="Detail"
            color="white"
            radius="pill"
            style="outline"
            href="/project/detail"
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
export type {ProjectCardProps}