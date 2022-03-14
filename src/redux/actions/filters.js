export const setStatus = (status) => ({
	type: "SET_STATUS",
	payload: status,
})

export const setSpecies = (species) => ({
	type: "SET_SPECIES",
	payload: species,
})

export const setGender = (gender) => ({
	type: "SET_GENDER",
	payload: gender,
})

export const setEmptyFilters = () => ({
	type: "SET_EMPTY_FILTERS",
})