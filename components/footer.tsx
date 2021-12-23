import styled from '@emotion/styled';
import { currentEvent } from '../utils/event';

const FooterStyled = styled.footer`
  border-top: 10px solid #ccc;
  height: 200px;
  padding: 20px;
  font-size: 20pt;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function getGuestsList(): JSX.Element {
  return (
        <p className="text-gray-400 mt-4 text-xl">
            con {currentEvent.guests.map((guest, index) => {
          if (index !== 0) return ` e ${guest.name}`;
          return guest.name;
        })}
        </p>
  );
}

export function Footer() {
  return (
    <FooterStyled className="bg-gray-900">
        <div>
            <h2 className="text-gray-200 text-3xl">{currentEvent.name}</h2>
            {currentEvent.guests.length !== 0 && getGuestsList()}
        </div>
    </FooterStyled>
  );
}
