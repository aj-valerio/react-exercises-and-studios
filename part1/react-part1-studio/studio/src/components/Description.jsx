import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/";
    let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/08/headshot-sally-green-shirt-600x600.jpg";
    let authorName = "Sally McKenney";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Sally McKenney smiling" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Sally's Baking Addiction</a> 
           </div>
        </div>
     );

     
}

class RecipeDescription extends React.Component {
    render(){
        return(
        <div> 
            <div>
                <h1>Chocolate Chip Cookies</h1>
                 <p>The best soft and chewy chocolate chip cookies</p>
            </div>
            <RecipeAuthor />
        </div>);
    }
}

export default RecipeDescription;