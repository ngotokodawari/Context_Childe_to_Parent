import * as React from 'react';
import './style.css';
import ComponentA from './components/ComponentA';
export default function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React Hooksで子から親へデータを共有するサンプル</h1>
      <a href="https://reffect.co.jp/react/react-usecontext-understanding">
        参考元
      </a>
      <ComponentA />
    </div>
  );
}
