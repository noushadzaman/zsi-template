export const routes = [
  {
    name: "Home",
    url: "/#",
  },
  {
    name: "About",
    url: "/#",
  },
  {
    name: "Services",
    url: "/#",
    childRoutes: [
      {
        name: "Corporate Travel",
        url: "/#",
      },
      {
        name: "Airport Transfer",
        url: "/#",
      },
      {
        name: "Weddings Service",
        url: "/#",
      },
      {
        name: "Exclusive Town Car",
        url: "/#",
      },
      {
        name: "Cruise transportation",
        url: "/#",
      },
      {
        name: "Homecoming prom",
        url: "/#",
      },
      {
        name: "Night out transportation",
        url: "/#",
      },
      {
        name: "Bachelor party transfer",
        url: "/#",
      },
      {
        name: "Hourly Transportation",
        url: "/#",
      },
    ],
  },
  {
    name: "Fleet",
    url: "/",
  },
  {
    name: "Get A Quote",
    url: "/",
  },
  {
    name: "Contact",
    url: "/",
  },
  {
    name: "Rate",
    url: "/",
    childRoutes: [
      {
        name: "LGA limo rates",
        url: "/",
      },
      {
        name: "JFK Limo Rates",
        url: "/",
      },
      {
        name: "EWR Limo Rates",
        url: "/",
      },
      {
        name: "Hourly Rate",
        url: "/",
      },
    ],
  },
  {
    name: "Driver login",
    url: "/",
  },
];
