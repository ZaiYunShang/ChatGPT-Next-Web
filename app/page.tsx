import { Analytics } from "@vercel/analytics/react";
import * as jwt from 'jsonwebtoken';
import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  const payload = { username: 'exampleuser', role: 'admin' };
  const secret = 'mysecretkey';
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  // return (
  //   <>
  //     <Home />
  //     {serverConfig?.isVercel && <Analytics />}
  //   </>
  // );
  return (token);
}
