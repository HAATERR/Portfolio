import React from 'react'

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is Enzo Reboredo, I am 20 years old and I am studying the last year of the University Technician of Development of Computer Applications in Argentina, located in Tandil, Buenos Aires.Currently studying and working in a restaurant and party hall, eager to work in what I really like.
        </p>

        <br />

        <p className="text-xl">
        I have a great goal, to dedicate myself and focus on being a good web developer. Always since I was a child I was very creative, and very curious, because of that, it made me interested in technology and passionate about this beautiful world that does not stop progressing, fortunately now I study to do what I really like to program, develop and design.
        </p>
      </div>
    </div>
  )
}

export default About