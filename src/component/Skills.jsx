import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from 'recharts';
import { Award } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

const technicalSkills = [
  { name: 'AI/ML\nKnowledge', value: 85 },
  { name: 'Software Engineering', value: 88 },
  { name: 'Product Lifecycle Management', value: 95 },
  { name: 'Prompt\nEngineering', value: 98 },
  { name: 'Product Design', value: 94 },
  { name: 'Digital Marketing', value: 89 },
  { name: 'Tech Sales Strategy\n& Systemization', value: 96 },
  { name: 'Market Analysis', value: 87 },
];

const softSkills = [
  { name: 'Communication', value: 95 },
  { name: 'Problem Solving', value: 96 },
  { name: 'Team Collaboration', value: 88 },
  { name: 'Innovation', value: 97 },
  { name: 'Time Management', value: 94 },
  { name: 'Adaptability', value: 90 },
  { name: 'Leadership', value: 93 },
  { name: 'Attention to Detail', value: 85 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black text-xs p-2 shadow rounded">
        <p>{payload[0].payload.name}: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const SkillsChart = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="bg-black text-white   py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex gap-2 items-center">
        <Award className="text-purple-500" />
        <span>Skills</span>
      </h2>

      <div className={`flex flex-col ${isMobile ? '' : 'md:flex-row'} gap-10 justify-between items-start text-left`}>
        {/* Technical Skills */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl text-center text-white md:mr-2 sm:ml-4">Technical Skills</h3>
          <ResponsiveContainer width="110%" height={400}>
            <BarChart
              layout="vertical"
              data={technicalSkills}
              margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#A22CFF" />
              <XAxis type="number" domain={[0, 100]} tick={{ fill: '#A22CFF' }} />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fill: '#A22CFF', fontSize: 12 }}
                width={130}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="white" barSize={28}>
                <LabelList dataKey="value" position="right" fill="#A22CFF" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Soft Skills */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl text-center text-white md:mr-12  sm:ml-4">Soft Skills</h3>
          <ResponsiveContainer width="110%" height={400}>
            <BarChart
              layout="vertical"
              data={softSkills}
              margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#A22CFF" />
              <XAxis type="number" domain={[0, 100]} tick={{ fill: '#A22CFF' }} />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fill: '#A22CFF', fontSize: 12 }}
                width={130}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="white" barSize={28}>
                <LabelList dataKey="value" position="right" fill="#A22CFF" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SkillsChart;
