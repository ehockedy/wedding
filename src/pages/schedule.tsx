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
    <Event name="Arrival at church" time="13:00" />
    <Event name="Ceremony begins" time="13:30" />

  </div>;
};

export default SchedulePage;

export const Head: HeadFC = () => (
  <title>Rosie and Ed's Wedding - Schedule</title>
);
