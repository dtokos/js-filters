import AbstractFilter from './Abstract';

class EveryTypeFilter extends AbstractFilter {

	compare(values, filterValues) {
		if (filterValues.length === 0)
			return true;

		return filterValues.every(filterValue => values.includes(filterValue));
	}

}

export default EveryTypeFilter;
