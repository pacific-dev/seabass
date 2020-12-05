import React from 'react';

export default {
  github: 'https://github.com/pacific-dev/seabass',
  titleSuffix: ' – Seabass',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Seabass</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        React Native primitive UI components.
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Seabass: React Native primitive UI components."
      />
      <meta
        name="og:description"
        content="Seabass: React Native primitive UI components."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta
        name="og:title"
        content="Seabass: React Native primitive UI components."
      />
      <meta name="apple-mobile-web-app-title" content="Seabass" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <> EPL-2.0 {new Date().getFullYear()} © Pacific Dev.</>,
};
