import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/garden.tsx'),
  route('home', 'routes/home.tsx'),
  route('aboutme', 'routes/aboutme.tsx'),
  route('patience', 'routes/placeholder.tsx')
] satisfies RouteConfig;
