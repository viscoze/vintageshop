var Item = React.createClass({
  render() {
    var title = this.props.title
    var description = this.props.description
    var image = this.props.image
    var price = this.props.price
    var image_to_item = "%image_path(" + image + ")%"
    return (<div className="item" onClick={this.props.onClick}>
              <div className="title">{title}</div>
              <img className="image" src={image} />
              <div className="price">{price}</div>
            </div>)
  }
})
