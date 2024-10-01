import { Faq } from "@/components/FAQ/Faq";
import { Filter } from "@/components/Filter/Filter";
import Hero from "@/components/Hero/Hero";
import { Mobilecategory } from "@/components/Mobilescategory/Mobilecategory";
export default function Home() {
  return (
    <>
    <Hero/>
    <Mobilecategory/>
    <Filter/>
    <Faq/>
    </>
  );
}
