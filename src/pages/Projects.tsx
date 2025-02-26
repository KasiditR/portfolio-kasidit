import Container from '@/components/main/Container';
import Card from '@/components/shared/card/Card';
import { projects } from '@/data/project';

const Projects = () => {
  return (
    <Container className="flex flex-col items-center text-center">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Projects
      </h1>
      <p className="mb-6 text-lg text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
        We are committed to leveraging technology and innovation to create sustainable solutions that drive growth and
        long-term value.
      </p>
      <div className='max-w-screen-xl px-4 py-12 mx-auto'>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-5 md:gap-15">
          {projects &&
            projects.map((item: any, index: number) => (
              <li key={index} className="flex justify-center">
                <Card title={item.title} description={item.description} image={item.image} path={item.path} />
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
};

export default Projects;
