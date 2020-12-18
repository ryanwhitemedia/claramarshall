import React, { useEffect, useRef } from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import Link from "gatsby-link"
import throttle from "lodash.throttle"

import "slick-carousel/slick/slick.css"

import Arrow from "../../svgs/arrow.svg"

import "./featuredProjects.scss"

export default function FeaturedProjects({ projects }) {
  const sliderRef = useRef(null)
  const slickRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  }

  const scrollFunction = e => {
    const notScrollingVertical = e.deltaY <= 1 && e.deltaY >= -1
    if (slickRef.current) {
      if (e.deltaX > 0 && notScrollingVertical) {
        slickRef.current.slickNext()
      } else if (e.deltaX < 0 && notScrollingVertical) {
        slickRef.current.slickPrev()
      }
    }
  }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener(
        "wheel",
        throttle(e => {
          e.preventDefault()
          scrollFunction(e)
        }, 350),

        false
      )
    }
    return sliderRef.current.removeEventListener("wheel", scrollFunction)
  })

  return (
    <div className="FeaturedProjects" ref={sliderRef}>
      <Slider {...settings} ref={slickRef}>
        {projects.map(project => (
          <div key={project.node.slug} className="project">
            <Link to={`/project/${project.node.slug}`}>
              <div className="projectInner">
                <div />
                {project.node.featuredImage != null && (
                  <>
                    <span className="overlay" />
                    <span className="image">
                      <Img
                        fluid={
                          project.node.featuredImage.node.localFile
                            .childImageSharp.fluid
                        }
                      />
                    </span>
                  </>
                )}
                <div className="text">
                  <h2 className="title">{project.node.title}</h2>
                  <Arrow className="arrow" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}
