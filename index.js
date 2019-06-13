import DataAdapter from './DataAdapter';
import FilterHandler from './Handler';
import GetterFilterHandler from './GetterHandler';
import Filters from './Filters';
import StringFilter from './Filters/String';
import NormalizedStringFilter from './Filters/NormalizedString';
import LesserNumberFilter from './Filters/LesserNumber';
import GreaterNumberFilter from './Filters/GreaterNumber';
import NumberRangeFilter from './Filters/NumberRange';
import SomeTypeFilter from './Filters/SomeType';
import EveryTypeFilter from './Filters/EveryType';

export {
	DataAdapter,
	FilterHandler,
	GetterFilterHandler,
	Filters,
	StringFilter,
	NormalizedStringFilter,
	LesserNumberFilter,
	GreaterNumberFilter,
	NumberRangeFilter,
	SomeTypeFilter,
	EveryTypeFilter,
};

export default {
	dataAdapter: DataAdapter,
	filterHandler: FilterHandler,
	getterFilterHandler: GetterFilterHandler,
	string: StringFilter,
	normalizedString: NormalizedStringFilter,
	lesserNumber: LesserNumberFilter,
	greaterNumber: GreaterNumberFilter,
	numberRange: NumberRangeFilter,
	someType: SomeTypeFilter,
	everyType: EveryTypeFilter,
};
