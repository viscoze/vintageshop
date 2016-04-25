var Item = React.createClass({
  getInitialState() {
    return {
      clickCount: 0
    }
  },

  handleItemClick(event) {
    event.preventDefault();
    this.setState({clickCount: this.state.clickCount+1 })

    var item_info = {
      title: this.props.item.title,
      id: this.props.item.id,
      clickCount: this.state.clickCount
    }

    this.props.onClick(item_info)
  },

  render() {
    var title = this.props.item.title
    var description = this.props.item.description
    var price = this.props.item.price
    var src   = "/assets/" + this.props.item.image_file_name

    return (<div className="item" onClick={this.handleItemClick}>
              <div className="title">{title}</div>
              <img className="img-responsive" src={src} />
              <div className="price">${price}.0</div>
              <input type="button" className="buy-button" value="Buy it!"/>
            </div>)
  }
})
