/** @jsx jsx */
import { jsx } from "theme-ui";
import type { HeadFC } from "gatsby";

const FoodChoicesPage = () => {
    return (
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeWaGjWg3RFOM9B6vs8-XHXvcCMZ6pmyOlpzsAbB3HHej0ijA/viewform?embedded=true"
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

export default FoodChoicesPage;

export const Head: HeadFC = () => <title>Rosie and Ed's Wedding - Food choices</title>;