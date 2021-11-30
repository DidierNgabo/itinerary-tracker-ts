import {FC} from 'react';
interface IProps {
  social: {
      img:string,
      name: string,
    
  }
}

const Social:FC<IProps> = ({ social }) => {
  const {img,name} = social
  return (
    <div className="flex bg-gray-100 mt-6 p-4 items-start w-4/5 mx-auto justify-around">
      <img src={img} className="h-14 w-14 rounded-full" alt={name} />
      <li className="text-xl font-semibold text-center">{name}</li>
    </div>
  );
};

export default Social;
