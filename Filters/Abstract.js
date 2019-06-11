class AbstractFilter {

	constructor(dataAdapter) {
		this.dataAdapter = dataAdapter;
	}

	passes(filteredItem) {
		const value = this.getValue(filteredItem);
		const filterValue = this.getFilterValue();

		return this.compare(value, filterValue);
	}

	getValue(filteredItem) {
		return this.dataAdapter.getValue(filteredItem);
	}

	getFilterValue() {
		return this.dataAdapter.getFilterValue();
	}

}

export default AbstractFilter;
