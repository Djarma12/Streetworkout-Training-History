import { css } from "styled-components";

/*
  600px - 37.5em
  900px - 56.2em
  1200px - 80em
  1800px - 112.5em
*/

export const mediaQueryValues = {
  phone: 600,
  tabPort: 900,
  // tabLand: 1200,
  // bigDesktop: 1800,
};

const mediaQueryManager = {
  phone: (...args) => css`
    @media only screen and (max-width: 37.5rem) {
      ${css(...args)};
    }
  `,
  tabPort: (...args) => css`
    @media only screen and (max-width: 56.2em) {
      ${css(...args)};
    }
  `,
  // tabLand: (...args) => css`
  //   @media only screen and (max-width: 75em) {
  //     ${css(...args)};
  //   }
  // `,
  // bigDesktop: (...args) => css`
  //   @media only screen and (min-width: 112.5em) {
  //     ${css(...args)};
  //   }
  // `,
};
export default mediaQueryManager;
