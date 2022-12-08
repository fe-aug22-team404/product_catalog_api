import { Categories } from "./categories";

export interface Tablet {
	itemId: string,
	category: Categories,
	imageUrl: string,
	name: string,
	snippet: string,
	fullPrice: number,
	price: number,
	screen: string,
	capacity: string,
	ram: string
}