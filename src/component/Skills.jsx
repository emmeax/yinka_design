import { Award } from "lucide-react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import {
    Bar,
    BarChart,
    CartesianGrid,
    LabelList,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const technicalSkills = [
    { name: "AI/ML Knowledge", value: 85 },
    { name: "Software Engineering", value: 88 },
    { name: "Product Lifecycle Management", value: 95 },
    { name: "Prompt Engineering", value: 98 },
    { name: "Product Design", value: 94 },
    { name: "Digital Marketing", value: 89 },
    { name: "Tech Sales Strategy &Systemization", value: 96 },
    { name: "Market Analysis", value: 87 },
];

const softSkills = [
    { name: "Communication", value: 95 },
    { name: "Problem Solving", value: 96 },
    { name: "Team Collaboration", value: 88 },
    { name: "Innovation", value: 97 },
    { name: "Time Management", value: 94 },
    { name: "Adaptability", value: 90 },
    { name: "Leadership", value: 93 },
    { name: "Attention to Detail", value: 85 },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white text-black text-xs p-2 shadow rounded">
                <p>
                    {payload[0].payload.name}: {payload[0].value}%
                </p>
            </div>
        );
    }
    return null;
};

const SkillsChart = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div>
            <h2 className="text-2xl lg:text-3xl font-technor font-medium mb-8 text-left flex items-center gap-2">
                <Award className="text-primary h-[30px] w-[30px]" />
                <span>Skills</span>
            </h2>

            <div
                className={`flex flex-col ${isMobile ? "" : "lg:flex-row"}   `}
            >
                {/* Technical Skills */}
                <div className="w-full lg:w-1/2">
                    <h3 className="lg:text-2xl text-xl text-center lg:mr-44 lg:ml-0 ml-20 text-white">
                        Technical Skills
                    </h3>
                    <ResponsiveContainer
                        width="103%"
                        height={isMobile ? 500 : 400}
                    >
                        <BarChart
                            layout="vertical"
                            data={technicalSkills}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 100,
                                bottom: 20,
                            }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#A22CFF"
                            />
                            <XAxis
                                type="number"
                                domain={[0, 100]}
                                tick={{ fill: "#A22CFF" }}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                tick={{ fill: "#A22CFF", fontSize: 15 }}
                                width={50}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="value" fill="white" barSize={28} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Soft Skills */}
                <div className="w-full lg:w-1/2 ">
                    <h3 className="lg:text-2xl text-xl text-center text-white lg:mr-56 lg:ml-0 ml-12">
                        Soft Skills
                    </h3>
                    <ResponsiveContainer
                        width="100%"
                        height={isMobile ? 500 : 400}
                    >
                        <BarChart
                            layout="vertical"
                            data={softSkills}
                            margin={{
                                top: 25,
                                right: 30,
                                left: 100,
                                bottom: 20,
                            }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#A22CFF"
                            />
                            <XAxis
                                type="number"
                                domain={[0, 100]}
                                tick={{ fill: "#A22CFF" }}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                tick={{ fill: "#A22CFF", fontSize: 15 }}
                                width={50}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="value" fill="white" barSize={28}>
                                <LabelList
                                    dataKey=""
                                    position="right"
                                    fill="#A22CFF"
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default SkillsChart;
