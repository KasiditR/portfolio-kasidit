import { useState } from 'react';
import { Link } from 'react-router';
import Container from './Container';

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="w-full z-20 top-0 start-0 pt-10">
      <Container className="max-w-screen-xl flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/profile.jpg"
            className="size-12 rounded-full"
            alt="Profile Logo"
          />
          <span className="text-xl font-semibold dark:text-white">Kasidit</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpened(!isOpened)}
          className="lg:hidden p-2 size-12 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-expanded={isOpened}
        >
          <span className="sr-only">
            {isOpened ? 'Close menu' : 'Open menu'}
          </span>
          <div className="relative w-6 h-6">
            <svg
              className={`absolute transition-transform duration-300 ${
                isOpened ? 'scale-0 rotate-180' : 'scale-100 rotate-0'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Hamburger (☰) Icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              className={`absolute transition-transform duration-300 ${
                isOpened ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Close (✖) Icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex space-x-6 text-gray-600 dark:text-gray-300 font-medium">
          {navigation.map((item: any, index: number) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`px-4 py-2 border-b-2 transition ${
                  currentTab === index
                    ? 'text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                    : 'border-transparent hover:text-gray-800 hover:border-gray-300 dark:hover:text-white'
                }`}
                onClick={() => setCurrentTab(index)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>

      {/* Mobile Navigation (Dropdown) */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpened ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-2 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          {navigation.map((item: any, index: number) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`block p-3 rounded-md text-center ${
                  currentTab === index
                    ? 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => {
                  setCurrentTab(index);
                  setIsOpened(false);
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
