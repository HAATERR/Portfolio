import React from 'react'
import parallaxSlider from '../assets/portfolio/parallaxSlider.png'
import JsWeather from '../assets/portfolio/JsWeather.png'
import netflixClone from '../assets/portfolio/netflixClone.png'
import disneyClone from '../assets/portfolio/disneyClone.png'
import AnalyticsReact from '../assets/portfolio/AnalyticsReact2.0.png'
import LogInAnimated from '../assets/portfolio/LogInAnimated2.0.png'


const Portfolio = () => {
const portfolios = [
  {
    id: 1,
    src: JsWeather,
    href: "https://weatherappjs-enzo.netlify.app"
  },
  {
    id: 2,
    src: LogInAnimated
  },
  {
    id: 3,
    src: parallaxSlider
  },
 
  {
    id: 4,
    src: AnalyticsReact
  },
  {
    id: 5,
    src: disneyClone,
    href: "https://disney-clone-ff779.web.app/"
  },
  {
    id: 6,
    src: netflixClone
  },
]

  return (
    <div
    name="Portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, href }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <a href={href}>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              </a>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Portfolio