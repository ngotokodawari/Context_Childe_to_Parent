import * as React from 'react';
import './style.css';
import { createContext } from 'react';
import ComponentA from './components/ComponentA';
export const UserCount = createContext();

export default function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React Hooksで子から親へデータを共有するサンプル</h1>
      <ul>
        <a href="https://reffect.co.jp/react/react-usecontext-understanding">
          参考元
        </a>
      </ul>
      App.jsから数字100をContext APIを利用してComponetCに渡す。
      <ul>1.App.js</ul>
      <ul>2.ComponentA</ul>
      <ul>3.ComponentB</ul>
      <ul>4.ComponentC</ul>
      <UserCount.Provider value={100}>
        <ComponentA />
      </UserCount.Provider>
    </div>
  );
}
