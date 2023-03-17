import React from "react";

function About() {
  return (
    <main className="h-full flex-1  flex flex-col px-10 md:px-24 py-10  ">
      <section className="flex flex-col gap-10 items-start ">
        <div>
          <h1 className="text-5xl pb-1 font-medium uppercase">HEAL ME!</h1>
          <h3 className="text-2xl text-gray-500">some cool one liner !</h3>
        </div>
        <p className="w-[75%] text-lg text-gray-800 font-medium pb-10">
          At Heal me, we believe there is a better way to do things. A more
          valuable way where customers are earned rather than bought. We're
          obsessively passionate about it, and our mission is to help people
          achieve it. We focus on search engine optimization. It's one of the
          least understood and least transparent aspects of great marketing, and
          we see that as an opportunity. We're excited to simplify SEO for
          everyone through our software, education, and community.
        </p>
      </section>
      <section className="lg:flex-row flex flex-col items-center gap-20  bg-[#EAF8F9]">
        <img src="./aboutImg.jpg" alt="person" />
        <div className="flex flex-col items-start gap-8 p-6">
          <h1 className="text-5xl pb-1 text-gray-800 font-medium ">
            Our Founding
          </h1>
          <p className="w-[75%] text-lg text-gray-700 font-medium pb-10">
            Heal Me was founded by Payam Abubakr in 2021. It was called Healing
            Online, and started as a blog and an online community where some of
            the world's therapists shared their research and ideas. We launched
            the Beginner's Guide to Therapy and our first study, and that hub of
            industry expertise transformed into a small consulting firm and led
            us to create the Online Therapist of today!
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
