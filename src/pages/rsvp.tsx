/** @jsx jsx */
import { jsx } from "theme-ui";
import type { HeadFC } from "gatsby";

const RSVPPage = () => {
  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSeEBa1SVWAyG6Qw7ivSxwG6ma6Q1kNYi3pI82k9eWSqP6avYQ/viewform?embedded=true"
      height="465px"
      sx={{
        border: "none",
        width: ["94vw", "100%", "100%"],
      }}
    >
      Loading…
    </iframe>
  );
};

export default RSVPPage;

export const Head: HeadFC = () => <title>Rosie and Ed's Wedding - RSVP</title>;
