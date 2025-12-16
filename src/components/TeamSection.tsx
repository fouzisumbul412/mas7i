// src\components\TeamSection.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Twitter, Crown, Star, X, ChevronRight } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  isLead?: boolean;
  department: string;
  description: string;
  expertise?: string;
  skills?: string[];
  social?: {
    linkedin?: string;
    email?: string;
    twitter?: string;
  };
}

const leaders: TeamMember[] = [
  {
    name: 'Shehnaaz Nur',
    role: 'Operation Head',
    department: 'Operations & HR',
    image: '/images/shehnaaz-nur.png',
    isLead: true,
    description:
      'Shehnaaz Nur is a seasoned HR professional with strong expertise in talent acquisition, HR operations, and strategic workforce planning. Over the years, she has successfully managed recruitment across IT and Non-IT sectors, collaborating with international clients and delivering tailored workforce solutions.',
    expertise:
      'Her leadership style emphasizes transparency, efficiency, and employee engagement. At Hyderabad, she oversees HR functions with a mission to connect the right talent with the right opportunities, strengthen employee relations, and streamline HR processes for sustainable growth.',
    skills: ['Talent Acquisition', 'HR Operations', 'Workforce Planning', 'Employee Relations'],
    social: { linkedin: 'https://ae.linkedin.com/in/shehnaaznur', email: 'hr@mas7i.com' },
  },
  {
    name: 'Asim Abdul',
    role: 'HR & Marketing Head',
    department: 'HR & Technology',
    image: '/images/asim.png',
    isLead: true,
    description:
      'Abdul is a versatile professional with a strong technical skill set and extensive experience in both IT and human resources domains. He is proficient in SAP Basis, Oracle, and SQL databases, demonstrating solid expertise in database management and enterprise resource planning systems.',
    expertise:
      'Alongside his IT skills, Abdul has significant experience with HR policies and recruitment, handling both domestic and international hiring processes. Uniquely, Abdul is also adept in electric vehicle design, including battery assembling, showcasing his innovative capabilities.',
    skills: ['SAP Basis', 'Oracle/SQL', 'Power BI', 'Python', 'HR Management', 'EV Design'],
    social: { email: 'hr@mas7i.com' },
  },
];

