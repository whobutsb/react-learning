import Gist from './Gist'
import GistAddForm from './GistAddForm'

var GistBox = React.createClass({
    getInitialState: function(){
        return {
            gists: []
        };
    },

    addGist: function(username){
        var url = `https://api.github.com/users/${username}/gists`;
        $.get(url, function(data){
            this.setState({ gists: data });
        }.bind(this));
    },

    render: function(){
        var newGist = function(gist){
            return <Gist username={gist.owner.login} url={gist.html_url} />
        };
        return (
            <div>
                <h1>GistBox</h1>
                <GistAddForm onAdd={this.addGist} />
                { this.state.gists.map(newGist) }
            </div>
        );
    }
});

export default GistBox;

