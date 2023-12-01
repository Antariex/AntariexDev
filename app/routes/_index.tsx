//Imports: Metadata HTML tags, CSS Styles and components to render the index view
import type { MetaFunction } from "@remix-run/node";
import '../styles/main.css'
import Navbar from '../components/navbar';
import Hero from "~/components/hero";
import WhatIDo from "../components/whatIDo";
import Footer from '../components/footer';

//Export Metadata HTML for this view
export const meta: MetaFunction = () => {
  return [
    { title: "Antariex DEV" },
    { name: "Antariex", content: "Antariex <dev> portfolio and blog" },
  ];
};

//Function to return the components to render the index view
export default function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatIDo />
      <Footer />
    </div>
  );
}