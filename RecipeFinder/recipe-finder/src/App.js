import logo from './logo.svg';
import './App.css';
import RecipeCard from './components/RecipeCard/RecipeCard';

// so this main app puts it on the page. 
function App() {
  return (
    <div className='CardGrid'>
      <RecipeCard title="beef" image= "https://www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs-760x984.jpg" description="pork"/>
      <RecipeCard title= "Chicken" image="https://www.everydayfamilycooking.com/wp-content/uploads/2022/01/dino-nuggets-air-fryer4-683x1024.jpg" description="yum"/>
    </div>
  );
}


export default App;
