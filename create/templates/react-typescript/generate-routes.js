module.exports = (options) => {
  const { template } = options;

  if (template === 'blank') {
    return [];
  }
  const routes = ['/user', '/form', '/dynamic-route', '/about', '/404'];
  if (template === 'tabs') {
    routes.push(...['/catalog', '/settings']);
  }
  return routes;
};
