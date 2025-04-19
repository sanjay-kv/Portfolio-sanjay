'use client';

import { motion } from 'framer-motion';

const ToolboxHeader: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center pt-8 pb-4"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        My toolbox includes:
      </h1>
    </motion.header>
  );
}

export default ToolboxHeader;
