import { Person, persons } from './person';

export interface Event {
  name: JSX.Element;
  host: Person;
  guests: Person[];
  startTime: Date;
}

export const currentEvent: Event = {
  name: (
      <span>
        Questo è il mio primo streaming
      </span>
  ),
  host: persons.davide_imola,
  guests: [persons.davide_imola, persons.davide_imola, persons.davide_imola],
  startTime: new Date('2021-12-23 18:22'),
};
