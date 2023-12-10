/** @jsx jsx */
import { jsx } from "theme-ui";
import type { HeadFC } from "gatsby";

type EventProps = {
  name: string;
  time: string;
}

const Event = ({ name, time }: EventProps) => <div sx={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  my: 3,
}}>
  <div sx={{ fontWeight: 'bold' }} >{time}</div>
  <div>{name}</div>
</div>

const SchedulePage = () => {
  return <div sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}>
    <Event name="Arrival at St George's Church, Brinsop" time="13:00" />
    <Event name="Ceremony begins" time="13:30" />
	<Event name="Drinks Reception at Brinsop Court" time="15:00" />
	<Event name="Meal Begins" time="17:30" />
	<Event name="The Windy City Seven" time="19:00" />
	<Event name="Butler Jazz Band" time="20:45" />
	<Event name="DJ" time="22:00" />
	<Event name="Carriages" time="00:00" />

  </div>;
};

export default SchedulePage;

export const Head: HeadFC = () => (
  <title>Rosie and Ed's Wedding - Schedule</title>
);
