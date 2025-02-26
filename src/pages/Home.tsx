import Container from '@/components/main/Container';
import { Link } from 'react-router';
import Card from './../components/shared/card/Card';
import { projects } from '@/data/project';

const Home = () => {
  const handleDownload = (fileName : string) => {
    const fileUrl = `/${fileName}`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Container>
      <div className="grid max-w-screen-xl px-4 py-12 mx-auto lg:gap-12 xl:gap-0 lg:py-30 lg:grid-cols-12">
        <div className="flex flex-col justify-center items-start lg:col-span-10">
          <Link to="/about" className="text-lg font-medium uppercase text-blue-600 hover:text-blue-400">
            Hello, my name is Boss
          </Link>
          <h1 className="max-w-9xl mb-6 text-3xl font-extrabold tracking-tight leading-tight md:text-5xl lg:text-7xl dark:text-white">
            I'm a Developer.
          </h1>
          <p className="max-w-9xl text-gray-500 dark:text-gray-400 md:text-lg lg:text-3xl">
            I'm a versatile developer with experience in Unity (C#), passionate about creating interactive games and
            efficient web applications. 🚀
          </p>

          <button
            onClick={() => handleDownload('Resume_Kasidit.pdf')}
            className="px-6 py-3 mt-10 text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg shadow-md font-semibold flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-3-3m3 3l3-3m-6 3h6M4 16h16" />
            </svg>
            Download My Resume
          </button>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 mx-auto">
        <h2 className="max-w-4xl mb-6 text-md font-extrabold tracking-tight leading-tight md:text-2xl xl:text-6xl dark:text-white">
          Projects
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-5 md:gap-15 justify-center">
          {projects &&
            projects.slice(0, 4).map((item: any, index: number) => (
              <li key={index} className="flex justify-center">
                <Card title={item.title} description={item.description} image={item.image} path={item.path} />
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
};

export default Home;
