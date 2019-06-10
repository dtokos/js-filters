class Filter {

	passes(dataAdapter) {
		const value = this.getValue(dataAdapter);
		const filterValue = this.getFilterValue(dataAdapter);

		return this.compare(value, filterValue);
	}

	getValue(dataAdapter) {
		return dataAdapter.getValue();
	}

	getFilterValue(dataAdapter) {
		return dataAdapter.getFilterValue();
	}

}

export default Filter;
