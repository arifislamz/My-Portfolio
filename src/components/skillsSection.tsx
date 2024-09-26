// components/SkillsSection.tsx

import React from 'react';
import Image from 'next/image';

type SkillBarProps = {
  skillName: string;
  skillLevel: number; // A number between 0 and 100 representing the skill level
  icon: string; // URL or import of the skill icon
};

const SkillBar: React.FC<SkillBarProps> = ({ skillName, skillLevel, icon }) => {
  return (
    <div className="relative md:h-[7%] h-[6%]">
      <div className="flex items-center mb-0">
        <Image src={icon} alt={`${skillName} icon`} width={18} height={18} className="mr-2" />
        <span className="text-white text-lg">{skillName}</span>
        <span className='absolute right-0 text-white' >{skillLevel}%</span>
      </div>
      <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
          style={{ width: `${skillLevel}%` }}
        >
        </div>
      </div>
      <span
        className="absolute -mt-4 text-yellow-400 text-sm z-10"
        style={{ left: `calc(${skillLevel}% - 10px)` }} // Adjust `-10px` as needed for precise positioning
      >
        &#128293;
      </span>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'Next.js', level: 60, icon: '/icons/nextjs.svg' },
    { name: 'CSS', level: 85, icon: '/icons/css.svg' },
    { name: 'JavaScript', level: 70, icon: '/icons/javascript.svg' },
    { name: 'MongoDB', level: 80, icon: '/icons/mongodb.svg' },
    { name: 'Node.js', level: 80, icon: '/icons/nodejs.svg' },
    { name: 'React', level: 85, icon: '/icons/react.svg' },
    { name: 'MySQL', level: 75, icon: '/icons/mysql.svg' },
    { name: 'TypeScript', level: 40, icon: '/icons/typescript.svg' },
    { name: 'DSA', level: 35, icon: '/icons/dsa.svg' },
    { name: 'HTML', level: 95, icon: '/icons/html.svg' },
  ];

  return (
    <section className="container h-auto py-5 flex flex-col justify-center items-center text-white   overflow-hidden relative pt-5 ">
      <header className='relative p-4 text-center'>
        <h2 className='text-4xl font-bold'>Skills</h2>
        <p className='text-gray-300  mt-1'>My Technical Level</p>
      </header>
      <div className="w-4/5 h-auto relative p-8 bg-gradient-to-r from-blue-900 via-slate-800 to-slate-900 rounded-lg shadow-lg md:w-1/4">
        <h2 className="text-2xl text-white font-bold mb-6">Full Stack Developer</h2>
        <div className="relative flex flex-col gap-2 h-full">
          {skills.map((skill) => (
            <SkillBar
              key={skill.name}
              skillName={skill.name}
              skillLevel={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
