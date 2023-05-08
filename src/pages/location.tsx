/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui";
import stGeorgeChurch from "../images/stgeorge.jpg";
import brinsop from "../images/Brinsop-Court-1.webp";

const LocationPage = () => {
  const imgStyling: ThemeUIStyleObject = { height: "180px", my: 3, mx: 1 };
  const placeSectionStyling: ThemeUIStyleObject = {
    display: "flex",
    flexDirection: ["column", "row", null],
    alignItems: "center",
    justifyContent: "space-between",
    mt: [3, 5, null],
    width: "100%",
    a: {
      color: "text",
    },
  };
  const placeDescStyling: ThemeUIStyleObject = {
    maxWidth: "400px",
  };

  return (
    <main sx={{}}>
      <div>
        <h3>Location</h3>
        <div>
          The wedding will be taking place around Hereford, to which there are
          direct trains from places including London, Oxford, and Chester. The
          church and venue are a 20 minute drive from the City centre.
        </div>
      </div>
      <div sx={placeSectionStyling}>
        <div>
          <h3>Service</h3>
          <p sx={placeDescStyling}>
            Our service will be taking place at the quaint St. George's Church
            in Hereford. Parking is limited so please try to car share where
            possible.
          </p>
          <a href="https://goo.gl/maps/dusMqFxvfSfULNXf9" target="_blank">
            Click here to view in Google maps
          </a>
        </div>
        <img src={stGeorgeChurch} sx={imgStyling}></img>
      </div>
      <div
        sx={{
          ...placeSectionStyling,
          flexDirection: ["column-reverse", "row", null],
        }}
      >
        <img src={brinsop} sx={imgStyling}></img>
        <div
          sx={{
            textAlign: [null, "right", null],
          }}
        >
          <h3>Reception</h3>
          <p sx={{ ...placeDescStyling, textAlign: [null, "end", null] }}>
            The reception will be held only a short drive away at the beautiful
            Brinsop Court Manor. There is plenty of parking on site.
          </p>
          <a href="https://goo.gl/maps/hXVbpuY2zjCWztCSA" target="_blank">
            Click here to view in Google maps
          </a>
        </div>
      </div>
    </main>
  );
};

export const Head = () => <title>Rosie and Ed's Wedding - Location</title>;

export default LocationPage;
