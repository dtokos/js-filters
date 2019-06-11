import AbstractFilter from './Abstract';

class NumberRangeFilter extends AbstractFilter {

	constructor(dataAdapter, allowSameFromValue = false, allowSameToValue = false) {
		super(dataAdapter);
		this.allowSameFromValue = allowSameFromValue;
		this.allowSameToValue = allowSameToValue;
	}

	passes(filteredItem) {
		const value = this.getValue(filteredItem);
		const [fromValue, toValue] = this.getFilterValue();

		return this.compare(value, fromValue, toValue);
	}

	compare(value, fromValue, toValue) {
		return (fromValue < value || (this.allowSameFromValue && fromValue === value)) &&
			(value < toValue || (this.allowSameToValue && value === toValue));
	}

}

export default NumberRangeFilter;
