import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TaskBoard from "./Components/TaskBoard/TaskBoard";

const App = () => {
  return (
    <div>
      <Header></Header>

      <Banner></Banner>

      <TaskBoard></TaskBoard>

      <Footer></Footer>
    </div>
  );
};

export default App;
