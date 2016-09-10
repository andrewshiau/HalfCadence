// media queries
// somehow not autoprefixed
// so prefixed to not break mobile

export const devices = {
  tallmobile: 400,
  mobile: 800
};

export function widerThan(width) {
  return `@media screen and (min-width: ${width}px)`;
}

export function narrowerThan(width) {
  return `@media screen and (max-width: ${width}px)`;
}
