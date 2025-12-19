function revealSantaRoute(routes) {
  if (routes.length === 0) {
    return [];
  }

  const route = [];

  let [currentCity, nextCity] = routes[0];
  route.push(currentCity);
  route.push(nextCity);

  while (true) {
    const foundRoute = routes.find(([from, to]) => from === nextCity);

    if (!foundRoute) {
      break;
    }

    [currentCity, nextCity] = foundRoute;
    route.push(nextCity);
  }

  return route;
}

module.exports = { revealSantaRoute };
