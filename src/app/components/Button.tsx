import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return <div className='flex justify-center'>
    <button {...rest} className='border-solid border-2 rounded-full bg-blue-900 text-white font-bold shadow-lg shadow-blue-400 px-10 mt-6 hover:bg-slate-400'>
    {label}</button>
    </div>
};

export default Button;
