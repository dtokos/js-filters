class FilterHandler {

	constructor(filters) {
		this.filters = filters;
	}

	getFilters() {
		return this.filters;
	}

	filterBoolean(items) {
		const result = [];

		for (const item of items)
			result.push(this.filterItem(item));

		return result;
	}

	filterObject(items) {
		const result = {
			passed: [],
			failed: []
		};

		for (const item of items)
			if (this.filterItem(item))
				result.passed.push(item);
			else
				result.failed.push(item);

		return result;
	}

	filterCallback(items, callback) {
		const passed = [];
		const failed = [];

		for (const item of items)
			if (this.filterItem(item))
				passed.push(item);
			else
				failed.push(item);

		callback(passed, failed);
	}

	filterIterationCallback(items, iterationCallback) {
		for (const item of items) {
			const passed = this.filterItem(item);
			iterationCallback(item, passed);
		}
	}

	filterItem(item) {
		const filters = this.getFilters();
		
		for (const filter of filters)
			if (!filter.passes(item))
				return false;

		return true;
	}

}

export default FilterHandler;
