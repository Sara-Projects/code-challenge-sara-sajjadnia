import "bootstrap/dist/css/bootstrap.css";
import CatList from "./components/CatList";
export default function App() {
 return (
  <>
   <div className="container mt-5">
    <div className="row ">
     <div className="col-6">
      <CatList />
     </div>
    </div>
   </div>
  </>
 );
}
