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
        answer="Having both lived across the country, we didn't want to let location limit us to finding the perfect venue. We though Brinsop was the most beautiful, magical place, and we instantly fell in love with it."
      />
      <FAQ
        question="Should I drive to the church?"
        answer="The church has parking for about 15 cars at an absolute maximum. It would be sensible to park at Brinsop Court, and car share from there (2 min drive) if possible."
      />
      <FAQ
        question="What is the dress code?"
        answer="Formal wedding attire please."
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
