import './App.css';
import Navbar from '../src/components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Paintings from './components/pages/Paintings';
import About from './components/pages/About';
import Abstract_1 from './components/pages/Watercolors/Abstract_1';
import Abstract_2 from './components/pages/Watercolors/Abstract_2';
import Abstract_3 from './components/pages/Watercolors/Abstract_3';
import Abstract_4 from './components/pages/Watercolors/Abstract_4';
import Abstract_5 from './components/pages/Watercolors/Abstract_5';
import Abstract_6 from './components/pages/Watercolors/Abstract_6';
import AJ_1 from './components/pages/Watercolors/AJ_1';
import AJ_2 from './components/pages/Watercolors/AJ_2';
import America from './components/pages/Watercolors/America';
import Asbury_1 from './components/pages/Watercolors/Asbury_1';
import Asbury_2 from './components/pages/Watercolors/Asbury_2';
import Asbury_3 from './components/pages/Watercolors/Asbury_3';
import Asbury_4 from './components/pages/Watercolors/Asbury_4';
import Asbury_5 from './components/pages/Watercolors/Asbury_5';
import Asbury_6 from './components/pages/Watercolors/Asbury_6';
import Asbury_Life from './components/pages/Watercolors/Asbury_Life';
import Avon_1 from './components/pages/Watercolors/Avon_1';
import Avon_2 from './components/pages/Watercolors/Avon_2';
import Balcony from './components/pages/Watercolors/Balcony';
import Balls from './components/pages/Watercolors/Balls';
import BelmarBridge from './components/pages/Watercolors/BelmarBridge';
import Bermuda from './components/pages/Watercolors/Bermuda';
import Birch_1 from './components/pages/Watercolors/Birch_1';
import Birch_2 from './components/pages/Watercolors/Birch_2';
import Bluejays from './components/pages/Watercolors/Bluejays';
import Bluewhale from './components/pages/Watercolors/Bluewhale';
import CardsPainting from './components/pages/Watercolors/CardsPainting';
import Boat_1 from './components/pages/Watercolors/Boat_1';
import Boat_2 from './components/pages/Watercolors/Boat_2';
import Boat_3 from './components/pages/Watercolors/Boat_3';
import Cosmos_Queen from './components/pages/Watercolors/Cosmos_Queen';
import Butterflys from './components/pages/Watercolors/Butterflys';
import Flowers from './components/pages/Watercolors/Flowers';
import Allegience from './components/pages/Watercolors/Allegience';
import Edgewater_1 from './components/pages/Watercolors/Edgewater_1';
import Edgewater_2 from './components/pages/Watercolors/Edgewater_2';
import Frosty from './components/pages/Watercolors/Frosty';
import House_1 from './components/pages/Watercolors/House_1';
import Italy from './components/pages/Watercolors/Italy';
import Landscape_1 from './components/pages/Watercolors/Landscape_1';
import Landscape_2 from './components/pages/Watercolors/Landscape_2';
import Landscape_3 from './components/pages/Watercolors/Landscape_3';
import KoiFish from './components/pages/Watercolors/KoiFish';
import Lighthouse from './components/pages/Watercolors/Lighthouse';
import Nativity from './components/pages/Watercolors/Nativity';
import OG_Nagles from './components/pages/Watercolors/OG_Nagles';
import OG_Tents from './components/pages/Watercolors/OG_Tents';
import OT_Tower from './components/pages/Watercolors/OT_Tower';
import OU_5th from './components/pages/Watercolors/OU_5th';
import Pathway from './components/pages/Watercolors/Pathway';
import Ribbon from './components/pages/Watercolors/Ribbon';
import Sail_1 from './components/pages/Watercolors/Sail_1';
import Sail_2 from './components/pages/Watercolors/Sail_2';
import Sail_3 from './components/pages/Watercolors/Sail_3';
import Sail_4 from './components/pages/Watercolors/Sail_4';
import Sail_5 from './components/pages/Watercolors/Sail_5';
import Sail_6 from './components/pages/Watercolors/Sail_6';
import Sail_7 from './components/pages/Watercolors/Sail_7';
import Sandyhook from './components/pages/Watercolors/Sandyhook';
import Seascape from './components/pages/Watercolors/Seascape';
import Shawnee from './components/pages/Watercolors/Shawnee';
import TerrisArch from './components/pages/Watercolors/Arch';
import Umbrellas from './components/pages/Watercolors/Umbrellas';
import Wave_1 from './components/pages/Watercolors/Wave_1';
import Wave_2 from './components/pages/Watercolors/Wave_2';
import Wave_3 from './components/pages/Watercolors/Wave_3';
import Bones from './components/pages/Watercolors/Bones';
import Victory from './components/pages/Watercolors/Victory';
import York_Beach from './components/pages/Watercolors/York_Beach';
import Zodiac_1 from './components/pages/Watercolors/Zodiac_1';
import Zodiac_2 from './components/pages/Watercolors/Zodiac_2';
import Beach_1 from './components/pages/Watercolors/Beach_1';
import Birch_3 from './components/pages/Watercolors/Birch_3';
import Landscape_4 from './components/pages/Watercolors/Landscape_4';
import Navy_1 from './components/pages/Watercolors/Navy_1';
import Sunset from './components/pages/Watercolors/Sunset';
import Sail_8 from './components/pages/Watercolors/Sail_8';

