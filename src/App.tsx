// import { useEffect, useState } from "react";

// interface Joke {
//   id: number;
//   type: string;
//   setup: string;
//   punchline: string;
// }

// function App() {
//   const [joke, setJoke] = useState<Joke>();

//   useEffect(() => {
//     const fetchJoke = async () => {
//       const response = await fetch(
//         "https://official-joke-api.appspot.com/jokes/general/random"
//       );
//       const jsonBody: Joke[] = await response.json();
//       setJoke(jsonBody[0]);
//     };

//     fetchJoke();
//   }, []);

//   // useEffect(() => {
//   //   fetch("https://official-joke-api.appspot.com/jokes/general/random")
//   //     .then(response => response.json())
//   //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
//   // }, [])

//   return (
//     <>
//       <h1>Joke app</h1>
//       {joke && (
//         // This is a conditional rendering strategy
//         //  using 'short-circuiting': if the left-hand
//         //  side of an && is false, then JavaScript
//         //  doesn't bother to evaluate the right-hand
//         //  side (since the overall expression is false
//         //  regardless)
//         //
//         // Exploiting that feature to conditional render JSX!
//         <>
//           <p>
//             <b>{joke.setup}</b>
//           </p>
//           <p>
//             <i>{joke.punchline}</i>
//           </p>
//         </>
//       )}
//     </>
//   );
// }

// export default App;

//Kanye West API

import { useEffect, useState } from "react";



function App() {
  const [quote, setQuote] = useState<string>();

  // useEffect(() => {
  //   const  fetchQuote= async () => {
  //     const response = await fetch(
  //       "https://api.kanye.rest/"
  //     );
  //     const jsonBody: {quote: string}= await response.json();
  //     setQuote(jsonBody.quote);
  //   };

  //   fetchQuote();
  // }, []);

  useEffect(() => {
    fetch("https://api.kanye.rest/")
      .then(response => response.json())
      .then((jsonBody: {quote: string}) => setQuote(jsonBody.quote));
  }, [])

  return (
    <>
      <h1>Kanye West Quote app</h1>
      {quote && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            "<em>{quote}</em>" -Kanye West
          </p>

        </>
      )}
    </>
  );
}

export default App;
