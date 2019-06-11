import Filter from './Filter';

class StringFilter extends Filter {

	compare(value, filterValue) {
		return filterValue.length < 1 || value.indexOf(filterValue) !== -1;
	}

}

export default StringFilter;
