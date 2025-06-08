import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const educationData = [
	{
		degree: "Bachelor of Science in Computer Science",
		institution: "IJSE | Institute of Software Engineering",
		period: "2023 - Present",
		icon: (
			<svg
				className="w-10 h-10 text-blue-600"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 3l9.5 5.5-9.5 5.5L2.5 8.5 12 3zm0 11v7m0 0H7m5 0h5"
				/>
			</svg>
		),
	},
	{
		degree: "Java OOP & Spring Boot Backend Engineering Bootcamp",
		institution: "STEM Link",
		period: "03/2025 - 06/2025",
		icon: (
			<svg
				className="w-10 h-10 text-yellow-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<rect
					x="4"
					y="4"
					width="16"
					height="16"
					rx="3"
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8 12h8M12 8v8"
				/>
			</svg>
		),
	},
	{
		degree: "High School",
		institution: "Mahinda Rajapaksha College Homagama",
		period: "2013 - 2022",
		icon: (
			<svg
				className="w-10 h-10 text-green-600"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 4v16m8-8H4"
				/>
			</svg>
		),
	},
];

const cardVariants = {
	initial: { opacity: 0, y: 60, scale: 0.96 },
	animate: { opacity: 1, y: 0, scale: 1 },
};

const Education = () => {
	return (
		<>
			<Helmet>
				<title>Manuth Kausilu</title>
				<meta
					name="description"
					content="Explore the academic background and learning journey of Manuth Kausilu, including university, bootcamps, and key milestones."
				/>
				<meta
					name="keywords"
					content="Education, Academic Journey, Manuth Kausilu, Computer Science, Bootcamp, Learning, Portfolio"
				/>
				<meta property="og:title" content="Manuth Kausilu" />
				<meta
					property="og:description"
					content="Explore the academic background and learning journey of Manuth Kausilu, including university, bootcamps, and key milestones."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/logo.webp" />
				<meta
					property="og:url"
					content="https://your-portfolio-url.com/education"
				/>
				<html lang="en" />
			</Helmet>
			<section
				id="education"
				className="relative py-24 px-4 md:px-10 bg-gradient-to-br from-white via-gray-100 to-white text-black"
			>
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: false }}
				>
					<h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-black via-gray-700 to-gray-400 bg-clip-text text-transparent tracking-widest uppercase mb-2">
						My Learning & Academic Journey
					</h2>
					<motion.p
						className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
					>
						A timeline of my academic background, bootcamps, and key learning
						milestones.
					</motion.p>
				</motion.div>
				<div className="max-w-4xl mx-auto flex flex-col gap-10 relative items-center">
					{/* Roadmap vertical line */}
					<div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-pink-300 to-yellow-200 opacity-30 -translate-x-1/2 z-0 rounded-full"></div>
					{educationData.map((edu, idx) => (
						<motion.div
							key={edu.degree}
							className={`group flex flex-col md:flex-row items-center gap-6 bg-white/90 rounded-2xl shadow-2xl border border-gray-200 p-8 hover:shadow-blue-200 transition-shadow duration-300 relative overflow-hidden
              ${
								idx % 2 === 0
									? "md:self-start md:mr-auto"
									: "md:self-end md:ml-auto"
							} z-10 w-full md:w-[520px]`}
							variants={cardVariants}
							initial="initial"
							whileInView="animate"
							viewport={{ once: false }}
							transition={{ duration: 0.7, delay: idx * 0.18, type: "spring" }}
							whileHover={{
								scale: 1.025,
								boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.15)",
							}}
							style={{ maxWidth: 520 }}
						>
							{/* Roadmap dot */}
							<div
								className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${
									idx % 2 === 0 ? "-right-6" : "-left-6"
								} z-20`}
							>
								<span className="block w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 via-pink-400 to-yellow-300 border-4 border-white shadow-lg"></span>
							</div>
							{/* Animated background accent */}
							<motion.div
								className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 via-pink-300 to-yellow-200 opacity-10 blur-2xl group-hover:opacity-20 transition-all duration-300"
								initial={{ scale: 0.7, opacity: 0.08 }}
								whileHover={{ scale: 1, opacity: 0.18 }}
							/>
							<div className="flex-shrink-0">{edu.icon}</div>
							<div className="flex-1 text-center md:text-left">
								<h3 className="text-xl md:text-2xl font-bold text-black mb-1">
									{edu.degree}
								</h3>
								<p className="text-md text-gray-700 font-medium mb-1">
									{edu.institution}
								</p>
								<span className="text-sm text-gray-500">
									{edu.period}
								</span>
							</div>
						</motion.div>
					))}
				</div>
			</section>
		</>
	);
};

export default Education;
