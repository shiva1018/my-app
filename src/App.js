// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


export default
 function App() {
   const movies=[{
     name:"Bahubali",
     pic:"http://4.bp.blogspot.com/-0DP59ul6L0c/Vb27XgsfoBI/AAAAAAAABM8/a4pBX2oJKRw/s1600/Muse%2B74_Movie%2BReview_Bahubali2.jpg",
      Rating:'5/5',
      Summary:'Its a tale of two cousins in the Kingdom of Mahishmati, India. Balla fights his way with cousin Baahubali for the throne. Young Shivudu grows in the tribes and travels to the distant lands above the waterfalls to fall in love with the beautiful Tamanna, the tribal warrior and helps in her quest to rescue Devasena a prisoner from the claws of King Balla. In this quest he finds out that the legendary King Baahubali is his father and Devasena the prisoner is his mother from the slave commander in chief Katappa of King Balla. Katappa narrates to Shivudu about the legends of his father Baahubali and the epic battle by the brothers Balla and Baahubali against the cruel king who attacks the Mahishmati Kingdom, in this battle Baahubali is crowned as the king by Sivagami as she thinks he is more worthier to the throne. This strengthen Balla s hatred towards his brother king Baahubali.'
    },
    { name:"Avengers",
     
     pic:"https://uploads.dailydot.com/2020/08/avengers-5.jpg?fm=pjpg&ixlib=php-3.3.0",
      Rating:'4.5/5',
      Summary: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...The grave course of events set in motion by Thanos, that wiped out half the universe and fractured the Avengers ranks, compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films - Avengers: Endgame.After half of all life is snapped away by Thanos, the Avengers are left scattered and divided. Now with a way to reverse the damage, the Avengers and their allies must assemble once more and learn to put differences aside in order to work together and set things right. Along the way, the Avengers realize that sacrifices must be made as they prepare for the ultimate final showdown with Thanos, which will result in the heroes fighting the biggest battle they have ever faced."},
      
      {
        name:"Dhoom-3",
        pic:"https://www.yashrajfilms.com/images/default-source/Movies/Dhoom-3/dhoom-3_mobile.jpg?sfvrsn=8",
        Rating:'4.5/5',
        Summary:"When Sahir, a circus entertainer trained in magic and acrobatics, turns into a thief to take down a corrupt bank in Chicago that ruined his father, Indian officers Jai and Ali are called to catch him.The favourite Indian action franchise is back. This time Jai Dixit (Abhishek Bachchan) and Ali (Uday Chopra) return to match their wits with the enigmatic clown thief, Sahir (Aamir Khan), who has the city of Chicago in his thrall. In this battle of revenge and dignity, the lines blur and the conventional definition of good and bad don't apply. Watch a spectacle that will thrill you and move you.The favourite Indian action franchise is back with a bang. This time Jai Dixit (Abhishek Bachchan) and Ali (Uday Chopra) return to match their wits with the enigmatic clown thief, Sahir (Aamir Khan), who has the city of Chicago in his thrall. The pursuit that ensues is thrilling, entertaining and emotional by turns. It is a journey that will test all the players to their breaking point, where the game of chess played between Sahir and Jai will never be won until all the secrets have been unlocked. In this battle of revenge and dignity, the lines blur and the conventional definition of good and bad don't apply anymore. Prepare to watch a spectacle that will thrill you and move you.The Great Indian Circus owner Iqbal Haroon Khan is unable to save his circus after failing to repay his loan his son Sahir pleads the banker Alexander of Western Bank of Chicago that soon things will be changed but he is heartless Iqbal takes a gun an shoots himself in front of Sahir.23 years later Sahir is robbing all the branches of the bank as a revenge to his father's death inspector Jai Dixit and his aide Ali are called from India to solve the case.Sahir re starts The Great Indian Circus an appoints Aaliya as new entertainer he is very much aware of Jai and Ali could eye his next move but plans his robbery smartly where Jai shoots Sahir at the back.Jai is very much sure of shooting Sahir and goes to arrest Sahir at the circus but he has no such gunshot on his body."
      },
      {
      name:"Sahoo",
      pic:"https://otakukart.com/wp-content/uploads/2020/04/Saaho3.jpeg",
      Rating:'4.5/5',
      Summary:"An undercover cop becomes embroiled in a battle with warring criminals who want to acquire a black box, their ultimate key to a treasure..This action thriller is about a power battle which is taking place in the higher echelons of power unrelated and unconnected episodes occurring in different parts of the globe, Intertwine in an unforeseen manner to a revelation of mind games. The story delves the audience into the game of a brilliant master mind to reveal the true nature of all that are involved. It challenges the perceptions of who is the hunter and who is the hunted."
    },
    {
      name:"vakeel saab",
      pic:"https://www.mirchi9.com/wp-content/uploads/2021/04/Pre-release-Business-ReportWhat-Vakeel-Saab-Needs-To-Be-A-Hit.jpg",
      Rating:'5/5',
      Summary:"Three girls find themselves accused of attempt to murder after escaping molestation. Their only hope is an alcoholic lawyer who agrees to take up the case.."
    },
    {
      name:"Maharshi",
      pic:"https://images.indianexpress.com/2018/12/mahesh-babu-759.jpg",
      Rating:'5/5',
      Summary:"Rishi, a millionaire businessman, returns to his homeland, where he becomes the champion of poor and downtrodden farmers."
    }]
      
      return ( 
<div className="App">
    

     {movies.map((ms =><Msg name={ms.name} pic={ms.pic} summary={ms.Summary} rating={ms.Rating}/>
     
     ))}
    </div>
  );
}
 
function Msg({name, pic,summary,rating}){

  return (
   
<div>
  <img className="Movie-pic" src={pic} alt={name}/>
  <h1 className="Movie-name">Title: {name} </h1>
  <p className="summary"><h2 class="head">SUMMARY:-</h2>{summary}</p>
  <h1 className="movie-rating">Rating: {rating}</h1>
  </div>

  )
}