module.exports = () => (hook, next) => {
  hook.result = [
    {
      id: 1,
      name: 'Bob',
      description: 'Some one'
    },
    {
      id: 2,
      name: 'Paul',
      description: 'Some one called Paul'
    },
    {
      id: 3,
      name: 'Mike'
    }
  ];

  next(null, hook);
};
