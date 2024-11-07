

const CommonplaceBook = () => {
  return (
    <div className="flex-1 bg-graphite px-20 md:px-72 py-8 flex flex-col">
      <h1 className="text-desert text-5xl font-bold mb-6 py-4">Commonplace Book</h1>
      <div>
        <ul className="text-desert space-y-2 list-disc pl-8">
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a href="https://medium.com/@gazijarin.ai/chaos-theory-understanding-randomness-3c1e514ea420" className="underline hover:text-white transition-colors duration-300">Chaos Theory: Understanding Randomness</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a href="https://howmanyplants.com/" className="underline hover:text-white transition-colors duration-300">How Many Plants</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a href="#" className="underline hover:text-white transition-colors duration-300">How Weird Places</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a href="#" className="underline hover:text-white transition-colors duration-300">Some phase intersections of devices code you absolutely love</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a href="#" className="underline hover:text-white transition-colors duration-300">Classic Development Laws</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a href="#" className="underline hover:text-white transition-colors duration-300">Mindful Development</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a href="#" className="underline hover:text-white transition-colors duration-300">Secrets about life&apos;s boxes</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a href="#" className="underline hover:text-white transition-colors duration-300">Things people consider meaningless</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a href="#" className="underline hover:text-white transition-colors duration-300">The things you keep putting aside you know nothing about, do them Always.</a>
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span>
            <a href="#" className="underline hover:text-white transition-colors duration-300">The Little things</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CommonplaceBook