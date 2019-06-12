import LesserNumberFilter from './LesserNumber';

class GreaterNumberFilter extends LesserNumberFilter {

	compare(value, filterValue) {
		if (Number.isNaN(filterValue))
			return true;
		
		return value > filterValue || (this.allowSameValue && value === filterValue);
	}

}

export default GreaterNumberFilter;
