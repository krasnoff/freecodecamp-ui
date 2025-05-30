import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./accordeon";

const meta: Meta<typeof Accordion> = {
	title: "Components/Accordion",
	component: Accordion,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
	render: () => (
		<Accordion>
			<Accordion.Item id="item1">
				<Accordion.Header id="item1">What is React?</Accordion.Header>
				<Accordion.Body id="item1">
					React is a JavaScript library for building user interfaces.
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item id="item2">
				<Accordion.Header id="item2">What is TypeScript?</Accordion.Header>
				<Accordion.Body id="item2">
					TypeScript is a strongly typed programming language that builds on
					JavaScript.
				</Accordion.Body>
			</Accordion.Item>

			<Accordion.Item id="item3">
				<Accordion.Header id="item3">
					Why use compound components?
				</Accordion.Header>
				<Accordion.Body id="item3">
					They offer a flexible API and let the parent control layout and
					structure.
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	),
};
