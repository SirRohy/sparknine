import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar path="/" />
      <div className="relative bg-background flex min-h-[calc(100vh-5rem)] h-max w-screen flex-col items-center justify-center self-center text-center text-textcolor">
        <div className="relative">
          <Image
            src="/nature.jpg"
            alt="Image description"
            className="rounded-sm"
            width={500}
            height={150}
          />
        </div>
        <div className="p-4">
          <p className="w-full text-6xl max-sm:text-4xl font-medium">
            Spark9 Project
          </p>
          <p className="py-2 text-2xl">
            SPARK9 is a project that aims to spark vibrancy, learning, and
            creativity within the wider community. Through 9 unique initiatives,
            we want to inspire children, youth and adults to become drivers of
            the UN Sustainable Development Goals. Each initiative is a
            ‘mini-project’ that connects to a SDG:
          </p>
          <ol className="list-decimal list-inside text-xl">
            <li>Super Beach Clean-up</li>
            <li>For-Cancer Bike Fundraiser</li>
            <li>Music Camp</li>
            <li>Art Camp</li>
            <li>Greater Vancouver FoodBank Fundraiser</li>
            <li>Workshops for Grant-writing and Scholarships</li>
            <li>Soccer Camp</li>
            <li>Sustainability Panel</li>
            <li>Puppy Therapy Day</li>
          </ol>
          <p className="py-2 text-2xl">
            We hope our impact will spark long-term community relationships,
            goodwill and inner passion to serve society at large. Each project
            will impact a certain demographic of people, hopefully inspiring
            attendees to be uniquely curious and excited to drive change. Our
            impact will be measured through attendance, focus-group feedback and
            conversations. We want attendees to feel fulfilled after each SPARK9
            event.
          </p>
        </div>
      </div>
    </main>
  );
}
