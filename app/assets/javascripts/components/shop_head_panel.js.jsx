var ShopHeadPanel = React.createClass({
  render: function() {
    var items = this.props.items.map(function(item,index) {
      return <Item title={item.title}
                   description={item.description}
                   price={item.price}
                   image={item.image}
                   key={index} />
               });
    return (
      <div className="row">
        <div className="col-md-8">{items}</div>
        <div className="col-md-4"><ItemsForm /></div>
      </div>)
  }
})
