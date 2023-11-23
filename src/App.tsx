import Card from "./components/Card";

function App() {
   return (
      <div className="card-container">
         <Card
            head="TYPESCRIPT"
            title="Rvp-Frontend"
            updated="Last Updated:Jun 25, 2023"
            created="Created At:Jun 22,2023"
         />
         <Card
            head="TYPESCRIPT"
            title="Form-Validation-With-Zod"
            updated="Last Updated:Jun 18, 2023"
            created="Created At:Jun 17,2023"
         />
         <Card
            head="TYPESCRIPT"
            title="Lsqr-Offline-News-App"
            updated="Last Updated:Jun 18, 2023"
            created="Created At:Jun 17,2023"
         />
         <Card
            head="TYPESCRIPT"
            title="Lsqr-Offline-News-App"
            updated="Last Updated:Mar 18, 2023"
            created="Created At:Mar 27,2023"
         />
         <Card
            head="TYPESCRIPT"
            title="Lsqr-Configurable-Form"
            updated="Last Updated:Jun 18, 2023"
            created="Created At:Jun 17,2023"
         />
      </div>
   );
}

export default App;
