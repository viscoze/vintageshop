var Item = React.createClass({
  render: function() {
    var title = this.props.title
    var description = this.props.description
    var price = this.props.price
    return (<div className="item">
              <div className="title">{title}</div>
              <div className="description">{description}</div>
              <div className="price">{price}</div>
            </div>)
  }
})
