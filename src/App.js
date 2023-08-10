import Cards from "./Components/Cards";
import temple1 from './assets/temple1.jpg';
import temple2 from './assets/temple2.jpg';
import temple3 from './assets/temple3.jpg';
import temple4 from './assets/temple4.jpg';
import temple5 from './assets/temple5.jpg';
function App() {

let temples = [
  {
    id:1,
    extra:'active',
    image: temple1,
    name: 'Badrinath',
  },
  {
    id:2,
    extra:'',
    image: temple2,
    name: 'Kedarnath',
  },
  {
    id:3,
    extra:'',
    image: temple3,
    name: 'Gangotri',
  },
  {
    id:4,
    extra:'',
    image: temple4,
    name: 'Yamunotri',
  },
  {
    id:5,
    extra:'',
    image: temple5,
    name: 'Sidhbali'
  }
];
  return (
    <div className="App">
      <h1>Temples of Uttarakhand</h1>
      <Cards Temples={temples}/>
    </div>
  );
}

export default App;
