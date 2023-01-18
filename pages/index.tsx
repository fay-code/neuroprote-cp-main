import ButtonLink from 'components/atoms/Button/ButtonLink'
import Button from 'components/atoms/Button'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import { FiFigma, FiCode, FiBox } from 'react-icons/fi'

const Home = () => {
  interface Project {
    title: string
    imageSrc: string
    description: string
  }
  const projectList: Project[] = [
    {
      imageSrc: '/images/image-source-1.jpg',
      title: 'The Mobile App Landing Page',
      description: 'A landing page for mobile app',
    },
    {
      imageSrc: '/images/image-source-2.jpg',
      title: 'The Desktop App Landing Page',
      description: 'A landing page for desktop app',
    },
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
  return (
    <>
      <PageTemplate title="Home - Neuroprote">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="We Provide. We Develop. We Deliver. In The Same Day."
              description="Our job to make sure clients didn't wait. We deliver work as soon as possible. Even on the same day. We maintain our quality of work."
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Notify Us" href="/quote" />
            <ButtonLink
              value="Learn More"
              color="white"
              style="light"
              href="/about"
            />
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Design"
              description="The project interface will be designed first using Figma as our favorite tool."
              icon={<FiFigma />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Develop"
              description="Transform your design and business logic requirements. Choose the technology you want."
              icon={<FiCode />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Deliver"
              description="After finishing our works, we will send the project and all its assets to you."
              icon={<FiBox />}
            />
          </div>
        </section>
        {/* Logo List */}
        <LogoList />
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={'/images/how-we-work-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="Everything is well planned, well designed and structured"
              paragraph="Careful planning, developed and maintained by the best teams. We make sure to test projects before being delivered."
              badge="HOW WE WORK"
            />
          </aside>
        </section>
        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="We're a team of designers, engineers and analysts"
                paragraph="Our team consists of creative individuals. We are committed to maintaining quality work as well as performance. These creative people work together to create maximum work results."
                badge="OUR TEAM"
              />
              <ButtonLink
                value="See Our Teams"
                href="/about"
                size="small"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/team-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        {/* Our Projects */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="We have completed many amazing projects that you will not believe"
              badge="PROJECTS"
            />
          </div>
          <div className="grid place-items-center gap-16">
            <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
              {projectList.map((project) => {
                return (
                  <div className="basis-full lg:basis-1/2" data-aos="zoom-in-up">
                    <ProjectCard
                      imageSrc={project.imageSrc}
                      title={project.title}
                      description={project.description}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        {/* Prices */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="What do you need? Choose a service that can help you"
              badge="GET STARTED"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <div data-aos="fade-up-right">
              <PricingCard
                price="650$"
                title="UI Design"
                features={[
                  '10 design pages',
                  'Well-documented',
                  '4 revisions',
                  '$100/additional page',
                ]}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <PricingCard
                price="3500$"
                title="Development"
                features={[
                  'Web & Mobile',
                  'Well-documented',
                  '8 revisions',
                  '$500/additional page',
                ]}
              />
            </div>
            <div data-aos="fade-up-left">
              <PricingCard
                price="2400$"
                title="Maintenance"
                features={[
                  'Daily backup',
                  '4 hours of maintenance',
                  'Including fixing',
                  '$50/additional hour',
                ]}
              />
            </div>
          </div>
        </section>
        {/* Testimonial */}
        <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              title="What our clients say about our services"
              badge="TESTIMONIAL"
            />
          </div>
          <div className="w-full" data-aos="fade-up">
            <TestimonialList />
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default Home
