import AbstractFilter from './Abstract';

class LesserNumberFilter extends AbstractFilter {

	constructor(dataAdapter, allowSameValue = false) {
		super(dataAdapter);
		this.allowSameValue = allowSameValue;
	}

	compare(value, filterValue) {
		if (Number.isNaN(filterValue))
			return true;
		
		return value < filterValue || (this.allowSameValue && value === filterValue);
	}

	setAllowSameValue(allowSameValue) {
		this.allowSameValue = allowSameValue;
	}

}

export default LesserNumberFilter;
