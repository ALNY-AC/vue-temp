import formField from "../../components/DyFormConf/formField";
import TestList from "./TestList";
import Http from "../../plugins/Http";

class DyConfig {

    constructor(formField = {}) {
        this.formField = formField;
    }

    async requestConfig(name) {

        const res = await Http.post('RecordSetting/GetRecordSetting', {
            "_id": name
        });
        if (res.Status) {
            this.formField = JSON.parse(res.Result.formField);
        } else {
            this.formField = formField.get(name);
        }
        return this.formField;

        if (!this.formField) {
            return null;
        }

        // if (name) {
        //     let test = TestList.filter(el => el.name == name)[0];
        //     this.formField.recordName = test.title;
        // }
        return this.formField;
    }
    getRules() {
        let rules = {};
        this.formField.formField.filter(el => el.rules).forEach(el => rules[el.fieldName] = el.rules);
        return rules;
    }
    getFields() {
        if (!this.formField) return null;
        const formField = this.formField.formField;

        let fields = {};
        let map = {
            select() {
                return []
            }
        }

        formField.forEach(field => {
            let value = field.default;
            // let mapItem = map[field.inputType];
            // if (typeof mapItem != 'undefined') {

            //     if (typeof mapItem == "function") {
            //         value = mapItem();
            //     } else {
            //         value = mapItem;
            //     }

            // }

            fields[field.fieldName] = value;
        });




        return fields;
    }

}

export default DyConfig;