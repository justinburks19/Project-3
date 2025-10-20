import {motion} from 'framer-motion'

export function App() {

  return (
    <>
      <motion.p className="btn btn-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType:"reverse"}}>Test</motion.p>
    </>
  )
}

export default App
