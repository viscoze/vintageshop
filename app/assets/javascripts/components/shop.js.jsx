var Shop = React.createClass({
  render: function() {
    var items = this.props.items.map(function(item,index) {
      return <Item title={item.title}
                   description={item.description}
                   price={item.price}
                   key={index} />
               });

    return <div>{items}</div>
  }
})
