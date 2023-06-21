const world = 'world';

const hello = (who: string = world): string => {
  return `Hello ${who}! `;
}