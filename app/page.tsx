import { Analytics } from "@vercel/analytics/react";
import jwt from 'jsonwebtoken';
import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  const secret = 'mysecretkey';
  const token = jwt.sign({ user: 'john.doe' }, secret, { expiresIn: '1h' });
  return (token);
  // return (
  //   <>
  //     <Home />
  //     {serverConfig?.isVercel && <Analytics />}
  //   </>
  // );
  return (token);
}
