/** @jsx jsx */
import { jsx } from "theme-ui";
import type { HeadFC } from "gatsby";


const GiftRegistryPage = () => {
    const linkStyling = { fontSize: 3, mt: 5, color: "text", }

    return <div sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 3,
        textAlign: 'justify'
    }}>
        <div>
            Your presence at our wedding is more than enough. But if you would like to send us a gift, you can pick something from our online list linked below.
            The list contains a number of items as well as various amounts that contribute towards a honeymoon fund.
        </div>
        <a sx={linkStyling} href="https://www.weddingshop.com/GiftList/edwardandrosie" target="_blank">Click here to go to "The Wedding Shop" list</a>
    </div>;
};

export default GiftRegistryPage;

export const Head: HeadFC = () => (
    <title>Rosie and Ed's Wedding - Gift Registry</title>
);
