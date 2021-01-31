import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

const defaultFilter = {
    text: '', 
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

test('should filter by text value', () => {
    const filters = {
        ...defaultFilter,
        text: 'e'
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[2], expenses[1] ]);
});

test('should filter by start date', () => {
    const filters = {
        ...defaultFilter,
        startDate: moment(0)
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[2], expenses[0] ])
});

test('should filter by end date', () => {
    const filters = {
        ...defaultFilter,
        endDate: moment(0).add(2, 'days')
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[0], expenses[1] ])
});

test('should sort by date', () => {
    const filters = {
        ...defaultFilter
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ])
});

test('should sort by amount', () => {
    const filters = {
        ...defaultFilter,
        sortBy: 'amount'
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ])
});