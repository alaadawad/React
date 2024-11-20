// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Post from "./post.js";
import SideMenu from "./sideMenu.js";
function App() {
  const posts = [
    { id: 1, title: "post one", body: "nice day" },
    { id: 2, title: "post tow", body: "nice day" },
    { id: 3, title: "post three", body: "nice day" },
    { id: 4, title: "post four", body: "nice day" },
    { id: 5, title: "post five", body: "nice day" },
    { id: 6, title: "", body: "" },
  ];
  const postList = posts.map((post) => {
    return <Post key={post.id} title={post.title} />;
  });
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* start post & side menu container */}
        <div
          style={{ display: "flex", width: "60%", justifyContent: "center" }}
        >
          {/* start post container */}
          <div style={{ width: "70%" }}>{postList}</div>

          {/* end post container */}

          {/* start side menu contanier */}
          <div style={{ width: "30%", marginTop: "25px" }}>
            <SideMenu />
          </div>
        </div>
        {/* end post & side menu container */}
      </div>
    </div>
  );
}

export default App;
