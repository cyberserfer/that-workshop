const { ApolloServer, gql } = require("apollo-server-micro");
 
const schema = gql`
  type Speaker {
    id: ID!,
    firstname: String!,
    lastname: String!,
    title: String!,
    company: String!,
    avatar: String!,
    biography: String!
  }
  type Query {
    aboutMessage: String
    speakers: [Speaker!]!
  }
`;

const avatarUrl = "https://api.adorable.io/avatars/64/";
 
const resolvers = {
  Query: {
    aboutMessage: () => 'THAT Conference was founded by Clark Sell',
    speakers: () => [
      {
        id: 1,
        firstname: "Matt",
        lastname: "Reetz",
        title: "Software Engineer",
        company: "Headway",
        avatar: `${avatarUrl}matt`,
        biography: "Matt is a coding ninja."
      },
      {
        id: 2,
        firstname: "Tim",
        lastname: "Gremore",
        title: "Software Engineer",
        company: "Headway",
        avatar: `${avatarUrl}tim`,
        biography: "Tim is a coding wizard."
      }
    ]
  }
}
 
const apolloServer = new ApolloServer({ typeDefs: schema, resolvers });
 
export const config = {
  api: {
    bodyParser: false
  }
};
 
export default apolloServer.createHandler({ path: "/api/graphql" });
