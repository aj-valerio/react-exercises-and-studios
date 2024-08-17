import classes from './ChoresList.module.css';

export default function ChoresList () {
   const chores = ["Sweep floors", "Laundry", "Dishes", "Tidy up"];
   return (<div className = {classes.choresText}>
            <h3 className = {classes.choresHeading}>Chores List</h3>
               <ol>
                  <li>{chores[0]}</li>
                  <li>{chores[1]}</li>
                  <li>{chores[2]}</li>
                  <li>{chores[3]}</li>
               </ol>
         </div>
         );
}