import './style.css';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInput = {
  name: string;
  age: number;
};

export default function App() {

  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        名前
        <input {...register('name', { required: true })} />
      </label>
      <label>
        年齢
        <input type='number' {...register('age', { required: true })} />歳
      </label>
      <button>送信する</button>
    </form>
  );
}

