import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("job/:identifier", "routes/jobInfo.tsx"),
] satisfies RouteConfig;
