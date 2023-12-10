/** @jsx jsx */
import { jsx } from "theme-ui";
import type { HeadFC } from "gatsby";


const GiftRegistryPage = () => {
    const linkStyling = { fontWeight: 'bold', fontSize: 3, mt: 3 }

    return <div sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 3
    }}>
        {/* <div>
            Your presence at our wedding is more than enough. But if you would like to send us a gift, you can pick one of the following options:
        </div>
        <a sx={linkStyling}>John Lewis gift list</a>
        <a sx={linkStyling}>Honeymoon fund contribution</a> */}
        <div sx={linkStyling}>
            We greatly appreciate your eagerness to give a little something! We're currently working on compliling our wedding wish list, so please check back later when we'll have links to the wish list as well as a honeymoon fund page.
        </div>
    </div>;
};

export default GiftRegistryPage;

export const Head: HeadFC = () => (
    <title>Rosie and Ed's Wedding - Gift Registry</title>
);
