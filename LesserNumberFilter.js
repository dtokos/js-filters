import Filter from './Filter';

class LesserNumberFilter extends Filter {

	constructor(allowSameValue = false) {
		this.allowSameValue = allowSameValue;
	}

	compare(value, filterValue) {
		return value < filterValue || (this.allowSameValue && value === filterValue);
	}

	setAllowSameValue(allowSameValue) {
		this.allowSameValue = allowSameValue;
	}

}

export default LesserNumberFilter;
