import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { clientReviews } from '@/lib/dummyData';

const ClientStack = () => {
    return (
        <div className="relative flex items-center">
            {clientReviews.map((review, index) => (
                <div
                    key={review.id}
                    className="relative"
                    style={{
                        marginLeft: index !== 0 ? '-10px' : 0, // Adjust the margin to overlap avatars
                        zIndex: clientReviews.length - index // Stack the avatars based on their index
                    }}
                >
                    <Avatar className=' border border-white'>
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                        <AvatarImage src={review.image} alt={review.name} />
                    </Avatar>
                </div>
            ))}
        </div>
    );
};

export default ClientStack;
