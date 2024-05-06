'use client';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import ProjectCard from './ProjectCard';
import moment from 'moment';
import CreateProject from './CreateProject';

interface DashboardPageProps {
    projects: Project[];
}

const DashboardPage: React.FC<DashboardPageProps> = ({ projects }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter projects based on the search term
    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='container py-20 mx-auto px-5'>
            <div className='flex items-center gap-2 justify-between max-w-full'>
                <Input
                    type='text'
                    placeholder='Search...'
                    className='w-fit'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <CreateProject />
            </div>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {filteredProjects.map((item, index) => (
                    <ProjectCard
                        key={index}
                        name={item.name}
                        code={item.code || ''}
                        date={moment(item.createdAt).fromNow()}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
