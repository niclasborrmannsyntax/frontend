import { sections } from "../../content";
import CustomButton from "../shared/CustomButton";
import Image from "next/image";

export default function Hero({
  onContactClick,
  onCreateAccountClick,
}: {
  onContactClick?: () => void;
  onCreateAccountClick?: () => void;
}) {
  return (
    <section className="flex px-16 pt-32 min-h-screen text-center justify-center bg-background-dark backdrop-blur-sm">
      <div className="max-w-5xl flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h1>{sections.hero.title}</h1>
          <p>{sections.hero.description}</p>
          <div className="flex justify-center gap-4 mx-auto mb-8">
            <CustomButton
              variant="outline"
              text={sections.hero.secondaryCta}
              onClick={onCreateAccountClick}
            />
            <CustomButton
              variant="primary"
              text={sections.hero.cta}
              onClick={onContactClick}
            />
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
