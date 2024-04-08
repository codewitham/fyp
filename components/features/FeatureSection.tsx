import React from 'react';

interface Feature {
    name: string;
    desc: string;
    image: string;
}

const FeatureSection: React.FC = () => {
    const features: Feature[] = [
        {
            name: 'UI Generation Capabilities',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet est eget lacus rutrum fringilla.',
            image: 'https://news.ubc.ca/wp-content/uploads/2023/08/AdobeStock_559145847.jpeg'
        },
        {
            name: 'Accepting Docs',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet est eget lacus rutrum fringilla.',
            image: 'https://img.freepik.com/premium-photo/futuristic-colorful-human-brain-illustration_536047-1869.jpg'
        },
        {
            name: 'Animations',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet est eget lacus rutrum fringilla.',
            image: 'https://www.marktechpost.com/wp-content/uploads/2023/08/3d-artificial-intelligence-ai-image-humanoid-head-robotic-face-analyzing-flow-big-data.jpg'
        }
    ];

    return (
        <div className='container mx-auto py-20 px-5'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <img src={feature.image} alt={feature.name} className="mb-4 w-full h-full rounded-3xl object-cover" />
                        <h2 className="text-lg font-semibold mb-2">{feature.name}</h2>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;
