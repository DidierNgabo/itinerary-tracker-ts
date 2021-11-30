import { useNavigate } from 'react-router';
const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="my-12 text-center">
      <p className="mt-10 font-mono font-semibold">
        this is a simple application which keeps notes of your tracks made using
        create-react-app,context api and typescript
      </p>
      <button
        className="p-2 bg-indigo-500 mt-5 text-white "
        onClick={handleClick}
      >
        Home
      </button>
    </div>
  );
};

export default About;
