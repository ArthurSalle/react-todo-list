import './Title.css';

const Title = ({ type, title }) => {
  switch (type) {
    case 'h1':
      return (
        <h1 className='h1 text-5xl	text-center my-10 text-white'>{title}</h1>
      );
    case 'h2':
      return <h2 className='h2 text-2xl ml-4	text-white'>{title}</h2>;
    case 'h3':
      return <h3 className='h3'>{title}</h3>;
    case 'h4':
      return <h4 className='h4'>{title}</h4>;

    default:
      return <h1 className='h1'>{title}</h1>;
  }
};

export default Title;
