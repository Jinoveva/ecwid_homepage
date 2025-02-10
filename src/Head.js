import './Head.css';
import 'boxicons';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './CustomNavbar';


function Head() {
  return (
    <div className="Head">
      <div className='nav-wrapper'>
           <CustomNavbar/>
      </div>
    </div>
  );
}

export default Head;
