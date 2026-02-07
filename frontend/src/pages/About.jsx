import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, ExternalLink, Mail, Code } from 'lucide-react';

const About = () => {
    const developer = {
        name: 'Md Yusuf (iamysf)',
        role: 'Full Stack Developer',
        bio: 'Passionate about building scalable web applications and solving real-world problems through technology.',
        linkedin: 'https://linkedin.com/in/01iamysf',
        github: 'https://github.com/01iamysf',
        email: 'contact@iamysf.dev', // Default placeholder
        photo: '/yusuf.jpg' // Using professional photo
    };

    return (
        <div className="max-w-5xl mx-auto pb-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    About EduGrievance
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    EduGrievance is a modern, transparent, and efficient complaint management system designed to bridge the gap between students, faculty, and administration.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Portal Features */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary/10 rounded-xl">
                            <Code size={24} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Our Vision</h3>
                    </div>
                    <ul className="space-y-6">
                        {[
                            { title: 'Transparency', desc: 'Real-time tracking of complaints from submission to resolution.' },
                            { title: 'Accountability', desc: 'Clear roles and responsibilities for faster decision-making.' },
                            { title: 'Documentation', desc: 'Secure storage of evidence and official responses.' },
                            { title: 'Efficiency', desc: 'Automatic removal of resolved issues to keep the system organized.' }
                        ].map((feature, idx) => (
                            <li key={idx} className="flex gap-4">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                <div>
                                    <span className="block text-sm font-bold text-slate-200 uppercase tracking-wide">{feature.title}</span>
                                    <span className="text-sm text-slate-400 leading-relaxed">{feature.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Developer Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-card flex flex-col items-center text-center"
                >
                    <div className="relative group mb-6">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <img
                            src={developer.photo}
                            alt={developer.name}
                            className="relative w-32 h-32 rounded-full object-cover border-4 border-dark-card shadow-2xl"
                        />
                        <div className="absolute bottom-1 right-1 bg-primary p-1.5 rounded-full shadow-lg border-4 border-dark-card">
                            <CheckCircle size={14} className="text-white" />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight">{developer.name}</h3>
                    <p className="text-primary font-bold text-sm uppercase tracking-widest mt-1 mb-4">{developer.role}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                        {developer.bio}
                    </p>

                    <div className="flex gap-4">
                        {[
                            { url: developer.linkedin, icon: <Linkedin size={20} />, color: 'hover:text-[#0077b5]' },
                            { url: developer.github, icon: <Github size={20} />, color: 'hover:text-white' },
                            { url: `mailto:${developer.email}`, icon: <Mail size={20} />, color: 'hover:text-[#ea4335]' }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 bg-white/5 rounded-2xl text-slate-400 transition-all hover:bg-white/10 hover:-translate-y-1 ${social.color}`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Simple icon wrapper class would be defined in CSS, but using inline for now
const CheckCircle = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

export default About;
