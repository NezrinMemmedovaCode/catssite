import {Helmet} from "react-helmet";
import "./Home.scss"
function Home() {
  return (
    <div className="home">
      <h1>Cats Site</h1>
      <img src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg" alt="" />
         <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            

      
    </div>
  )
}

export default Home
