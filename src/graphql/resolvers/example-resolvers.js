module.exports = {
  Query: {
    examples: async (_, input, context) => {
      const { app } = context;
      const result = await app.service('example').find();
      return result;
    }
  }
};
