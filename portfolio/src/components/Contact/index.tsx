'use client'

import Link from 'next/link'
import { MapPin, Send, Mail } from 'lucide-react'
import SocialIcon from '@/components/common/Icons'
import { ADDRESS, DISCORD, INSTAGRAM, LINKEDIN, MAIL, TWITTER } from '@/constants/links'
import ContactForm from './Form'
import { motion } from 'framer-motion'

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 1,
        type: "spring",
        stiffness: 200
      }
    })
  }

  const floatingCircleVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl overflow-hidden">
          {/* Left side - Contact Information */}
          <motion.div
            variants={itemVariants}
            className="bg-[#66ABFC]/70 p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="z-10">
              <motion.h2
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-3xl font-bold mb-2"
              >
                Contact Information
              </motion.h2>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-blue-100 mb-12"
              >
                Say something to start a live chat!
              </motion.p>

              <motion.div
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants} className="flex items-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full mr-4"
                  >
                    <span className="w-5 h-5 text-foreground">
                      <SocialIcon name="linkedin" />
                    </span>
                  </motion.div>
                  <Link
                    href={LINKEDIN}
                    className="text-foreground hover:text-blue-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {LINKEDIN}
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full mr-4"
                  >
                    <Mail className="w-5 h-5 text-foreground" />
                  </motion.div>
                  <Link href={MAIL} className="text-foreground hover:text-blue-200 transition-colors">
                    {MAIL.split(':')[1]}
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full mr-4"
                  >
                    <MapPin className="w-5 h-5 text-foreground" />
                  </motion.div>
                  <span>{ADDRESS}</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Social icons */}
            <motion.div className="flex mt-12 space-x-4 z-10">
              {[{ name: 'twitter', link: TWITTER }, { name: 'instagram', link: INSTAGRAM }, { name: 'discord', link: DISCORD }].map((link, i) => (
                <motion.div key={link.name} custom={i} variants={socialIconVariants}>
                  <Link
                    href={link.link}
                    className="group rounded-full shadow-lg transform transition-all duration-300 hover:scale-110"
                    aria-label={link.name}
                  >
                    <motion.span
                      whileHover={{ rotate: 15 }}
                      className="w-5 h-5 block"
                    >
                      <SocialIcon name={link.name} />
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated background elements */}
            <motion.div
              variants={floatingCircleVariants}
              animate="animate"
              className="absolute bottom-0 right-0 bg-white/10 rounded-full"
              style={{ width: '240px', height: '240px', transform: 'translate(30%, 30%)' }}
            />
            <motion.div
              variants={floatingCircleVariants}
              animate="animate"
              custom={1}
              className="absolute top-1/4 left-1/3 bg-white/5 rounded-full"
              style={{ width: '150px', height: '150px' }}
            />
            <motion.div
              variants={floatingCircleVariants}
              animate={{
                y: [0, 15, 0],
                transition: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }
              }}
              className="absolute bottom-25 right-0 bg-white/10 rounded-full"
              style={{ width: '140px', height: '140px', transform: 'translate(-40%, 20%)' }}
            />
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            variants={itemVariants}
            className="p-8"
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Link
            href="/newsletter"
            className="group flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-foreground py-3 px-8 rounded-lg shadow-lg shadow-orange-500/20 transition-all duration-300 transform hover:scale-105"
          >
            <span>Subscribe to Newsletter</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
              className="ml-3 bg-white text-orange-500 p-1.5 rounded-full"
            >
              <Send className="w-4 h-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ContactPage
