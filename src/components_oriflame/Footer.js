import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="Footsy">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="containerT"
      >
        <div className="right">
          <ul className="vought1">
            <span>ORIFLAME CARE</span>
            <li>Support center</li>
            <li>Track your last order</li>
            <li>Returns and Claims</li>
          </ul>
          <ul className="vought2">
            <span>CORPORATE INFO</span>
            <li>Work With Us</li>
            <li>About Oriflame</li>
            <li>Sustainablility</li>
            <li>Investor Relations</li>
            <li>Oriflame.com</li>
          </ul>
          <ul className="vought3">
            <span>DISCOVER</span>
            <li>Oriflame Business Oportunity</li>
            <li>Oriflame Catalogue</li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="containerB"
      >
        <div className="float">
          <span className="topDawg">
            Oriflame is a leading beauty company selling direct. We are present
            in more than 60 countries, of which we are the<br></br> market leader in more
            than half. Oriflame has its origin in Sweden with corporate offices
            in Switzerland. We offer a<br></br> wide range of high-quality beauty
            products as well as a unique opportunity to join our sales force and
            start your<br></br> own business.
          </span>
          <span>Copyright 2023 Oriflame Cosmetics Global SA. All rights reserved.</span>
          <span className="u">Select Country</span>
        </div>
      </motion.div>
    </div>
  );
}
