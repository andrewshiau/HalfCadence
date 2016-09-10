export const devices = {
  // mobile that is so small it's probably a vertical screen
  // probably not so aptly named
  tallmobile: '30rem',
  // normal mobile
  mobile: '50rem'
};

export function widerThan(width) {
  return `@media screen and (min-resolution: 1dppx) and (max-resolution: 1.9dppx) and (min-width: ${width}),` +
    `screen and (min-resolution: 2dppx) and (max-resolution: 2.9dppx) and (min-width: 2 * ${width}),` +
    `screen and (min-resolution: 3dppx) and (min-width: 3 * ${width})`;
}

export function narrowerThan(width) {
  return `@media screen and (min-resolution: 1dppx) and (max-resolution: 1.9dppx) and (max-width: ${width}),` +
    `screen and (min-resolution: 2dppx) and (max-resolution: 2.9dppx) and (max-width: 2 * ${width}),` +
    `screen and (min-resolution: 3dppx) and (max-width: 3 * ${width})`;
}
