import './App.css';
import Cards from './components/cards/Card';

function App() {
  let images = ['https://images.olx.com.pk/thumbnails/300544859-240x180.webp', 'https://images.olx.com.pk/thumbnails/304920692-240x180.webp', 'https://images.olx.com.pk/thumbnails/305307211-240x180.webp', 'https://images.olx.com.pk/thumbnails/305315532-240x180.webp', 'https://images.olx.com.pk/thumbnails/305323889-240x180.webp', 'https://images.olx.com.pk/thumbnails/301511466-240x180.webp', 'https://images.olx.com.pk/thumbnails/279312329-240x180.webp', 'https://images.olx.com.pk/thumbnails/305323888-240x180.webp', 'https://images.olx.com.pk/thumbnails/274605378-240x180.webp', 'https://images.olx.com.pk/thumbnails/305323897-240x180.webp', 'https://images.olx.com.pk/thumbnails/237575595-240x180.webp', 'https://images.olx.com.pk/thumbnails/299922185-240x180.webp']
  let titles = ['Main Road Islamabad G-16 4', 'Salon Mirror with Tables', 'Iphone 7', 'samaung s8', 'Iphone 12', '2 Kanal House Lahore', 'Apple Watch', '5 Kanal House RawalPindi Ring Road', 'Dawlance Washing Machine', 'Yahmama Bike', 'Liberty Tower House', '1 Kanal House Lahore Ring Road Location']
  return (
    <div className='main_App'>
      <div className="App">
        <div className='margin'> <Cards image={images[0]} title = {titles[0]} price = {'Rs 7,000,000'} /></div>
        <div className='margin'> <Cards image={images[1]} title = {titles[1]} price = {'Rs 35,000'} /></div>
        <div className='margin'> <Cards image={images[2]} title = {titles[2]} price = {'Rs 30,000'} /></div>
        <div className='margin'> <Cards image={images[3]} title = {titles[3]} price = {'Rs 15,000'} /></div>
        <div className='margin'> <Cards image={images[4]} title = {titles[4]} price = {'Rs 90,000'} /></div>
        <div className='margin'> <Cards image={images[5]} title = {titles[5]} price = {'Rs 7,500,000'} /></div>
        <div className='margin'> <Cards image={images[6]} title = {titles[6]} price = {'Rs 3,500'} /></div>
        <div className='margin'> <Cards image={images[7]} title = {titles[7]} price = {'Rs 20,000,000'} /></div>
        <div className='margin'> <Cards image={images[8]} title = {titles[8]} price = {'Rs 25,000'} /></div>
        <div className='margin'> <Cards image={images[9]} title = {titles[9]} price = {'Rs 125,000'} /></div>
        <div className='margin'> <Cards image={images[10]} title = {titles[10]} price = {'Rs 3,500,000'} /></div>
        <div className='margin'> <Cards image={images[11]} title = {titles[11]} price = {'Rs 6,500,000'} /></div>
      </div>
    </div>
  );
}

export default App;
