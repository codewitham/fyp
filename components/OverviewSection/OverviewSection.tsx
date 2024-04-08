import React from 'react';
import { Button } from '../ui/button';

const OverviewSection = () => {
    return (
        <div className=' container mx-auto py-20 px-5 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
            <div>
                <p className='text-lg  text-muted-foreground mb-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non feugiat risus, et rutrum turpis. Mauris vitae mauris nec enim accumsan euismod.
                </p>
                <Button className='bg-orange-500 hover:bg-orange-600  rounded-full w-fit'>
                    Try It Now
                </Button>
            </div>
            <div>
                <h1 className='text-4xl lg:text-6xl font-semibold mb-4 gradient-text'>
                    This is what you need to boost your work.
                </h1>
            </div>

        </div>
    );
};

export default OverviewSection;
