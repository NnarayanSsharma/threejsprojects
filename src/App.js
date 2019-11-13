import React from 'react';
import './App.css';
import DemoThreeJS from './components/DemoThreeJS';
import DemoMoreGeometryExam from './components/DemoMoreGeometryExam';
import DebugerMode from './components/DebugerMode';
import DemoUdemyCourse from './components/DemoUdemyCourse';
import Saturn from './components/Saturn';
import LatheGeometry from './components/LatheGeometry';
import CustomGeometry from './components/CustomGeometry';
import TextDemo from './components/TextDemo'
import StarWars from './components/StarWars';
import BasePlateDemo from './components/BasePlateDemo';

function App() {
  return (
    <div className="App">
      <h1>React THREEjs Demo</h1><hr/>
      {/* <DemoThreeJS/> */}
      {/* <DemoMoreGeometryExam/> */}
      {/* <DebugerMode/> */}
      {/* <DemoUdemyCourse/> */}
      {/* <Saturn/> */}
      {/* <LatheGeometry/> */}
      {/* <CustomGeometry/> */}
      {/* <TextDemo/> */}
      <BasePlateDemo />
      {/* <StarWars/> */}
    </div>
  );
}

export default App;
