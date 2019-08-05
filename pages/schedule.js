import Layout from "../components/Layout";
import { ListGroup, ListGroupItem, Media } from "reactstrap";


const events = [
  {
    id: 1,
    title: "Conference Kickoff",
    description: "Conference Welcoming Party",
    speakerIds: ["2", "1"],
    start: "2019-08-23T21;00;00.000Z",
    hours: 1
  },
  {
    id: 2,
    title: "FullStack",
    description: "Learn a bunch",
    speakerIds: ["2"],
    start: "2019-08-23T19;00;00.000Z",
    hours: 1
  }
];

const Schedule = () => {
  return (
    <Layout>
      <h1 className="title">Speakers</h1>
      <ListGroup>
        {events.map(event => {
          return (
            <ListGroupItem className="justify-content-between">
              <Media>
                <Media heading>
                  {event.title}
                </Media>
              </Media>
            
                <Media body>
                  <Media>{event.description}</Media>
                  {event.speakerIds}
                </Media>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Layout>
  );
};

export default Schedule;