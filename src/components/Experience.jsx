import { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences, education } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #232631',
    }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }>
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const [showEducation, setShowEducation] = useState(false);
  const currentData = showEducation ? education : experiences;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          Mon parcours {showEducation ? 'scolaire' : 'professionnel'}
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          {showEducation ? 'Formation.' : 'Expériences.'}
        </h2>
      </motion.div>

      <div className="mt-10 flex justify-center">
        <div className="inline-flex rounded-[10px] bg-jetLight p-1 shadow-lg gap-1">
          <button
            onClick={() => setShowEducation(false)}
            className={`min-w-[180px] px-8 py-3 rounded-[8px] font-beckman font-bold text-[15px] 
              transition-all duration-300 ease-in-out transform text-center whitespace-nowrap
              ${
              !showEducation
                ? 'bg-taupe text-timberWolf shadow-md scale-[1.02]'
                : 'text-taupe hover:text-timberWolf hover:scale-[1.01]'
            }`}>
            PROFESSIONNEL
          </button>
          <button
            onClick={() => setShowEducation(true)}
            className={`min-w-[180px] px-8 py-3 rounded-[8px] font-beckman font-bold text-[15px] 
              transition-all duration-300 ease-in-out transform text-center whitespace-nowrap
              ${
              showEducation
                ? 'bg-taupe text-timberWolf shadow-md scale-[1.02]'
                : 'text-taupe hover:text-timberWolf hover:scale-[1.01]'
            }`}>
            SCOLAIRE
          </button>
        </div>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {currentData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '#eaeaec',
              color: '#292929',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}
            iconStyle={{ background: '#333333' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }>
            <div className="relative group">
              <button
                className="live-demo flex justify-between 
                sm:text-[18px] text-[14px] text-taupe 
                font-bold font-beckman items-center py-5 pl-3 pr-3 
                whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
                w-[125px] h-[46px] rounded-[10px] bg-jetLight 
                sm:mt-[22px] mt-[16px] opacity-50 
                cursor-not-allowed transition duration-[0.2s] 
                ease-in-out"
                disabled>
                Mon CV
                <img
                  src={download}
                  alt="download"
                  className="download-btn sm:w-[26px] sm:h-[26px] 
                  w-[23px] h-[23px] object-contain opacity-50"
                />
              </button>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                bg-eerieBlack text-white text-xs font-semibold px-3 py-2 
                rounded-md opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 whitespace-nowrap z-50">
                Pas de recherche d'emploi en cours
              </span>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
