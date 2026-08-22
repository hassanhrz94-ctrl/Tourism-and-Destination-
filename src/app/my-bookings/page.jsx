import { b } from 'framer-motion/client';
import React from 'react';

const MyBookingsPage = async() => {
 const res = await fetch('http://localhost:5000/users')
 const bookings = await res.json()

    return (
        <div>

            this is bookings
            {
                bookings.map(b=><div key={b.id}>{
            b.name}</div>)
            }
        </div>
    );
};

export default MyBookingsPage;