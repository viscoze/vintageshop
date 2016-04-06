var ItemsForm = React.createClass({
  render: function() {
      return (<div>
                <form accept-charset="UTF-8" action="/items/create" method="post">
                  <input name="item[title]" type="text" /><br />
                  <input name="item[price]" type="text" /><br />
                  <textarea name="item[description]" cols="60" rows="12">
                  </textarea><br />
                  <input type="file" name="item[image]" />
                  <input name="commit" type="submit" value="Create" />
                </form>
              </div>)
  }
})
