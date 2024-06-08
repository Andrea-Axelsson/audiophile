import {ReactNode} from 'react'

interface ButtonProps {
    variant: 'orange' | 'black' | 'border'
    children: ReactNode
}

interface Product {
    id: number;
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    category: string;
    categoryImage: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: Array<{
      quantity: number;
      item: string;
    }>;
    gallery: {
      first: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
      second: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
      third: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    };
    others: Array<{
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    }>;
  }

export type {ButtonProps, Product}