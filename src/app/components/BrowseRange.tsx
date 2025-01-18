import React from 'react';

const BrowseRange = ({ data }: { data: any[] }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-20">
      <h2 className="text-3xl font-bold text-center mb-4">Browse The Range</h2>
      <p className="text-center text-gray-500 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Check if data exists and render */}
        {data && data.length > 0 ? (
          data.map((item: any) => (
            <div key={item._id} className="flex flex-col items-center space-y-4">
              <img
                src={item.imageUrl || '/fallback-image.jpg'}
                alt={item.title || 'Image'}
                width={350}
                height={300}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold">
                {item.title || 'No Title'}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No data available.</p>
        )}
      </div>
    </section>
  );
};

export default BrowseRange;
