/** @jsx jsx */
import { jsx } from "theme-ui";
import type { HeadFC } from "gatsby";

type EventProps = {
  name: string;
  time: string;
  info?: string;
}

const Event = ({ name, time, info }: EventProps) => <div sx={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  my: 3,
  fontSize: 18,
  textAlign: 'center',
}}>
  <div sx={{ fontWeight: 'bold' }} >{time}</div>
  <div>{name}</div>
  {info && <div sx={{ fontSize: 16, fontStyle: 'italic' }}>{info}</div>}
</div>

const SchedulePage = () => {
  return <div sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}>
    <Event name="Guests can arrive at Brinsop Court" time="12:00" info="Guests staying onsite can check in at this time and leave their bags at reception to be brought to their rooms" />
    <Event name="Arrival at St George's Church, Brinsop" time="13:00" />
    <Event name="Ceremony begins" time="13:30" />
    <Event name="Drinks Reception at Brinsop Court" time="15:00" info="Drinks and nibbles will be served, and there will be a seleciton of lawn games on, you guessed it, the lawn" />
    <Event name="Meal Begins" time="17:30" />
    <Event name="The Windy City Seven" time="19:00" info="Evening guests may arrive from now" />
    <Event name="Butler Jazz Band" time="20:45" />
    <Event name="DJ" time="22:00" />
    <Event name="Carriages" time="00:00" />

  </div>;
};

export default SchedulePage;

export const Head: HeadFC = () => (
  <title>Rosie and Ed's Wedding - Schedule</title>
);
