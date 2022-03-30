import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Category from "../components/Category";
import Cuisine from "./Cuisine";
import {motion} from "framer-motion";
function Home() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition= {{duration:0.5}}
    >
        <Veggie/>
        <Popular/>
    </motion.div>
  )
}

export default Home;