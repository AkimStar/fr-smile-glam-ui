import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeethWhiteningSection = () => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Block - Left */}
          <motion.div
            className="flex flex-col justify-center items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-left text-fr-blue mb-2">Избелване на зъби</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Избелването на зъби е безопасна и ефективна процедура, която може значително да подобри външния вид на вашите зъби. 
              Използваме най-съвременните технологии и продукти, които са доказано безопасни за зъбната емайл. Процедурата се извършва в нашия кабинет под наблюдението на опитен специалист. Резултатите са видими веднага след процедурата, а ефектът може да продължи до няколко години при правилна поддръжка. Всички пациенти получават персонализиран план за поддръжка, за да запазят резултата възможно най-дълго.
            </p>
          </motion.div>

          {/* Image Card - Right */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="relative w-full max-w-md rounded-xl shadow-2xl bg-white overflow-hidden cursor-pointer"
              onClick={() => setShowAfter(!showAfter)}
            >
              {/* Label */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gray-700 text-white text-xs rounded-full shadow">
                {showAfter ? 'След' : 'Преди'}
              </div>
              <div className="w-full h-72">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={showAfter ? 'after' : 'before'}
                    src={showAfter ? "/after.png" : "/before.png"}
                    alt={showAfter ? "След избелване на зъби" : "Преди избелване на зъби"}
                    className="w-full h-72 object-cover rounded-xl"
                    initial={{ opacity: 0, x: showAfter ? 40 : -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: showAfter ? -40 : 40 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">
              {showAfter
                ? 'Кликнете върху изображението, за да видите резултата преди процедурата.'
                : 'Кликнете върху изображението, за да видите резултата след процедурата.'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeethWhiteningSection;