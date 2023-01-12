import Movie from "./Movie"
// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
// You can also destructure your props directly from the parameter list
export default function RecommendedMoviesDisplay({ movies }) {
  //function to return loaded JSX
  const loaded = () => {
    return (
      <>
        <h1>Similar Titles</h1>
        <div className="recommendedMoviesContainer">
          {movies.Search.map((element, index) => {
            return <Movie element={element} key={index} />;
          })}
        </div>
      </>
    );
  };

  //function to return loading JSX
  const loading = () => {
    return <h1>No Movies to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  return movies ? loaded() : loading();
}
