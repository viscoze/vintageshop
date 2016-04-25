var UserForm = React.createClass({
  render() {
    return (
      <div className="user-form">
        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label className="control-label col-sm-offset-2 col-sm-2" htmlFor="email">Email:</label>
            <div className="col-sm-6">
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-offset-2 col-sm-2" htmlFor="pwd">Password:</label>
            <div className="col-sm-6">
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-8">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
})
