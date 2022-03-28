import { Children, ReactElement, ReactNode } from "react";
import ReactFitText from "react-fittext";
import { DaisyCard } from "./daisy/Card";

export type DaisyCardProps = {
  image?: string;
  imageAlt?: string;
  title?: string;
  btnText?: string;
  textContent?: string;
  slotMedia?: ReactNode;
  slotTitle?: ReactNode;
  slotContent?: ReactNode;
  slotSubtitle?: ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export function VoteSection({
  image,
  imageAlt,
  title,
  btnText,
  textContent,
  slotSubtitle,
  slotContent,
  slotMedia,
  slotTitle,
  children,
  className = "",
}: DaisyCardProps): ReactElement {
  return (
    <div
      className={`${className} container flex flex-col place-items-center justify-around gap-4`}
    >
      {slotTitle && (
        <DaisyCard
          className="glass w-full shadow-xl"
          slotTitle={
            <div className="items-center text-center text-white">
              <ReactFitText minFontSize={30} maxFontSize={60}>
                <h1>
                  <span className="line font-bold uppercase">{slotTitle}</span>
                </h1>
              </ReactFitText>
            </div>
          }
        >
          {slotSubtitle && (
            <div className="items-center text-center text-white">
              <ReactFitText maxFontSize={30} minFontSize={18} compressor={1.5}>
                <h2>
                  <span className="line font-semibold uppercase">
                    {slotSubtitle}
                  </span>
                </h2>
              </ReactFitText>
            </div>
          )}
        </DaisyCard>
      )}
      {slotContent ||
        (children && (
          <DaisyCard className="w-full bg-base-300 shadow-xl md:w-10/12 lg:w-3/4">
            {slotContent}
            {children}
          </DaisyCard>
        ))}
    </div>
  );
}
