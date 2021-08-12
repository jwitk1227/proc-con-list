import "./styles.css";
import List from "./components/List";

export default function App() {
  const listTitles = ["ventura", "Other one"];

  return (
    <div className="App">
      <h1>Pros/Cons List</h1>
      <div className="lists">
        {listTitles.map((title, index) => {
          return (
            <List
              key={`${index}${new Date().getTime()}`}
              className="list"
              title={title}
            />
          );
        })}
      </div>
    </div>
  );
}
