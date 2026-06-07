import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

import Home from "./pages/home/HomePage";

import "./App.css";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLanding(false);
    }, 2000);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {showLanding && (
          <motion.div
            className="landing-screen"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 0.95,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 1,
            }}
          >
            <TypeAnimation
              sequence={["Jinetta Shree Gokul Rajan"]}
              speed={50}
              cursor={true}
              wrapper="h1"
              className="landing-name"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!showLanding && (
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <Home />
        </motion.div>
      )}
    </div>
  );
}

export default App;
