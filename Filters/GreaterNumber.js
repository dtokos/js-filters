import LesserNumberFilter from './LesserNumber';

class GreaterNumberFilter extends LesserNumberFilter {

	compare(value, filterValue) {
		return value > filterValue || (this.allowSameValue && value === filterValue);
	}

}

export default GreaterNumberFilter;
