import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon, ExternalLink, Github } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  technologies: string[]
  demoLink: string
  githubLink: string
  featured: boolean
}

interface CarouselProps {
  projects: Project[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  projects,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 350px;
    height: 480px;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `
  return (
    <section className="w-full space-y-4">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative mx-auto flex w-full flex-col">
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          className="w-full h-full object-cover"
                          alt={project.title}
                        />
                        
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-3 left-3">
                            <div className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white text-xs font-bold shadow-lg">
                              ⭐ Featured
                            </div>
                          </div>
                        )}

                        {/* Category Badge */}
                        <div className="absolute top-3 right-3">
                          <div className="px-3 py-1 bg-cyan-500/90 backdrop-blur-md rounded-full text-white text-xs font-medium">
                            {project.category === "web" ? "Web App" : "Mobile App"}
                          </div>
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6 space-y-4">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white truncate">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-300 text-sm leading-relaxed overflow-hidden" style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical'
                        }}>
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs font-medium rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs font-medium rounded-md">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-2">
                          <a
                            href={project.demoLink}
                            className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Demo
                          </a>

                          <a
                            href={project.githubLink}
                            className="flex-1 flex items-center justify-center px-4 py-2 bg-slate-700/50 border border-slate-600/50 text-slate-300 font-semibold rounded-lg text-sm hover:bg-slate-600/50 hover:text-white transition-all duration-300"
                          >
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
