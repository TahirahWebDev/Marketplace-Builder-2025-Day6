import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import BrowseRange from '../components/BrowseRange'; // Correct import
import OurProducts from '../components/OurProducts';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2025-01-13',
});

const query = `*[_type == "browseRange"]{
  _id,
  title,
  "imageUrl": image.asset->url
}`;

const Home = async () => {
  // Fetch the data on the server
  const result = await client.fetch(query);

  return (
    <div>
      <Navbar />
      <Banner />
      <BrowseRange data={result || []} /> {/* Pass data prop to BrowseRange */}
      <OurProducts showHeading={true} />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
