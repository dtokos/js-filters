class DataAdapter {

	constructor(filter, valueGetter, filterValueGetter) {
		this.filter = filter;
		this.valueGetter = valueGetter;
		this.filterValueGetter = filterValueGetter;
	}

	getValue(filteredItem) {
		return this.valueGetter(filteredItem);
	}

	getFilterValue() {
		return this.filterValueGetter(this.filter);
	}

}

export default DataAdapter;
