// @flow
import Papa from 'papaparse';
import FilterableSingleSelectDropdownTree from './filterableSingleSelectDropdownTree';

class ModellingRegionFilterableSingleSelectDropdownTree extends FilterableSingleSelectDropdownTree {

    constructor(props) {
        super(props);

        this.updateTreeData = this.updateTreeData.bind(this);
    }

    componentWillMount() {
        //https://www.papaparse.com/docs#config
        Papa.parse('../static/modelling_circumat_regions.csv', {
            delimiter: '\t',
            // newline
            // quoteChar
            // escapeChar
            header: true,
            dynamicTyping: true,
            // preview
            // encoding
            worker: false,
            // comments
            // step
            complete: this.updateTreeData,
            // error
            download: true,
            skipEmptyLines: true,
            // chunk
            fastMode: true
            // beforeFirstChunk
            // withCredentials
        });
    }

    updateTreeData(result/*, file*/) {
        // result = {data, errors, meta}
        var data = [];
        for (var region of result.data) {
            // update selectables (only level 3 is allowed)
            var disabled = true;
            if (region.level === 2) {
              disabled = false;
            }
            data.push({id: region.global_id, pId: region.parent_id, value: region.global_id.toString(), label: region.name, disabled: disabled});
        }
        this.setState({data: data, placeholder: "select a single country"});
    }

    getLabel(value) {
        var region = this.state.data.find(function(region) {
            return value == parseInt(region.value);
        });
        return region.label;
    }
}

export default ModellingRegionFilterableSingleSelectDropdownTree;
