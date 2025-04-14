import DataJourneyBody from "./body";
import DataJourneyHeader from "./header";

const DataGuidePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <DataJourneyHeader />
      <DataJourneyBody />
    </div>
  );
}

export default DataGuidePage;
