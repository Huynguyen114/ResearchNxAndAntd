import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import 'antd/dist/antd.css';
import Authentication from '../component/Authentication/index';

export function App() {
  return (
    <div className="Root">
      <Authentication />
    </div>
  );
}

export default App;
