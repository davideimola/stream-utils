import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { currentEvent } from '../utils/event';
import moment from 'moment';

function countdownFor(startTime: Date, time: Date): JSX.Element {
  const waitingTime = startTime.getTime() - time.getTime();
  if (waitingTime < 0) return <>IN LIVE!</>;
  return <>Live in { moment(moment.duration(waitingTime).asMilliseconds()).format('mm:ss') }</>;
}


function getGuestsList(): JSX.Element {
  return (
        <p className="text-gray-400 mt-4 text-3xl">
            con {currentEvent.guests.map((guest, index) => {
          if (index !== 0) return ` e ${guest.name}`;
          return guest.name;
        })}
        </p>
  );
}

const Scene = styled.div`
  height: 100vh;
  grid-template-rows: 1fr auto;
`;

export default function Home() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  });

  return (
        <Scene className="bg-gray-800 relative p-[100px]">
          <div className="flex-grow">
            <span className="text-gray-200 text-[130px] w-[200px] font-bold ml-20">
              {countdownFor(currentEvent.startTime, time)}
            </span>
              <h2 className="text-gray-200 text-8xl">{currentEvent.name}</h2>
              {currentEvent.guests.length !== 0 && getGuestsList()}
          </div>
        </Scene>
  );
}
