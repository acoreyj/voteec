import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";


import appStyleUrl from '~/styles/app.css';
import pageStyleUrl from '~/styles/page.css';
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Vote EC",
  viewport: "width=device-width,initial-scale=1",
});
export let links: LinksFunction = () => {
	return [
		{ rel: 'stylesheet', href: appStyleUrl },
    { rel: 'stylesheet', href: pageStyleUrl },
	];
};
export default function App() {
  return (
    <html className="md" lang="en" suppressHydrationWarning={true}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
