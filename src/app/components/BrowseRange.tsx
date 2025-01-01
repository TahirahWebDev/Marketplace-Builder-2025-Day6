import React from 'react';
import Image from 'next/image';

const BrowseRange = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-20">
      <h2 className="text-3xl font-bold text-center mb-4">Browse The Range</h2>
      <p className="text-center text-gray-500 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/browseRange1.png"
            alt="Dining Room"
            width={350}
            height={300}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold">Dining</span>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/browseRange2.png"
            alt="Living Room"
            width={340}
            height={280}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold">Living</span>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/browseRange3.png"
            alt="Bedroom"
            width={340}
            height={280}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold">Bedroom</span>
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