const teamMembers: TeamMember[] = [
  {
    name: 'Priya Sharma',
    role: 'Senior Recruiter',
    department: 'Recruitment',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    description:
      'Priya specializes in tech recruitment with 5+ years of experience in sourcing top talent for IT companies across India.',
    skills: ['Tech Recruitment', 'Candidate Sourcing', 'Interview Coordination'],
    social: { linkedin: '#', email: 'priya@mas7i.com' },
  },
  {
    name: 'Rahul Verma',
    role: 'Digital Marketing Lead',
    department: 'Marketing',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    description:
      'Rahul leads our digital marketing initiatives with expertise in SEO, SEM, and social media strategies that drive results.',
    skills: ['SEO/SEM', 'Social Media', 'Content Strategy', 'Analytics'],
    social: { linkedin: '#', email: 'rahul@mas7i.com' },
  },
  {
    name: 'Fatima Khan',
    role: 'Travel Consultant',
    department: 'Travel',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    description:
      'Fatima manages corporate travel solutions with a focus on cost optimization and seamless travel experiences.',
    skills: ['Corporate Travel', 'Flight Booking', 'Visa Assistance'],
    social: { linkedin: '#', email: 'fatima@mas7i.com' },
  },
  {
    name: 'Arjun Reddy',
    role: 'Web Developer',
    department: 'Technology',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    description:
      'Arjun creates stunning, responsive websites with modern technologies including React, Node.js, and cloud platforms.',
    skills: ['React', 'Node.js', 'UI/UX', 'Cloud'],
    social: { linkedin: '#', email: 'arjun@mas7i.com' },
  },
  {
    name: 'Sneha Gupta',
    role: 'Brand Strategist',
    department: 'Branding',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    description:
      'Sneha crafts compelling brand identities that resonate with target audiences and drive business growth.',
    skills: ['Brand Strategy', 'Logo Design', 'Visual Identity'],
    social: { linkedin: '#', email: 'sneha@mas7i.com' },
  },
  {
    name: 'Mohammed Ali',
    role: 'HR Executive',
    department: 'HR',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    description:
      'Mohammed handles day-to-day HR operations including onboarding, compliance, and employee engagement programs.',
    skills: ['HR Operations', 'Onboarding', 'Compliance'],
    social: { linkedin: '#', email: 'ali@mas7i.com' },
  },
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="bg-black/80 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920')] bg-cover bg-center bg-fixed opacity-5" />
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-30 pt-12 pb-12">
        {/* Section Header */}
 <div className="text-center mb-0 relative z-50">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border border-red-500/30 bg-red-500/10 backdrop-blur-md"
          >
            <Star className="w-4 h-4 text-red-300" />
            <span className="text-white font-semibold text-sm drop-shadow">
              The People Behind MAS7i
            </span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            style={{ textShadow: '0 6px 18px rgba(0,0,0,0.6)' }}
          >
            Meet Our <span className="text-red-400">Team</span>
          </h2>

          <p className="text-white/90 mt-4 max-w-2xl mx-auto">
            A passionate team of experts dedicated to delivering excellence and driving your business success.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Crown className="w-6 h-6 text-red-400" />
            <h3 className="text-3xl font-bold text-white drop-shadow">Leadership Team</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer h-full"
                onClick={() => setSelectedMember(leader)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Smooth Gradient Glow Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-red-500/40 to-red-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                {/* Card Container */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 h-full flex flex-col">
                  <div className="grid md:grid-cols-2 h-full">
                    {/* IMAGE SIDE */}
                    <div className="relative h-80 md:h-full overflow-hidden">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Lead Badge */}
                      <motion.div
                        initial={{ x: -60 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-4 left-4 px-3 py-1.5 bg-red-600/90 rounded-full flex items-center gap-2"
                      >
                        <Crown className="w-4 h-4 text-white" />
                        <span className="text-xs tracking-wide font-semibold text-white">LEAD</span>
                      </motion.div>

                      {/* Social Buttons */}
                      <div className="absolute bottom-4 left-4 flex gap-3">
                        {leader.social?.linkedin && (
                          <motion.a
                            href={leader.social.linkedin}
                            whileHover={{ scale: 1.2 }}
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md hover:bg-red-600 transition"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="w-5 h-5" />
                          </motion.a>
                        )}
                        {leader.social?.email && (
                          <motion.a
                            href={`mailto:${leader.social.email}`}
                            whileHover={{ scale: 1.2 }}
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md hover:bg-red-600 transition"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Mail className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* TEXT SIDE */}
                    <div className="p-8 flex flex-col justify-center h-full">
                      <span className="text-red-300 text-sm font-semibold mb-1 drop-shadow-sm">
                        {leader.department}
                      </span>

                      <h3 className="text-3xl font-extrabold text-white leading-tight mb-1 drop-shadow">
                        {leader.name}
                      </h3>

                      <p className="text-red-200 text-xl font-bold mb-4 drop-shadow-sm">
                        {leader.role}
                      </p>

                      <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-4">
                        {leader.description}
                      </p>

                      {leader.expertise && (
                        <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-3">
                          {leader.expertise}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {leader.skills?.slice(0, 3).map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-red-500/15 border border-red-500/25 text-red-200 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ x: 6 }}
                        className="flex items-center gap-1 text-red-200 font-medium text-sm"
                      >
                        View Profile <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Members Grid */}
        {/* <div>
          <div className="flex items-center justify-center gap-3 mb-10" data-aos="fade-up">
            <Star className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-bold text-text-light">Our Experts</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 h-full flex flex-col justify-between">
                
                  <div className="relative pt-8 px-8">
                    <motion.div
                      className="relative mx-auto w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors duration-300"
                      animate={hoveredIndex === index ? { rotateY: 10, rotateX: -10 } : { rotateY: 0, rotateX: 0 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>

                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      className="absolute top-4 right-4 px-3 py-1 bg-primary text-red-600 text-xs font-medium rounded-full"
                    >
                      {member.department}
                    </motion.div>
                  </div>

                
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-text-light mb-1">{member.name}</h4>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-text-light/60 text-sm line-clamp-2 mb-4">
                      {member.description}
                    </p>

                   
                    <div className="flex justify-center gap-2">
                      {member.social?.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          whileHover={{ scale: 1.2 }}
                          className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-text-light/70 hover:bg-primary hover:text-red-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.social?.email && (
                        <motion.a
                          href={`mailto:${member.social.email}`}
                          whileHover={{ scale: 1.2 }}
                          className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-text-light/70 hover:bg-primary hover:text-red-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Mail className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Modal for Member Details */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-neutral-900 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Header Image */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-600/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>

                  {/* Lead Badge */}
                  {selectedMember.isLead && (
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-red-600/90 rounded-full">
                      <Crown className="w-4 h-4 text-white" />
                      <span className="text-sm font-bold text-white">LEAD</span>
                    </div>
                  )}

                  {/* Name Overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-red-200 text-sm font-medium drop-shadow">
                      {selectedMember.department}
                    </span>
                    <h3 className="text-3xl font-bold text-white drop-shadow">
                      {selectedMember.name}
                    </h3>
                    <p className="text-red-200 font-semibold drop-shadow-sm">
                      {selectedMember.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-white/90 leading-relaxed mb-4">
                    {selectedMember.description}
                  </p>

                  {selectedMember.expertise && (
                    <p className="text-white/80 leading-relaxed mb-6">
                      {selectedMember.expertise}
                    </p>
                  )}

                  {/* Skills */}
                  {selectedMember.skills && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">
                        Expertise & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-4 py-2 bg-red-500/15 border border-red-500/25 text-red-200 text-sm rounded-full font-medium"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Social Links */}
                  <div className="flex gap-3 flex-wrap">
                    {selectedMember.social?.linkedin && (
                      <motion.a
                        href={selectedMember.social.linkedin}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-red-600/20 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </motion.a>
                    )}
                    {selectedMember.social?.email && (
                      <motion.a
                        href={`mailto:${selectedMember.social.email}`}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-red-600/20 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        <span className="text-sm font-medium">Email</span>
                      </motion.a>
                    )}
                    {selectedMember.social?.twitter && (
                      <motion.a
                        href={selectedMember.social.twitter}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-red-600/20 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                        <span className="text-sm font-medium">Twitter</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
