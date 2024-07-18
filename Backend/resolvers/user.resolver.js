import { users } from "../dummyData/data.js";

const userResolver = {
  Query: {
    users: () => {
      return users;
    },
    user: (_, { userId }) => {
      return users.find((user) => users._id === userId);
    },
  },
  Mutation: {},
};

export default userResolver;
