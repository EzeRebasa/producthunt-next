import React from "react";
import Header from "./Header";
import { Global, css } from "@emotion/core";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --grey: #3d3d3d;
            --grey2: #6f6f6f;
            --grey3: #e1e1e1;
            --orange: #da552f;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            font-size: 1.6rem;
            line-height: 1.5;
            font-family: 'PT Sans', sans-serif;
          }

          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1, 5;
          }

          h1,h2 {
            font-family: 'Roboto Slab', serif;
            font-weight: 700;
          }

          h3 {
            font-family: 'PT Sans', sans-serif;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
          }
        `}
      />

      <Head>
        <html lang="en" />
        <title> Product Hunt Firebase and Next.js </title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI="
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;1,700&family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="/static/css/app.css" rel="stylesheet" />
        />

      </Head>

      <Header />

      <main>{props.children}</main>
    </>
  );
};

export default Layout;
