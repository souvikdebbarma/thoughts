import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row md:justify-between bg-graphite-dark items-center py-6 px-20 md:px-72 gap-4 md:gap-0">
        <Link to="/" className="font-display font-bold text-desert text-xl hover:text-white transition-colors duration-300">
            souvikkk
        </Link>
        <nav>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8 font-display text-desert text-sm md:text-base">
                <li>
                    <Link to="/commonplace" className="hover:text-white hover:underline hover:decoration-1 transition-colors duration-300">
                    Commonplace Book
                    </Link>
                </li>
                <li>
                    <Link to="/posts" className="hover:text-white hover:underline hover:decoration-1 transition-colors duration-300">
                    Posts
                    </Link>
                </li>
                <li>
                    <Link to="/principles" className="hover:text-white hover:underline hover:decoration-1 transition-colors duration-300">
                    Principles
                    </Link>
                </li>
                <li>
                    <Link to="/questions" className="hover:text-white hover:underline hover:decoration-1 transition-colors duration-300">
                    Questions
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header