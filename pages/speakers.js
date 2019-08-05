import "bootstrap/dist/css/bootstrap.css";
import Layout from '../components/Layout';
import { ListGroup, ListGroupItem, Media } from "reactStrap";



const Speakers = () =>{

const speakersData = [
    {
        id: "1",
        firstname: "Matt",
        lastname: "Reetz",
        title: "Software Engineer",
        company: "Headway",
        email: "matt@headway.io"
    },
    {
        id: "2",
        firstname: "Paul",
        lastname: "Buss",
        title: "Software Engineer",
        company: "NM",
        email: "paulbuss@northwesternmutual.com"
    }
]

return (
  <Layout>
    <ListGroup>
        {speakersData.map(speaker => {
            return (
            <ListGroupItem className="justify-content-between">
                <Media>
                <Media body>
                <Media heading>
                    {`${speaker.firstname} ${speaker.lastname}`}
                    </Media>
                    <Media>
                    {speaker.title}
                    </Media>
                    {speaker.company}
                </Media>
                </Media>
            </ListGroupItem>
            );
        })}
    </ListGroup>
  </Layout>
);
};

export default Speakers;