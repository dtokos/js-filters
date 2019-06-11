import AbstractFilter from './Abstract';

class SomeTypeFilter extends AbstractFilter {

	compare(values, filterValues) {
		if (filterValues.length === 0)
			return true;

		return filterValues.some(filterValue => values.includes(filterValue));
	}

}

export default SomeTypeFilter;
