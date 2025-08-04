 import React from 'react';

function SkillsSection() {
  const skills = [
    { name: 'HTML',  icon:"https://imgs.search.brave.com/Pu5A9djMrrWVjMxVguTWll4ATmFql9Rv6T8-_iBEmxM/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9odG1sLTIx/LTEyOTYxNi5wbmc_/Zj13ZWJwJnc9MTI4" },
    { name: 'CSS', icon: '' },
    { name: 'JavaScript', icon: '' },
    { name: 'Node.js', icon: '' },
    { name: 'Express', icon: '' },
    { name: 'React', icon: '' },
    { name: 'MongoDB', icon: '' },
    { name: 'SQL', icon: '' },
    { name: 'Python', icon: '' },
  ];

  return (
    <div className="bg-[#07223b] py-12 px-6">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-10 items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-20 h-20 object-contain mb-2 transition transform hover:scale-110"
            />
            <p className="text-white text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
