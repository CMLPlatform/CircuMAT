// @flow
import FilterableSingleSelectDropdownTree from './filterableSingleSelectDropdownTree';

class YearFilterableSingleSelectDropdownTree extends FilterableSingleSelectDropdownTree {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        var data = [];
        var years = [2011];
        for (var year of years) {
            data.push({id: year, pId: 0, value: year.toString(), label: year.toString()});
        }
        this.setState({data: data, placeholder: "select year"});
    }
}

export default YearFilterableSingleSelectDropdownTree;