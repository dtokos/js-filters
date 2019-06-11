import AbstractFilter from './AbstractFilter';

class NumberRangeFilter extends AbstractFilter {

	constructor(dataAdapter, allowSameFromValue = false, allowSameToValue = false) {
		super(dataAdapter);
		this.allowSameFromValue = allowSameFromValue;
		this.allowSameToValue = allowSameToValue;
	}

	passes(filteredItem) {
		const value = this.getValue(filteredItem);
		const fromValue = this.getFromValue();
		const toValue = this.getToValue();

		return this.compare(value, fromValue, toValue);
	}

	getFromValue() {
		return this.dataAdapter.getFromValue();
	}

	getToValue() {
		return this.dataAdapter.getToValue();
	}

	compare(value, fromValue, toValue) {
		return (fromValue < value || (this.allowSameFromValue && fromValue === value)) &&
			(value < toValue || (this.allowSameToValue && value === toValue));
	}

}

export default NumberRangeFilter;