// properly configures p pages (im using the layout system)
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
    <ScrollToTop/>
    
      <Navbar />
      <Switch>
        <Route path = '/' exact component={ Home } />
        <Route path = '/paintings' component={ Paintings }/>
        <Route path = '/about' component={ About }/>
        {/* ADDING ROUTES FOR PRODUCT PAGES */}
        <Route path = '/Abstract_1' component={ Abstract_1 }/>
        <Route path = '/Abstract_2' component={ Abstract_2 }/>
        <Route path = '/Abstract_3' component={ Abstract_3 }/>
        <Route path = '/Abstract_4' component={ Abstract_4 }/>
        <Route path = '/Abstract_5' component={ Abstract_5 }/>
        <Route path = '/Abstract_6' component={ Abstract_6 }/>
        <Route path = '/AJ_1' component={ AJ_1 }/>
        <Route path = '/AJ_2' component={ AJ_2 }/>
        <Route path = '/America' component={ America }/>
        <Route path = '/Asbury_1' component={ Asbury_1 }/>
        <Route path = '/Asbury_2' component={ Asbury_2 }/>
        <Route path = '/Asbury_3' component={ Asbury_3 }/>
        <Route path = '/Asbury_4' component={ Asbury_4 }/>
        <Route path = '/Asbury_5' component={ Asbury_5 }/>
        <Route path = '/Asbury_6' component={ Asbury_6 }/>
        <Route path = '/Asbury_Life' component={ Asbury_Life }/>
        <Route path = '/Avon_1' component={ Avon_1 }/>
        <Route path = '/Avon_2' component={ Avon_2 }/>
        <Route path = '/Balcony' component={ Balcony }/>
        <Route path = '/Balls' component={ Balls }/>
        <Route path = '/BelmarBridge' component={ BelmarBridge }/>
        <Route path = '/Bermuda' component={ Bermuda }/>
        <Route path = '/Birch_1' component={ Birch_1 }/>
        <Route path = '/Birch_2' component={ Birch_2 }/>
        <Route path = '/Bluejays' component={ Bluejays }/>
        <Route path = '/Bluewhale' component={ Bluewhale }/>
        <Route path = '/CardsPainting' component={ CardsPainting }/>
        <Route path = '/Boat_1' component={ Boat_1 }/>
        <Route path = '/Boat_2' component={ Boat_2 }/>
        <Route path = '/Boat_3' component={ Boat_3 }/>
        <Route path = '/Cosmos_Queen' component={ Cosmos_Queen }/>
        <Route path = '/Butterflys' component={ Butterflys }/>
        <Route path = '/Flowers' component={ Flowers }/>
        <Route path = '/Allegience' component={ Allegience }/>
        <Route path = '/Edgewater_1' component={ Edgewater_1 }/>
        <Route path = '/Edgewater_2' component={ Edgewater_2 }/>
        <Route path = '/Frosty' component={ Frosty }/>
        <Route path = '/House_1' component={ House_1 }/>
        <Route path = '/Italy' component={ Italy }/>
        <Route path = '/Landscape_1' component={ Landscape_1 }/>
        <Route path = '/Landscape_2' component={ Landscape_2 }/>
        <Route path = '/Landscape_3' component={ Landscape_3 }/>
        <Route path = '/KoiFish' component={ KoiFish }/>
        <Route path = '/Lighthouse' component={ Lighthouse }/>
        <Route path = '/Nativity' component={ Nativity }/>
        <Route path = '/OG_Nagles' component={ OG_Nagles }/>
        <Route path = '/OG_Tents' component={ OG_Tents }/>
        <Route path = '/OT_Tower' component={ OT_Tower }/>
        <Route path = '/OU_5th' component={ OU_5th }/>
        <Route path = '/Pathway' component={ Pathway }/>
        <Route path = '/Ribbon' component={ Ribbon }/>
        <Route path = '/Sail_1' component={ Sail_1 }/>
        <Route path = '/Sail_2' component={ Sail_2 }/>
        <Route path = '/Sail_3' component={ Sail_3 }/>
        <Route path = '/Sail_4' component={ Sail_4 }/>
        <Route path = '/Sail_5' component={ Sail_5 }/>
        <Route path = '/Sail_6' component={ Sail_6 }/>
        <Route path = '/Sail_7' component={ Sail_7 }/>
        <Route path = '/Sandyhook' component={ Sandyhook }/>
        <Route path = '/Seascape' component={ Seascape }/>
        <Route path = '/Shawnee' component={ Shawnee }/>
        <Route path = '/TerrisArch' component={ TerrisArch }/>
        <Route path = '/Umbrellas' component={ Umbrellas }/>
        <Route path = '/Wave_1' component={ Wave_1 }/>
        <Route path = '/Wave_2' component={ Wave_2 }/>
        <Route path = '/Wave_3' component={ Wave_3 }/>
        <Route path = '/Bones' component={ Bones }/>
        <Route path = '/Victory' component={ Victory }/>
        <Route path = '/York_Beach' component={ York_Beach }/>
        <Route path = '/Zodiac_1' component={ Zodiac_1 }/>
        <Route path = '/Zodiac_2' component={ Zodiac_2 }/>
        <Route path = '/Beach_1' component={ Beach_1 }/>
        <Route path = '/Birch_3' component={ Birch_3 }/>
        <Route path = '/Landscape_4' component={ Landscape_4 }/>
        <Route path = '/Navy_1' component={ Navy_1 }/>
        <Route path = '/Sunset' component={ Sunset }/>
        <Route path = '/Sail_8' component={ Sail_8 }/>
      </Switch>
      </Router>
    </>

  );
}

export default App;
