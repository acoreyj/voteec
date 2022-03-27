import { Children, ReactElement, ReactNode } from "react";

export type DaisyCardProps = {
    image?: string;
    imageAlt?: string;
    title?: string;
    btnText?: string;
    textContent?: string;
    slotMedia?: ReactNode;
    slotTitle?: ReactNode;
    slotContent?: ReactNode;
    slotActions?: ReactNode;
	children: React.ReactNode;
    className?: string
}

export function DaisyCard({ image, imageAlt, title, btnText, textContent, slotActions, slotContent, slotMedia, slotTitle, children, className='' }: DaisyCardProps): ReactElement {
    return (
        <div className={`card ${className}`}>
            {image && <figure><img src={image} alt={imageAlt} /></figure>}
            {slotMedia}
            <div className="card-body">
                {title && <h2 className="card-title">{title}</h2>}
                {slotTitle}
                {textContent}
                {children}
                {slotContent}
                {(btnText || slotActions) && <div className="card-actions justify-end">
                    {btnText && <button className="btn btn-primary">{btnText}</button>}
                    {slotActions}
                </div>}
            </div>
        </div>
    )
}

