---
Title: '.pie()' 
Description: 'The pyplot.pie() function is part of Matplotlib. The pie() function specifically is used to create pie charts, which are circular statistical graphics divided into slices to illustrate numerical proportions.'
Subjects:
  - 'Data Visualization'
Tags:
  - 'Matplotlib'
  - 'Methods'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items.
  - 'learn-python'
  - 'paths/data-visualization'
---

The **`.pie()`** method in the Plotly library is used to draw a pie chart, a common format that shows the percentage of individual elements with respect to the data as a whole.

## Syntax

```pseudo
plotly.express.pie(data_frame=None, names=None, values=None, color=None, facet_row=None, facet_col=None, facet_col_wrap=0, facet_row_spacing=None, facet_col_spacing=None, color_discrete_sequence=None, color_discrete_map=None, hover_name=None, hover_data=None, custom_data=None, category_orders=None, labels=None, title=None, template=None, width='None, height=None, opacity=None, hole=None)
```

`.pie()` takes the following arguments:

- `data_frame` (DataFrame or array-like or dict): This argument needs to be passed for column names (and not keyword names) to be used. Array-like and dict are transformed internally to a pandas DataFrame. Optional: if missing, a DataFrame gets constructed under the hood using the other arguments.

- `names` (str or int or Series or array-like): Either a name of a column in data_frame, or a pandas Series or array_like object. Values from this column or array_like are used as labels for sectors.

- `values` (str or int or Series or array-like): Either a name of a column in data_frame, or a pandas Series or array_like object. Values from this column or array_like are used to set values associated to sectors.

- `color` (str or int or Series or array-like): Either a name of a column in data_frame, or a pandas Series or array_like object. Values from this column or array_like are used to assign color to marks.

- `facet_row` (str or int or Series or array-like): Either a name of a column in data_frame, or a pandas Series or array_like object. Values from this column or array_like are used to assign marks to facetted subplots in the vertical direction.

- `facet_col` (str or int or Series or array-like): Either a name of a column in data_frame, or a pandas Series or array_like object. Values from this column or array_like are used to assign marks to facetted subplots in the horizontal direction.

- `facet_col_wrap` (int): Maximum number of facet columns. Wraps the column variable at this width, so that the column facets span multiple rows. Ignored if 0, and forced to 0 if facet_row or a marginal is set.

- `facet_row_spacing` (float between 0 and 1): Spacing between facet rows, in paper units. Default is 0.03 or 0.0.7 when facet_col_wrap is used.

- `facet_col_spacing` (float between 0 and 1): Spacing between facet columns, in paper units Default is 0.02.

- `color_discrete_sequence` (list of str): Strings should define valid CSS-colors. When color is set and the values in the corresponding column are not numeric, values in that column are assigned colors by cycling through color_discrete_sequence in the order described in category_orders, unless the value of color is a key in color_discrete_map. Various useful color sequences are available in the plotly.express.colors submodules, specifically plotly.express.colors.qualitative.

- `color_discrete_map` (dict with str keys and str values (default {})): String values should define valid CSS-colors Used to override color_discrete_sequence to assign a specific colors to marks corresponding with specific values. Keys in color_discrete_map should be values in the column denoted by color. Alternatively, if the values of color are valid colors, the string 'identity' may be passed to cause them to be used directly.

- `hover_name` (str or int or Series or array-like): Either a name of a column in data_frame, or a pandas Series or array_like object. Values from this column or array_like appear in bold in the hover tooltip.

- `hover_data` (str, or list of str or int, or Series or array-like, or dict): Either a name or list of names of columns in data_frame, or pandas Series, or array_like objects or a dict with column names as keys, with values True (for default formatting) False (in order to remove this column from hover information), or a formatting string, for example ‘:.3f’ or ‘|%a’ or list-like data to appear in the hover tooltip or tuples with a bool or formatting string as first element, and list-like data to appear in hover as second element Values from these columns appear as extra data in the hover tooltip.

- `custom_data` (str, or list of str or int, or Series or array-like): Either name or list of names of columns in data_frame, or pandas Series, or array_like objects Values from these columns are extra data, to be used in widgets or Dash callbacks for example. This data is not user-visible but is included in events emitted by the figure (lasso selection etc.)

