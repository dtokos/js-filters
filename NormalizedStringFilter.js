import StringFilter from './StringFilter';
import Latinize from './Latinize';

class NormalizedStringFilter extends StringFilter {

	getValue(filteredItem) {
		return this.normalize(
			super.getValue(filteredItem)
		);
	}

	getFilterValue() {
		return this.normalize(
			super.getFilterValue()
		);
	}

	normalize(value) {
		return this.latinize(value).toLowerCase();
	}

	latinize(value) {
		return Latinize(value);
	}

}

export default NormalizedStringFilter;
