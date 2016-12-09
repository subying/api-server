/**
 * @description 弹窗
 */
var IndexLess = require('./index.less');

class Layer extends  React.Component{
    constructor(props) {
        super(props);

        this.state={
            show: false,
            isPageHide: true
        };
    }

    hide(){
        var isPageHide = this.props.isPageHide;
        if(!isPageHide){
            this.setState({
                show: false
            });
        }
    }

    componentDidMount(){
        this.setState({
            show: !!this.props.show
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            show: !!nextProps.show
        });
    }



    render(){
        var _class = '';

        if(this.state.show){
            _class = 'layermshow rlayerbox-show';
        }

        return(
            <div className={'rlayerbox layermbox ' + _class}>
                <div className="laymshade" onClick={this.hide.bind(this)}></div>
                <div className="layermmain">
                    <div className="section">
                        <div className="layermchild layermanim">
                            <div className="layermcont">{this.props.children}</div>
                        </div>
                    </div>
                </div>
                <IndexLess name="sh" />
            </div>
        );
    }
}

module.exports = Layer;
