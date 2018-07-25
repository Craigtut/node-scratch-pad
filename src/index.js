import 'babel-polyfill';
import getCats from './test';

console.log('test');
getCats().then((cats) => {
  console.log(cats);

  const values = Object.values(cats);
  console.log(values);
});