- `category_orders` (dict with str keys and list of str values (default {})): By default, in Python 3.6+, the order of categorical values in axes, legends and facets depends on the order in which these values are first encountered in data_frame (and no order is guaranteed by default in Python below 3.6). This parameter is used to force a specific ordering of values per column. The keys of this dict should correspond to column names, and the values should be lists of strings corresponding to the specific display order desired.

- `labels` (dict with str keys and str values (default {})):  By default, column names are used in the figure for axis titles, legend entries and hovers. This parameter allows this to be overridden. The keys of this dict should correspond to column names, and the values should correspond to the desired label to be displayed.

- `title` (str): The figure title.

- `template` (str or dict or plotly.graph_objects.layout.Template instance): The figure template name (must be a key in plotly.io.templates) or definition.

- `width` (int (default None)): The figure width in pixels.

- `height` (int (default None)): The figure height in pixels.

- `opacity` (float): Value between 0 and 1. Sets the opacity for markers.

- `hole` (float): Sets the fraction of the radius to cut out of the pie.Use this to make a donut chart.

`.pie()` returns:

- `plotly.graph_objects.Figure`

## Example

Examples below demonstrate the use of `.pie()` to plot values and show the functionality of some arguments.

Pie chart with plotly express:

```py
import plotly.express as px
df = px.data.gapminder().query("year == 2007").query("continent == 'Europe'")
df.loc[df['pop'] < 2.e6, 'country'] = 'Other countries' # Represent only large countries
fig = px.pie(df, values='pop', names='country', title='Population of European continent')
fig.show()
```

Pie chart with repeated labels:

```py
import plotly.express as px
# This dataframe has 244 lines, but 4 distinct values for `day`
df = px.data.tips()
fig = px.pie(df, values='tip', names='day')
fig.show()
```

Pie chart in Dash:

```py
from dash import Dash, dcc, html, Input, Output
import plotly.express as px

app = Dash(__name__)


app.layout = html.Div([
    html.H4('Analysis of the restaurant sales'),
    dcc.Graph(id="graph"),
    html.P("Names:"),
    dcc.Dropdown(id='names',
        options=['smoker', 'day', 'time', 'sex'],
        value='day', clearable=False
    ),
    html.P("Values:"),
    dcc.Dropdown(id='values',
        options=['total_bill', 'tip', 'size'],
        value='total_bill', clearable=False
    ),
])


@app.callback(
    Output("graph", "figure"), 
    Input("names", "value"), 
    Input("values", "value"))
def generate_chart(names, values):
    df = px.data.tips() # replace with your own data source
    fig = px.pie(df, values=values, names=names, hole=.3)
    return fig


app.run_server(debug=True)
```

Setting the color of pie sectors with px.pie:

```py
import plotly.express as px
df = px.data.tips()
fig = px.pie(df, values='tip', names='day', color_discrete_sequence=px.colors.sequential.RdBu)
fig.show()
```

Using an explicit mapping for discrete colors:
```py
import plotly.express as px
df = px.data.tips()
fig = px.pie(df, values='tip', names='day', color='day',
             color_discrete_map={'Thur':'lightcyan',
                                 'Fri':'cyan',
                                 'Sat':'royalblue',
                                 'Sun':'darkblue'})
fig.show()
```

Customizing a pie chart created with px.pie:
```py
import plotly.express as px
df = px.data.gapminder().query("year == 2007").query("continent == 'Americas'")
fig = px.pie(df, values='pop', names='country',
             title='Population of American continent',
             hover_data=['lifeExp'], labels={'lifeExp':'life expectancy'})
fig.update_traces(textposition='inside', textinfo='percent+label')
fig.show()
```

Basic Pie Chart with go.Pie:

```py
import plotly.graph_objects as go

labels = ['Oxygen','Hydrogen','Carbon_Dioxide','Nitrogen']
values = [4500, 2500, 1053, 500]

fig = go.Figure(data=[go.Pie(labels=labels, values=values)])
fig.show()
```

Styled Pie Chart:

```py
import plotly.graph_objects as go
colors = ['gold', 'mediumturquoise', 'darkorange', 'lightgreen']

fig = go.Figure(data=[go.Pie(labels=['Oxygen','Hydrogen','Carbon_Dioxide','Nitrogen'],
                             values=[4500,2500,1053,500])])
fig.update_traces(hoverinfo='label+percent', textinfo='value', textfont_size=20,
                  marker=dict(colors=colors, line=dict(color='#000000', width=2)))
fig.show()
```
