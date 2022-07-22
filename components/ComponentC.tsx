import * as React from 'react';
import { useContext } from 'react';
//ComponentCでuseContextを利用するためimportします。
import { UserCount } from '../App';
//App.jsでexportしたUserCountはここでimportする必要があります。
const ComponentC = () => {
  const count = useContext(UserCount);
  //useContextとUserCountを使ってvalueで設定した値を取り出し変数countに入れます。
  return (
    <div>
      <p>Componet C</p>
      <p>App.jsから受け取った値={count}</p>
    </div>
  );
};

export default ComponentC;
