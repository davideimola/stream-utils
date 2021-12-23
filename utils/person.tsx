export interface Person {
  name: string;
  image: string;
}

export const persons: { [key: string]: Person } = {
  davide_imola: {
    name: 'Davide Imola',
    image: '/davide_imola.jpg',
  },
};
