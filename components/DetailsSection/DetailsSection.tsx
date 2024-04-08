import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, ArrowUp } from 'lucide-react';

const DetailsSection = () => {
    return (
        <div className='container mx-auto py-20 px-5 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
            <div>
                <h1 className='text-4xl lg:text-6xl font-semibold mb-4 gradient-text'>
                    Boost Your Work with Premium Features
                </h1>
                <p className='text-lg text-muted-foreground mb-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non feugiat risus, et rutrum turpis. Mauris vitae mauris nec enim accumsan euismod.
                </p>
                <div className="flex items-center mb-8">
                    <span className="text-2xl text-orange-500 mr-2">
                        ✓
                    </span>
                    <p className="text-lg text-muted-foreground">
                        Personalization options for custom UI designs
                    </p>
                </div>
                <div className="flex items-center mb-8">
                    <span className="text-2xl text-orange-500 mr-2">
                        ✓
                    </span>
                    <p className="text-lg text-muted-foreground">
                        Priority support for assistance and guidance
                    </p>
                </div>
                <div className="flex items-center mb-8">
                    <span className="text-2xl text-orange-500 mr-2">
                        ✓
                    </span>
                    <p className="text-lg text-muted-foreground">
                        Unlimited site generations for your projects
                    </p>
                </div>
                <div className="flex items-center mb-8">
                    <span className="text-2xl text-orange-500 mr-2">
                        ✓
                    </span>
                    <p className="text-lg text-muted-foreground">
                        Access to premium templates for enhanced designs
                    </p>
                </div>
                <Button className='bg-orange-500 hover:bg-orange-600 rounded-full w-fit'>
                    Get Premium <ArrowRight className='h-4 w-4 ml-2' />
                </Button>
            </div>
            <div className=' grid md:grid-cols-2 gap-4 '>
                <img
                    src="https://cdn.pixabay.com/photo/2023/10/30/05/04/ai-generated-8351765_1280.png"
                    alt="ai"
                    className='max-h-[500px]  h-full w-full object-cover rounded-3xl col-span-2'
                />

                <div className=' bg-gray-200/50 p-5 rounded-2xl border-t-2 border-orange-300 flex gap-2 justify-between items-center'>
                    <div>
                        <h1 className=' text-orange-500 text-3xl  md:text-5xl mb-4 font-semibold'>
                            2k+
                        </h1>
                        <p>Clients Per Month</p>
                    </div>
                    <ArrowUp className=' h-6 w-6' />
                </div>

                <div className=' bg-gray-200/50 p-5 rounded-2xl border-t-2 border-orange-300 flex gap-2 justify-between items-center'>
                    <div>
                        <h1 className=' text-orange-500 text-3xl md:text-5xl mb-4 font-semibold'>
                            100+
                        </h1>
                        <p>Official Partners</p>
                    </div>
                    <ArrowUp className=' h-6 w-6' />
                </div>
            </div>
        </div>
    );
};

export default DetailsSection;
