import React from "react";
import ShopHeader from "../components/ShopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterBar from "../components/FilterBar";
import OurProducts from "../components/OurProducts";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import FeatureBar from "../components/FeatureBar";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <ShopHeader title="Shop" breadcrumb="Shop" />
      <FilterBar />
      <OurProducts showHeading={false} showButton={false} />
      <OurProducts showHeading={false} showButton={false} />
      
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="/" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/">3</PaginationLink>
          </PaginationItem>
          <PaginationNext href="/" />
        </PaginationContent>
      </Pagination>
  
      <FeatureBar />
      <Footer />
    </div>
  );
};

export default Shop;
