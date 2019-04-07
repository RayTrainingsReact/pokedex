export const LIMIT = 50;

export function calculateOffset(page) {
	return page * LIMIT;
}

export function calculateLastPage(elements) {
	return Math.floor(elements / LIMIT);
}