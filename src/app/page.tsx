"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import AboutMetric from '@/components/sections/about/AboutMetric';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Home, Users, TrendingUp, Award, Eye, Shield } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="grid"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="PropertyHub"
          navItems={[
            { name: "Properties", id: "properties" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Started", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="PROPERTYHUB"
          description="Find your dream home with PropertyHub. Discover premium properties curated by experienced real estate professionals."
          buttons={[
            { text: "Browse Properties", href: "properties" },
            { text: "Schedule Tour", href: "contact" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764707282374-70zf7cvk.jpg",
              imageAlt: "Modern luxury house exterior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764707283136-hdvsi78t.jpg",
              imageAlt: "Contemporary home interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764707283860-ff64dr82.jpg",
              imageAlt: "Elegant bedroom suite"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Why Choose PropertyHub - Your Trusted Real Estate Partner"
          metrics={[
            { icon: Home, label: "Properties Sold", value: "500+" },
            { icon: Users, label: "Happy Clients", value: "1200+" },
            { icon: TrendingUp, label: "Years Experience", value: "15+" },
            { icon: Award, label: "Industry Awards", value: "25+" }
          ]}
        />
      </div>

      <div id="properties" data-section="properties">
        <ProductCardThree
          title="Featured Homes"
          description="Explore our latest luxury properties and find your perfect investment"
          tag="Premium Selection"
          products={[
            {
              id: "1",
              name: "Modern Hillside Villa",
              price: "$2,450,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764707284593-po6y174h.jpg",
              imageAlt: "Modern hillside villa with panoramic views"
            },
            {
              id: "2",
              name: "Downtown Luxury Apartment",
              price: "$1,800,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764707285619-dfn4pjib.jpg",
              imageAlt: "Luxury apartment in prime downtown location"
            },
            {
              id: "3",
              name: "Beachfront Contemporary Home",
              price: "$3,200,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764707286409-kia30x04.jpg",
              imageAlt: "Beachfront villa with infinity pool"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="Why PropertyHub Stands Out"
          description="Discover what makes our real estate services the best choice for your home"
          tag="Our Advantages"
          features={[
            {
              title: "Expert Agents",
              description: "Our experienced team specializes in luxury properties with deep market knowledge",
              icon: Users
            },
            {
              title: "Market Expertise",
              description: "Stay informed with real-time market data and investment opportunities",
              icon: TrendingUp
            },
            {
              title: "Virtual Tours",
              description: "Experience properties from anywhere with our cutting-edge virtual tour technology",
              icon: Eye
            },
            {
              title: "Legal Support",
              description: "Complete guidance through entire purchase process with legal professionals",
              icon: Shield
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real experiences from families and investors who found their perfect property with us"
          tag="Client Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Homeowner",
              company: "Real Estate Investor",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764707902488-nb72ihsj.jpg"
            },
            {
              id: "2",
              name: "Michael Johnson",
              role: "Business Owner",
              company: "Property Developer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764707287845-cfw9j2ht.jpg"
            },
            {
              id: "3",
              name: "Jennifer Lee",
              role: "Interior Designer",
              company: "Design Studio Owner",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764707288539-ncw387c2.jpg"
            },
            {
              id: "4",
              name: "David Chen",
              role: "Technology Manager",
              company: "Tech Executive",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764707289347-qgqvpxt8.jpg"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Ready to Find Your Dream Home?"
          description="Contact our expert agents today and let's start your real estate journey. We're here to answer all your questions and guide you through every step."
          tagIcon={Home}
          buttonText="Send Inquiry"
          inputPlaceholder="Enter your email address"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="PropertyHub"
          columns={[
            {
              title: "Properties",
              items: [
                { label: "Featured", href: "properties" },
                { label: "All Listings", href: "properties" },
                { label: "New Developments", href: "properties" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "about" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "#" },
                { label: "Resources", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 PropertyHub. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}