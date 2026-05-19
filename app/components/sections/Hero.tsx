import { sections } from "../../content";
import CustomButton from "../shared/CustomButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex pt-32 px-16 min-h-screen text-center justify-center bg-background-dark">
      <div className="max-w-5xl flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h1>{sections.hero.title}</h1>
          <p>{sections.hero.description}</p>
          <div className="flex justify-center gap-4 mx-auto">
            <CustomButton variant="outline" text={sections.hero.secondaryCta} />
            <CustomButton variant="primary" text={sections.hero.cta} />
          </div>
        </div>

        <Image
          loading="eager"
          className=" bottom-0 mx-auto left-0 right-0 pointer-events-none select-none"
          src={sections.hero.image}
          alt="Hero Image"
          width={1200}
          height={1200}
        />
      </div>
    </section>
  );
}
