import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import ImageCard from 'components/molecules/Card/ImageCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'

const ProjectDetail = () => {
  interface Project {
    title: string
    imageSrc: string
    description: string
  }

  interface Image {
    imageSrc: string
  }

  const projectList: Project[] = [
    {
      imageSrc: '/images/image-source-3.jpg',
      title: 'Simple Mobile Blog App',
      description: 'A blog app on mobile platform',
    },
    {
      imageSrc: '/images/image-source-4.jpg',
      title: 'Realtime Chat App UI Design',
      description: 'A UI design for realtime chat app',
    },
  ]

  const Image = {
      imageSrc: '/images/image-source-2.jpg'
    }

  return (
    <PageTemplate title='Project Detail - Neuroprote'>
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="PROJECT DETAIL"
            title="The Desktop App Landing Page"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <aside data-aos="fade-up-right">
              <div className="basis-full lg:basis-1/2" key={randomString(64)}>
                <ImageCard
                  imageSrc={Image.imageSrc}
                />
              </div>
        </aside>
        <aside className="grid gap-12 place-content-center" data-aos="fade-up-left">
          <Text
            textStyle="SectionParagraph"
            value="Our latest desktop project application named Nimbot. developed according to our client request using C++ as foundation programming language and data provided by our client."
          />
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Text value="CATEGORY" textStyle="ProjectDetailLabel" />
              <Text value="Development" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="CLIENT" textStyle="ProjectDetailLabel" />
              <Text value="Acme, Inc" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="TECHNOLOGY" textStyle="ProjectDetailLabel" />
              <Text
                value="C++, Oracle"
                textStyle="ProjectDetailValue"
              />
            </div>
          </div>
        </aside>
      </section>
      <LineDivider />
      <section className="grid gap-16 place-items-center">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
          <PageSentence
            badge="PROJECT DETAIL"
            title="The Desktop App Landing Page"
          />
        </div>
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div className="basis-full lg:basis-1/2" key={randomString(64)} data-aos="zoom-in-up">
                <ProjectCard
                  imageSrc={project.imageSrc}
                  title={project.title}
                  description={project.description}
                />
              </div>
            )
          })}
        </div>
      </section>
    </PageTemplate>
  )
}

export default ProjectDetail
