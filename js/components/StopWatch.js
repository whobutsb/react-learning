var StopWatch = React.createClass({
    getInitialState: function() {
        return {
            time: 0,
            until: 0,
            enabled: false
        };
    },
    start: function(){
        this.interval = setInterval(() => {

            this.tick();

            this.setState({
                enabled: true
            });

            if(this.isTimeUp()) {
                this.finish();
            }

        }, 1000);
    },
    type: function(e){
        this.setState({
            until: e.target.value
        });
    },
    isTimeUp: function(){
        return this.state.time == this.state.until;
    },
    finish: function(){

        this.replaceState(this.getInitialState());

        // find the node input
        React.findDOMNode(this.refs.input).focus();

        return clearInterval(this.interval);
    },
    tick: function(){
        this.setState({
            time: this.state.time + 1
        });
    },
    render: function() {
        return (
            <div>
                <input ref="input" onChange={this.type} value={this.state.until} />
                <button disabled={this.state.enabled} onClick={this.start}>Go</button>
                <h1>{this.state.time}</h1>
            </div>
        );
    }
});
React.render(<StopWatch />, document.body);
