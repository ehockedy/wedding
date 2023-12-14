/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui";
import stGeorgeChurch from "../images/stgeorge.jpg";
import brinsop from "../images/Brinsop-Court-1.webp";

type HotelLinkProps = {
  href: string;
  linkText: string;
};

const HotelLink = (props: HotelLinkProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      sx={{
        display: "inline",
        color: "text",
        my: 2,
      }}
    >
      {props.linkText}
    </a>
  );
};

type LocationSectionProps = {
  title: string,
  description: string,
  imageUrl: string,
  googleMapsUrl: string,
}

const LocationSection = ({ title, description, imageUrl, googleMapsUrl }: LocationSectionProps) => {
  const imgStyling: ThemeUIStyleObject = {
    height: "200px",
    my: 3,
    mx: 1
  };
  const placeSectionStyling: ThemeUIStyleObject = {
    display: "flex",
    flexDirection: ["column", "row", null],
    alignItems: ["center", "start", null],
    justifyContent: "space-between",
    my: [3, 4, null],
    width: "100%",
    a: {
      color: "text",
    },
    gap: ["8px", "40px", null],
  };
  const placeDescStyling: ThemeUIStyleObject = {
    maxWidth: "400px",
    textAlign: 'justify',
    my: 3,
  };

  return <div sx={placeSectionStyling}>
    <div>
      <h3 sx={{ fontSize: 4, my: 1 }}>
        {title}</h3>
      <p sx={placeDescStyling}>
        {description}
      </p>
      <a href={googleMapsUrl} target="_blank" sx={{ textAlign: 'right' }}>
        Click here to view in Google maps
      </a>
    </div>
    <img src={imageUrl} sx={imgStyling}></img>
  </div>
}

const LocationPage = () => {


  return (
    <main sx={{}}>
      <LocationSection
        title="Service"
        description="Our service will be taking place at the quaint St. George's Church in Hereford. Parking is limited so please try to car share where possible."
        imageUrl={stGeorgeChurch}
        googleMapsUrl="https://goo.gl/maps/dusMqFxvfSfULNXf9"
      />
      <LocationSection
        title="Reception"
        description="The reception will be held only a short drive away at the beautiful Brinsop Court Manor. There is plenty of parking on site."
        imageUrl={brinsop}
        googleMapsUrl="https://goo.gl/maps/hXVbpuY2zjCWztCSA"
      />

      <div sx={{ my: 4 }}>
        <h2>Accommodation</h2>
        <h3>Staying at Brinsop Court</h3>
        <div>
          There are some beautiful rooms available in the main house of Brinsop Court, as well as some luxurious glamping tents.
          Guests who stay here may attend the morning after breakfast with the bride and groom.
          Most of the rooms in the house share bathrooms with other rooms. The glamping tents have a shared toilet and shower block.
          <a
            href="https://rooms.brinsopcourt.com/availability/5A6934977"
            target="_blank"
            sx={{
              display: "block",
              color: "text",
            }}
          >
            Click here to go to the booking page
          </a>
          <div sx={{ marginTop: 3, fontSize: '14px' }}>
            You may see the Bridal Suite is still available to purchase. Don't worry, you are allowed to book this!
            We have chosen a different room in the house for our wedding night. Also note the bridal party will be
            using it to get ready in the morning.
          </div>
        </div>
        {/* <h3>On-site Glamping</h3>
        <div>
          Brinsop Glamping provides multiple on-site glamping tents, about a
          minute walk from where the party will finish. We have exclusive use of
          this site for the night of the wedding. Please note the toilets and
          washing facilities are shared campsite style.
          <a
            href="https://www.brinsopcourt.com/brinsop-court/glamping/"
            target="_blank"
            sx={{
              display: "block",
              color: "text",
            }}
          >
            Click here to go to the booking page
          </a>
        </div> */}
        <h3>Nearby Hotels</h3>
        <div>
          There are plenty of other places to stay in nearby Hereford:
        </div>
        <span>Check out </span>
        <HotelLink
          href="https://www.tripadvisor.co.uk/Hotel_Review-g186302-d676921-Reviews-Premier_Inn_Hereford_Holmer_Hotel-Hereford_Herefordshire_England.html"
          linkText="Premier Inn Hereford"
        />
        <span>, </span>
        <HotelLink
          href="https://www.tripadvisor.co.uk/Hotel_Review-g186302-d627512-Reviews-Travelodge_Hereford-Hereford_Herefordshire_England.html"
          linkText="Travelodge Hereford"
        />
        <span>, or </span>
        <HotelLink
          // href="https://www.tripadvisor.co.uk/Hotels-g186302-Hereford_Herefordshire_England-Hotels.html"
          href="https://www.tripadvisor.co.uk/Hotels-g186302-Hereford_Herefordshire_England-Hotels.html?staydates=2024_5_11_2024_5_1"
          linkText="see more hotels in Hereford"
        />
        <span> on the world's largest travel site.</span>
        <div sx={{ fontSize: 2, my: 4 }}>
          Don't forget to leave a Tripadvisor review or you'll make Ed sad.
        </div>
      </div>
    </main>
  );
};

export const Head = () => <title>Rosie and Ed's Wedding - Location</title>;

export default LocationPage;
