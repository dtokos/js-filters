import StringFilter from './Filters/StringFilter';
import NormalizedStringFilter from './Filters/NormalizedStringFilter';
import LesserNumberFilter from './Filters/LesserNumberFilter';
import GreaterNumberFilter from './Filters/GreaterNumberFilter';
import NumberRangeFilter from './Filters/NumberRangeFilter';

export {
	StringFilter,
	NormalizedStringFilter,
	LesserNumberFilter,
	GreaterNumberFilter,
	NumberRangeFilter,
};

export default {
	string: StringFilter,
	normalizedString: NormalizedStringFilter,
	lesserNumber: LesserNumberFilter,
	greaterNumber: GreaterNumberFilter,
	numberRange: NumberRangeFilter,
};
