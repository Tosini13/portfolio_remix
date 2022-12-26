import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900",
      type: "text/css",
    },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Jakub Bartosik - Portfolio",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-poppins text-primary">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
