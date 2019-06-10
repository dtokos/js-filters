import Filter from './Filter';

class NumberRangeFilter extends Filter {

	constructor(allowSameFromValue = false, allowSameToValue = false) {
		this.allowSameFromValue = allowSameFromValue;
		this.allowSameToValue = allowSameToValue;
	}

	passes(dataAdapter) {
		const value = this.getValue(dataAdapter);
		const fromValue = this.getFromValue(dataAdapter);
		const toValue = this.getToValue(dataAdapter);

		return this.compare(value, fromValue, toValue);
	}

	getFromValue(dataAdapter) {
		return dataAdapter.getFromValue();
	}

	getToValue(dataAdapter) {
		return dataAdapter.getToValue();
	}

	compare(value, fromValue, toValue) {
		return (fromValue < value || (this.allowSameFromValue && fromValue === value)) &&
			(value < toValue || (this.allowSameToValue && value === toValue));
	}

}

export default NumberRangeFilter;
