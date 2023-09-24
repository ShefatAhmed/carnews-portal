import HeroSlider from "./HeroSlider/HeroSlider.jsx";
import MustRead from "./MustRead/MustRead.jsx";
import Review from "./Review/Review.jsx";
import Trending from "./Trending/Trending.jsx";

const Home = () => {
  return (
    <main>
      <HeroSlider></HeroSlider>
      <Trending></Trending>
      <MustRead></MustRead>
      <Review></Review>
    </main>
  )
}
export default Home;