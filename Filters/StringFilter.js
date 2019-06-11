import AbstractFilter from './AbstractFilter';

class StringFilter extends AbstractFilter {

	compare(value, filterValue) {
		return filterValue.length < 1 || value.indexOf(filterValue) !== -1;
	}

}

export default StringFilter;
