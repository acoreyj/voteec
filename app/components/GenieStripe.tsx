import { ReactElement } from "react";

export type GenieStripeProps = {
    numBlocks?: number,
    className?: string
}

export function GenieStripe({ numBlocks = 5, className }: GenieStripeProps): ReactElement {
    let spans = [];
    for (let i = 0; i < numBlocks; i++) {
      spans.push(<span key={`${i}`}></span>);
    }
    return (
        
      <div className={`${className} genie-stripe`}>
        {spans.map(span => span)}
      </div>
    );
}

