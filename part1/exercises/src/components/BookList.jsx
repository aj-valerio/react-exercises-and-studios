import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "A Few Good Books";
   let book1 = "https://i.thriftbooks.com/api/imagehandler/m/E493B7A5112C0D038981A6B69091FDEDAAB0ECD5.jpeg";
   let book2 = "https://charlesagvent.cdn.bibliopolis.com/pictures/005830.jpg?auto=webp&v=1573226981";
   let book3 = "https://m-etropolis.com/onceuponatime/wp-content/uploads/sites/13/2011/04/TIGER.jpg";

   return (
      <div>
         <h3 class={classes.booksHeading}>{pageTitle}</h3>
            <img class={classes.bookImage} src={book1} alt="Cover art of Sarah Galvin's 'Ugly Time' depicting the inside of a bouncy castle" />
            <img class={classes.bookImage} src={book2} alt="Cover art of 'The Road to Wellville' by T.C. Boyle showing a field of wheat" />
            <img class={classes.bookImage} src={book3} alt="Cover art of Tea Obreht's 'The Tiger's Wife', a black background with the lower half of a tiger at the top" />
      </div>      
   );
}