// src/components/Loading.jsx

import React from 'react';

import mylogo from '../../assets/logo.jpg';
export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
        <div
    className="inline-block h-32 w-32 animate-spin rounded-full border-4 border-solid border-white border-r-orange-700 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
  </div>
  
</div>
    );
}
