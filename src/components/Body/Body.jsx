import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Type from "../typing-animation/type";

const Body = () => {
  return (
    <div className="flex-1 bg-graphite flex flex-col items-center justify-center gap-4 px-4 py-8">
      <h1 className="font-display text-graphite-light text-4xl md:text-5xl text-center">
        hi, i&apos;m <span className="text-aloe underline decoration-1"><Type /></span>
      </h1>
      <p className="font-display text-graphite-light text-lg md:text-xl text-center max-w-2xl leading-relaxed">Call me whatever you want.</p>
      <div className="text-xl md:text-2xl text-graphite-light mb-6">:)</div>
      <div className="flex gap-6 md:gap-8">
        <a 
          href="souvikdbarma03@gmail.com" 
          aria-label="Email"
          className="text-graphite-light hover:text-white transition-colors duration-300 flex items-center gap-2 group relative"
        >
          <MdEmail className="text-2xl" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-desert">
            Email me
          </span>
        </a>
        <a 
          href="https://github.com/souvikdebbarma" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Github"
          className="text-graphite-light hover:text-white transition-colors duration-300 flex items-center gap-2 group relative"
        >
          <FaGithub className="text-2xl" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-desert">
            Visit Github
          </span>
        </a>
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-graphite-light hover:text-white transition-colors duration-300 flex items-center gap-2 group relative"
        >
          <FaLinkedin className="text-2xl" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-desert">
            Connect on LinkedIn
          </span>
        </a>
      </div>
    </div>
  )
}

export default Body