import React, { createContext, useContext, useState, ReactNode } from "react";

type AccordionContextType = {
	openItem: string | null;
	toggleItem: (id: string) => void;
	isOpen: (id: string) => boolean;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
	undefined,
);

export const Accordion = ({ children }: { children: ReactNode }) => {
	const [openItem, setOpenItem] = useState<string | null>(null);

	const toggleItem = (id: string) => {
		setOpenItem((prev) => (prev === id ? null : id));
	};

	const isOpen = (id: string) => openItem === id;

	return (
		<AccordionContext.Provider value={{ openItem, toggleItem, isOpen }}>
			<div className="accordion">{children}</div>
		</AccordionContext.Provider>
	);
};

// Subcomponents
type ItemProps = {
	id: string;
	children: ReactNode;
};

const Item = ({ id, children }: ItemProps) => {
	return (
		<div className="accordion-item" data-id={id}>
			{children}
		</div>
	);
};

type HeaderProps = {
	id: string;
	children: ReactNode;
};

const Header = ({ id, children }: HeaderProps) => {
	const context = useAccordionContext();
	return (
		<button
			type="button"
			className="w-full h-[3.5em] border-gray-450 border-[3px] mb-[0.5em] bg-background-secondary"
			onClick={() => context.toggleItem(id)}
		>
			<div className="flex items-center justify-between pr-3 pl-3">
				<div>{children}</div>
				<div>arrow</div>
			</div>
		</button>
	);
};

type BodyProps = {
	id: string;
	children: ReactNode;
};

const Body = ({ id, children }: BodyProps) => {
	const context = useAccordionContext();
	if (!context.isOpen(id)) return null;

	return <div className="accordion-body">{children}</div>;
};

// Hook to access context
function useAccordionContext() {
	const context = useContext(AccordionContext);
	if (!context) {
		throw new Error("Accordion subcomponents must be used within an Accordion");
	}
	return context;
}

// Attach subcomponents to main Accordion
Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;
