var Shop = React.createClass({
  getInitialState() {
    return {order_list: []}
  },

  clickAddToOrder(item) {
    var item_to_order = {}

    // if this.state.order_list.include(item) {
    //   var x = order_list.indexOf(item)
    //   order_list[x].clickCount += 1
    // } else {
    //    
    //
    // }

    this.setState({order_list: this.state.order_list.push(item_to_order)})
  },

  render() {
    var items = this.props.items.map(function(item,index) {

      return (<Item onClick={this.clickAddToOrder}
                    item={item}
                    key={index}/>)
               }, this);

    return (<div className="row">
              <div className="col-md-8">{items}</div>
              <div className="col-md-4">
                <Order order_list={this.state.order_list} />
              </div>
            </div>)
  }
})
