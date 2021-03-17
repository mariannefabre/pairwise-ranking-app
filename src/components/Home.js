import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const handleCreateNew = () => {
    dispatch({ type: "CREATE_NEW_QUESTIONNAIRE" });
  };

/*   const handleSeeExample = () => {}; */

  return (
    <div className="home">
      <h2 className="title">What is Pairwise Comparison?</h2>
      <div className="separator" />
      <h3>A decision making tool</h3>
      <p>
        When choosing between many different options, decisions can become
        challenging, especially if your choices are quite different from one
        another or if decision criterias are subjective.
      </p>
      <p>
        <span className="underline">
          <a
            title="Wikipedia: Pairwise Comparison"
            href="https://en.wikipedia.org/wiki/Pairwise_comparison"
            target="_blank"
            rel="noreferrer"
          >
            Pairwise Comparison is the process of comparing entities in pairs to
            judge which of each entity is preferred overall.
          </a>
        </span>
      </p>
      <p>
        This method helps you weigh the importance of a number of options and
        ease decision making process. It can also be useful to set
        priorities.
      </p>
      <p>
        One example is to decide the relative importance of qualifications,
        skills, experience and teamworking ability when hiring people for a new
        role.
      </p>
      {/*       <button className="button home-button" onClick={handleSeeExample}>
        <Link to="/form">
        See example
        </Link>
      </button> */}
      <Link to="/form">
        <button className="button" onClick={handleCreateNew}>
          Try it out!
        </button>
      </Link>
    </div>
  );
};

export default Home;
