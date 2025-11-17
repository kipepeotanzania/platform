import { motion } from 'framer-motion';

export const FadeIn = ({ children, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export const Stagger = ({ children, gap = 0.08 }: any) => (
  <motion.div
    variants={{
      show: {
        transition: { staggerChildren: gap },
      },
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children }: any) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 12 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
  >
    {children}
  </motion.div>
);
