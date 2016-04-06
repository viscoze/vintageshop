var Shop = React.createClass({
  getInitialState() {
    return {order_list: []}
  },

  clickAddToOrder(event) {

  },

  render() {
    var items = this.props.items.map(function(item,index) {
      
      return (<Item onClick={this.clickAddToOrder}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    image={item.image}
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
