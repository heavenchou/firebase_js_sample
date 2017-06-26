class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          key : '',
          val : ''
        }
    }
   
    get_key = (e) => {
		  this.setState({key:e.target.value})
	  }
    get_val = (e) => {
		  this.setState({val:e.target.value})
	  }

    seter_fb = () => {
      firebase.database().ref(this.state.key).set(this.state.val);
    }
    update_fb = () => {
      firebase.database().ref(this.state.key).update(this.state.vala);
    }
    push_fb = () => {
      var key = this.state.key;
      var Data = {
        "key": key,
        "value": this.state.val
      }
      var indexkey = firebase.database().ref("push").push(Data).key;
      this.setState({key:indexkey})
    }
    delete_fb = () => {
      firebase.database().ref(this.state.key).remove();
    }
    geter_fb = () => {
      var self = this;
      firebase.database().ref(this.state.key).once('value').then(function(snapshot) {
        self.setState({val:snapshot.val()});
      });
    }
    render() {
        return (
          <div>
            <h3>Firebase Test</h3>
            key : <input onChange={this.get_key}></input>
            <br/>
            val : <input onChange={this.get_val}></input>
            <br/>
            <button onClick={this.seter_fb}>set</button>
            <button onClick={this.update_fb}>update</button>
            <button onClick={this.push_fb}>push</button>
            <button onClick={this.delete_fb}>delete</button>
            <button onClick={this.geter_fb}>get</button>
            <h3>key : {this.state.key} </h3>
            <h3>val : {this.state.val} </h3>
          </div>
        );
    }
}

ReactDOM.render(
  <MainScreen/>,
  document.getElementById('app')
);

// --------------------------------------

