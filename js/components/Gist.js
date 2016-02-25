var Gist = React.createClass({
    render: function(){
        return (
            <div>
                {this.props.username} last gist is <a href={this.props.url}>here</a>
            </div>
        );
    }
});

export default Gist;
