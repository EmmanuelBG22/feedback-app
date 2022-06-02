import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this Project</h1>
        <p>This is the app we have been using to practice react</p>
        <p>Version: 1.0.0</p>
        <Link to='/'>Back to Home</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
