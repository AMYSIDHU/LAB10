
import './App.css';
import Header from './Header.js';
import WorkExperienceCard from './WorkExperienceCard';
import EducationCard from './EducationCard';
import TechnologySummaryCard from './TechnologySummaryCard';
function App() {
  return (

    <div className="App">
      <Header />

    <main className="container">
        <div className="row mt-3">
            <div className="col-md">
            <WorkExperienceCard/> 
            </div>

            <div className="col-md">
               <EducationCard/>
               </div>
                </div>
        <div className="row mt-3">
            <div className="col-md mb-5">
            <TechnologySummaryCard />
            </div>
        </div>
    </main>
    </div>
  );
}

export default App;
