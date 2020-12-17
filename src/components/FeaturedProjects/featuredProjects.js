import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"

import "slick-carousel/slick/slick.css"

import Arrow from "../../svgs/arrow.svg"

import "./featuredProjects.scss"

export default function FeaturedProjects({ projects }) {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <div className="FeaturedProjects">
      <Slider {...settings}>
        {projects.map(project => (
          <div key={project.node.slug} className="project">
            <div className="projectInner">
              <div />
              {project.node.featuredImage != null && (
                <span className="image">
                  <Img
                    fluid={
                      project.node.featuredImage.node.localFile.childImageSharp
                        .fluid
                    }
                  />
                </span>
              )}
              <div className="text">
                <h2 className="title">{project.node.title}</h2>
                <Arrow className="arrow" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
