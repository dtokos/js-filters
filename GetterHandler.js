import FilterHandler from './Handler';

class GetterFilterHandler extends FilterHandler {

	constructor(filters, itemsGetter) {
		super(filters);
		this.itemsGetter = itemsGetter;
	}

	getItems() {
		return this.itemsGetter();
	}

	filterBoolean() {
		return super.filterBoolean(this.getItems());
	}

	filterObject() {
		return super.filterObject(this.getItems());
	}

	filterCallback(callback) {
		super.filterCallback(this.getItems(), callback);
	}

	filterIterationCallback(iterationCallback) {
		super.filterIterationCallback(this.getItems(), iterationCallback);
	}

}

export default GetterFilterHandler;
