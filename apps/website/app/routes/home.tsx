import type { MetaFunction } from 'react-router';
import { Welcome } from '../welcome/welcome';

export const meta: MetaFunction = () => {
  return [{ title: 'Home' }, { name: 'description', content: 'You ended up here' }];
};

export default function Home() {
  return <Welcome />;
}
