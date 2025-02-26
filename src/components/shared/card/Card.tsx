type CardProps = {
  title: string;
  description: string;
  image: string;
  path?: string;
};

const Card = ({ image, title, description, path }: Readonly<CardProps>) => {
  return (
    <a
      href={path || '#'}
      className="relative block w-full h-[300px] bg-white rounded-2xl dark:bg-gray-800 overflow-hidden transition-transform duration-300 hover:scale-105 group"
      target="_blank"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-2xl transition-opacity duration-300 group-hover:opacity-80"
      />
      <div className="absolute inset-0 rounded-2xl p-4 flex flex-col justify-start transition-all duration-300 bg-black/80 lg:bg-black/0 lg:group-hover:bg-black/80 lg:bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]">
        <h3 className="text-left text-2xl font-bold text-white">{title}</h3>
        <div className="text-left text-sm leading-6 text-white opacity-100 lg:opacity-0 lg:translate-y-4 lg:transition-all lg:duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
          {description}
        </div>
      </div>
    </a>
  );
};

export default Card;
