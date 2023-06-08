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
        answer="Guests will be coming from all around the country, so would have to travel anyway. We though Brinsop was the most beautiful, magical place, and we instantly fell in love with it."
      />
      <FAQ
        question="Should I drive to the church?"
        answer="The church has parking for about 15 cars at an absolute maximum. It would be sensible to park at Brinsop Court, and car share from there (2 min drive) if possible."
      />
      <FAQ
        question="What is the dress code?"
        answer="Formal wedding attire. Suites and summer dresses, that sort of thing."
      />
      <FAQ
        question="Are children allowed?"
        answer="Children of certain close family and friends may attend, we will have already spoken to you if it applies. Otherwise, please don't bring any children, especially ones that don't belong to you, for many reasons..."
      />
      <FAQ
        question="Should I eat lunch before the service?"
        answer="It would be sensible, but you won't be refused entry to the ceremony if you haven't."
      />
      <FAQ
        question="What if Eurovision is on the same day?!"
        answer="This is a very real possibility. If it is, we can only apologise. We will be just as distraught as you. However, a viewing party post wedding might well be on the cards!"
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
