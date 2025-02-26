import Container from '@/components/main/Container';

const AboutMe = () => {

  return (
    <Container>
      <h1 className="mb-25 text-4xl text-center font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-8xl">
        Hey there.
      </h1>

      <div className="relative flex flex-col items-center space-y-6 md:space-y-8 lg:flex-row lg:items-start lg:space-x-20 lg:space-y-0">
        <img src="/profile.jpg" alt="Profile image" className="w-full max-w-sm rounded-lg lg:w-1/3" />
        <div className="text-lg max-w-4xl text-left lg:w-2/3 md:text-2xl xl:text-4xl">
          <p className="mb-4">I'm "Boss" Kasidit Ruangmunjit, a Unity and backend developer in Thailand.</p>
          <p className="mb-4">
            I specialize in creating multiplayer games, building efficient APIs, and solving complex technical
            challenges.
          </p>
          <p>
            Currently, I'm expanding my expertise in backend engineering with TypeScript and Go, while continuing to
            develop high-performance game and web applications.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl px-4 lg:px-[15rem] py-12 mx-auto">
        <div className="w-2/5 mb-4">
          <h2 className="text-left text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 whitespace-nowrap">
            Programming Language
          </h2>
          <ul className="ml-8 space-y-3 list-disc md:text-2xl">
            <li>C#</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Go Lang</li>
            <li>Python</li>
            <li>PHP</li>
          </ul>
        </div>

        <div className="w-2/5 mb-4">
          <h2 className="text-left text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 whitespace-nowrap">
            Skills
          </h2>
          <ul className="ml-8 space-y-3 list-disc md:text-2xl">
            <li className="whitespace-nowrap">Git</li>
            <li className="whitespace-nowrap">Unity Development</li>
            <li className="whitespace-nowrap">Game Development</li>
            <li className="whitespace-nowrap">Multiplayer Game Development</li>
            <li className="whitespace-nowrap">REST API Design</li>
            <li className="whitespace-nowrap">Backend Development (PHP, Go (Gin), Node.js (Express, Bun, Elysia))</li>
            <li className="whitespace-nowrap">Database Management (MySQL, PostgreSQL, MongoDB)</li>
            <li className="whitespace-nowrap">Cloud Services (AWS, Google Cloud)</li>
            <li className="whitespace-nowrap">Frontend Development (React, Tailwind CSS)</li>
          </ul>
        </div>

        <div className="w-2/5 mb-4">
          <h2 className="text-left text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Social</h2>
          <ul className="space-y-3 md:text-2xl">
            <li className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 30 30" fill="white">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              <a href="#" className="text-blue-600 underline hover:bg-blue-600 hover:text-white">
                GitHub
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 50 50" fill="white">
                <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z"></path>
              </svg>
              <a href="#" className="text-blue-600 underline hover:bg-blue-600 hover:text-white">
                Facebook
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 50 50" fill="white">
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
              <a href="#" className="text-blue-600 underline hover:bg-blue-600 hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
