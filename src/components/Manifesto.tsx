import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Manifesto = () => {
  const ManifestoItems = [
    {
      key: 1,
      header: "1. Contact that moves you",
      text: "One on one, eye to eye, the moment and the message. A meeting of the mind as well as spirit should once again become a central ingredient in marketing. Where meeting people is the true art.",
    },
    {
      key: 2,
      header: "2. Refocus, and see with new eyes",
      text: "Successes are not achieved, even though they are often claimed, by masters in finance. A success is an opportunity into a reality. And there are opportunities everywhere: waiting to be realised. Look carefully, and <u>with new eyes</u>, that's often when you'll be able to make them work for you.",
    },
    {
      key: 3,
      header: "3. Becoming yourself",
      text: "	These days people are wired and networked; what they haven't yet discoverd for themselves, they can learn form others. Essential knowledge is reached by conversations and discussion. All the demands made on you to be alert and sharp make it even more crucial that you see clearly, say what you mean, and become who you are. There's nothing more wonderful than evolution.",
    },
    {
      key: 4,
      header: "4. See, discover, experience",
      text: "The trend of providing \"bread and circus\" as content, presented as an \"experience\", persists. The product and the film. The product and the musical. The performance and the master class. The theme of an event is increasingly a meaningful and ideally unforgettable encounter. But the added value of 'content' is only achieved once the 'delivery' is experienced.",
    },
    {
      key: 5,
      header: "5. Joyful wonder",
      text: "My open eyes have served me well all these years. I look at everything around me, of course, but especially at people, their position, attitudes and behaviours in their world. I make contact with them with my eyes, and it's without doubt my post pleasant discovery and one I hold dear. My wish is for everyone to open their eyes this way.",
    },
    {
      key: 6,
      header: "6. Build stories around feelings",
      text: "Success comes with friendship. A story built around feelings packs a punch. The tone and the house style, expressed in words and rhythms, forms and images, attitude and behaviour, determine the sincerity and durabilty of our friendships.",
    },
    {
      key: 7,
      header: "7. Get close",
      text: "Marketing can't be done from a distance, nor purely on the basis of rationality. Marketing takes place on your doorstep, on the street, at markets and other gathering places. Only there will you run into people who can see, feel, taste, consider and buy your product or service. Get close! Look in their eyes, look at their facial expressions, their body language. Listen to what they're saying and what they're not. Then take it from there.",
    },
    {
      key: 8,
      header: "8. Go deep",
      text: "Superficiality is not an option. Quality is the measure, with all it implies, of knowledge, skill, inspiration, motivation and healthy pride. From these deepest sources come individuality, strength, and self-confidence. We can't do it any other way.",
    },
    {
      key: 9,
      header: "9. Give your all",
      text: "Sometimes - quite often, actually - it's all about giving everything to the job at hand: our complete self-confidence, energy and optimism. When an organisation creates a climate of trust and confidence, that kind of 'esprit de corps' and teamwork comes from the heart and flourishes.",
    },
    {
      key: 10,
      header: "10. Ask the right questions",
      text: "The simplest questions are often the most important: who, what, why, when, how do you feel, are you satisfied and would you do it again if you had the chance? People will eagerly respond to others who are sincerely interested. Digging for treasure can be that easy.",
    },
    {
      key: 11,
      header: "11. True colours",
      text: "We are bombarded by marketing on every conrner, turning colourful streets into dull thoroughfares. What realy matters to the success of a brand is a marketing strategy and messages that are solid through their diversity, consistency and authenticity.",
    },
    {
      key: 12,
      header: "12. Let your VOICE be heard!",
      text: "More and more, people are turning their backs on clever marketing strategies. This is not a trend but a mass movement. VOICE = say what you mean in your own term: be expressive and imaginative.",
    },
    {
      key: 13,
      header: "13. What is good, and what feels good",
      text: "Business and institutions should work at convincing their clients that their feelings can be trusted. When something feels right, it usually is, and there's nothinh better than that. Yes, that first 'gut' connection and response is often 'for always'.",
    },
    {
      key: 14,
      header: "14. The art of life",
      text: "In order to maintain well-being and enjoy the Art of Living, you must first master the Art of Giving. That's easier said than done, because it requires an investment of time, effort and money. And of yourself.",
    },
    {
      key: 15,
      header: "15. Embrace the details",
      text: "The bigger picture consists of many points and lines. Without the details, you may as well forget the larger picture. It's ironic beacause the lower people sit in the organisation, the more important the details of what they do and how they do it. It is here and nowhere else that the reputation of your organisation, product or trademark is determined.",
    },
    {
      key: 16,
      header: "16. Invest in internal strength",
      text: "External impact emerges from internal strength. Invest in internal strength, unity and connection, inspiration and motivation, recognition and appreciation. This is also the best investment in durable external impact. When people grow, their business ventures flourish.",
    },
    {
      key: 17,
      header: "17. Leaders with a future",
      text: "Leaders with a future take enough time for CONTACT and emotion: the meeting itself, speaking as well as listening between the lines - this applies to marketeers as well as people in their markets.",
    },
    {
      key: 18,
      header: "18. Roots and wings",
      text: "Companies who misjudge or deny their DNA cannot possibly get the best from the range and power of their wings.",
    },
    {
      key: 19,
      header: "19. Be open to unique cv's",
      text: "Dare to work with people who are unique and have colourful cv's - who are adventurous and edgy. People who have an aesthatic, who know how to find harmony, and the balance in between.",
    },
    {
      key: 20,
      header: "20. Trust worthy",
      text: "Beware of fads that are like balloons: all surface, no substance, and ready to go up in the air. Restoring trust between marketeers and their target groups is a matter of attitude, actions and a sincere interest.",
    },
    {
      key: 21,
      header: "21. You reap what you sow",
      text: "When we are not loyal to our clients, their employees and suppliers, we shouldn't expect to rely on loyalty and commitment from them. It doesn't work that way.",
    },
    {
      key: 22,
      header: "22. It's all about people",
      text: "Take off thos blinders! Resist laziness and take the extra steps. Reject arrogance and work from the heart. Be alert to indifference... it's all about people.",
    },
    {
      key: 23,
      header: "23. Person to person",
      text: "Equal footing is essential. Brands and marketeers should never think they are superior to their target groups. Imposed prescriptions from marketeers don't work; their clients will not work with them.",
    },
    {
      key: 24,
      header: "24. It begins with the human touch",
      text: "Every day I know one thing for sure: without humanity, enduring success in business is unthinkable. Anyone who thinks different will be bullied by things like shareholder values, and a momentary joy that lasts but a short while. There's no more juice in a squeezed lemon.",
    },
    {
      key: 25,
      header: "25. Trust yourself",
      text: "Distrust blueprints, the 'tried and true'. trust your sharp eye for people, their attitudes and behaviour. Focus on the bigger picture with en eye for detail. The turn what you see with those new eyes into achievements you can look on with pride.",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section">
      {/* <a href="#" className="collapse">
          Collapse
        </a> */}
      <header>
        <h1>Manifesto</h1>
        <h2>
          Pim van den Berg’s Manifesto on The Future of Streetology
          <br />
          Take off those Blinders!
        </h2>
        <div className="manifesto-download">
          <Router>
            <Link
              to="/FN_Outlook 2013_p34-37_pimvandenberg.pdf"
              target="blank"
              download
            >
              Download manifesto
            </Link>
          </Router>
        </div>
      </header>

      {/* <a
          href="http://perspectives.nl/media/WEBSITE_01_MANIFESTO.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Download Manifesto</strong>
        </a> */}
      <button
        className="manifesto-button"
        onClick={() => setIsOpen(isOpen ? false : true)}
      >
        {isOpen ? "Close Manifest" : "Open Manifest"}
      </button>
      <motion.header
        initial={false}
        animate={{
          scale: isOpen ? "100%" : "0%",
          display: isOpen ? "inline-block" : "none",
        }}
      >
        <ul>
          {ManifestoItems.map((item) => {
            return (
              <li>
                <div className="manifesto-header" key={item.key}>
                  <strong>{item.header}</strong>
                </div>
                <div className="manifesto-text"></div>
                <p>{item.text}</p>
              </li>
            );
          })}
          <li>
            <p>
              In close cooperation with Rob Smelt
              <br />i <a href="http://www.smelten.nl/">www.smelten.nl</a>
            </p>
          </li>
        </ul>
      </motion.header>
    </div>
  );
};
export default Manifesto;
