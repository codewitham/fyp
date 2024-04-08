import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { clientReviews } from '@/lib/dummyData';


const ClientSection = () => {
    return (
        <div className='min-h-[800px] bg-gray-200/70 backdrop-blur-lg w-full relative overflow-hidden'>
            {/* Gaussian bubbles */}
            <div className="absolute -z-10 inset-0 pointer-events-none flex justify-center items-center">
                <div className="absolute bg-pink-500 rounded-full w-56 h-56 blur-3xl top-1/4 left-1/4 opacity-40 animate-bounce" />
                <div className="absolute bg-pink-500 rounded-full w-48 h-48 blur-3xl bottom-10 left-10 opacity-40 animate-accordion-up" />
                <div className="absolute bg-yellow-500 rounded-full w-48 h-48 blur-2xl opacity-40 top-1/2 left-1/2 animate-bounce delay-200" />
                <div className="absolute bg-orange-500 rounded-full w-56 h-56 blur-3xl bottom-1/4 right-1/4 opacity-40 animate-bounce delay-400" />
                <div className="absolute bg-orange-500 rounded-full w-48 h-48 blur-3xl top-10 right-10 opacity-40 animate-bounce delay-400" />
            </div>

            <div className='container h-full mx-auto px-5 py-20 flex flex-col justify-center items-center gap-8 relative z-10'>
                <div className='max-w-[700px] text-center'>
                    <h1 className='text-4xl md:text-6xl font-medium'>
                        Honest Reviews By Our Premium Clients.
                    </h1>
                    <p className='text-muted-foreground mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, blanditiis! Libero excepturi delectus ipsum molestias quaerat incidunt nemo eum officia.</p>
                </div>

                {/* Client reviews */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {/* Mapping over client reviews array */}
                    {clientReviews.map((review) => (
                        <div key={review.id} className="bg-white/70 backdrop-blur-xl rounded-2xl p-6">
                            <p>{review.text}</p>
                            <div className='mt-5 flex gap-4 items-center'>
                                <Avatar>
                                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                                    <AvatarImage src={review.image} alt={review.name} />
                                </Avatar>
                                <div>
                                    <p className="font-semibold mb-2">{review.name}</p>
                                    <p className="text-sm text-muted-foreground mb-4">{review.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientSection;
