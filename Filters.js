import StringFilter from './Filters/String';
import NormalizedStringFilter from './Filters/NormalizedString';
import LesserNumberFilter from './Filters/LesserNumber';
import GreaterNumberFilter from './Filters/GreaterNumber';
import NumberRangeFilter from './Filters/NumberRange';

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
