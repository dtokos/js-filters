class FilterHandler {

	constructor(filters, itemsGetter) {
		this.filters = filters;
		this.itemsGetter = itemsGetter;
	}

	getFilters() {
		return this.filters;
	}

	getItems() {
		return this.itemsGetter();
	}

	filterBoolean() {
		const items = this.getItems();
		const result = [];

		for (const item of items)
			result.push(this.filterItem(item));

		return result;
	}

	filterObject() {
		const items = this.getItems();
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

	filterCallback(callback) {
		const items = this.getItems();
		const passed = [];
		const failed = [];

		for (const item of items)
			if (this.filterItem(item))
				passed.push(item);
			else
				failed.push(item);

		callback(passed, failed);
	}

	filterIterationCallback(iterationCallback) {
		const items = this.getItems();

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
