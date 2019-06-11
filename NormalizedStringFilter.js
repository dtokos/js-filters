import StringFilter from './StringFilter';
import Latinize from './Latinize';

class NormalizedStringFilter extends StringFilter {

	getValue(dataAdapter) {
		return this.normalize(
			super.getValue(dataAdapter)
		);
	}

	getFilterValue(dataAdapter) {
		return this.normalize(
			super.getFilterValue(dataAdapter)
		);
	}

	normalize(value) {
		return Latinize(value).toLowerCase();
	}

}

export default NormalizedStringFilter;
