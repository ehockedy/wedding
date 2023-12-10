/** @jsx jsx */
import { jsx } from "theme-ui";
import type { HeadFC } from "gatsby";

type FAQProps = {
  question: string;
  answer: string;
};
const FAQ = ({ question, answer }: FAQProps) => {
  return (
    <div sx={{ my: 3 }}>
      <div sx={{ fontWeight: "bold", mb: 0 }}>{question}</div>
      <div>{answer}</div>
    </div>
  );
};

const FAQPage = () => {
  return (
    <div>
      <FAQ
        question="Why are you getting married in Hereford?"
        answer="Having both lived in different places across the country, we didn't want to let location limit us to finding the perfect venue. We thought Brinsop was the most beautiful, magical place, and we instantly fell in love with it."
      />
      <FAQ
        question="Should I drive to the church?"
        answer="The church is a small countryside church, so parking is fairly limited. Depending on weather, the adjacent field may be available to use. As a precaution, please try to car share where possible (you can head to Brinsop Court, then share from there as it is a 2 min drive). We will update you if the parking situation changes and the extra parking is available."
      />
      <FAQ
        question="What is the dress code?"
        answer="Lounge suits and cocktail dresses"
      />
      <FAQ
        question="Will there be taxis available?"
        answer="Yes, we will pre-book some taxis from Brinsop which will leave at 00:15."
      />
      <FAQ
        question="Are children allowed?"
        answer="Children of certain close family and friends may attend, we will have already spoken to you if it applies. Otherwise, please don't bring any children, especially ones that don't belong to you..."
      />
      <FAQ
        question="Should I eat lunch before the service?"
        answer="It would be sensible, but you won't be refused entry to the ceremony if you haven't."
      />
      <FAQ
        question="Is there anything happening the evening before the wedding?"
        answer="Yes, we will be congregating for a drink in Hereford city centre, starting at The Green Dragon Hotel cocktail bar at around 8pm. Please contact Ed or Rosie to find out where we are on the night."
      />
      <FAQ
        question="Isn't Eurovision on the same day?!"
        answer="Yes, this is unfortunately the case. However, for those staying on site there is the possibility of a Eurovision afterparty."
      />
      <FAQ
        question="Which one is Rosie and which one is Ed?"
        answer="Rosie has the long brown hair and the big white dress. Ed is the other one."
      />
    </div>
  );
};

export const Head: HeadFC = () => <title>Rosie and Ed's Wedding - FAQs</title>;

export default FAQPage;
