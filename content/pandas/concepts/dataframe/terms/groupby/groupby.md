---
Title: '.groupby()'
Description: 'Groups a DataFrame using a mapper or a series of columns and returns a GroupBy object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The `.groupby()` function groups a [DataFrame](https://www.codecademy.com/resources/docs/pandas/dataframe) using a mapper or a series of columns and returns a [GroupBy](https://www.codecademy.com/resources/docs/pandas/groupby) object. The GroupBy object can be used to apply functions and combine large amounts of data in these groups.

## Syntax

```pseudo
dataframevalue.groupby(by, axis, level, as_index, sort, group_keys, observed, dropna)
```

`.groupby()` uses the following parameters:

- `by` : if a dict or Series is passed, the values will detrmine groups. If a list or ndarray with same legnth as the selected axis, the values will be used to form groups. A label or list of labels can be used to group by a particular column or columns.
- `axis` : Split along rows (0 or "index") or columns (1 or "columns"). Default value is 0.
- `level` : If the axis is a MultiIndex, group by a particular level or levels. Value is int or level name, or sequence of them. Defaults to `None`.
- `as_index` : Boolean value. `True` returns group labels as index in aggragated output, `False` returns lables as DataFrame columns. Defaults `True`.
- `sort` : Boolean value. `True` sorts the group keys. Defaults `True`.
- `group_keys` : Boolean value. Add group keys to index when calling apply. Defaults `True`.
- `observed` : Boolean value: If `True` only show observed values for categorical groupers, otherwise show all values. Defaults `False`.
- `dropna` : Boolean value: If `True` drop groups whose keys contain `NA` values. If `False`, `NA` will be used as key for those groups. Defaults `True`.
